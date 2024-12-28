const express = require("express");
const router = express.Router();
const validateUser = require("../utils/validateuser.js");
const User = require("../models/user.js");

// Route: Create a Job
router.post('/', async (req, res) => {
  const { isValid, errors } = validateJob(req.body);

  if (!isValid) {
    return res.status(400).json({ errors });
  }

  try {
    const { title, description, company, location, jobType, salary, skillsRequired, postedBy } = req.body;

    const newJob = new Job({
      title,
      description,
      company,
      location,
      jobType,
      salary,
      skillsRequired,
      postedBy,
    });

    const savedJob = await newJob.save();
    res.status(201).json({ message: 'Job created successfully', job: savedJob });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
