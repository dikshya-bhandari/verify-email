import { Schema } from "mongoose";

let classRoomSchema= Schema({
    name:{
        required:true,
        type:String
    },
    numberBench:{
        required:true,
        type:Number
    },
    hasTv:{
        required:true,
        type:Boolean
    }
});
export default classRoomSchema;
