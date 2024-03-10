import { Router } from "express";

export let nameRouter = Router();
nameRouter
  .route("/")
  .post((req, res, next) => {
    console.log("name post");
    console.log(req.body);
  })
  .get((req, res, next) => {
    console.log("name get");
  })
  .patch((req, res, next) => {
    console.log("name patch");
  })
  .delete((req, res, next) => {
    console.log("name delete");
  });
