import config from "./index.js"
import cloudinary from "cloudinary";

export const cloudinary_config = cloudinary.config({
    cloud_name : config.CLOUDINARY_NAME,
    api_key : config.CLOUDINARY_API,
    api_secret : config.CLOUDINARY_SECRET,

})