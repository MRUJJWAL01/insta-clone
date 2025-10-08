const expess = require("express");
const authMiddleware = require("../middlwares/auth.middleware");
const { followController, unfollowController, blockController } = require("../controllers/user.controller");

const router = expess.Router();


router.get("/follow/:user_id",authMiddleware, followController);
router.get("/unfollow/:user_id",authMiddleware,unfollowController);
router.get("/block/:user_id",authMiddleware,blockController);
// router.get("/unblock/:user_id");


module.exports = router;