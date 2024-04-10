import React, { useContext } from 'react'
import  { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/images/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
const Navbar = () => {

  const[menu,setMenu]= useState("home");
  const{getTotalCartItems}=useContext(HomeContext);

  return (
    <div className ='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>HackHub</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
      {/* <li onClick={()=>{setMenu("events")}}><Link style={{textDecoration:'none'}}to='/event'>Event</Link>{menu==="events"?<hr/>:<></>}</li> */}
        <li onClick={()=>{setMenu("incollege")}}><Link style={{textDecoration:'none'}} to='/incollege'>In College</Link>{menu==="incollege"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("inpune")}}><Link style={{textDecoration:'none'}} to='/inpune'> In Pune</Link>{menu==="inpune"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("inIndia")}}><Link style={{textDecoration:'none'}} to='/inIndia'> In India</Link>{menu==="inIndia"?<hr/>:<></>}</li>
        {/* <li onClick={()=>{setMenu("login")}}><Link style={{textDecoration:'none'}} to='/login'>Login</Link>{menu==="login"?<hr/>:<></>}</li> */}
        
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?
        <button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>
       : <Link to='/login'><button>Login</button></Link>}

       <div className="nav-login-cart-heart">
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
