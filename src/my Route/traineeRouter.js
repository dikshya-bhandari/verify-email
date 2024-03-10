import { Router } from "express";

let traineeRouter = Router();
traineeRouter
  .route("/me")
  .post((req, res, next) => {
    console.log("i am post trainee");
    res.json({
      success:true,
      message:'I am post trainee'
    });
  })
  .get((req, res, next) => {
    console.log("I am get trainee");
    res.json({
      success:true,
      message:'I am get trainee'
    });
  })
  .patch((req, res, next) => {
    console.log("I am patch trainee");
    res.json({
      success:true,
      message:'I am patch trainee'
    });
  })
  .delete((req, res, next) => {
    console.log("I am delete trainee");
    res.json({
      success:true,
      message:'I am delete trainee'
    })
  });
export default traineeRouter;
