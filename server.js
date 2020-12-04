// ========== Dependencies ==========
// require express, mongoose, logger, and path
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// ========== Express Setup ==========
// set up the port for express
const PORT = process.env.PORT || 3001;

// set up express
const app = express();

// body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// using morgan
app.use(logger("dev"));

// express.static to look for the public folder
app.use(express.static("public"));

// ========== Connect Mongoose to MongoDB ==========
// If deployed, use the deployed database.  Otherwise, use the local mongoHeadlines database.
// Connect to the Mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutSeed", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// ========== All Routes ==========
// ========== API routes ==========
// (use all api routes created in the 'routes' folder in this file)
// app.use(require("./routes/api"));
app.use(require("./routes"));

// ========== non-API routes ==========
// go to index.html when '/' is hit
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// go to exercise.html when '/exercise' is hit
app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

// go to the stats.html when '/stats' is hit
app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});

// ========== Listening for PORT ============
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
