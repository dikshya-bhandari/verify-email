import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendMails.js";
import {
  createWebUserService,
  deleteWebUserService,
  readAllWebUserService,
  readSpecificWebUserService,
  updateWebUserService,
} from "../service/webUserService.js";
import { WebUser } from "../schema/model.js";
import { secretKey } from "../constant.js";
export let createWebUserController = async (req, res, next) => {
  let data = req.body;
  /* 
  data={
  fullName: 'Dikshya Bhandari',
  email: 'dikshyabhandari721@gmail.com',
  password: 'abc@gmail.com',
  dob: '2055-03-04',
  gender: 'female',
  role: 'admin',
}
  */

  let hashPassword = await bcrypt.hash(data.password, 10);
  data = { ...data, isverifiedEmail: false, password: hashPassword };
  try {
    let result = await WebUser.create(data);
    // send email with link

    //generate token
    let infoObj = {
      _id: result._id,
    };
    let expiryInfo = {
      expiresIn: "5d",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);
    await sendEmail({
      to: [data.email],
      subject: "ACCOUNT CREATE",
      html: `<h1>Dear Customer</h1>
          <p>Your account has been created successfully</p>
          <a href="http://localhost:3000/verify-email?token=${token}">http://localhost:3000/verify-email?token=${token}</a>
          
          `,
    });

    res.json({
      success: true,
      message: "webUser created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async () => {
  try {
    console.log("hello");
    res.json({
      success:true
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllWebUserController = async (req, res, next) => {
  try {
    let result = await readAllWebUserService();
    res.status(200).json({
      success: true,
      message: "WebUser read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificWebUserController = async (req, res, next) => {
  // let id=req.params.id;
  // console.log(id)
  try {
    let result = await readSpecificWebUserService(req.params.id);
    res.status(200).json({
      success: true,
      message: "WebUser read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateWebUserController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await updateWebUserService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "WebUser Update successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteWebUserController = async (req, res, next) => {
  // let id=req.params.id;
  // let data=req.body
  try {
    let result = await deleteWebUserService(req.params.id);
    res.status(200).json({
      success: true,
      message: "WebUser deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let loginWebUserController = async (req, res, next) => {
  //email, password
  let email = req.body.email;
  let password = req.body.password;
  //check email exist in db or not (if not) throw error
  let user = await WebUser.findOne({ email: email }); //null=> if user not found, {....} if user is found
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
