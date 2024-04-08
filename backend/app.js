const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
const Login = require("./schemas/loginSchema");

app.use(express.json());

// default home route
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection failed");
  });

const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

module.exports = app;
