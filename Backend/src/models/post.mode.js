const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user_id:{
    type:mongoose.Schema.ObjectId,
    ref:"user",
  },
  imageUrl: {
    type: [String],
    required: true,
  },
  location: {
    type: String,
  },
  caption: {
    type: String,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
},
{
    timestamps:true,
}
);

const PostModel = mongoose.model("posts",postSchema);

module.exports = PostModel;

