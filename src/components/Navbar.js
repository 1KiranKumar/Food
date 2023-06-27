import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContexReducer';

function Navbar() {
const [cartView,setCartView]=useState(false);
let data=useCart();
const navigate=useNavigate();


  const handleLogOut=()=>{
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className='container-fluid'>
  <Link className="navbar-brand fs-1 fst-italic fst-bold" to="/">Food</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav me-auto mb-2 mr-5">
      <li className='nav-item'>
        <Link className="nav-item nav-link active fs-5" to="/">Home</Link>
      </li>      
      {(localStorage.getItem("authToken")) ?
       <li className='nav-item'>
       <Link className="nav-item nav-link fs-5" to="myOrder">My orders</Link>
     </li> :""     }
     </ul>
    
   
    {(!localStorage.getItem("authToken")) ?
     <div className='d-flex'>
      <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>     
      <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
    </div>
  : 
  <div>
  <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
    My Cart {" "} 
    <Badge pill bg="danger">{data.length}</Badge>
    </div>
  {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
  <div className='btn bg-white text-danger mx-2' onClick={handleLogOut}>Logout</div>
  </div>
  }
      
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
