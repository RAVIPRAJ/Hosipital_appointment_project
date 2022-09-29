import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../Css/UserRe.css';
import './Slider.css'

const Admin_login = () => {


   let name,value;

   const [user, setUser  ] = useState({
    username:"",password:""
   })


   const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value
    setUser({...user,[name]:value})
   }


  const PostData = async(e) =>{
    e.preventDefault()
    const { username, password } = user 

   const res = await fetch('/admin_login',{
    method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        username, password 
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

      <h1 className="text-center">Admin Login</h1>
      
      <form method='POST' className="needs-validation">
          <div className="form-group validation">
              <label className="form-label" for="name">Name </label>
              <input className="form-control" type="name" name="username" value={user.username} id="email" onChange={handleInput}   required/>
              <div className="invalid-feedback">
                  Please enter your name
              </div>
          </div>
          <div className="form-group ">
              <label className="form-label" for="password">password</label>
              <input className="form-control" type="email"  name="password" value={user.password} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          
          <input className="btn btn-success w-100" type="submit" onClick={PostData} />
      </form>

  </div>

</body>  )


}

export default Admin_l;