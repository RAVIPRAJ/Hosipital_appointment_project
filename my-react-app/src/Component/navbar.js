import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'


const NavBar = () => {

   return(<nav className="navbar navbar-expand-lg text-white bg-primary">
   <a className="navbar-brand" href="#">Navbar</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
 
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ms-auto">
       
      


     <li className="nav-item">
        
        <NavLink className="nav-link text-white" to="/">Home</NavLink>
      </li>
       <li className="nav-item">
        
         <Link className="nav-link text-white" to="/Register">Register</Link>
       </li>
       <li className="nav-item">
         
         <NavLink className="nav-link text-white" to="/Login">Login</NavLink>
       </li>
       <li className="nav-item">
         
         <NavLink className="nav-link text-white" to="/Contact">Contact</NavLink>
       </li>
       <li className="nav-item">
        
        <NavLink className="nav-link text-white" to="/Doc_login">Doctor Login</NavLink>
      </li>


       <li className="nav-item">
        
        <NavLink className="nav-link text-white" to="/Admin">Admin Login</NavLink>
      </li>
      
       
      
    
      
     </ul>
    
   </div>
 </nav>)




}


export default NavBar;
