import { Student } from "../schema/model.js";
import {
  createStudentService,
  deleteStudentService,
  readAllStudentService,
  readSpecificStudentService,
  updateStudentService,
} from "../service/studentService.js";

export let createStudent = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createStudentService(req.body);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllStudent = async (req, res, next) => {
  let { totalDataInPage, pageNo, sort, ...query } = req.query;
  //query={name:"nitan", roll=400}
  let skip = (Number(pageNo) - 1) * Number(totalDataInPage);
  let limit = totalDataInPage;
  try {
    let result = await readAllStudentService(query, sort, skip, limit);
    res.status(200).json({
      success: true,
      message: "Student read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificStudent = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificStudentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Student read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateStudent = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateStudentService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Student Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteStudent = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteStudentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
