import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ForgetComponent() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body bg-warning">
              <h2 className="text-center mb-4">Reset Password</h2>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='User Name'/>
              </div>
              <br/>
              <div className="form-group">
                  <input type='newpassword' className="form-control" placeholder='New Password'/>
              </div>
            
              </div>
              </div>
              </div>
              </div>
              </div>
              );
}

export default ForgetComponent;