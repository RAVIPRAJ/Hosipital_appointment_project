const jwt = require('jsonwebtoken')
const Patient = require('../models/patient')
 
const Authentication = async (req,res,next) =>{
   
    try{
 
    const token = req.cookies.jwtoken
    const TokenVerify = jwt.verify(token,"thisiskey")
    const patient = await  Patient.findOne({_id:TokenVerify._id,"tokens.token":token})
     
    req.patient = patient;
    req.UserID = patient._id;
    req.token = token
    next()

    } catch(error)  {
        res.status(401).json({message:"user not logged in "})
    } 
}

module.exports = Authentication