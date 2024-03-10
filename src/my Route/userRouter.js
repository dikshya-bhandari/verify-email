import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  loginUserController,
  readAllUserController,
  readSpecificUserController,
  updateUserController,
} from "../controller/userController.js";

// let m0 = (value) => {
//   return (req, res, next) => {
//     console.log("i am m0 middleware");
//     if (value) {
//       next();
//     } else {
//     }
//   };
// };
// let m1 = (req, res, next) => {
//   console.log("i am m1 middleware");
// };

// let fun = () => {
//   return (req, res, next) => {};
// };
// let m4=(value)=>{
//   return(req,res,next)=>{

//   }
// }
// let m3=(req,res,next)=>{
//   ...
// }
// let deleteUser = (req, res, next) => {
//   console.log("user  deleted successfully");
// };

// let isAuthorized = (value) => {
//   return (req, res, next) => {
//     if (value === "admin" || value === "superadmin") {
//       next();
//     } else {
//       console.log("you cannot delete user");
//     }
//   };
// };

let userRouter = Router();
userRouter
  .route("/")
  //.post(isAuthorized("min"), deleteUser)
  //.post(m0(false), m1, m3, m4("ram"))
  // .post(m0(false),m1)
  .post(createUserController)
  .get(readAllUserController);

userRouter
  .route("/:id") //localhost:8000/Users/1234234
  .get(readSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);

  //localhost:8000/users/login
  //method post

  userRouter
  .route("/login")
  .post(loginUserController)
export default userRouter;
