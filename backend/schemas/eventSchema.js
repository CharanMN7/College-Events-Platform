const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  eventId: String,
  date: String,
  status: String,
  oneLiner: String,
  description: String,
  mode: String,
  address: String,
  cludId: String,
  speakers: { firstName: String, lastName: String, img: String, title: String },
  facilitators: {
    firstName: String,
    lastName: String,
    img: String,
    title: String,
  },
  attendees: { FirstName: String, LastName: String, Email: String },
});

module.exports = eventSchema;
