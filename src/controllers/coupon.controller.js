import Coupon from "../models/coupon.schema.js"
import mongoose from "mongoose";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customErrors.js";

export const createCoupon = asyncHandler(async(req,res)=>{
    const {code,discount,active} = req.body;

    if(!code || !discount){
        throw new CustomError("Must enter required field!!",400)
    }

    if(await Coupon.findOne({code})){
        throw new CustomError("Coupon ALready Exist",400)

    }

    const coupon = await Coupon.create({code,discount,active}).save().then((result)=>{
        res.status(200).json({
            sucees : true,
            message : "coupon create successfully"
        })
    })
})


export const updateCoupon = asyncHandler(async(req,res)=>{
    const {id} = req.params.id

    const data = {...req.body}


    const coupon = await Coupon.findOne({code})

    if(!coupon){
        throw new CustomError("Coupon does not exist!!",400)
    }else{
        await Coupon.findByIdAndUpdate(id,data)
        .then((result)=>{
            res.status(200).json({
                success : true,
                updatedCoupon : result
            })
        })
        .catch((err)=>{
            throw new CustomError(err, 400)
        })
    }

})


export const getAllCoupons = asyncHandler(async(req,res)=>{

    await Coupon.find()
    .then((result)=>{
        res.status(200).json({
            success : true,
            Coupons : result
        })
    })
    .catch((err)=>{
        throw new CustomError(err, 400)
    })

})

