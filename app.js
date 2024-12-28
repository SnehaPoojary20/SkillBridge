const express= require ("express");
const app = express();
const mongoose= require("mongoose");
// const ejsMate=require("ejs-mate");
const jobModels=require("./models/jobs.js")
const userModels=require("./models/user.js")
const jobRouter=require("./routes/jobRouter.js");
const userRouter=require("./routes/userRouter.js");
const bodyParser = require('body-parser');
const MongoURL="mongodb://127.0.0.1:27017/SkillBridge";

app.use(express.static('public'));


// Middleware
app.use(bodyParser.json()); // Parse JSON requests

// Database connection
// mongoose
//   .connect('mongodb://127.0.0.1:27017/SkillBridge', 
//   { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/jobs',  jobRouter); // Routes for job-related operations

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
