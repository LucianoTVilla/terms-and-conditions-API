const Joi = require('joi');

const validateAcceptance = (req, res, next) => {
  const schema = Joi.object({
    disclaimer_id: Joi.string().required(),
    user_id: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = validateAcceptance;