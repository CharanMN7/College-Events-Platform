const mongoose=require('mongoose');
const eventSchema = require('./eventdb');
const{Schema}=mongoose; 

const ClubSchema = new Schema ({
    clubId:String,
    name:String,
    oneLiner:String,
    description:String,
    bnner:String,//link
    organizers:{FirstName:String,LastName:String,Img:String,Title:String},
    logo:String,//link
    allEvents:[
        eventSchema,
    ],
}); 

module.exports:ClubSchema;