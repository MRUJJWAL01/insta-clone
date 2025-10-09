const expess = require("express");
const authMiddleware = require("../middlwares/auth.middleware");
const { followController, unfollowController, blockController, getAlluserController, userDpController } = require("../controllers/user.controller");
const upload = require("../config/multer");

const router = expess.Router();


router.get("/follow/:user_id",authMiddleware, followController);
router.get("/unfollow/:user_id",authMiddleware,unfollowController);
router.get("/block/:user_id",authMiddleware,blockController);
// router.get("/unblock/:user_id");
router.post("/profile-picture",authMiddleware,upload.single("image"),userDpController);

router.get("/",authMiddleware,getAlluserController);


module.exports = router;