import React from 'react';
import { BrowserRouter, Route,Routes  } from 'react-router-dom';
import Login from './components/customer/Login/login_form';
import CustomerRegistration from './components/customer/Registration/Cust_Registration';
import CustomerHome from './components/customer/Home/customerhome';
import RestaurantHome from './components/Restaurant/Home/restauranthome'
import DeliveryHome from './components/delivery/Home/deliveryhome';
import AdminHome from './components/admin/Home/adminhome';
import RestaurantsRegistration from './components/Restaurant/Registration/Rest_Registration';
import DeliveryRegistration from './components/delivery/Registration/Delivery_Registration';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<CustomerHome/>}/>
          <Route path='/homeres' element={<RestaurantHome/>}/>
          <Route path='/homedel' element={<DeliveryHome/>}/>
          <Route path='/homead' element={<AdminHome/>}/>
            <Route path='/user/register' element={<CustomerRegistration/>}/>
            <Route path='/restaurant/register' element={<RestaurantsRegistration/>}/>
            <Route path='/delivery/register' element={<DeliveryRegistration/>}/>
            
       </Routes>
    </BrowserRouter>
    

  );
}

export default App;
