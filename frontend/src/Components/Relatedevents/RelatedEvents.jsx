import React from 'react'
import './RelatedEvent.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelatedEvents = () => {
  return (
    <div className='relatedevents'>
        <h1>Related Hackathons</h1>
        <hr />
<div className="relatedevents-item">
    {data_product.map((item,i)=>{
        return<Item key={i} id={item.id} name={item.name} 
        image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })   }

</div>

    </div>
  )
}

export default RelatedEvents
