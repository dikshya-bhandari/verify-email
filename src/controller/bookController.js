import {
  createBookService,
  deleteBookService,
  readAllBookService,
  readSpecificBookService,
  updateBookService,
} from "../service/bookService.js";

export let createBookController = async (req, res, next) => {
  // let data = req.body;

  try {
    let result = await createBookService(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllBookController = async (req, res, next) => {
  let { totalDataInPage, pageNo, sort, ...query } = req.query;
  //query={name:"nitan", roll=400}
  let skip = (Number(pageNo) - 1) * Number(totalDataInPage);
  let limit = totalDataInPage;

  try {
    let result = await readAllBookService(query, sort, skip, limit);
    res.status(200).json({
      success: true,
      message: "Book read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificBookController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificBookService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateBookController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateBookService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Book Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteBookController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteBookService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
