import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/images/hackfest1.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
      <p>Most Awaited Hackathons</p>
        <h1>GOOGLE</h1>
        <h1>HACKFEST 2024</h1>
        <h5>HackFest Indonesia is Indonesia’s hackathon held by GDSC Indonesia where university students of
            different skills from all over Indonesia can come together to experiment and develop impactful 
            software or hardware based on United Nation 17 SDGs.</h5>
        
        <button>Register Now</button>
      </div>
      <div className='offers-right'>
    <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
