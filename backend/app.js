const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Event = require("./schemas/eventSchema.js");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to the dB");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.listen(3000, () => console.log("Server running"));

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

// update a event
app.post("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body);
    if (!event) {
      return res.status(404).json({ message: "event not found" });
    }
    const updatedevent = await Event.findById(id);
    res.status(200).json(updatedevent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a product
app.delete("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: "event not found" });
    }
    res.status(200).json({ message: "event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///Rsvp API 

app.put("/rsvp/:id",async (req,res)=>{
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const event = await Event.findOne({ _id: id });
    if (!event) {
        return res.status(404).json({ message: 'Event not found' });
    }
    event.attendees = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    await event.save();
    return res.json({ message: 'RSVP successful', event });
})

/////authentication 
function authenticateToken(req, res, next) {
    let jwtToken
    const authHeader = req.headers['authorization']
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(' ')[1]
    }
    if (jwtToken === undefined) {
      res.status(401)
      res.send('Invalid JWT Token')
    } else {
      jwt.verify(jwtToken, 'MY_SECRET_TOKEN', async (error, payload) => {
        if (error) {
          res.status(401)
          res.send('Invalid JWT Token')
        } else {
          next()
        }
      })
    }
  }
  
module.exports = app;
