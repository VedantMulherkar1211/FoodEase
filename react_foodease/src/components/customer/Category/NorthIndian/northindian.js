import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../NavBar/navbar';
import northindian from '../northindian.png';
import southindian from '../southindian.png'; // Import the southindian image

function NorthIndian() {
  return (
    <div className='container'>
      <div className='row'>
        <Navbar />
      </div>
      <div className='container'>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action active">Select the option</a>
          <div className="row mt-4 pl-4">
            <div className="col-md-3">
              <Link to="/home/category/northindian" className="card-link" style={{ textDecoration: 'none' }}>
                <div className="card food-cat">
                  <div className="text-center">
                    <img src={northindian} alt="North Indian" className="card-img-top p-4" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center mt-2 mb-0">North Indian</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-3">
              <Link to="/restaurant/south-indian" className="card-link" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="text-center">
                    <img src={southindian} alt="South Indian" className="card-img-top p-4" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center mt-2 mb-0">South Indian</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NorthIndian;
