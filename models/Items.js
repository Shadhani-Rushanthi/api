import { Double } from "mongodb";
import mongoose from "mongoose";
const {Schema} = mongoose;

const ItemSchema = new mongoose.Schema(
    {
        name:{
            type:String, 
            require:true
        },
        itemType:{
            type: String
        },
        stockQty:{
            type:Number
        },
        price:{
            type:Double
        }, 
        imageURL:{
            type:String,
            require:true
        },
        ratings: {
            type:Number
        },
        isSale: {
            type: Boolean
        }
    },{
        timestamps:true
    }
)


export default mongoose.model("Item", ItemSchema)