import {
  createCollegeService,
  deleteCollegeService,
  readAllCollegeService,
  readSpecificCollegeService,
  updateCollegeService,
} from "../service/collegeService.js";

export let createCollegeController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createCollegeService(req.body);
    res.status(201).json({
      success: true,
      message: "College created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllCollegeController = async (req, res, next) => {
  try {
    let result = await readAllCollegeService({});
    res.status(200).json({
      success: true,
      message: "College read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificCollegeController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificCollegeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "College read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateCollegeController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateCollegeService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "College Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteCollegeController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteCollegeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "College deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
