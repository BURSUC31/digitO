const Joi = require("joi");
module.exports.productSchema = Joi.object({
  product: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().required(),
  }).required(),
});
