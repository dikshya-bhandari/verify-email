import { Router } from "express";

export let firstRouter = Router();
firstRouter
  .route("/") //localhost:8000
  .post((req, res, next) => {
    console.log(" I am home post");
  })
  .get((req,res,next)=>{
    console.log("home get")
  })
  .patch((req,res,next)=>{
    console.log("home update")
  })
  .delete((req,res,next)=>{
     console.log("home delete")
  })
