import mongoose from "mongoose";
const {Schema} = mongoose;

const CategorySchema = new mongoose.Schema(
    {
        name:{
            type:String, 
            require:true, 
            unique: true,
        },
        imageURL:{
            type: String
        }
    }
)


export default mongoose.model("Category", CategorySchema)