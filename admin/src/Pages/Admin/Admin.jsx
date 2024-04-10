import React from 'react'
import'./Admin.css'
import{Routes,Route} from 'react-router-dom'
import AddEvent from '../../Components/AddEvent/AddEvent'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ListEvent from '../../Components/ListEvent/ListEvent'



const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
          
      <Routes>
        <Route path ="/addevent" element={<AddEvent/>}/>
        <Route path ="/listevent" element={<ListEvent/>}/>
      </Routes>

    </div>
  )
}

export default Admin