import React, { useState } from 'react'
import './AddEvent.css'
import upload_area from '../../assets/upload_area.svg'



const AddEvent = () => {

  const[image,setImage]=useState(false);
 

  const[eventDetails,setEventDetails]=useState({
    name:"",
    image:"",
    category:"incollege",
    new_price:"",
    old_price:""
  })

  const imageHandler =(e)=> {
    setImage(e.target.files[0])
  }


  const changeHandler=(e) =>{
    setEventDetails({...eventDetails,[e.target.name]:e.target.value})
  }

 const Add_Event = async ()=>{
  console.log(eventDetails);
  let resposeData;
 let event=eventDetails;

 let formData = new FormData();
 formData.append("event",image);


 await fetch('http://localhost:4000/upload',{
  method:'POST',
  headers: {
    Accept:'application/json',
  },
  body:formData,
 }).then ((resp)=>resp.json()).then((data)=>{resposeData=data});

 if (resposeData.success) {
    event.image =resposeData.image_url;
    console.log(event);
    await fetch('http://localhost:4000/addevent',{
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
    },

    body:JSON.stringify(event),
 }).then((resp)=>resp.json()).then((data)=>{
 data.success?alert("Event added"):alert("failed");
 })
 }
 }

  return (
    <div className='add-event'>
      <div className="addevent-itemfield">
        <p>Event title</p>
        <input value={eventDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type Here" />
      </div>
      <div className="addevent-price">
        <div className="addevent-itemfield">
          <p>Prize</p>
          <input value={eventDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addevent-itemfield">
          <p>Mode</p>
          <input value={eventDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addevent-itemfield">
        <p>Event Category</p>
        <select  value={eventDetails.category} onChange={changeHandler}name="category" className='add-event-selector'>
          <option value="incollege"> In College</option>
          <option value="inpune"> In Pune</option>
          <option value="inIndia"> In India</option>
        </select>
      </div>
      <div className="addevent-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image) :upload_area} className='addevent-thumnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />

      </div>
      <button onClick={()=>{Add_Event()}}className='addevent-btn'>ADD</button>
    </div>
  )
}

export default AddEvent
