import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express";

const app = express();
const connectDB = () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("Connected Succesfully !!!");
    app.listen(process.env.PORsT, () => {
      console.log(`Your port number : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(Error);
    throw error;
  }
};
export default connectDB;