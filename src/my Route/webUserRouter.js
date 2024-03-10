import { Router } from "express";
import {
  createWebUserController,
  deleteWebUserController,
  loginWebUserController,
  readAllWebUserController,
  readSpecificWebUserController,
  updateWebUserController,
  verifyEmail,
} from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter
  .route("/")
  .post(createWebUserController)
  .get(readAllWebUserController);

webUserRouter
  .route("/:id")
  .get(readSpecificWebUserController)
  .patch(updateWebUserController)
  .delete(deleteWebUserController);

webUserRouter.route("/verify-email").patch(verifyEmail);

webUserRouter.route("/:webUserId").post(loginWebUserController);
export default webUserRouter;
