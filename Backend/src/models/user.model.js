const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    mobile: {
      type: String,
      unique: true,
      sparse: true,
      minlength: 10,
      maxlenght: 10,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    blockedUser: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let hashpass = await bcrypt.hash(this.password, 10);
  this.password = hashpass;
  next();
});
userSchema.pre("validate", function (next) {
  if ((this.email && this.mobile) || (!this.email && !this.mobile))
    next(new Error("Provide ether email or mobile, but not both or neigther"));
  else next();
});

userSchema.methods.JWTTokenGenration = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

userSchema.methods.comparePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
