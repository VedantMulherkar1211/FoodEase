import React, { useState } from 'react';

function RestaurantSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:8080/restaurants?search=${searchTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }
        return response.json();
      })
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for restaurants..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map(restaurant => (
          <div key={restaurant.restaurant_id}>
            <p>{restaurant.name}</p>
            {/* Display other restaurant information as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantSearchBar;
