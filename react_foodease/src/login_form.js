import React from 'react';
function LoginForm() 
{
  return (
    <div className="login-form">
      <input type='text' placeholder='Email'/>
      <br/>
      <input type='password' placeholder='Password'/>
      <br/>
      <button type='submit'>Login</button>
    </div>
  );
}
export default LoginForm;
