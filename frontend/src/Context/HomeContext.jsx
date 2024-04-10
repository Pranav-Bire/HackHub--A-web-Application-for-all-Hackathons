import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assets/all_product";


export const HomeContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const HomeContextProvider = (props) => {

 const[all_product,setAll_Product]= useState([]);

 const [cartItem,setCartItem]=useState(getDefaultCart());

useEffect(()=>{
    fetch('http://localhost:4000/allevents')
    .then((response)=> response.json())
    .then((data)=>setAll_Product(data))


    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:"",
        }).then((response)=>response.json())
        .then((data)=>setCartItem(data));
    }
},[])
    
     console.log(cartItem);
     const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       if(localStorage.getItem('auth-token')){
          fetch('http://localhost:4000/addtocart',{
            method: 'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"itemId":itemId}),
          })
          .then((response)=>response.json())
          .then((data)=>console.log(data));
       }
     }
     
     const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
              method: 'POST',
              headers:{
                  Accept:'application/form-data',
                  'auth-token':`${localStorage.getItem('auth-token')}`,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
         }
     }
 const getTotalCartItems=()=>{
    let totalItem = 0;
    for(const item in cartItem){
    if (cartItem[item]>0){
        totalItem+=cartItem[item]
    }
    }
    return totalItem;
 }
     const contextValue = { getTotalCartItems,all_product,cartItem,addToCart,removeFromCart };
    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;
