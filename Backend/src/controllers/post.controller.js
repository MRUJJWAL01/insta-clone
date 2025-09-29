const PostModel = require("../models/post.mode");
const userModel = require("../models/user.model");
const uploadImage = require("../services/storage.services");

const creatPostController = async (req, res) => {
  try {
    const { tags, location, caption } = req.body;
    if (!req.files) {
      return res.status(404).json({
        msg: "Image is required",
      });
    }
    let uploadedUrlArr = await Promise.all(
      req.files.map(
        async (element) =>
          await uploadImage(element.buffer, element.originalname)
      )
    );
    let newPost = await PostModel.create({
        user_id:req.user._id,
        caption,
        location,
        tags,
        imageUrl: uploadedUrlArr.map(elem=>elem.url),
    })
    let updatedUserPost = await userModel.findByIdAndUpdate(req.user._id,{
        post:newPost.id
    })
    if(newPost){
        return res.status(400).json({
            msg:"bad request"
        })
       
    }
     return res.status(201).json({
            msg:"post created successfully",
            post:newPost,
        })
  } catch (error) {
    console.log("error in upload controller", error);
    return res.status(500).json({
      msg: "bad request from upload controller",
      error: error,
    });
  }
};

module.exports ={
    creatPostController,
}