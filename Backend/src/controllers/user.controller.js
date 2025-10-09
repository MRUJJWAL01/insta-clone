const userModel = require("../models/user.model");
const uploadImage = require("../services/storage.services");

const followController = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    if (!user_id) {
      return res.status(404).json({
        msg: "user id not found",
      });
    }

    let currentUser = await userModel.findById(req.user._id);

    currentUser.following.push(user_id);
    currentUser.save();

    let followedUser = await userModel.findById(user_id);
    followedUser.followers.push(req.user._id);
    followedUser.save();

    return res.status(200).json({
      message: "Followed",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
};
const unfollowController = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if (!user_id) {
      return res.status(404).json({
        msg: "user id not found",
      });
    }
    const currentUser = await userModel.findById(req.user._id);
    currentUser.following.splice(user_id, 1);
    currentUser.save();

    let unfollowedUser = await userModel.findById(user_id);
    unfollowedUser.followers.splice(req.user._id, 1);
    unfollowedUser.save();
    return res.status(200).json({
      msg: "Unfollowed",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
};

const blockController = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    if (!user_id) {
      return res.status(404).json({
        msg: "usr id not found",
      });
    }
    let currentUser = await userModel.findById(req.user._id);
    currentUser.blockedUser.push(user_id);
    currentUser.save();

    return res.status(200).json({
      msg: "usr blocked",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
};

const getAlluserController = async (req, res) => {
  try {
    let currentUser = req.user.id;
    // console.log(currentUser);

    let allUsers = await userModel.find({ _id: { $ne: currentUser } });
    // console.log(allUsers);
    return res.status(200).json({
      msg: "fetched all user",
      allUsers: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
};

const userDpController = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!req.file) {
      return res.status(404).json({
        msg: "file not found",
      });
    }
    // console.log(req.file)
    let imageUrl = await uploadImage(req.file.buffer, req.file.originalname);
    let updateUser = await userModel.findByIdAndUpdate(
      userId,
      { dp: imageUrl.url },
      { new: true }
    );
    return res.status(200).json({
      msg: "profile photo uploaded",
      dp: updateUser.dp,
    });
  } catch (error) {
    console.error("Error in uploadDpController:", error);
    return res.status(500).json({
      msg: "Internal server error",
      error,
    });
  }
};

module.exports = {
  followController,
  unfollowController,
  blockController,
  getAlluserController,
  userDpController,
};
