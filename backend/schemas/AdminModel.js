const { Schema, model } = require("mongoose");

const adminModel = Schema({
  username: String,
  password: String,
});

const Admin = model("Admin", adminModel);
module.exports = Admin;
