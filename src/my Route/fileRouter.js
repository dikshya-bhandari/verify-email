import { Router } from "express";
import {
  uploadMultipleFile,
  uploadSingleFileController,
} from "../controller/fileController.js";
import upload from "../utils/uploadFile.js";

let fileRouter = Router();
fileRouter
  .route("/single")
  .post(upload.single("file1"), uploadSingleFileController);

fileRouter.route("/multiple").post(upload.array("file1"), uploadMultipleFile);
export default fileRouter;
