import React, { Component, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Appointment from './appointment';
import 'bootstrap'
import './pdashboard.css'

const Appoint_Status = () =>  {
    

   
let name,value,dataLoading
const [number, setValue] = useState("hello google");
const  [userdata, setUserData] = useState({})
const  [userAppoint, setAppoint] = useState([])

const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userdata,[name]:value});
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

console.log("hello")
setUserData(data)
if(!res.status === 200){
    const error = new Error(res.Error);
    throw error
}



} catch (error) {
        console.log(error)
}

}

const userEmail = userdata.email

console.log("printing data",userEmail)




  

const callbackAppoint = async (userEmail) => {
    

    try {
        

    

const ress = await fetch(`/appointment/${userEmail}`,{
    method:'GET',
    headers: {
        "Content-type":"application-json" 
    }
} );
console.log(ress.headers)
setValue(("data loaded"))
const data = await ress.json()
console.log(userEmail)
console.log("appoint")
setAppoint(data)
if(!ress.status === 200){
    const error = new Error(ress.Error);
    throw error
}



}

 catch (error) {
        console.log(error)
}
}




useEffect(() => {
callbackData();




}, [] )


useEffect(() => {
  
   
   setTimeout(function(){
    callbackAppoint(userEmail)
},1000)
    




}, [userEmail] )








        return (<div className="container">

               <div className='row'>
               <div className='col-sm-3'>
               <Sidebar />
               </div>
               <div className='col-sm-9'>
               <div className="userTables">
               
               
             
               <h4> {userAppoint.map((datas)=>  ( <td  className="userData"  key={datas.id} >    <td className="userdata">{datas.patientName }</td>      <td className="userdata"> {datas.email}</td>     <td  className="userdata">{datas.DoctorName} </td>   <td  className="userdata">{datas.date} </td>     <td  className="userdata">{datas.statuss} </td> </td> ) )  }  </h4>
              
               </div>

                
                      
                  </div>
                  
     
               </div>
           </div>




      


        );
    }

 
export default Appoint_Status;






