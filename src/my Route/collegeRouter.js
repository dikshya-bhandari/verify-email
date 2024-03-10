import { Router } from "express";
import {
  createCollegeController,
  deleteCollegeController,
  readAllCollegeController,
  readSpecificCollegeController,
  updateCollegeController,
} from "../controller/collegeController.js";

let collegeRouter = Router();
collegeRouter
  .route("/")
  .post(createCollegeController)
  .get(readAllCollegeController);

collegeRouter
  .route("/:id")
  .get(readSpecificCollegeController)
  .patch(updateCollegeController)
  .delete(deleteCollegeController);
export default collegeRouter;
