import React, { Component } from 'react';
import DSidebar from './DSidebar';
import {Routes,Route,BrowserRouter} from 'react-router-dom';


import 'bootstrap'

class Doc_dashboard extends Component {
    state = {  } 
    render() { 
        return (<div className="container">

               <div className='row'>

                  <div className='col-sm-3'>
                       <DSidebar />
                  </div>
                  
                  <h1>Doctor Dashboard</h1>
     
               </div>
           </div>




      


        );
    }
}
 
export default Doc_dashboard;