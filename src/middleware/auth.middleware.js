import config from "../config/index.js";
import User from "../models/user.schema.js";
import JWT from "jsonwebtoken";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customErrors.js";

export const isLoggedIn = asyncHandler (async (req,res,next)=>{
     let token;

     if (req.cookie.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))) {
        token = req.cookie.token || req.headers.authorization.split(" ")[1]
     }

     if(!token){
        throw new CustomError("Not authorized to access the resource",401)
     }

     try {
        const decodedJWTpayload = JWT.verify(token, config.JWT_SECRET)

        req.user = await User.findById(decodedJWTpayload._id, "name email role")
        next();

     } catch (err) {
        throw new CustomError("Not authorized to access the resource",401)

     }

})

export const authorize = (...requiredRoles) => asyncHandler((req,res,next)=>{
    if(!requiredRoles.includes(req.user.role)){
        throw new CustomError("Not authorized Role")
    }

    next();
    
})