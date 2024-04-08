const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
const Login = require("./schemas/loginSchema");

app.use(express.json());

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const dbUser = await Login.findOne({ username });

    if (!dbUser) {
      return res.status(400).json({ message: "user not found" });
    }

    const isPasswordMatched = (await dbUser.password) === password;

    if (isPasswordMatched) {
      const token = jwt.sign({ username: username }, "zxcvbnmasdfghjkl");
      return res.json({ message: "Login successful", token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.send(error);
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

//this api gets all the events from db(admin)
app.get("/events", async (req, res) => {
  try {
    const event = await Event.find({});
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// gets id-specified event from db (admin)
app.get("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// creates an event (admin)
app.put("/create-event", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//this api creates an event(admin)
app.post("/api/events", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/rsvp/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const event = await Event.findOne({ _id: id });
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  event.attendees = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  await event.save();
  return res.json({ message: "RSVP successful", event });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
