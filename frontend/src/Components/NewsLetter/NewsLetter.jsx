import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Latest Hackathons on Your Email</h1>
      <p>Subscribe to stay updated on latest hackathons</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Register</button>
      </div>
    </div>
  )
}

export default NewsLetter
