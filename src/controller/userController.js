import nodemailer from "nodemailer";

import { User } from "../schema/model.js";
import {
  createUserService,
  deleteUserService,
  readAllUserService,
  readSpecificUserService,
  updateUserService,
} from "../service/userService.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendMails.js";
export let createUserController = async (req, res, next) => {
  // let data = req.body;
  let data = req.body;
  data.password = await bcrypt.hash(data.password, 10);

  
  try {
    let result = await createUserService(data);
    for(let i=1; i<=10; i++){
      await sendEmail({
        // to: ["dikshyabhandari01@gmail.com", "dikshyabhandari05@gmail.com"],
        to:[req.body.email],
        subject: "My subject",
        html: `<h1>Dear Customer</h1>
        <p>You have successfully register in our system</p>`,
      });
    }
    res.status(201).json({
      success: true,
      message: "User created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllUserController = async (req, res, next) => {
  try {
    let result = await readAllUserService();
    res.status(200).json({
      success: true,
      message: "User read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificUserController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificUserService(req.params.id);
    res.status(200).json({
      success: true,
      message: "User read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateUserController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateUserService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "User Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteUserController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteUserService(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let loginUserController = async (req, res, next) => {
  //email, password
  let email = req.body.email;
  let password = req.body.password;
  //check email exist in db or not (if not) throw error
  let user = await User.findOne({ email: email }); //null=> if user not found, {....} if user is found
  if (user === null) {
    res
      .status(400)
      .json({ success: false, message: "email or password does not match" });
  } else {
    let dbPassword = user.password;
    let isValidPassword = await bcrypt.compare(password, dbPassword);

    if (isValidPassword) {
      res.status(200).json({
        success: true,
        message: "login successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "email or password does not match",
      });
    }
  }
  //check password (if match) login successfully, if not throw error
};
