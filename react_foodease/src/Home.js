import React from 'react';
import LoginForm from './login_form';
import Registration from './Registration';
function Home() 
{
  return (
    <div>
      <h1>Welcome To FoodEase</h1>
      <LoginForm />
      <Registration />
    </div>
  );
}

export default Home;
