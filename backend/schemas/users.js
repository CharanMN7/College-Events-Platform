const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
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
            type: date(),
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
    },
    
    {
        timestamps:true,
    }

);

const user=mongoose.model("user",UserSchema);
module.exports=user;