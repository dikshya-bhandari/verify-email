import { Router } from "express";
import {
  createClassController,
  deleteClassController,
  readAllClassController,
  readSpecificClassController,
  updateClassController,
} from "../controller/classController.js";

let classRouter = Router();
classRouter.route("/").post(createClassController).get(readAllClassController);

classRouter
  .route("/:id")
  .get(readSpecificClassController)
  .patch(updateClassController)
  .delete(deleteClassController);
export default classRouter;
