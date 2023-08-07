import mongoose from "mongoose";
const userDetail = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:50,
        },
        
        email: {
            type:String,
            required:true,
            maxlength:200,
        },
        password: {
            type:String,
            required:true,
            maxlength:200,
        },
        confirmPassword: {
            type:String,
            required:true,
            maxlength:200,
        },
    }
);

export default mongoose.model("user", userDetail);