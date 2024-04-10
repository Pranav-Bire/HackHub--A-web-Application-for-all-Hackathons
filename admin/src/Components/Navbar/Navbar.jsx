import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/logo.png'
import nav_profile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={nav_logo} alt="" className="nav-logo" />
      <h1>HacHub</h1>
      <p>Admin Panel</p>
      <img src={nav_profile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar
