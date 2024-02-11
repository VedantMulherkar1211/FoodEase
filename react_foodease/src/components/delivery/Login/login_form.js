import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/forget');
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body bg-warning">
              <h2 className="text-center mb-4">Login</h2>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='User Name'/>
              </div>
              <br/>
              <div className="form-group">
                <input type='password' className="form-control" placeholder='Password'/>
              </div>
              <br/>
              <br/>
              <div className="text-center">
                <button type='submit' onClick={handleLogin} className="btn btn-primary btn-block btn btn-dark">Submit</button>
                <div className='text-center'>
                  <a href='/forget'class="remove-underscore" className='text-danger remove-underscore'>forgot password</a>
                  <br/>
                  <a href='/user/register'class="remove-underscore" className='text-danger remove-underscore'>Register Here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
