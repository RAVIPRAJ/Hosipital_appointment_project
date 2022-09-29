import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../Css/UserRe.css';
import './Slider.css'

const UserRegister = () => {


   let name,value;

   const [user, setUser  ] = useState({
    name:"",email:"",address:"",phone:"",password:"",cpassword:""
   })


   const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value
    setUser({...user,[name]:value})
   }


  const PostData = async(e) =>{
    e.preventDefault()
    const {name,email,address, phone,password,cpassword} = user 

   const res = await fetch('/register_patient',{
    method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name,email,address, phone,password,cpassword 
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

      <h1 className="text-center">Patient Register</h1>
      
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
              <input className="form-control" type="text"  name="address" value={user.address} onChange={handleInput}  id="password" required/>
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
          <div className="form-group ">
              <label className="form-label" for="password">confirm password</label>
              <input className="form-control" type="password" name="cpassword" value={user.cpassword} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          




          <input className="btn btn-success w-100" type="submit" onClick={PostData} />
      </form>

  </div>

</body>  )


}

export default UserRegister;