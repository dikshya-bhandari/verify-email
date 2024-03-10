import {
  createTraineeService,
  deleteTraineeService,
  readAllTraineeService,
  readSpecificTraineeService,
  updateTraineeService,
} from "../service/traineeService.js";

export let createTraineeController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createTraineeService(req.body);
    res.status(201).json({
      success: true,
      message: "Trainee created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllTraineeController = async (req, res, next) => {
  try {
    let result = await readAllTraineeService();
    res.status(200).json({
      success: true,
      message: "Trainee read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificTraineeController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificTraineeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Trainee read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateTraineeController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateTraineeService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Trainee Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteTraineeController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteTraineeService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Trainee deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
