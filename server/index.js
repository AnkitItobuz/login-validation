import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import dbConnect from "./config/database.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

// load config from env file
const port = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// mount the todi api routes
app.use("/api/v1", authRoutes);

// start server
app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})

// coonect to database
dbConnect();

// default routes

app.get("/", (req, res)=>{
    res.send(`<h1>This is home page</h1>`)
})