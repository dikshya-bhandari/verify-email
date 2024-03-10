import { StudentJoi } from "../schema/model.js";

export let createStudentJoiService = async (data) => {
  return await StudentJoi.create(data);
};

export let readAllStudentJoiService = async () => {
  return await StudentJoi.find({});
};

export let readSpecificStudentJoiService = async (id) => {
  return await StudentJoi.findById(id);
};
export let updateStudentJoiService = async (id, data) => {
  return await StudentJoi.findByIdAndUpdate(id, data, {
    new: true,
  });
};
export let deleteStudentJoiService = async (id) => {
  return await StudentJoi.findByIdAndDelete(id);
};
