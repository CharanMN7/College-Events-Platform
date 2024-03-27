const mongoose=require('mongoose');
const{Schema}=mongoose;

const userSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    eventAttended:{},
    profilePic:String,
    twitter: String,
    linkedIn:String,
    instagram:String,
    website:String,
    facebook:String,
    gitHub:String,
    bio:String
});

module.exports=userSchema;