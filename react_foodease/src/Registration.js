import React from 'react';
function Registration() {
  return (
    <div className="Registration">
      <input type='text' placeholder='User'/>
      <br/>
      <input type='text' placeholder='Email'/>
      <br/>
      <input type='text' placeholder='Phone Number'/>
      <br/>
      <input type='password' placeholder='Password'/>
      <br/>
      <button type='submit'>Submit</button>
    </div>
  );
}
export default Registration;
