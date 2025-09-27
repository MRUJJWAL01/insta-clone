const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cacheClient = require("../services/chache.service");
const emailTemplate = require("../utils/emailTemplate")
const {sendMail} = require("../services/mail.service");
const registerController = async (req, res) => {
  try {
    const { mobile, email, password, fullname, username } = req.body;
    if (!mobile || !email || !password || !fullname || !username) {
      return res.status(422).json({
        msg: "all feilds are required..",
      });
    }
    
    const userExist = await userModel.findOne({
      $or: [{ email }, { username }, { mobile }],
    });
    if (userExist) {
      return res.status(409).json({
        msg: "user already exist",
      });
    }

    const newUser = await userModel.create({
      fullname,
      email,
      username,
      password,
      mobile,
    });
    if (!newUser) {
      return res.status(400).json({
        msg: "error in creatring new user",
        error: error,
      });
    }
    let token = newUser.JWTTokenGenration();
    res.cookie("token", token);
    console.log(token);

    return res.status(201).json({
      msg: "user created succefully",
      user: newUser,
    });
  } catch (error) {
    console.log("error in register user----------->", error);

    return res.status(500).json({
      msg: "internal server error",
      error: error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password, username, mobile } = req.body;
    const user = await userModel.findOne({
      $or: [{ email }, { mobile }, { username }],
    });
    if (!user) {
      return res.status(404).json({
        msg: "user not found",
      });
    }

    const decryptPass = await user.comparePassword;
    if (!decryptPass) {
      return res.status(401).json({
        msg: "invalid credential",
      });
    }
    const token = user.JWTTokenGenration();

    res.cookie("token", token);
    return res.status(200).json({
      msg: "user logged in succefully",
      user: user,
    });
  } catch (error) {
    console.log(error.message);
    console.log("error-------->", error);

    return res.status(500).json({
      msg: "internal server error",
      error: error,
    });
  }
};

const logOutController = async (req, res) => {
  try {
    let token = req.cookies.token;
    if (!token) {
      return res.status(494).json({
        msg: "token not found",
      });
    }
    await cacheClient.set(token, "blacklisted");
    res.clearCookie("token");
    return res.status(200).json({
      msg: "user logged out succefully",
    });
  } catch (error) {
    console.log("error in logut---------->",error);
    
    return res.status(500).json({
      msg: "internal server error",
      error: error,
    });
  }
};

const forgotPasscontroller = async (req, res) => {
  try {
    const { email, username, mobile } = req.body;
    const user = await userModel.findOne({
      $or: [{ email }, { mobile }, { username }],
    });
    if (!user) {
      return res.status(404).json({
        msg: "user not found",
      });
    }
    let rawToken = jwt.sign({ id: user._id }, process.env.JWT_RAW_SECRET, {
      expiresIn: "30m",
    });

    let resetLink = `http://localhost:3000/api/auth/reset-password/${rawToken}`;

    let resetTemplate = emailTemplate({ username: user.username, resetLink });
  
    let response = await sendMail(
      "ujjwalc456@gmail.com",
      "Reset password",
      resetTemplate
    );

    console.log(response);

    return res.send("ok");
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({
      msg: "internal server error",
      error: error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  logOutController,
  forgotPasscontroller,
};
