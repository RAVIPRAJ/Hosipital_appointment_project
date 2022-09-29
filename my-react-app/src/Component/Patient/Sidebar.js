import React, { useState, Component, useEffect } from 'react';

import './sidebar.css';
import { MdAccountCircle } from 'react-icons/md';



import {Link, NavLink} from 'react-router-dom';


const Sidebar = ()  =>  {

    let name,value

const  [userdata, setUserData] = useState({})

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
console.log(data)
console.log("hello")
setUserData(data)
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


   
     
        return (
            <div className='sidebarr'>
        <div className='container' >
        <div className='raw'>
        <div className='sidebarr'>
        <div className='col-md-3'  >
        <h1 className="mdicon" ><MdAccountCircle /></h1>
        <h1 className="namethings">{userdata.name}</h1>
        <Link className="sidebartext" to="/Appointment">APPOINTMENT</Link><br></br>
        <Link className="sidebartext" to="/Appoint_Status">STATUS</Link>
        </div>
        </div>
        </div>
        </div>


        </div>


        );
    
}
 
export default Sidebar;
