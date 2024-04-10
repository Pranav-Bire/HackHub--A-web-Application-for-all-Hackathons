import React, { useContext } from 'react'
import './EventDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { HomeContext } from '../../Context/HomeContext'

const EventDisplay = (props) => {
    const {event}=props;
    const {addToCart} = useContext(HomeContext);
      return (
    <div className='eventdisplay'>
      <div className="eventdisplay-left">
    <div className="eventdisplay-img-list">
    <img src={event.image} alt="" />
    <img src={event.image} alt="" />
    <img src={event.image} alt="" />
    <img src={event.image} alt="" />

    </div>
    <div className="eventdisplay-img">
        <img className='eventdisplay-main-img' src={event.image} alt="" />
    </div>
      </div>
      <div className="eventdisplay-right">
        <h1>{event.name}</h1>
        <div className="eventdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="eventdisplay-right-prices">
            <div className="eventdisplay-right-price-old">
                {event.old_price}
            </div>
            <div className="eventdisplay-right-price-new">
                {event.new_price}
            </div>
            </div>
            <div className="eventdisplay-right-discription">
                Type: Free <br />
                Organizer: Crewsphere: ICP India Hub <br />
                Eligibility: Open to developers, startups, and blockchain enthusiasts <br />
                Duration:<br/> Idea phase: Feb 2, 2024 – Mar 31, 2024 <br />
                Hackathon: Apr 8, 2024 – May 11, 2024 <br />
                Team Size: 1-5 members <br />
                Registration Deadline: Feb 1, 2024 <br />
                Start Date: Feb 2, 2024, for the idea phase <br />
                
                </div>
            <div className="eventdisplay-right-size">
                <h1>Select Team</h1>
                <div className="eventdisplay-right-sizes">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
            
            
            <button onClick={()=>{addToCart(event.id)}}>Register Now</button>
            
        </div>
      </div>
    </div>
  )
}

export default EventDisplay
