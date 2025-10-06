const userModel = require("../models/user.model");

const followController = async (req , res)=>{
  const  user_id = req.params.user_id;
    if(!user_id) return res.status(404).json({msg:"user id not found"});
    let currentUser = await userModel.findById(req.user._id);
    currentUser.following.push(user_id);
    currentUser.save();

    let followedUser = await userModel.findById(user_id);
    followedUser.followers.push(req.user._id);
    followedUser.save();

    return res.status(200).json({
        message:"Followed"
    })


}