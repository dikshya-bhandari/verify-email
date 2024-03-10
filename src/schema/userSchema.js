import { Schema } from "mongoose";

//{name:"nitan", age:29, isMarried:false}

let userSchema = Schema(
  {
    fullName: {
      required: true,
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    email: {
      unique:true,
      required: true,
      type: String,
      trim: true,
    },
    password: {
      required: true,
      type: String,
      trim: true,
    },
    phoneNumber: {
      required: true,
      type: Number,
      trim: true,
    },
    gender: {
      required: true,
      type: String,
      trim: true,
      default:'male'
    },
    dob: {
      required: true,
      type: Date,
      trim: true,
    },
    isMarried: {
      type: Boolean,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
export default userSchema;

/* 
email =>unique,
password=>
phoneNumber=>
gender
dob
isMarried
*/
