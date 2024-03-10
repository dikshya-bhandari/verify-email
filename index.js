import express, { json } from "express";
import { traineesRouter } from "./src/route/traineesRouter.js";
import { firstRouter } from "./src/route/firstRouter.js";
import { nameRouter } from "./src/route/nameRouter.js";
import { bikeRouter } from "./src/route/bikeRouter.js";
import connectToMongoDb from "./src/connectdb/connectToMongoDb.js";
import studentRouter from "./src/my Route/studentRouter.js";
import traineeRouter from "./src/my Route/traineeRouter.js";
import departmentRouter from "./src/my Route/departmentRouter.js";
import classRoomRouter from "./src/my Route/classRoomRouter.js";
import collegeRouter from "./src/my Route/collegeRouter.js";
import productRouter from "./src/my Route/productRoute.js";
import userRouter from "./src/my Route/userRouter.js";
import reviewRouter from "./src/my Route/reviewRouter.js";
import teacherRouter from "./src/my Route/teacherRouter.js";
import studentJoiRouter from "./src/my Route/studentJoiRouter.js";
import bookRouter from "./src/my Route/bookRouter.js";
import fileRouter from "./src/my Route/fileRouter.js";
import webUserRouter from "./src/my Route/webUserRouter.js";
let expressApp = express();
connectToMongoDb();

// expressApp.use((req,res,next)=>{
//   console.log("I am application, normal middleware1")
//   let error= new Error("i am application error");
//   next(error)
// },
// (error, req,res,next)=>{
//   console.log("I am application, error middleware1")
//   console.log(error.message);
//   next();
// },
// (req,res,next)=>{
//   console.log("I am application, normal middleware2")
//   next();
// })
expressApp.use(express.static('./public'));  //link=> localhost:8000/food3.jpg
expressApp.use(json()); //it is done to make our application to accept json data

expressApp.use("/trainees", traineesRouter);
expressApp.use("/", firstRouter);
expressApp.use("/names", nameRouter);
expressApp.use("/bikes", bikeRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/trainees", traineeRouter);
expressApp.use("/departments", departmentRouter);
expressApp.use("/classrooms", classRoomRouter);
expressApp.use("/colleges", collegeRouter);
expressApp.use("/products", productRouter);
expressApp.use("/users", userRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/teachers", teacherRouter);
expressApp.use("/studentsjoi", studentJoiRouter);
expressApp.use("/books", bookRouter);
expressApp.use("/files", fileRouter);
expressApp.use("/web-users", webUserRouter);


expressApp.listen(8000, () => {
  console.log("app is listening at port 8000");
});
