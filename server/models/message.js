const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const Message_Schema = mongoose.Schema({
 
    
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }

}) 



   
 

const Message = mongoose.model("message",Message_Schema);

module.exports = Message;