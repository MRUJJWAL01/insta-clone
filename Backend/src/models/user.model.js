const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    mobile:{
        type:Number,
        unique:true,
        required:true,
        minlength:10,
        maxlenght:13

    },
    email:{
      type:String,
      unique:true,   
      required:true,
    },
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    post:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"posts",
        }
    ]
   
},{timestamps:true})


userSchema.pre("save",async function(next){
    let hashpass = await bcrypt.hash(this.password,10);
    this.password = hashpass;
    next();
})

userSchema.methods.JWTTokenGenration = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:"1h"
    })
}

userSchema.methods.comparePassword = async function(pass){
    return await bcrypt.compare(pass,this.password);
}

const userModel = mongoose.model("user",userSchema);
module.exports = userModel;
