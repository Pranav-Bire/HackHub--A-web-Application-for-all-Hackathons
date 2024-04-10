import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/images/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintrest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>HackHub</p>
      </div>
      <ul className="footer-links">
        <li>Coupons</li>
        <li>Blog post</li>
        <li>Hackathons</li>
        <li>About</li>
        <li>Join Affliate</li>
        
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
            <img src={instagram_icon } alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
