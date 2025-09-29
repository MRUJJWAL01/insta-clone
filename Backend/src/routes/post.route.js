const expess = require("express");
const upload = require("../config/multer");
const authMiddleware = require("../middlwares/auth.middleware");
const { creatPostController } = require("../controllers/post.controller");

const router = expess.Router();

router.post("/creat-post",authMiddleware,upload.array("images",5),creatPostController);

module.exports = router;