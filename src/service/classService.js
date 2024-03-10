import { Class } from "../schema/model.js";

export let createClassService = async (data) => {
  return await Class.create(data);
};

export let readAllClassService = async () => {
  return await Class.find({});
};

export let readSpecificClassService = async (id) => {
  return await Class.findById(id);
};
export let updateClassService = async (id, data) => {
  return await Class.findByIdAndUpdate(id, data, {
    new: true,
  });
};
export let deleteClassService = async (id) => {
  return await Class.findByIdAndDelete(id);
};
