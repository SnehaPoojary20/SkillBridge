const express = require("express");
const mongoose=require("mongoose");
const User= require("../models/user.js");

const User = require('./models/User');

const createJobSeeker = async (req,res) => {
  try {
    const jobSeeker = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'securePassword123', // Note: Hash the password before saving in production
      role: 'job_seeker',
      resume: 'https://example.com/resumes/john-doe.pdf',
      skills: ['JavaScript', 'React', 'Node.js'],
    });

    const savedUser = await jobSeeker.save();
    console.log('Job Seeker created:', savedUser);
  } catch (error) {
    console.error('Error creating job seeker:', error.message);
  }
};

createJobSeeker();

const createHiringPerson = async (req,res) => {
    try {
      const hiringPerson = new User({
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'securePassword123', // Note: Hash the password before saving in production
        role: 'hiring_person',
        companyName: 'Tech Innovators Inc.',
        companyWebsite: 'https://techinnovators.com',
      });
  
      const savedUser = await hiringPerson.save();
      console.log('Hiring Person created:', savedUser);
    } catch (error) {
      console.error('Error creating hiring person:', error.message);
    }
  };
  
  createHiringPerson();


// const validateUser = require('../utils/validateUser');
// const User = require('../models/User');

// // Example User Registration Handler
// const registerUser = async (req, res) => {
//   const { isValid, errors } = validateUser(req.body);

//   if (!isValid) {
//     return res.status(400).json({ errors });
//   }

//   try {
//     const { name, email, password, role, resume, skills, companyName, companyWebsite } = req.body;

//     const newUser = new User({
//       name,
//       email,
//       password, // Remember to hash the password before saving
//       role,
//       ...(role === 'job_seeker' && { resume, skills }),
//       ...(role === 'hiring_person' && { companyName, companyWebsite }),
//     });

//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

  
