import React from 'react';
import '../App.css'

const Footer = () => {

  return(
 <footer className='text-white bg-primary' >

  <div className='container'>
    <div className='row'>
        <div className='col-sm-5'><h5>About us</h5>
        <p>we are provide best hospital service and give you best service we are provide 
        best hospital service and give you best service</p>
        </div>
        <div  className='col-sm-3'><h5>Service</h5>
        <li><a className='nav-link' href='#' >opd</a></li>
        
        
        </div>
        <div className='col-sm-3'><h5>Address</h5></div>
    </div>
  </div>


 </footer>
  );


}

export default Footer;