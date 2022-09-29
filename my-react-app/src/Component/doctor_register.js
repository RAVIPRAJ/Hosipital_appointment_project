import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../Css/UserRe.css';
import './Slider.css'

const DoctorRegister = () => {


   let name,value;

   const [user, setUser  ] = useState({
    name:"",email:"",specialist:"",password:"",phone:""
   })


   const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value
    setUser({...user,[name]:value})
   }


  const PostData = async(e) =>{
    e.preventDefault()
    const {name,email,specialist,password,phone} = user 

   const res = await fetch('/register_doctor',{
    method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name,email,specialist,password,phone
    })
   })

    
    const data = await res.json();
    console.log(data)
    if(res.status===422 || !data){
        console.log("invalid registration");
        window.alert("form is not submitted");

    }
    else {
        console.log("register successfully");
        window.alert("form is submitted");
    }



  }






  return(  <body className='bbody'>

  <div className="login">

      <h1 className="text-center">Patient Login</h1>
      
      <form method='POST' className="needs-validation">
          <div className="form-group validation">
              <label className="form-label" for="name">Name </label>
              <input className="form-control" type="name" name="name" value={user.name} id="email" onChange={handleInput}   required/>
              <div className="invalid-feedback">
                  Please enter your name
              </div>
          </div>
          <div className="form-group ">
              <label className="form-label" for="password">Email</label>
              <input className="form-control" type="email"  name="email" value={user.email} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          <div className="form-group ">
              <label className="form-label" for="password">address</label>
              <input className="form-control" type="text"  name="specialist" value={user.specialist} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          <div className="form-group ">
              <label className="form-label" for="password">phone</label>
              <input className="form-control" type="phone" name="phone"  value={user.phone} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          <div className="form-group ">
              <label className="form-label" for="password">Password</label>
              <input className="form-control" type="password" name="password" value={user.password} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          
       
          




          <input className="btn btn-success w-100" type="submit" onClick={PostData} />
      </form>

  </div>

</body>  )


}

export default DoctorRegister;