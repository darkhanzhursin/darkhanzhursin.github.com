const express = require("express");
const app = express();

// Define your errorHandler middleware function
const errorHandler = (err, req, res, next) => {
  // Check if the error is a known error with a status code
  if (err.statusCode) {
    console.log("here");
    res.status(err.statusCode).json({ error: err.message });
  } else {
    // If it's an unknown error, respond with a generic 500 error
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

app.use(errorHandler);

module.exports = errorHandler;
