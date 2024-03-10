import Joi from "joi";

let bookValidation = Joi.object().keys({
  name:Joi.string().required(),
  author:Joi.string().required(),
  price:Joi.number().required(),
  isAvailable:Joi.boolean().required()
})

  .unknown(true);
export default bookValidation;
