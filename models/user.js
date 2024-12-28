const Joi = require('joi');

// User Validation Schema
const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({

    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name cannot exceed 50 characters',

  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({

      'string.empty': 'Email is required',
      'string.email': 'Please provide a valid email address',

    }),

  password: Joi.string().min(6).required().messages({

    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',

  }),
  role: Joi.string().valid('job_seeker', 'hiring_person').required().messages({

    'string.empty': 'Role is required',
    'any.only': 'Role must be either job_seeker or hiring_person',

  }),
  // Conditional Validation for Job Seekers
  resume: Joi.string().uri().when('role', {

    is: 'job_seeker',
    then: Joi.required().messages({
      'string.empty': 'Resume URL is required for job seekers',
      'string.uri': 'Resume must be a valid URL',

    }),
    otherwise: Joi.optional(),
  }),
  skills: Joi.array().items(Joi.string()).when('role', {
    is: 'job_seeker',
    then: Joi.required().messages({
      'array.base': 'Skills must be an array of strings',
      'array.includes': 'Skills must include valid string entries',
    }),
    otherwise: Joi.optional(),
  }),

  // Conditional Validation for Hiring Persons
  companyName: Joi.string().when('role', {
    is: 'hiring_person',
    then: Joi.required().messages({
      'string.empty': 'Company name is required for hiring persons',
    }),
    otherwise: Joi.optional(),
  }),
  
  companyWebsite: Joi.string().uri().when('role', {
    is: 'hiring_person',
    then: Joi.required().messages({
      'string.empty': 'Company website is required for hiring persons',
      'string.uri': 'Company website must be a valid URL',
    }),
    otherwise: Joi.optional(),
  }),
});

module.exports=userValidationSchema;






