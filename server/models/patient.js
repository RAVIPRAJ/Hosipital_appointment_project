const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const patient_Schema = mongoose.Schema({
  name:{
    type:String,
    require:true 
  },
  email:{
    type:String,
    require:true 
  },
  password:{
    type:String,
    require:true 
  },
  phone:{
    type:String,
    require:true 

  },
  address:{
    type:String,
    require:true 

  },
  cpassword:{
    type:String,
    require:true 
  },
   tokens:[
    {
        token:{
            type:String,
            require:true 
        }
    }
   ]

})


patient_Schema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bycrypt.hash(this.password, 12)
    }
})

patient_Schema.methods.generateAuthToken = async function() {
    try{  
    let token =  jwt.sign({_id: this._id},"thisiskey")
    
    this.tokens = this.tokens.concat({token: token})
    console.log(token)
    await this.save();
   
    return token;

    } catch(err){
        console.log(err)
    }
   
 }

const Patient = mongoose.model("Patient",patient_Schema)

module.exports = Patient;
