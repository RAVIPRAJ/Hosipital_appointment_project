import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from './Component/navbar';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import User_Login from './Component/User_Login';
import UserRegister from './Component/UserRegister';
import AdminLogin from './Component/Admin_login';
import Contact  from './Component/Concat';
import Home from './Component/Home';
import Footer from './Component/footer';
import Appointment from './Component/Patient/appointment';
import Doc_Panel from './Component/doc_panel';
import Admin_login from './Component/Admin_login';
import Sidebar from './Component/Patient/Sidebar';
import Pdashboard from './Component/Patient/Pdashboard';
import Appoint_Status from './Component/Patient/appointment_status';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import DSidebar from './Component/Doctor/DSidebar';
import Doc_dashboard from './Component/Doctor/Doc_dashboard';
import Doctor_Login from './Component/doctor_login';
import Appointments from './Component/Doctor/appointment';
import Pconfirm from './Component/Doctor/confirm';
import DoctorRegister from './Component/doctor_register';
import { FaBeer,CgProfile } from 'react-icons/fa';
import Admin_Panell from './Component/Admin/Admin';
import DoctorRegisterd from './Component/Admin/Doctor_register';
import Doctors_Details from './Component/Admin/Doctors';




class App extends Component {
  state = {  } 
  render() { 
    return (<div className='App'>
   <NavBar /> 
   
   <Routes>

     
   <Route exact path="/"  element={<Home />} />
      <Route path="/Login" element={<User_Login />} />
      <Route path="/Register" element={<UserRegister />} />
      <Route path="/Admin" element={<AdminLogin />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Pdashboard" element={<Pdashboard />} />
      <Route path="/Dpanel" element={<Doc_Panel />} />
      <Route path="/Alogin" element={<Admin_login />} />
      <Route path="/DSidebar" element={<DSidebar />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/confirm" element={<Pconfirm />} />
      <Route path="/Doc" element={<Doc_dashboard />} />
      <Route path="/Doc_login" element={<Doctor_Login   />} />
      <Route path="/Appointment" element={<Appointment />} />
      
      
      <Route path="/Appoint_Status" element={<Appoint_Status />} />
      <Route path="/adminn" element={<Admin_Panell />} />
      <Route path="/Doctor_create" element={<DoctorRegisterd />} />
      <Route path="/Doctor_Details" element={<Doctors_Details />} />



    </Routes>

    

    <Footer />

   
   
     
    </div>);
  }
}
 
export default App;
