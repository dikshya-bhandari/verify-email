//book=> name, author ,price, isAvailable

import { Schema } from "mongoose";

let bookSchema=Schema({
    name:{
        type:String
    },
    author:{
        type:String
    },
    price:{
        type:Number
    },
    isAvailable:{
        type:Boolean
    }
})
export default bookSchema