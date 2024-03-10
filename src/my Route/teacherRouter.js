import { Router } from "express";
import {
  createTeacherController,
  deleteTeacherController,
  readAllTeacherController,
  readSpecificTeacherController,
  updateTeacherController,
} from "../controller/teacherController.js";

// let canAddTeacher = (role) => {
//   return (req, res, next) => {
//     if (role === "admin") {
//       next();
//     } else if (role === "customer") {
//       res.status(400).json({
//         success: false,
//         message: "you are not allow to create teacher",
//       });
//     }
//   };
// };

/* 
make a middleware pass a age
if age is greater than 18 he can create teacher
else through error


make a middleware pass age, status
if age is greater than 18 and status is married, he can create teacher else throw error(he )
 */
// let age = (a) => {
//   return (req, res, next) => {
//     if (a >= 18) {
//       next();
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "you cannot create teacher",
//       });
//     }
//   };
// };

// let canCreateTeacher = (age, isMarried) => {
//   return (req, res, next) => {
//     if (age >= 18 && isMarried) {
//       next();
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "you are not allowed to create teacher",
//       });
//     }
//   };
// };
let teacherRouter = Router();

teacherRouter
  .route("/")
  // .post(createTeacherController)
  //.post(canAddTeacher("customer"), createTeacherController)
  //.post(age(10),createTeacherController)
  .post(createTeacherController)

  .get(readAllTeacherController);

teacherRouter
  .route("/:id") //localhost:8000/Teachers/1234234
  .get(readSpecificTeacherController)
  .patch(updateTeacherController)
  .delete(deleteTeacherController);
export default teacherRouter;
