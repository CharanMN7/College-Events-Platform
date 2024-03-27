const mongoose=require('mongoose');
const eventSchema = require('./eventdb');
const{Schema}=mongoose; 

const ClubSchema = new Schema ({
    clubId:String,
    name:String,
    oneLiner:String,
    description:String,
    bnner:String,//link
    organizers:{firstName:String,lastName:String,img:String,title:String},
    logo:String,//link
    allEvents:[
        eventSchema,
    ],
}); 

module.exports=ClubSchema;