/*const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  eventId: String,
  date: Date,
  oneLiner: String,
  description: String,
  mode: String,
  eventVenue: String,
  clubName: String,
  attendees:[]
});

module.exports = eventSchema;*/





const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const eventSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter event name"],
        },
        eventid: {
            type: String,
            required: true,
            default: 0
        },
        date: {
            type:Date,
            required: true
        },
        oneliner: {
            type: String,
            required: false
        },
        description:{
          type: String,
          required:true
        },
        mode:{
          type:String,
          required:true

        },
        eventvenue:{
          type:String,
          required:true
        },
        clubname:{
          type:String,
          required:false
        },
        attendees:{
          type:Array,
          required:true
        }
    },
    {
        timestamps:true,
    }

);

const event=mongoose.model("event",eventSchema);
module.exports=event;