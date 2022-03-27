"use strict";

const Boom = require("boom");
const Joi = require("joi");

module.exports = {
  method: "POST",
  path: "/api/v1/add",
  config: {
    handler: async (req, h) => {
       return req.payload.a + req.payload.b
    },
    validate: {
      payload: {
        a: Joi.number().required(),
        b: Joi.number().required(),
      },
    },
  },
};
