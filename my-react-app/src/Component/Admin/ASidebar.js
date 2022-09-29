import React, { useState, Component, useEffect } from 'react';

import './Asidebar.css';
import { MdAccountCircle } from 'react-icons/md';



import {Link, NavLink} from 'react-router-dom';


const ASidebar = ()  =>  {

   
   
     
        return (
            <div className='sidebarr'>
        <div className='container' >
        <div className='raw'>
        <div className='sidebarr'>
        <div className='col-md-3'  >
        <h1 className="mdicon" ><MdAccountCircle /></h1>
        <h1 className="namethings">{}</h1>
        <Link className="sidebartext" to="/Doctor_create">Register Doctor</Link><br></br>
        <Link className="sidebartext" to="/Doctor_Details">ALL Doctor</Link>
        </div>
        </div>
        </div>
        </div>


        </div>


        );
    
}
 
export default ASidebar;
