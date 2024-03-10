import { Schema } from "mongoose";

let webuserSchema = Schema(
  {
    fullName: {
      type: String,
      required: [true, "fullName field is required"],
    },

    email: {
      type: String,
      required: [true, "email field is required"],
    },
    password: {
      type: String,
      required: [true, "password field is required"],
    },
    dob: {
      type: Date,
      required: [true, "dob field is required"],
    },
    gender: {
      type: String,
      required: [true, "gender field is required"],
    },
    role: {
      type: String,
      required: [true, "role field is required"],
    },
    isverifiedEmail: {
      type: Boolean,
    //   required: [true, "isverifiedEmail is required"],
    },
  },
  { timestamps: true }
);

export default webuserSchema;
