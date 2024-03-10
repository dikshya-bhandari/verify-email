//define array => modelobject
//name,object
//Student =[{name:"nitan", age:29, isMarried:false},
//........
// ]

import { model } from "mongoose";
import bookSchema from "./bookSchema.js";
import classRoomSchema from "./classRoomSchema.js";
import collegeSchema from "./collegeSchema.js";
import departmentSchema from "./departmentSchema.js";
import studentSchema from "./studentSchema.js";
import teacherSchema from "./teacherSchema.js";
import traineeSchema from "./traineeSchema.js";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import reviewSchema from "./reviewSchema.js";
import studentJoiSchema from "./studentJoiSchema.js";
import webuserSchema from "./webUserSchema.js";

export let Student = model("Student", studentSchema);
export let Teacher = model("Teacher", teacherSchema);
export let Book = model("Book", bookSchema);
export let Trainee = model("Trainee", traineeSchema);
export let College = model("College", collegeSchema);
export let Class = model("Class", classRoomSchema);
export let Department = model("Department", departmentSchema);
export let Product = model("Product", productSchema);
export let User=model("User", userSchema);
export let Review=model("Review", reviewSchema);
export let StudentJoi=model("StudentJoi", studentJoiSchema);
export let WebUser=model("WebUser", webuserSchema);

/* 
first letter of model name must be capital and singular
variable name and model name must be same
*/
