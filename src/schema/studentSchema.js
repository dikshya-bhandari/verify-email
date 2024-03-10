import { Schema } from "mongoose";

//{name:"nitan", age:29, isMarried:false}
// {
//     "name": "c",
//     "password":"Password@123",
//     "phoneNumber": 1111111111,
//     "roll": 2,
//     "isMarried": false,
//     "spouseName": "lkjl",
//     "email": "abc@gmai",
//     "gender": "male",
//     "dob": "2019-2-2",
//     "location": {
//         "country": "nepal",
//         "exactLocation": "gagalphedi"
//     },
//     "favTeacher": [
//         "a",
//         "b",
//         "c",
//         "nitan"
//     ],

//     "favSubject": [
//         {
//             "bookName": "javascript",
//             "bookAuthor": "nitan"
//         },
//         {
//             "bookName": "b",
//             "bookAuthor": "b"
//         }
//     ],

// }
// let studentSchema= Schema({
//     name:{
//         required:true,
//         type:String,
//     },
//     age:{
//         required:true,
//         type:Number,
//     },
//     isMarried:{
//         required:true,
//         type:Boolean,
//     }
// })

let studentSchema = Schema(
  {
    name: {
      type: String,
      //lowercase:true
      // uppercase: true,
      // trim: true,
      required: [true, "name field is required"], //error field must be resemble with field name
      minLength: [3, "name field must be more than 3 characters"],
      maxLength: [25, "name field must be less than 25 characters"],
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      // min: [1000000000, "phone number must be 10 digits"],
      // max: [9999999999, "phone number must be 10 digits"],
      validate: (value)=>{
        if(value.toString().length!==10){
          throw new Error("phoneNumber must be exact 10 digits");
        }
      }
    },
    roll: {
      type: Number,
      min: [400, "roll must be more than 400"],
      max: [500, "role must be less than 500"],
    },
    isMarried: {
      type: Boolean,
      default: false,
    },
    spouseName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
      //default: "female",
      validate:(value)=>{
        if(value==="male" || value==="female" || value==="others"){
          
        }else{
          throw new Error("put valid gender")
        }
      }
    },
    dob: {
      type: Date,
      default: new Date(),
    },
    location: {
      country: {
        type: String,
      },
      exactLocation: {
        type: String,
      },
    },
    favTeacher: [
      {
        type: String,
      },
    ],
    favSubject: [
      {
        bookName: {
          type: String,
        },
        bookAuthor: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
export default studentSchema;

/* 
manipulation
validation

2 digits
10
99

3 digits
100
999

10digit
1000000000
9999999999
*/
