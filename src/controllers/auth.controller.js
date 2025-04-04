import User from "../models/user.schema.js";
import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/customErrors.js";


export const cookieOptions = {
    expires : new Date(Date.now() +  3*24*60*60*1000),
    httpOnly : true
}




//Sign up user
export const signUp = asyncHandler(async (req,res)=>{
    //Get data from user
    const {name, email, password} = req.body;

    //Validation
    if(!name || !email || password){
        throw new CustomError("Required field", 400)
    }

    const existingUser = await User.findOne({email : email})
    if(existingUser){
        throw new CustomError("User already Exist", 400)
    }

    const user = await User.create({
        name,
        email,
        password
    });

    const token = user.getJWTtoken();

    //safety
    user.password = undefined;

    //store token in user's cookie
    res.cookie("token", token, cookieOptions)

    res.status(200).json({
        sucess : true,
        token,
        user
    })


});


//Login
export const login = asyncHandler(async(req,res,next) =>{
    const {email,password} = req.body

    //validation
    if(!email || !password) {
        throw new CustomError("Enter all details", 400)
    }

    const user = User.findOne({email}).select("+password")

    const isPasswordMatched = await user.comparePassword(password)

    if(isPasswordMatched){
        const token = user.getJWTtoken();
        user.password = undefined;
        res.cookie("token", token, cookieOptions)
        return res.status(200).json({
            success : true,
            token,
            user
        })
    }

    throw new CustomError("Password is Incorrect", 400)
});


//logout
export const logout = asyncHandler(async(req,res,next) =>{
    res.cookie("token",null,{
        expires : new Date(Date.now()),
        httpOnly : true
    });

    return res.status(200).json({
        success : true,
        message : "Logged Out"
    });
    
})



export const getProfile = asyncHandler(async(req,res)=>{

    const {user} = req;

    if(!user){
        throw new CustomError("User not found")
    }

    res.status(200).json({
        success : true,
        user
    })

})








