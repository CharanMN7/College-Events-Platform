const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();

// Models
const Event = require("./schemas/EventModel");
const Admin = require("./schemas/AdminModel");

app.use(cors());
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

// JWT middleware to verify JWT token before proceeding with the operation
const verifyJWT = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Admin APIs

// gets details of all events including attendees info
app.post("/admin/all-events", verifyJWT, async (req, res) => {
  const allEvents = await Event.find({});
  res.send(allEvents);
});

// gets details of all event including attendees info
app.post("/admin/event/:id", verifyJWT, async (req, res) => {
  const eventId = req.params.id;
  const theEvent = await Event.findOne({ _id: eventId });

  res.send(theEvent);
});

// saves new event data to the events collection
app.post("/admin/create-event", verifyJWT, async (req, res) => {
  const eventData = req.body;
  const found = await Event.findOne({ title: eventData.title });

  if (!found) {
    const NewEvent = new Event({
      title: eventData.title,
      about: eventData.about,
      attendees: [],
      bannerUrl: eventData.bannerUrl,
      link: eventData.link,
      mode: eventData.mode,
      rsvp: eventData.rsvp,
      shortDesc: eventData.shortDesc,
      tag: eventData.tag,
      where: eventData.where,
      date: eventData.date,
    });
    await NewEvent.save();
  } else {
    res.send(`${eventData.title} already exists`);
  }
});

// updates the details of an existing event
app.post("/admin/event/:id/update", verifyJWT, async (req, res) => {});

// gets the jwt token upon successful admin user verification (not robust)
app.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;
  const dbUser = await Admin.findOne({ username: username });

  if (!dbUser) {
    return res.status(400).json({ message: "user not found" });
  }

  const isPasswordMatched = (await dbUser.password) === password;

  if (isPasswordMatched) {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET);
    return res.json({ message: "Login Successful", token });
  } else {
    return res.status(401).json({ message: "Wrong Password" });
  }
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
