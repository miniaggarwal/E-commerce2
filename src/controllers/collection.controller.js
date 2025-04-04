import Collection from "../models/collection.schema"
import asyncHandler from "../service/asyncHandler"
import CustomError from "../service/customErrors"
import mongoose from "mongoose"


export const createCollection = asyncHandler(async (req, res) => {
    const { name } = req;

    if (!name) {
        throw new CustomError("Collection name required", 400)

    }

    await Collection.create({
        name
    }).save()

    res.status(200).json({
        success: true,
        message: "Collection Created"
    })


})

export const updateCollection = asyncHandler(async (req, res) => {
    const { id, name } = req.params;

    await Collection.findByIdAndUpdate(id, { name },

    )

    if (!name) {
        throw new CustomError("Collection name required", 400)

    }

    let updatedCollection = await Collection.findByIdAndUpdate(id, { name }, {
        new: true,
        runValidators: true
    }).save();


    if (!updatedCollection) {
        throw new CustomError("Collection not updated", 400)

    }


    res.status(200).json({
        success: true,
        message: "Collection updated"
    })


})

export const deleteCollection = asyncHandler(async (req, res) => {

    const { id } = req.params

    const collectionToBeDeleted = Collection.findById(id);


    if (!collectionToBeDeleted) {
        throw new CustomError("Collection not found", 400)
    }

    await Collection.findByIdAndDelete(id).save().
        then((result) => {
            res.send(200).json({
                success: true,
                message: "Collection deleted!!"
            })
        }).catch((err) => {
            throw new CustomError(err, 400)
        });
});

export const getAllCollection = asyncHandler(async (req, res) => {

    await Collection.find().
        then((result) => {
            res.send(200).json({
                success: true,
                message: result
            })
        }).catch((err) => {
            throw new CustomError(err, 400)
        });
});




