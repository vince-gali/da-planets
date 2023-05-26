import { json } from "express";
import mongoose from "mongoose";
const Schema = mongoose.Schema

export const ColonySchema = new Schema (
    {
    planetId: {type: Schema.Types.ObjectId, required: true, ref: 'Planet'},
    galaxyId: {type: Schema.Types.ObjectId, required: true, ref: 'Galaxy'}
},
{timestamps: true, toJSON: {virtuals: true}}
)

ColonySchema.index({galaxyId: 1, planetId: 1}, {unique:true})

ColonySchema.virtual('planet', {
    localField: 'planetId',
    ref: 'Planet',
    foreignField: '_id',
    justOne: true
})

ColonySchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})