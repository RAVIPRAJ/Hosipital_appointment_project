import React, { Component, useEffect, useState } from 'react';
import 'bootstrap'
import DSidebar from './DSidebar';
import { Link } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';
import './doc.css'
import { Event, event } from 'jquery';

const Appointment = () => {

    let name,value
   

const [appoint, setAppoint] = useState([]);
const [doctor, setDoctor] = useState({});
const [] = useState();

const [datam, setDatas] = useState({})




const clickFunction = (datam) => {
    setDatas(datam)
    console.log(datam)
}





const getDoctorData = async () => {


const req = await fetch('/get_doctor_data',{
    method:'GET',
    headers:{
        "Content-Type": "application-json"
    },

})

const datas = await req.json()


setDoctor(datas)
console.log(req.status)
if(req.status !== 400){
    console.log("error")
}



} 


async function confirmAppointment(event,id){

    try {
        console.log("hello confirm")
        event.preventDefault()
        const statuss = "confirm"
        const res = fetch(`update_appointment/${id}`,{
        method:'PUT',
        headers:{
            
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            statuss
        })
      })
    
      const data = await res.json()
      console.log(data)
    
    
     } catch (error) {
        console.log("error is done", error)
     }
 } 


    async function removeItem(id) {
        console.log(id)

    }






const handleInput = (e) => {
name = e.target.name
value = e.target.value
setDoctor({...doctor,[name]:value})


}


const docname = doctor.name
console.log(docname)

const getUserData = async (docname) => {

try {
    

    
const status = "pending"
const res = await fetch(`/appointment/${docname}/${status}`,{
    method: 'GET',
    headers: {
        'Content-Type': 'application-json'
    }
    
})

const datas = await res.json()
setAppoint(datas)
console.log(datas)

if(res.status !== 200){
    console.log(res.status)
    console.log('error')
}
else {
    
}

} catch (error) {
    console.log(error)
}




}

useEffect(() => {
getDoctorData()
},[] )

const hanleSubmit = (e) => {
    window.alert("submitted")
}

useEffect(() => {
    
        getUserData(docname)
    }
   
    ,[docname] )




   
        return (<div className="container">

               <div className='row'>

                  <div className='col-sm-3'>
                       <DSidebar />
                  </div>
                  <div className='col-sm-6'>
                  <form>
                 
                 
                  <div className="tableClass">
                  
                  <table>
                 
                  
                  <p>
                  <tr>{appoint.map((appoints)  => ( <td className="tdclass" key={appoints.id}   > 
                   <td> {appoints.name}</td> <td>{appoints.patientName}</td> <td>{appoints.email}</td>  
                   <td>{appoints.phone}</td> <td>{appoints.date}</td> <td>{appoints.statuss}</td> 
                   
                   <button value={appoints._id}  onClick={(event) => confirmAppointment(event, appoints._id)}>confirm</button> </td>
                    ))      } </tr>
                  </p>
                  </table>
                  </div>
                  </form>  
                  </div>
                  
                 
     
               </div>
           </div>




      


        );
    }

 
export default Appointment;




