// name: "Downward Dog",
//     description: "A fundamental yoga pose for flexibility and strength.",
//     video: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
//     timing: "5-10 minutes",
//     difficulty: 3,
//     count: 10,
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected!");
    }catch(error){
        console.error(error);
    }
};

module.exports=connectDB;