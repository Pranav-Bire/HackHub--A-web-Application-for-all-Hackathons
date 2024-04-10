import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const{all_product,cartItem,removeFromCart} = useContext(HomeContext)
  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Events</p>
        <p>Title</p>
        <p>Team Members</p>
        
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItem[e.id]>0){
            return<div>
            <div className="cartitems-format cartitem-format-main">
                <img src={e.image} alt="" className='carticon-event-icon'/>
                <p>{e.name}</p>
                <button className='cartitems-quantity'>{cartItem[e.id]} </button>
                
                <img className='cartitems-remove-icon'src={remove_icon} onClick ={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
            
            <button className='register'>Register Now</button>
            
          </div>
        }
      })}
    </div>
  )
}

export default CartItems
