import {
  createTeacherService,
  deleteTeacherService,
  readAllTeacherService,
  readSpecificTeacherService,
  updateTeacherService,
} from "../service/teacherService.js";

export let createTeacherController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createTeacherService(req.body);
    res.status(201).json({
      success: true,
      message: "Teacher created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllTeacherController = async (req, res, next) => {
  try {
    let result = await readAllTeacherService();
    res.status(200).json({
      success: true,
      message: "Teacher read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificTeacherController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificTeacherService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Teacher read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateTeacherController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateTeacherService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Teacher Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteTeacherController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteTeacherService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
