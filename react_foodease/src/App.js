import React from 'react';
import Login from './login_form';
import Customer from './Cust_Registration';
import Restaurants from './Rest_Registration';
import Delivery from './Delivery_Registration';
function App() {
  return (
    <div className='App'>
      <Login/>
      <Customer/>
      <Restaurants/>
      <Delivery/>
    </div>
  );
}
export default App; 
