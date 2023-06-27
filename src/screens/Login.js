import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [userPass,setPass]=useState("");
  const [userEmail,setEmail]=useState("");
  let navigate=useNavigate();
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response = await  fetch("http://localhost:5000/api/loginuser",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:userEmail,password:userPass})
      });

      const json=await response.json();
      console.log(json);

      if(!json.success)
      {
        alert("Enter valid Credentials");
      }

      if(json.success)
      {
        localStorage.setItem("userEmail",userEmail);
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/");
      }
  }

  const passHandler=(event)=>{
    setPass(event.target.value);
  }

  const emailHandler=(event)=>{
    setEmail(event.target.value);
  }


  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>      
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={emailHandler}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={passHandler}/>
      </div>
      <button  type="submit" className="m-3 btn btn-success">Submit</button>
      <Link to="/createuser" className='m-3 btn btn-danger'>I am a new User</Link>
    </form>
</div>
  )
}
