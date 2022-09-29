import React, { useState, Component } from 'react';


import {Link, NavLink} from 'react-router-dom';

import "./doc.css"

class DSidebar extends Component {
   
    render() { 
        return (
        <div className='container' >
        <div className='raw'>
        <div className='col-md-3'  >
        <div className="Docside">
        
        <Link className="docsidebar" to="/appointments">New Appoint</Link><br />
        <Link className="docsidebar" to="/confirm">confirm Appoint</Link>
        </div>
        </div>
       
        </div>



        </div>


        );
    }
}
 
export default DSidebar;
