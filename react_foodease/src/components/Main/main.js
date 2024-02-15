import React from 'react';
import NavbarMain from './navbar';
import Category from '../customer/Category/category';
import SearchBar from '../customer/Searchbar/searchbar';
function Main()
{
  return(
    <div className='container'>
      <div className='row'>
   <NavbarMain/>
   </div>

   <div className='row'>
    <Category/>
   </div>
   <div className='row'>
    <SearchBar/>
   </div>
   </div>
  );
}

export default Main;