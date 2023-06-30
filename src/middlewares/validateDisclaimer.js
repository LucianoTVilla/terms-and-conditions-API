const Joi = require('joi');

const validateDisclaimer = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    text: Joi.string().required(),
    version: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = validateDisclaimer;