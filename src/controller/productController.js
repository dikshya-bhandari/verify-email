import {
  createProductService,
  deleteProductService,
  readAllProductService,
  readSpecificProductService,
  updateProductService,
} from "../service/productService.js";

export let createProductController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createProductService(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllProductController = async (req, res, next) => {
  try {
    let result = await readAllProductService();
    res.status(200).json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificProductController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificProductService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateProductController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateProductService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Product Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteProductController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteProductService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
