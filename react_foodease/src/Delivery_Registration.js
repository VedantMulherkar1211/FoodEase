import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Delivery() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body bg-warning">
              <h2 className="text-center mb-4">Registration</h2>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='Full Name'/>
              </div>
              <br/>
              <div className="form-group">
                <input type='email' className="form-control" placeholder='Email'/>
              </div>
              <br/>
              <div className="form-group">
                <input type='tel' className="form-control" placeholder='Phone Number'/>
              </div>
              <br/>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='User Name'/>
              </div>
              <br/>
              <div className="form-group">
                <input type='password' className="form-control" placeholder='Password'/>
              </div>
              <br/>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='vehicle_License_No '/>
              </div>
              <br/>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='photo_id_number'/>
              </div>
              <br/>
              <br/>
              <div className="text-center">
                <button type='submit' className="btn btn-primary btn-block btn btn-dark">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
