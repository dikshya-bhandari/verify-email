import { Schema } from "mongoose";

//{name:"nitan", age:29, isMarried:false}

let productSchema = Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  quantity: {
    required: true,
    type: Number,
  },
},{
  timestamps:true
});
export default productSchema;
