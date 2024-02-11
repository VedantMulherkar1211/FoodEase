import React, { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);

  const [posts, setPosts] = useState([]);
  //  useEffect(() => {
  //     fetch('http://localhost:8080/test')
  //        .then((response) => response.json())
  //        .then((data) => {
  //           console.log(data);
  //           setPosts(data);
  //        })
  //        .catch((err) => {
  //           console.log(err.message);
  //        });
  //  }, []);

   useEffect(() => {
    // If you want do do some other action after
    // the response is set do it here. This useEffect will only fire
    // when response changes.
 }, [response]);

  const handleLogin = () => {
    axios.get('http://localhost:8080/test').then(res => {
      // Handle Your response here.
      // Likely you may want to set some state
      console.log("new response "+ res.data)
      setResponse(res);
   });
    navigate('/home');
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
