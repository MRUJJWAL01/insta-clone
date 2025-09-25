const userModel = require("../models/user.model");
const cacheClient = require("../services/chache.service");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.token;
    if (!token) {
      return res.status(404).json({
        msg: "token not found",
      });
    }
    let isblacklisted = await cacheClient.get(token);
    if (isblacklisted) {
      return res.status(401).json({
        msg: "token blacklisted or expired",
      });
    }
    let decode = jwt.verify(token, process.env.Secret_Key);
    if (!decode) {
      {
        return res.status(403).json({
          msg: "token invalid",
        });
      }
    }
    let user = await userModel.findById(decode.id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      msg: "internal server error",
      error: error,
    });
  }
};


module.exports = authMiddleware;