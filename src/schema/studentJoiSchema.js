import { Schema } from "mongoose";
let studentJoiSchema = Schema(
  {
    name: {
      type: String,
    },
    age:{
      type:Number
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    roll: {
      type: Number,
    },
    isMarried: {
      type: Boolean,
    },
    spouseName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    dob: {
      type: Date,
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
export default studentJoiSchema;

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
