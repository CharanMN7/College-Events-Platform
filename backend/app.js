const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.listen(3000);

//this api gets all the events from db(admin)
app.get('/api/event',async(req,res)=>{
    try{
        const events=await Event.find({});
        res.status(200).json(events);
    }catch(error){
        res.status(500).json({message:error.message});
    }

});
//this api gets id-specified event from db(admin)
app.get('/api/events/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const event=await Event.findById(id);
        res.status(200).json(event);
    }catch(error){
        res.status(500).json({message:error.message});
    }

});

//this api creates an event(admin)
app.post('/api/events',async (req,res)=>{
    //console.log(req.body);
    //res.send(req.body);
    try{
        const event=await Event.create(req.body);
        res.status(200).json(event);

    }catch(error){
        res.status(500).json({message:error.message});
    }
}
);






module.exports = app;
