import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Appoint_Status from './appointment_status';
import './pdashboard.css'
import 'bootstrap'
import '../Home.css'

const Appointment = () => {
  
    let name,value,userValue;

    const [user, setUser  ] = useState({
     name:"",email:"",DoctorName:"",patientName:"",date:"",statuss:""
    })
 
 
    const handleInput = (e) =>{
     name = e.target.name;
     value = e.target.value
     setUser({...user,[name]:value})
    }



    const [docDATA, setDoc] = useState([])

const getDocsData = async () => {

  try {
    
    
    const res = await fetch('/all_doctors',{
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      }
    })
    const datas  = await res.json()
    setDoc(datas)
    console.log(datas)


  } catch (error) {
    
  }



} 







    const callbackData = async () => {

        try {
            
        
    
    const res = await fetch("/get_patient_data",{
        method:'GET',
        headers: {
            "Content-type":"application-json" 
        }
    } );
    
    const data = await res.json()
    console.log(data)
    console.log("hello")
    setUser(data)
    if(!res.status === 200){
        const error = new Error(res.Error);
        throw error
    }
    
    
    
    }
    
     catch (error) {
            console.log(error)
    }
    }
    
    
    
    useEffect(() => {
    callbackData();
    console.log("data getting")
    
    
    
    }, [] )


    const handleChange = event => {
        name = event.target.name;
        console.log(name)
     value = event.target.value
     console.log(value)
     setUser({...user,[name]:value})
      };

    useEffect(() => {

        getDocsData() 
        
        },[] )
    
 
 
   const PostData = async(e) =>{
    try {
        
   
     e.preventDefault()
     const {name,email, DoctorName, phone,patientName,date,message} = user 
     
     const res = await fetch('/create_appointment',{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
           name,email,phone, DoctorName,patientName,date,message
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

    } catch (error) {
        console.log(error)
    }
    
    }
 
 
   


    
        return (
        
         <div className="areaColor">
        <div className="container">


               <div className="row">
                 
                  <div className="col-sm-3">
                  
                       <Sidebar />
                
                  
                  </div>
                  <div className="col-sm-6" >
                  <div className="formClass">
                   <h2 className="textform" > Appointment form </h2>
                    <form method="POST" >
            
                         <input type="text" className="inputTop" name="name" value={user.name} onChange={handleInput}  placeholder='name' ></input><br></br>
                         <input type="text" className="inputClass"  name="email" value={user.email} onChange={handleInput}   placeholder='email' ></input><br></br>
                         <input type="text" className="inputClass"  name="phone" value={user.phone} onChange={handleInput}   placeholder='phone' ></input><br></br>
                         <div class="wrapper">
                         <select  onChange={handleChange} name="DoctorName" className="scroll"> {docDATA.map((names) => ( <option className="scrollbar" value={names.name}  >{names.name}</option>   ) )  }</select>
                         </div>
                         <input type="text" className="inputClass" name="DoctorName" value={user.DoctorName} onChange={handleInput}  placeholder='DoctorName'></input><br></br>
                         <input type="text" className="inputClass" name="patientName" value={user.patientName} onChange={handleInput}  placeholder='patientName' ></input><br></br>
                         <input type="text" className="inputClass" name="date" value={user.date} onChange={handleInput}  placeholder='date'></input><br></br>
                         <input type="text" className="inputClass" name="message" value={user.message} onChange={handleInput}  placeholder='message'></input><br></br>
                         <button type="submit" className="submitButton" onClick={PostData} >SUBMIT </button>
           
                        
                   </form>
   

                   </div>


                  </div>
                  
     
               </div>
           </div>



</div>
      


        );
    }

 
export default Appointment;




