const userModel = require("../models/user.model");

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
const unfollowController = async(req, res)=>{
  try {
    const user_id = req.params.user_id;
    if(!user_id){
      return res.status(404).json({
        msg:"user id not found"
      })
    }
    const currentUser = await userModel.findById(req.user._id);
    currentUser.following.splice(user_id,1);
    currentUser.save();

    let unfollowedUser = await userModel.findById(user_id);
    unfollowedUser.followers.splice(req.user._id,1);
    unfollowedUser.save();
     return res.status(200).json({
      msg:"Unfollowed",
     })

    
  } catch (error) {
     return res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
}

const blockController = async(req,res)=>{
  try {
    const user_id = req.params.user_id;
    if(!user_id){
      return res.status(404).json({
        msg:"usr id not found",
      })
    }
    let currentUser = await userModel.findById(req.user._id);
    currentUser.blockedUser.push(user_id);
    currentUser.save();

    return res.status(200).json({
      msg:"usr blocked",
    })
    

  } catch (error) {
     return res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
}

module.exports = {
  followController,
  unfollowController,
  blockController

}