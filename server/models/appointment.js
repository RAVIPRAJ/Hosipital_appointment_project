const mongoose = require('mongoose');

const Appointment_Schema = mongoose.Schema({
 
  phone:{
    type:String,
    require:true 
   },
  name:{
    type:String,
    require:true 
  },
  statuss:{
    type:String,
    require:true 
  },
  message:{
    type:String,
    require:true 
  },
  DoctorName:{
    type:String,
    require:true 
  },
  email:{
    type:String,
    require:true 
  },
  patientName:{
    type:String,
    require:true 
  },
  date:{
    type:String,
    require:true 
  },


})

const Appointment = mongoose.model("Appointment",Appointment_Schema)
module.exports = Appointment;