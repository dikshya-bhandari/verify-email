import mongoose from "mongoose";
import { port } from "../constant.js";

const connectToMongoDb=()=>{
 mongoose.connect(port);
 console.log("application is connected to mongodb successfully");
}
export default connectToMongoDb;