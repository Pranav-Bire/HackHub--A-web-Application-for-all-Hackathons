import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrum = (props) => {
    const{event}=props;

  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> Event <img src={arrow_icon} alt="" />{event.category} <img src={arrow_icon} alt="" /> {event.name}
    </div>
  )
}

export default Breadcrum
