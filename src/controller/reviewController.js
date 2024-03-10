
import {
  createReviewService,
  deleteReviewService,
  readAllReviewService,
  readSpecificReviewService,
  updateReviewService,
} from "../service/reviewService.js";

export let createReviewController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createReviewService(req.body);
    res.status(201).json({
      success: true,
      message: "Review created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllReviewController = async (req, res, next) => {
  try {
    let result = await readAllReviewService();
    res.status(200).json({
      success: true,
      message: "Review read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificReviewController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificReviewService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Review read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateReviewController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateReviewService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Review Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteReviewController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteReviewService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
