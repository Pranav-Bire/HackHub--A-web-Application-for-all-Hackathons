
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'; 
import EventCategory from './Pages/EventCategory';
import Event from './Pages/Events'; 
import Cart from './Pages/Cart'; 
import LoginSignup from './Pages/LoginSignup'; 
import Footer from './Components/Footer/Footer.jsx';
import banner from './Components/Assets/images/banner.png';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      
          <Route path='/incollege' element={<EventCategory banner ={banner}category="incollege"/>}/>
          <Route path='/inpune' element={<EventCategory banner ={banner} category="inpune"/>}/>
          <Route path='/inIndia' element={<EventCategory banner ={banner} category="inIndia"/>}/>
          
        <Route path="/event" element={<Event/>}>
          <Route path =':eventId' element={<Event/>}/>
          
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
          </Routes>  
          <Footer/> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
