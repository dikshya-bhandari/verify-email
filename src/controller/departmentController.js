import {
  createDepartmentService,
  deleteDepartmentService,
  readAllDepartmentService,
  readSpecificDepartmentService,
  updateDepartmentService,
} from "../service/departmentService.js";

export let createDepartmentController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createDepartmentService(req.body);
    res.status(201).json({
      success: true,
      message: "Department created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllDepartmentController = async (req, res, next) => {
  try {
    let result = await readAllDepartmentService({});
    res.status(200).json({
      success: true,
      message: "Department read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificDepartmentController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificDepartmentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Department read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateDepartmentController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateDepartmentService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Department Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteDepartmentController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteDepartmentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
