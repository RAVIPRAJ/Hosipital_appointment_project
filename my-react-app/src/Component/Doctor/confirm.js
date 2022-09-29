import React, { Component, useEffect, useState } from 'react';

import {Routes,Route,BrowserRouter} from 'react-router-dom';
import './doc.css'
import 'bootstrap'
import DSidebar from './DSidebar';

const Pconfirm = () =>  {

    const [doctor, setDoctor] = useState({});
    const [appoint, setAppoint] = useState([]);
     
    const getDoctorData = async () => {


        const req = await fetch('/get_doctor_data',{
            method:'GET',
            headers:{
                "Content-Type": "application/json"
            },
        
        })
        
        const datas = await req.json()
        
        
        setDoctor(datas)
        console.log(req.status)
        if(req.status !== 400){
            console.log("error")
        }
        
        
        
        } 
 
   

     const  getAppointment = async () => {
         const Status = "confirm"
         const res =await fetch(`/get_appointments/${Status}`,{
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },


         })

         const AppointData =await res.json()
         setAppoint(AppointData)
         console.log(AppointData)


     }


        useEffect(() => {
            getDoctorData()
            },[] )


        useEffect(() => {
                getAppointment()
                },[] )
            




   
        return (<div className="container">

               <div className='row'>

                  <div className='col-sm-3'>
                       <DSidebar />
                  </div>
                  <div className="col-sm-3" >
                  
                  <div className="tableclass">
                  
                  <table>
                 
                  
                  <p>
                  <tr>{appoint.map((appoints)  => ( <td className="tdclass" key={appoints.id}   ><td> {appoints.name}</td> <td>{appoints.patientName}</td> <td>{appoints.email}</td>  <td>{appoints.phone}</td> <td>{appoints.date}</td>  <td>{appoints.statuss}</td>   {appoints.message}   </td> ))      } </tr>
                  </p>
                  </table> 
                  </div>
                  </div>
                 
     
               </div>
           </div>




      


        );
    
}
 
export default Pconfirm;






