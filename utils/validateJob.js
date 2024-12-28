const Joi=require("joi");
const express=require("express");
const userValidationSchema=require("../models/jobs.js");

const validateJob = (jobData) => {
    const { error } = jobValidationSchema.validate(jobData, { abortEarly: false });
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      return { isValid: false, errors: errorMessages };
    }
    return { isValid: true, errors: [] };
  };
  
  module.exports = validateJob;
  