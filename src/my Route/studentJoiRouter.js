import { Router } from "express";
import {
  createStudentJoiController,
  deleteStudentJoiController,
  readAllStudentJoiController,
  readSpecificStudentJoiController,
  updateStudentJoiController,
} from "../controller/studentJoiController.js";
import validation from "../middleware/validation.js";
import studentValidation from "../validation/studentValidation.js";

/* 
.string()
-value must be string
-it should not be empty
.min(3)-> the field must have at least 3 character : it sees its length
.max(10)-> the field must have at most 10 character : it sees its length

.number()
-value must be number : it does not see type of number
it means 21 and "21" are same
.min() -> it sees its value
.max() -> it sees its value

.boolean()
-value must be boolean

required()-> any(number,string,boolean)
-you must pass field

enum()=> fixed value(male,female,other)
.valid("male","female","other")

through custom error

object=> Joi.object().keys({
  .....
})

array=> Joi.array().items()

.when()

chatGpt research=> at joi custom error for valid

*/



let studentJoiRouter = Router();

studentJoiRouter
  .route("/")
  .post(validation(studentValidation), createStudentJoiController)
  .get(readAllStudentJoiController);

studentJoiRouter
  .route("/:id") //localhost:8000/students/1234234
  .get(readSpecificStudentJoiController)
  .patch(updateStudentJoiController)
  .delete(deleteStudentJoiController);
export default studentJoiRouter;
