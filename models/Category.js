import mongoose from "mongoose";
const {Schema} = mongoose;

const CategorySchema = new mongoose.Schema(
    {
        name:{
            type:String, 
            require:true, 
        },
        imageURL:{
            type: String
        }
    }
)


export default mongoose.model("Category", CategorySchema)
