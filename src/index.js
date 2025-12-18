import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constant.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./db/index.js"
dotenv.config();
 
connectDB()


  

// const app = express()

// const connectDB = async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log("data base is succesfully connected");

//         app.listen(process.env.PORT,()=>{
//             console.log(`your port number  : ${process.env.PORT} and data base name is : ${DB_NAME}`)
//         })

//     }
//     catch(error){

//         console.error("your error is :",error)

//     }
// }

// connectDB()

// const app =  express()

// dotenv.config()

// ;(async()=>{

//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log("database is succesfully connected");

//         app.listen(process.env.PORT , ()=>{
//             console.log(`your port number is  ${process.env.PORT }`);

//         } )

//     } catch (error) {
//         console.error("ERROR IS : ")

//     }

// })()
