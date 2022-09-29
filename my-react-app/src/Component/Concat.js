import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../Css/UserRe.css';
import './Slider.css'

const Contact = () => {


   let name,value;

   const [user, setUser  ] = useState({
    email:"", message:""
   })


   const handleInput = (e) =>{
    name = e.target.name;
    value = e.target.value
    setUser({...user,[name]:value})
   }


  const PostData = async(e) =>{
    e.preventDefault()
    const {email,message} = user 

   const res = await fetch('/message',{
    method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        email,message
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

      <h1 className="text-center">Contact</h1>
      
      <form method='POST' className="needs-validation">
        
          <div className="form-group ">
              <label className="form-label" for="password">Email</label>
              <input className="form-control" type="email"  name="email" value={user.email} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          <div className="form-group ">
              <label className="form-label" for="password">message</label>
              <input className="form-control" type="password" name="message" value={user.message} onChange={handleInput}  id="password" required/>
              <div className="invalid-feedback">
                  Please enter your password
              </div>
          </div>
          




          <input className="btn btn-success w-100" type="submit" onClick={PostData} />
      </form>

  </div>

</body>  )


}

export default Contact;