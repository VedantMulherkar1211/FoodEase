import React from 'react';
import Navbar from '../NavBar/navbar';
import Category from '../Category/category';
import SearchBar from '../Searchbar/searchbar';
function Main()
{
  return(
    <div className='container'>
      <div className='row'>
   <Navbar/>
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