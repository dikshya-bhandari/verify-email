import { Teacher } from "../schema/model.js";

export let createTeacherService = async (data) => await Teacher.create(data);
export let readAllTeacherService = async () => await Teacher.find({});
export let readSpecificTeacherService = async (id) =>
  await Teacher.findById(id);
export let updateTeacherService = async (id, data) =>
  await Teacher.findByIdAndUpdate(id, data, {
    new: true,
  });
export let deleteTeacherService = async (id) =>
  await Teacher.findByIdAndDelete(id);
