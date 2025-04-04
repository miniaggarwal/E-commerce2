import Product from "../models/product.schema.js"
import formidable from "formidable";
import { s3FileUpload,s3FileDelete } from "../service/imgUpload.js";
import mongoose from "mongoose";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customErrors.js";
import config from "../config/index.js";

export const addProduct = asyncHandler(async(req,res)=>{

    const form = formidable({multiples : true, keepExtensions : true})

    form.parse(req, async function (err, fields, files){
        if(err){
            throw new CustomError(err.message , 500)
        }

        let productId = new mongoose.Types.ObjectId().toHexString();

        console.log(fields, files);

        if(!fields.name ||
            !fields.price ||
            !fields.description ||
            !fields.CollectionId){
            throw new CustomError("Fields required", 500)
        }



        
    })

})