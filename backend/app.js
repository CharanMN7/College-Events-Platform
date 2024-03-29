const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.listen(3000);

module.exports = app;
