const express = require("express");
const mongoose = require("mongoose");
// const Event = require("./eventSchema.js");
//const dotenv = require("dotenv").config();

const app = express();
//middleware
app.use(express.json());

//update a product
app.put("/api/events/:id", async (req, res) => {
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
app.delete("/api/events/:id", async (req, res) => {
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
