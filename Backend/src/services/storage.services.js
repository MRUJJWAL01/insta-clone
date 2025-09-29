const Imagekit = require("imagekit");

const storageIntance = new Imagekit({
    publicKey:process.env.Imagekit_Public_key,
    privateKey:process.env.Imagekit_Private_key,
    urlEndpoint:process.env.Imagekit_URL_Endpoint,
})

const uploadImage = async(file, filename)=>{
    try {
         const res = await storageIntance.upload({
        file,
        filename,
        folder:"instagram-clone"
    })
    return res;
        
    } catch (error) {
        console.log("Error in uploading image",error);
    }
}

module.exports = uploadImage;
