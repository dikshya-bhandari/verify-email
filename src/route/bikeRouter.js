import { Router } from "express";

export let bikeRouter = Router();
bikeRouter
  .route("/")
  .post(
    (req, res, next) => {
      console.log("I am normal middleware1");

      let error = new Error("this is my second error");
      next(error);
    },
    (error, req,res,next)=>{
       console.log("I am error middleware1")
       console.log(error.message);
       next()
    },
    (req, res, next) => {
      console.log("I am normal middlewaare2");
      next()
      
    },
    (error, req,res,next)=>{
        console.log(" I am error middleware2")
    },
    (req, res, next) => {
      console.log("I am normal middleware3");
      res.json({
        success:true,
        message:"bike created successful"
      });
    }
  )
  .get((req, res, next) => {
    // console.log("bike get")
    res.json("bike get");
  })
  .patch((req, res, next) => {
    //    console.log("bike update")
    res.json("bike patch");
  })
  .delete((req, res, next) => {
    // console.log("bike delete")
    res.json("bike delete");
  });
bikeRouter
  .route("/name") //localhost:8000/bike/name
  .get((req, res, next) => {
    res.json("bike name get");
  });
bikeRouter
  .route("/:id") //localhost:8000/bike/:id  :id is dynamic
  .get((req, res, next) => {
    console.log("i am id")
    console.log(req.params);
    /* 
    req.params={
        id:1234
    }
    */
    /* 
   req.query={
    name="nitan"
    address="gagalphedi"
   }
   
   */
    res.json(req.query);
    // res.json("id")
  });

bikeRouter
  .route("/:id1/name/:id2") // localhost:8000/bike/any/name/any
  .get((req, res, next) => {
    console.log(req.params);
    res.json(req.params);
  });
