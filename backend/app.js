const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
const Login = require("./schemas/AdminModel");

// Models
const Event = require("./schemas/EventModel");
const Admin = require("./schemas/AdminModel");

app.use(express.json());

// default home route
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Public APIs

// returns details of all events without attendees info
app.get("/all-events", async (req, res) => {
  try {
    const allEvents = await Event.find({});
    res.send(allEvents);
  } catch (err) {
    console.log(err);
  }
});

// returns details of all events without attendees info
app.get("/event/:id", async (req, res) => {});

// saves attendee info to the event (puts the rsvp info into the attendees field of the event)
app.put("/event/:id/rsvp", async (req, res) => {});

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
