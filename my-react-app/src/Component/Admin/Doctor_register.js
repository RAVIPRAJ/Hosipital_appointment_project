import React, { useEffect, useState } from 'react';

import {Routes,Route,BrowserRouter} from 'react-router-dom';


import 'bootstrap'
import ASidebar from './ASidebar';
import './Asidebar.css'

const DoctorRegister = () => {
  
    let name,value;

    const [doctor, setDoctor  ] = useState({
     name:"",email:"",specialist:"",password:"",phone:""
    })
 
 
    const handleInput = (e) =>{
     name = e.target.name;
     value = e.target.value
     setDoctor({...doctor,[name]:value})
    }
 
 
   const PostData = async(e) =>{
     e.preventDefault()
     const {name,email,specialist,phone,  password} = doctor 
 
    const res = await fetch('/register_doctor',{
     method:"POST",
     headers:{
         "Content-type": "application/json"
     },
     body: JSON.stringify({
         name,email,specialist,phone, password
     })
    })
 
     
     const data = await res.json();
     console.log(data)
     if(res.status===422 || !data){
         console.log("invalid registration");
         window.alert("form is not submitted");
 
     }
     else {
         console.log("register successfully");
         window.alert("form is submitted");
     }
 
 
 
   }
 
 
 
 


    
        return (
        
         <div className="areaColor">
        <div className="container">


               <div className="row">
                 
                  <div className="col-sm-3">
                  
                       <ASidebar />
                
                  
                  </div>
                  <div className="col-sm-6" >
                  <div className="formClass">
                   <h2 className="textform" >Register Doctor </h2>
                    <form method="POST" >
            
                         <input type="text" className="inputTop" name="name" value={doctor.name} onChange={handleInput}  placeholder='name' ></input><br></br>
                         <input type="text" className="inputClass"  name="email" value={doctor.email} onChange={handleInput}   placeholder='email' ></input><br></br>
                         <input type="text" className="inputClass"  name="specialist" value={doctor.specialist} onChange={handleInput}   placeholder='specialist' ></input><br></br>
                         <input type="text" className="inputClass" name="phone" value={doctor.phone} onChange={handleInput}  placeholder='phone'></input><br></br>
                         <input type="text" className="inputClass" name="password" value={doctor.password} onChange={handleInput}  placeholder='password' ></input><br></br>
                         <button type="submit" className="submitButton" onClick={PostData} >SUBMIT </button>
           
                        
                   </form>
   

                   </div>


                  </div>
                  
     
               </div>
           </div>



</div>
      


        );
    }

 
export default DoctorRegister;




