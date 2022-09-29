const express = require('express')
const Patient = require('../models/patient')
const router = express.Router()
const cookieParser = require('cookie-Parser');
const Doctor = require('../models/doctor');
const Appointment = require('../models/appointment');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const ADmin = require('../models/admin');
const Authentication = require('../authenticate/authenticate');
const AuthADMIN = require('../authenticate/admin');
const AuthDoctor = require('../authenticate/doctor');
const Message = require('../models/message');

router.use(cookieParser());

router.get('/Hello',async (req,res) => {
  
    res.send("hello router")

} )

router.post('/register_patient',async (req,res)=>{
 const {name,email,address, phone,password,cpassword} = req.body;
 if(password !== cpassword){
    res.status(400).send({error:"password and confirm password not equal"})
 }
 Patient.findOne({email: email}).then((userExit) => {
    if(userExit){
        return res.status(422).json({error:"email already exist"})
    }

  const patient = new Patient({name, email, phone, address, password, cpassword});

  patient.save().then(() => {
    res.status(201).json({message: "patient created"});

  }).catch(err => {console.log(err);});
 })
} )




router.post('/admin_register',async (req,res)=>{
    const {username,password} = req.body;
    
    ADmin.findOne({username}).then((userExit) => {
       if(userExit){
           return res.status(422).json({error:"email already exist"})
       }
   
     const admin = new ADmin({username,password});
   
     admin.save().then(() => {
       res.status(201).json({message: "admin create"});
   
     }).catch(err => {console.log(err);});
    })
   } )





   router.post("/admin_login", async (req, res) => {
    const { username, password } = req.body;
  
    const admin = await ADmin.findOne({ username });
   
    if (!admin) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, admin.password)) {
  
      //const token = jwt.sign({ email: user.email }, JWT_SECRET);

      const token =await admin.generateAuthToken();
      
      res.cookie("jwtoken",token,{
        expires: new Date(Date.now() + 22222000000),
        httpOnly:true
      })


      if (res.status(201)) {
        return res.json({ status: "admin logged in", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });


router.post("/message",async (req,res) =>{
  const {email,message} = req.body;
  const messages = Message({email,message})
  messages.save().then(()=>{
    res.status(201).json({message:"message is created"})
  }).catch((error)=>{
    res.status(400).json({message:"error in message"})
  })

} )




router.post('/register_doctor',async (req,res)=>{
    const {name,email,specialist,password,phone} = req.body;
    Doctor.findOne({email: email}).then((userExit) => {
       if(userExit){
           return res.status(422).json({error:"email already exist"})
       }
   
     const doctor = new Doctor({name, email, phone, specialist, password });
   
     doctor.save().then(() => {
       res.status(201).json({message: "Doctor created"});
   
     }).catch(err => {console.log(err);});
    })
   
} )


router.post('/create_appointment',async (req,res)=>{
    const {name,email,phone, DoctorName,patientName,date,message } = req.body;

    const statuss = "pending"
    Appointment.findOne({email: email}).then(() => {
      
   
     const appoint = new Appointment({name,email, phone, DoctorName,patientName,date,statuss,message });
   
     appoint.save().then(() => {
       res.status(201).json({message: "Appointment created"});
   
     }).catch(err => {console.log(err);});
    })
   
} )




router.put("/update_appointment/:id", (req, res) => {
        let updates = req.body //we set a variable equal to the entire req.body
        Appointment.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
      })


 router.get("/appointment/:id", (req, res) => {
        Appointment.find({ email: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
      })



      router.get("/doctors",AuthADMIN , (req, res) => {
        Doctor.find({})
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
      })




      router.get("/all_doctors" , (req, res) => {
        Doctor.find({},{name:1,specialist:1})
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
      })



      router.get("/appointment/:id/:status", (req, res) => {
        Appointment.find({ DoctorName: req.params.id, statuss: req.params.status  })
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
      })




      router.get("/appointment/:id/:status", (req, res) => {
        Appointment.find({ DoctorName: req.params.id, statuss: req.params.status  })
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err))
      })



router.post("/Doctor_login", async (req, res) => {
    const { email, password } = req.body;
  
    const doctor = await Doctor.findOne({ email });
   
    if (!doctor) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, doctor.password)) {
  
      //const token = jwt.sign({ email: user.email }, JWT_SECRET);

      const token =await doctor.generateAuthToken();
      
      res.cookie("jwtoken",token,{
        expires: new Date(Date.now() + 22222000000),
        httpOnly:true
      })


      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });




  router.post("/patient", async (req, res) => {
    const { email, password } = req.body;
  
    const patient = await Patient.findOne({ email });
   
    if (!patient) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, patient.password)) {
  
      //const token = jwt.sign({ email: user.email }, JWT_SECRET);

      const token =await patient.generateAuthToken();
      
      res.cookie("jwtoken",token,{
        expires: new Date(Date.now() + 22222000000),
        httpOnly:true
      })


      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });


  router.get('/get_patient_data', Authentication , (req, res) => {
    res.send(req.patient)
  })

  router.get('/get_Admin_data', AuthADMIN , (req, res) => {
    res.send(req.admin)
  })

  router.get('/get_doctor_data', AuthDoctor , (req, res) => {
    res.send(req.doctor)
  })


  router.get('/get_appointments/:status', AuthDoctor , (req, res) => {
  Appointment.find({DoctorName:req.docname,statuss: req.params.status})
  .then((data)=> res.json(data) )
  .catch((error) => res.json(error))


    
  })




router.post('/login_patient',async (req,res)=>{
 


} )


module.exports = router