const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  eventId: String,
  date: Date,
  oneLiner: String,
  description: String,
  mode: String,
  eventVenue: String,
  clubId: String,
});

module.exports = eventSchema;
