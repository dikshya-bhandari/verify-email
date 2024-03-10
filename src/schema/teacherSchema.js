import { Schema } from "mongoose";

let teacherSchema= Schema({
    name:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    },
    isMarried:{
        required:true,
        type:Boolean
    },
    subject:{
        required:true,
        type:String
    }
});
export default teacherSchema