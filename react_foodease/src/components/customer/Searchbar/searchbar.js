import React from 'react';

function SearchBar() {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    console.log('Search term:', searchTerm);
  };

  return (
    <div className='container mt-4 mb-4'>
      <div className='row justify-content-center'>
        <div className='col-md-8'> 
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline w-100" onSubmit={handleSearch}>
              <input className="form-control mr-sm-2 w-75" type="search" placeholder="Search for food and restaurant" aria-label="Search" name="searchTerm" />
              <div className="d-flex justify-content-center align-items-center w-25">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
