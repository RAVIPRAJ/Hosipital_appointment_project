const mongoose = require('mongoose')
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");



const Admin_Schema = mongoose.Schema({

 username:{
    type:String,
    require:true 
 },
 password:{
    type:String,
    require:true 
 },

 tokens:[{
       token:{
        type:String,
        require:true 
       }
 }]



})



Admin_Schema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bycrypt.hash(this.password, 12)
    }
})

Admin_Schema.methods.generateAuthToken = async function() {
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




const ADmin = mongoose.model("Admin",Admin_Schema)

module.exports = ADmin