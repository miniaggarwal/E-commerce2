import Product from "../models/product.schema.js"
import formidable from "formidable";
import { s3FileUpload,s3FileDelete } from "../service/imgUpload.js";
import mongoose from "mongoose";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customErrors.js";
import config from "../config/index.js";
import fs from "fs";

export const addProduct = asyncHandler(async(req,res)=>{

    const form = formidable({multiples : true, keepExtensions : true})

    form.parse(req, async function (err, fields, files){
        if(err){
            throw new CustomError(err.message , 500)
        }

        let productId = new mongoose.Types.ObjectId().toHexString();

        console.log(fields, files);

        if(!fields.name || !fields.price || !fields.description ||
            !fields.CollectionId){
            throw new CustomError("Fields required", 500)
        }

        let imgArrayResp = Promise.all(
            Object.keys(files).map(async(file,index)=>{
                const element = file[fileKey]
                console.log(element);
                
                const data = fs.readFileSync(element.filepath)

                const upload = await s3FileUpload({
                    bucketNAme : config.S3_BUCKET_NAME,
                    key : `product/${productId}/phot_${index+1}.png`,
                    body : data,
                    contentType : element.mimetype

                })

                return ({secure_url : upload.Location})
            })
        )

        
    })

})