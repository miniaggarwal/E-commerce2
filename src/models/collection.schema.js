import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : ["true", "Please provide a Collection Name"],
        trim : true,
        maxLength : [120 , "Length cannot be more than 120 characters"]
    },
    
},
{
    timestamps : true 
}
)


module.exports = mongoose.model("Collection", collectionSchema)
