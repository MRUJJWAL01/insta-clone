const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cacheClient = require("../services/chache.service");
const emailTemplate = require("../utils/emailTemplate");
const { sendMail } = require("../services/mail.service");
const registerController = async (req, res) => {
  try {
    const { mobile, email, password, fullName, username } = req.body;

    if (!fullName || !username || !password) {
      return res.status(422).json({
        message: "All fields are required",
      });
    }
    if ((!email && !mobile) || (email && mobile)) {
      return res.status(400).json({
        msg: "Provide exactly one of email or mobile",
      });
    }
    const query = [{ username }];
    if (email) query.push({ email });
    if (mobile) query.push({ mobile });

    let existUser = await userModel.findOne({ $or: query });

    if (existUser) {
      return res.status(409).json({
        msg: "user already exist",
      });
    }

    if (existUser) {
      return res.status(409).json({
        msg: "user already exist",
      });
    }

    const newUser = await userModel.create({
      fullName,
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
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // 🔥 REQUIRED on HTTPS
      sameSite: "none", // 🔥 REQUIRED for cross-origin
      maxAge: 7 * 24 * 60 * 60 * 1000, // optional
    });

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
      //  $or: [{ email }, { mobile }, { username }],
      username,
    });
    console.log(username);

    if (!user) {
      return res.status(404).json({
        msg: "user not found",
      });
    }
    const decryptPass = await user.comparePassword(password);
    // console.log(decryptPass);
    // console.log(password,"  " , user.password);

    if (!decryptPass) {
      return res.status(401).json({
        msg: "invalid credential",
      });
    }
    const token = user.JWTTokenGenration();

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // 🔥 REQUIRED on HTTPS
      sameSite: "none", // 🔥 REQUIRED for cross-origin
      maxAge: 7 * 24 * 60 * 60 * 1000, // optional
    });
    // console.log("user logged in ");

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
    console.log("error in logut---------->", error);

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

    // console.log(response);

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
