import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require: true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        contactNo:{
            type:String
        },
        Address: {
            type:String
        },
        orderIds :{
            type: [String]
        },
        cardIds :{
            type: [String]
        },
        reviewIds :{
            type: [String]
        }
    },{
        timestamps:true
    }
)

export default mongoose.model("User", UserSchema)
