import React from 'react'
import { HomeContext } from '../Context/HomeContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import  { useContext } from 'react';
import EventDisplay from '../Components/EventDisplay/EventDisplay';
import RelatedEvents from '../Components/Relatedevents/RelatedEvents';


const Events = () => {
  const {all_product}=useContext(HomeContext);
  const{eventId}=useParams();
  const event=all_product.find((e)=> e.id === Number(eventId));
  return (
    <div >
      <Breadcrum event={event}/>
      <EventDisplay event={event}/>
      <RelatedEvents/>
      
      
    </div>
  )
}

export default Events
