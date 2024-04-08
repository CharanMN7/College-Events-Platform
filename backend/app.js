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
  const allEvents = await Event.find({});
  allEvents["attendees"] = [];
  res.send(allEvents);
});

// returns details of all events without attendees info
app.get("/event/:id", async (req, res) => {
  const eventId = req.params.id;
  const theEvent = await Event.findOne({ _id: eventId });
  theEvent["attendees"] = [];

  res.send(theEvent);
});

// saves attendee info to the event (puts the rsvp info into the attendees field of the event)
app.put("/event/:id/rsvp", async (req, res) => {
  const eventId = req.params.id;
  const attendee = req.body;

  query = { _id: eventId };
  update = { $addToSet: { attendees: attendee } };

  await Event.findOneAndUpdate(query, update);
  res.send("Done!");
});

// Admin APIs

// gets details of all events including attendees info
app.get("admin/all-events", async (req, res) => {});

// gets details of all event including attendees info
app.get("admin/event/:id", async (req, res) => {});

// saves new event data to the events collection
app.put("admin/create-event", async (req, res) => {});

// updates the details of an existing event
app.post("admin/event/:id/update", async (req, res) => {});

// gets the jwt token upon successful admin user verification (not robust)
app.get("/admin/login", async (req, res) => {});

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
