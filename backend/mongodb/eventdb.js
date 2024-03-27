const mongoose=require('mongoose');
const{Schema}=mongoose;

const eventSchema =new Schema({
    Name:String,
    EventId:String,
    Date:String,
    Status:String,
    OneLiner:String,
    Description:String,
    Mode:String,
    Address:String,
    CludId:String,
    Speakers:{FirstName:String,LastName:String,Img:String,Title:String},
    Facilitators:{FirstName:String,LastName:String,Img:String,Title:String},
    Attendees:{FirstName:String,LastName:String,Email:String}
}); 

module.exports=eventSchema;