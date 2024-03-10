import Joi from "joi";

let studentValidation = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .min(3)
      .messages({
        "any.required": "name is required",
        "string.base": "name must be string",
        "string.min": "name must ne at least 3 characters",
        "string.max": "name must be at most 15 characters",
      })
      .allow(""),
    age: Joi.number()
      .required()
      //.min(18).max(60),
      .custom((value, msg) => {
        if (value >= 18) {
          return true;
        } else {
        }
        return msg.message("age must be greater than 18");
      })
      .messages({
        "any.required": "age is required",
        "number.base": "age must be number",
        "number.min": "age must be greater than 18",
        "number.max": "age must be less than 60",
      }),
    isMarried: Joi.boolean().required(),
    spouseName: Joi.when("isMarried", {
      is: true,
      then: Joi.string().required(),
      otherwise: Joi.string(),
    }),
    //if married=true =>spouseName=>required
    //if married=false =>spouseName=> not  required
    gender: Joi.string().required().valid("male", "female", "others").messages({
      "string.base": "gender must be string",
      "any.required": "gender must be required",
      "any.only": "gender must be male or female or others",
    }),
    email: Joi.string()
      .required()
      .custom((value, msg) => {
        let validEmail = value.match(
          /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
        );
        if (validEmail) {
          return true;
        } else {
          return msg.message("email is not valid");
        }
      }),
    password: Joi.string()
      .required()
      .custom((value, msg) => {
        let validPassword = value.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,15}$/
        );
        if (validPassword) {
          return true;
        } else {
          return msg.message(
            "password must contain one uppercase, one lowercase and one symbol, miniumn 8 characters and 15 maximum characters"
          );
        }
      }),
    phoneNumber: Joi.number().required(),
    roll: Joi.number().required(),
    dob: Joi.string().required(),
    location: Joi.object().keys({
      country: Joi.string().required(),
      exactLocation: Joi.string().required(),
    }),
    favTeacher: Joi.array().items(Joi.string().required()),
    favSubject: Joi.array().items(
      Joi.object().keys({
        bookName: Joi.string().required(),
        bookAuthor: Joi.string().required(),
      })
    ),
  })

  .unknown(true);
export default studentValidation;
