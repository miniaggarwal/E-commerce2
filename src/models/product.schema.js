import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name : {
        type : String,
        trim : true,
        maxLength : [120,"Product name must not exceed 120 characters"],
        required : [true, "Please enter Product name"]
    },
    price : {
        type : Number,
        maxLength : [5,"Product name must not exceed 5 numbers"],
        required : [true, "Please enter Product name"]
    },
    description :{
        type : String,
    },
    photos : [{
        secure_url : {
            type : String,
            required : true,
            trim : true,
        }
    }],
    stock : {
        type : Number,
        default : 0,
    },
    sold : {
        type : Number,
        default : 0,
    },
    collectionId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Collection"
    }
},{
    timestamps : true
})



module.exports = mongoose.model("Product", productSchema)