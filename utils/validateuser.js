const Joi=require("joi");
const express=require("express");
const userValidationSchema=require("../models/user.js");

// Validate User Function
const validateUser = (userData) => {
  const { error } = userValidationSchema.validate(userData, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return { isValid: false, errors: errorMessages };
  }
  return { isValid: true, errors: [] };
};

module.exports = validateUser;


