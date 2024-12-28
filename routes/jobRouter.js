const express = require("express");
const router = express.Router();
const validateJob = require("../utils/validateJob");
const Job = require("../models/jobs.js");

router.get('/', (req, res) => {
  res.json({ message: 'Jobs endpoint is working!' });
});

// Route: Create a Job
// router.post('/', async (req, res) => {
//   const { isValid, errors } = validateJob(req.body);

//   if (!isValid) {
//     return res.status(400).json({ errors });
//   }

//   try {
//     const { title, description, company, location, jobType, salary, skillsRequired, postedBy } = req.body;

//     const newJob = new Job({
//       title,
//       description,
//       company,
//       location,
//       jobType,
//       salary,
//       skillsRequired,
//       postedBy,
//     });

//     const savedJob = await newJob.save();
//     res.status(201).json({ message: 'Job created successfully', job: savedJob });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router