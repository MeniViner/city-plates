
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Restaurants from '../db/database.jsx';
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const filteredRestaurants = restaurants.filter(restaurant => 
    restaurant.city.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    let storedRestaurants = JSON.parse(localStorage.getItem('restaurants'));
    if (!storedRestaurants || storedRestaurants.length === 0) {
        storedRestaurants = Restaurants;
        localStorage.setItem('restaurants', JSON.stringify(storedRestaurants));
    }
    setRestaurants(storedRestaurants);
  }, []);

  return (
    <div className="home-container">
      <div className="home-Search">
        <input
          type="text"
          placeholder="Search by city"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="restaurant-list">
        <Link to="/adding" className="add-restaurant-card">
          <div className="restaurant-card">
            <div className="icon-container i-c">
              <FontAwesomeIcon icon={faPlus} size="3x" />
            </div>
            <div className="add-t">
              <h1>add your restaurant</h1>
            </div>
          </div>
        </Link>
        {filteredRestaurants.map(restaurant => (
          <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
            <div className="restaurant-card">
              <img src={restaurant.main_image} alt={restaurant.name} />
              <div className="restaurant-details">
                <p>{restaurant.city}</p>
                <p>{restaurant.price}</p>
                <p>{restaurant.kitchen}</p>
              </div>
              <h2>{restaurant.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
