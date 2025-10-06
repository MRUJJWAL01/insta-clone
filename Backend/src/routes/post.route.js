const expess = require("express");
const upload = require("../config/multer");
const authMiddleware = require("../middlwares/auth.middleware");
const { creatPostController, upodatePostController, getAllPostController, getLoggedinUserPosts, deletePost } = require("../controllers/post.controller");

const router = expess.Router();

router.post("/creat-post",authMiddleware,upload.array("images",5),creatPostController);

router.get("/update",authMiddleware,upodatePostController);
router.get("/allposts",authMiddleware,getAllPostController);
// router.get("/user-posts",authMiddleware,getLoggedinUserPosts);
// router.get("/delete/:id",authMiddleware,deletePost);

module.exports = router;