const Joi = require('joi');

// Job Validation Schema
const jobValidationSchema = Joi.object({

  title: Joi.string().min(3).max(100).required().messages({
    'string.empty': 'Job title is required',
    'string.min': 'Job title must be at least 3 characters long',
    'string.max': 'Job title cannot exceed 100 characters',

  }),

  description: Joi.string().min(10).max(1000).required().messages({

    'string.empty': 'Job description is required',
    'string.min': 'Job description must be at least 10 characters long',
    'string.max': 'Job description cannot exceed 1000 characters',

  }),
  company: Joi.string().required().messages({
    
    'string.empty': 'Company name is required',
  }),
  location: Joi.string().required().messages({
    'string.empty': 'Location is required',
  }),
  jobType: Joi.string()
    .valid('full-time', 'part-time', 'contract', 'freelance', 'internship')
    .required()
    .messages({
      'string.empty': 'Job type is required',
      'any.only': 'Job type must be one of: full-time, part-time, contract, freelance, internship',
    }),
  salary: Joi.number().integer().min(0).optional().messages({
    'number.base': 'Salary must be a number',
    'number.min': 'Salary cannot be negative',
  }),
  skillsRequired: Joi.array().items(Joi.string()).required().messages({
    'array.base': 'Skills required must be an array of strings',
    'array.includes': 'Each skill must be a valid string',
  }),
  postedBy: Joi.string().required().messages({
    'string.empty': 'PostedBy (user ID) is required',
  }),
});

module.exports = jobValidationSchema;

