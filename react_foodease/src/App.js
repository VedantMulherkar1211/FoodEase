import React from 'react';
import Login from './login_form';
import Customer from './Cust_Registration';
import Restaurants from './Rest_Registration';
import Delivery from './Delivery_Registration';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
          {/* <Route path='/home' element={<Navbar/>} /> */}
          <Route path='/login' element={<Login/>} />
          <Route path='/customer_registration' element={<Customer/>} />
          <Route path='/deliveryBoy_registration' element={<Delivery/>} />
          <Route path='/rOwner_registration' element={<Restaurants/>}/>
        </Routes>
      </BrowserRouter>
      
    
    </div>

    
  );
}
export default App; 
