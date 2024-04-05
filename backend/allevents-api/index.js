const express = require("express");
const mongoose = require("mongoose");
// const Event = require("./eventSchema.js");
//const dotenv = require("dotenv").config();

const app = express();
//middleware
app.use(express.json());
//app.use(express.urlencoded({encoded:false}));
//routes
//app.use("/api/products",productRoute);

// app.listen(3000, () => {
//   console.log("server running");
// });
// app.get("/", (req, res) => {
//   res.send("hello from node api");
// });

// app.get("/api/events", async (req, res) => {
//   try {
//     const event = await Event.find({});
//     res.status(200).json(event);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/events/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const event = await Event.findById(id);
//     res.status(200).json(event);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/events", async (req, res) => {
//   //console.log(req.body);
//   //res.send(req.body);
//   try {
//     const event = await Event.create(req.body);
//     res.status(200).json(event);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://charan:cherrythebest@incrediblemango.ha5o1tn.mongodb.net/?retryWrites=true&w=majority&appName=IncredibleMango",
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection failed");
  });

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
