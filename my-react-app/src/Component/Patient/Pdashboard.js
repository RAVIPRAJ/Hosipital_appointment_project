import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Appointment from './appointment';
import Appoint_Status from './appointment_status';
import 'bootstrap'

class Pdashboard extends Component {
    state = {  } 
    render() { 
        return (<div className="container">

               <div className='row'>

                  <div className='col-sm-3'>
                       <Sidebar />
                  </div>
                  <h1>hello appointment system</h1>
     
               </div>
           </div>




      


        );
    }
}
 
export default Pdashboard;