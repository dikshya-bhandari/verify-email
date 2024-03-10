import { Student } from "../schema/model.js";

export let createStudentService = async (data = {}) => {
  return await Student.create(data);
};

export let readAllStudentService = async (
  query = {},
  sort = null, //we can use ''
  skip = 0,
  limit = 10
) => {
  //return await Student.find({});
  //find has control over the object
  //select has control over the project property
  //we can not use -(exclusive) and +(inclusive) simultaneously except _id

  //return await Student.find({name: "Nitan"}).select("name password phoneNumber -_id");
  // return await Student.find({name:"nitan"}).select("-password");
  //query={name:"Nitan"}
  // return await Student.find(query);

  return await Student.find(query).sort(sort).skip(skip).limit(limit);
};

export let readSpecificStudentService = async (id = "") => {
  return await Student.findById(id);
};
export let updateStudentService = async (id = "", data = {}) => {
  return await Student.findByIdAndUpdate(id, data, {
    new: true,
  });
};
export let deleteStudentService = async (id = "") => {
  return await Student.findByIdAndDelete(id);
};
