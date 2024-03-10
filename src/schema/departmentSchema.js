import { Schema } from "mongoose";

let departmentSchema = Schema({
  name: {
    required: true,
    type: String,
  },
  hod: {
    required: true,
    type: String,
  },
  totalMember: {
    required: true,
    type: Number,
  },
});
export default departmentSchema;
