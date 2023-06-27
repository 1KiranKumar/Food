import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [userName,setName]=useState("");
  const [userPass,setPass]=useState("");
  const [userEmail,setEmail]=useState("");
  const [userAddress,setAddress]=useState("");
  let navigate=useNavigate();;

  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response = await  fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name:userName,email:userEmail,password:userPass,location:userAddress})
      });

      const json=await response.json();
      console.log(json);

      if(!json.success)
      {
        alert("Enter valid Credentials");
      }
      if(json.success)
      {
        localStorage.setItem("authToken",json.authToken);
        navigate("/");
      }
      
  }

  const nameHandler=(event)=>{
    setName(event.target.value);
  }
  
  const passHandler=(event)=>{
    setPass(event.target.value);
  }

  const emailHandler=(event)=>{
    setEmail(event.target.value);
  }

  const addressHandler=(event)=>{
    setAddress(event.target.value);
  }


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" name='name' onChange={nameHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={emailHandler}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={passHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text" className="form-control" placeholder="Address" onChange={addressHandler}/>
          </div>
          <button  type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
        </form>
    </div>
  )
}
