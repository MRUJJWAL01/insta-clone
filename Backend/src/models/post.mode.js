const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
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

const postModel = mongoose.model("posts",postSchema);

module.exports = postModel;

