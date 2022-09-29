const jwt = require('jsonwebtoken')
const ADmin = require('../models/admin')
 
const AuthADMIN = async (req,res,next) =>{
   
    try{
 
    const token = req.cookies.jwtoken
    const TokenVerify = jwt.verify(token,"thisiskey")
    const admin = await  ADmin.findOne({_id:TokenVerify._id,"tokens.token":token})
     
    req.admin = admin;
    req.UserID = admin._id;
    req.token = token
    next()

    } catch(error)  {
        res.status(401).json({message:"user not logged in "})
    } 
}

module.exports = AuthADMIN