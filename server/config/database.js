import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("DB connection established"))
    .catch((error)=>{
        console.log("DB connection error")
        console.log(error.message);
        process.exit(1);
    });
}

export default dbConnect;