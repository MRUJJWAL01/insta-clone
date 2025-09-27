const express = require('express');
const { registerController, loginController, logOutController, forgotPasscontroller } = require('../controllers/auth.controller');
const authMiddleware = require('../middlwares/auth.middleware');
const router = express.Router();
router.get("/reset-password/:token",async (req, res) => {
  let token = req.params.token;

  if (!token)
    return res.status(403).json({
      message: "Token not found, BAD request",
    });

  let decode = jwt.verify(token, process.env.JWT_RAW_SECRET);

  res.render("index.ejs", { user_id: decode.id });
});

router.post("/update-password/:id", (req, res) => {
  let id = req.params.id;
  let password = req.body.password;

  console.log("user password", password, id);

  return res.send("ok");
});

router.post("/register",registerController);
router.post("/login",authMiddleware,loginController);
router.post("/logout",authMiddleware, logOutController);
router.post("/forgot-password",forgotPasscontroller);
module.exports = router;