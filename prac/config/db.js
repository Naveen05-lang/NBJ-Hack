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