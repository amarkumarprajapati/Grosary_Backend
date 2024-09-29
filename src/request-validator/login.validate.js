const joi = require("joi");

const itemvalidatorschema = {
  login: joi.object({
    phonenumber: joi.object().optional(),
    otp: joi.object.optional(),
  }),
};

module.exports = itemvalidatorschema;
