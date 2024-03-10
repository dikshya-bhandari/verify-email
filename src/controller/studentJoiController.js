import {
  createStudentJoiService,
  deleteStudentJoiService,
  readAllStudentJoiService,
  readSpecificStudentJoiService,
  updateStudentJoiService,
} from "../service/studentJoiService.js";

export let createStudentJoiController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createStudentJoiService(req.body);
    res.status(201).json({
      success: true,
      message: "StudentJoi created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllStudentJoiController = async (req, res, next) => {
  try {
    let result = await readAllStudentJoiService();
    res.status(200).json({
      success: true,
      message: "StudentJoi read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificStudentJoiController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificStudentJoiService(req.params.id);
    res.status(200).json({
      success: true,
      message: "StudentJoi read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateStudentJoiController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateStudentJoiService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "StudentJoi Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteStudentJoiController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteStudentJoiService(req.params.id);
    res.status(200).json({
      success: true,
      message: "StudentJoi deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
