const express = require('express');
const { registerController, loginController, logOutController, forgotPasscontroller } = require('../controllers/auth.controller');
const authMiddleware = require('../middlwares/auth.middleware');

const router = express.Router();

router.post("/register",registerController);
router.post("/login",loginController);
router.post("/logout",authMiddleware, logOutController);
router.post("forgot-password",forgotPasscontroller);


module.exports = router;