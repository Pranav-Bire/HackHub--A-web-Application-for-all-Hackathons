import React from 'react'
import './CSS/EventCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import {useContext } from 'react';
import { HomeContext } from '../Context/HomeContext';





const EventCategory = (props) => {
  const {all_product} =useContext(HomeContext) 
   return (
    <div className='event-category'>
      <img className='eventcategory-banner'src={props.banner} alt="" />
      <div className="eventcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products 
        </p>
        <div className="eventcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="eventcategory-products">
        {all_product.map((item,i)=>{ 
            if(props.category===item.category)
            return <Item key={i} id={item.id} name={item.name} 
            image={item.image} new_price={item.new_price} old_price={item.old_price}/>

          else{
            return null;
          }

           
        })}
      </div>
      <div className="eventcategory-loadmore">Explore more</div>
    </div>
  )
}

export default EventCategory
