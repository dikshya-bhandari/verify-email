import {
  createClassService,
  deleteClassService,
  readAllClassService,
  readSpecificClassService,
  updateClassService,
} from "../service/classService.js";

export let createClassController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createClassService(req.body);
    res.status(201).json({
      success: true,
      message: "Class created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllClassController = async (req, res, next) => {
  try {
    let result = await readAllClassService({});
    res.status(200).json({
      success: true,
      message: "Class read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificClassController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificClassService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Class read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateClassController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateClassService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Class Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteClassController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteClassService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Class deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
