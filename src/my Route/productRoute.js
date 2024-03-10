import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readSpecificProductController,
  updateProductController,
} from "../controller/productController.js";
// import {
//   createProduct,
//   deleteStudent,
//   readAllStudent,
//   readSpecificStudent,
//   updateStudent,
// } from "../controller/studentController.js";

// let canAddProduct = (role) => {
//   return (req, res, next) => {
//     if (role === "admin") {
//       next();
//     } else if (role === "customer") {
//       res.status(400).json({
//         success: false,
//         message: "you are not allow to create product",
//       });
//     }
//   };
// };

/* 
make a middleware pass a age
if age is greater than 18 he can create product
else through error


make a middleware pass age, status
if age is greater than 18 and status is married, he can create product else throw error(he )
 */
// let age = (a) => {
//   return (req, res, next) => {
//     if (a >= 18) {
//       next();
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "you cannot create product",
//       });
//     }
//   };
// };

// let canCreateProduct = (age, isMarried) => {
//   return (req, res, next) => {
//     if (age >= 18 && isMarried) {
//       next();
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "you are not allowed to create product",
//       });
//     }
//   };
// };
let productRouter = Router();

productRouter
  .route("/")
  // .post(createProductController)
  //.post(canAddProduct("customer"), createProductController)
  //.post(age(10),createProductController)
  .post(createProductController)

  .get(readAllProductController);

productRouter
  .route("/:id") //localhost:8000/Products/1234234
  .get(readSpecificProductController)
  .patch(updateProductController)
  .delete(deleteProductController);
export default productRouter;
