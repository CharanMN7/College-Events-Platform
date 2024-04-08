const { Schema, model } = require("mongoose");

const eventSchema = Schema({
  title: String,
  about: String,
  attendees: Array,
  bannerUrl: String,
  link: String,
  mode: String,
  rsvp: Boolean,
  shortDesc: String,
  tag: String,
  where: String,
  dat: String,
});

const Event = model("Event", eventSchema);
module.exports = Event;
