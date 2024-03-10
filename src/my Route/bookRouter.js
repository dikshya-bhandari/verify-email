import { Router } from "express";
import {
  createBookController,
  deleteBookController,
  readAllBookController,
  readSpecificBookController,
  updateBookController,
} from "../controller/bookController.js";
import validation from "../middleware/validation.js";
import bookValidation from "../validation/bookValidation.js";

let bookRouter = Router();

bookRouter
  .route("/")
  .post(validation(bookValidation),createBookController)

  .get(readAllBookController);

bookRouter
  .route("/:id") //localhost:8000/Books/1234234
  .get(readSpecificBookController)
  .patch(updateBookController)
  .delete(deleteBookController);
export default bookRouter;
