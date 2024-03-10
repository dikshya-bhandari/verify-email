import { Router } from "express";
import { createReviewController, deleteReviewController, readAllReviewController, readSpecificReviewController, updateReviewController } from "../controller/reviewController.js";

let reviewRouter = Router();

reviewRouter.route("/").post(createReviewController).get(readAllReviewController);

reviewRouter
  .route("/:id") //localhost:8000/Reviews/1234234
  .get(readSpecificReviewController)
  .patch(updateReviewController)
  .delete(deleteReviewController);
export default reviewRouter;
