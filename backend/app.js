const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const path = require("path");
const dbPath = path.join(__dirname);
module.exports = app;
