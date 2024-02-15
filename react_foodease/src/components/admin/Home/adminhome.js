import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/navbar';
import LineChart from '../Statistics/staticstics';

function AdminHome() {
  return (
    <div className='container'>
      <div className='row'>
        <Navbar />
      </div>
      <LineChart />
    </div>
  );
}

export default AdminHome;
