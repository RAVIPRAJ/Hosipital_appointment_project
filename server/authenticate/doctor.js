const jwt = require('jsonwebtoken')
const Doctor = require('../models/doctor')

 
const AuthDoctor = async (req,res,next) =>{
   
    try{
 
    const token = req.cookies.jwtoken
    const TokenVerify = jwt.verify(token,"thisiskey")
    const doctor = await  Doctor.findOne({_id:TokenVerify._id,"tokens.token":token})
     
    req.doctor = doctor;
    req.UserID = doctor._id;
    req.docname = doctor.name;
    req.token = token
    next()

    } catch(error)  {
        res.status(401).json({message:"user not logged in "})
    } 
}

module.exports = AuthDoctor