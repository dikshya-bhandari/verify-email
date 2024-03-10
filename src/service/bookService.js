import { Book } from "../schema/model.js";

export let createBookService = async (data) => {
  return await Book.create(data);
};

export let readAllBookService = async () => {
  (query = {}),
    (sort = null), //we can use ''
    (skip = 0),
    (limit = 10);
  return await Book.find(query).sort(sort).skip(skip).limit(limit);
};

export let readSpecificBookService = async (id) => {
  return await Book.findById(id);
};
export let updateBookService = async (id, data) => {
  return await Book.findByIdAndUpdate(id, data, {
    new: true,
  });
};
export let deleteBookService = async (id) => {
  return await Book.findByIdAndDelete(id);
};
