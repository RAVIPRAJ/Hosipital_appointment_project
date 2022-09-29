import React, { Component, useEffect, useState } from 'react';
import ASidebar from './ASidebar';

const Doctors_Details = () =>  {

    const [ddoctor, setDoctor] = useState([])
    
    const getDoctors = async () => {
        console.log("data is getting")
 
        try {
            
         const res =await fetch('/doctors',{
            method:"GET",
            headers:{
                'Content-type':'application/json'
            },
            
         })
         const DoctorData = await res.json()
         console.log(DoctorData)
         setDoctor(DoctorData)


        } catch (error) {

            console.log("data is getting")
            
        }


    }
    
useEffect(() => {
    getDoctors()


}, [])



        return (<div>
           <div className="container" >
            <div className="row">
            
            <div className="col-sm-3" >
            <ASidebar />
            </div>
            <div className="tableclass">
            <div className="col-sm-2"><p>
            <table>
           <tr>{ddoctor.map((doctors) => (<td className="table2" key={doctors._id} ><td>{doctors.name}</td><td>{doctors.email}</td><td>{doctors.specialist}</td><td>{doctors.phone}</td></td>) )}</tr>
           </table></p>
            </div>
            </div>
            <div>
             
            </div>

            </div>
           </div>
        </div>);
    }

 
export default Doctors_Details;