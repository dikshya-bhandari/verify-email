const validation = (schemaValidation) => {
  return (req, res, next) => {
    let data = schemaValidation.validate(req.body);
    let error = data.error;
    if (error) {
      console.log(error);
      res.json({
        success: false,
        message: error.details[0].message,
      });
    } else {
      next();
    }
  };
};
export default validation;
