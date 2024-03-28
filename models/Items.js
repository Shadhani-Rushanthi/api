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
        }
        price:{
            type:Number
        }, 
        imageURL:{
            type:String,
            require:true
        },
        ratings: {
            type:Boolean
        },
        isSale: {
            type: Boolean
        }
    },{
        timestamps:true
    }
)


export default mongoose.model("Item", ItemSchema)