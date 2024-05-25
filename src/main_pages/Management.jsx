

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/management.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faTrash, faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import '@fontsource/poppins/600.css';

const Management = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [editingRestaurant, setEditingRestaurant] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('');

  useEffect(() => {
    const storedRestaurants = localStorage.getItem('restaurants');
    const restaurantsArray = storedRestaurants ? JSON.parse(storedRestaurants) : [];
    const parsedRestaurants = restaurantsArray.map(restaurant => {
      if (!Array.isArray(restaurant.images)) {
        restaurant.images = restaurant.images.split(', ');
      }
      return restaurant;
    });
    setRestaurants(parsedRestaurants);
    setEditingRestaurant(parsedRestaurants);
  }, []);

  const handleInputChange = (id, field, value) => {
    const updatedEditingRestaurant = editingRestaurant.map((restaurant) => {
      if (restaurant.id === id) {
        if (field === 'images') {
          restaurant[field] = value.split(',').map(image => image.trim());
        } else {
          restaurant[field] = value;
        }
      }
      return restaurant;
    });
    setEditingRestaurant(updatedEditingRestaurant);
  };

  const updateRestaurant = (id) => {
    const updatedRestaurant = editingRestaurant.find((restaurant) => restaurant.id === id);
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === id ? updatedRestaurant : restaurant
    );
    setRestaurants(updatedRestaurants);
    localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
    Swal.fire('Saved!', 'The restaurant has been updated.', 'success');
  };

  const deleteRestaurant = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You're about to delete this restaurant",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id);
        const updatedEditingRestaurant = editingRestaurant.filter((restaurant) => restaurant.id !== id);
        setRestaurants(updatedRestaurants);
        setEditingRestaurant(updatedEditingRestaurant);
        localStorage.setItem('restaurants', JSON.stringify(updatedRestaurants));
        Swal.fire('Deleted!', 'The restaurant has been deleted.', 'success');
      }
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (field) => {
    setSortField(field);
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedRestaurants = filteredRestaurants.sort((a, b) => {
    if (sortField === 'name' || sortField === 'city' || sortField === 'kitchen') {
      const aValue = a[sortField] || '';
      const bValue = b[sortField] || '';
      return aValue.localeCompare(bValue);
    } else if (sortField === 'price') {
      const aValue = parseFloat(a[sortField]) || 0;
      const bValue = parseFloat(b[sortField]) || 0;
      return aValue - bValue;
    }
    return 0;
  });

  return (
    <div className="management">
        <div className="Manage-Restaurants">
            <h1> <FontAwesomeIcon icon={faBarsProgress} /> &nbsp; Manage Restaurants</h1>
        </div>
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search by restaurant name"
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="sort-dropdown">
          <select id="sort" onChange={(e) => handleSort(e.target.value)}>
            <option value="name">name</option>
            <option value="city">city</option>
            <option value="kitchen">kitchen</option>
            <option value="price">price</option>
          </select>
        </div>
      </div>
      {sortedRestaurants.map((restaurant) => (
        <div className="restaurant-container" key={restaurant.id}>
          <div className="edit-item">
            <input
              type="text"
              placeholder="Name"
              value={restaurant.name}
              onChange={(e) => handleInputChange(restaurant.id, 'name', e.target.value)}
              required
            />
            <label className='manage-label label-m'>name</label>
          </div>
          <div className="edit-item">
            <input
              type="text"
              placeholder="City"
              value={restaurant.city}
              onChange={(e) => handleInputChange(restaurant.id, 'city', e.target.value)}
              required
            />
            <label className='manage-label label-m'>city</label>
          </div>
          <div className="edit-item">
            <input
              type="number"
              placeholder="Price"
              value={restaurant.price}
              onChange={(e) => handleInputChange(restaurant.id, 'price', e.target.value)}
              required
            />
            <label className='manage-label label-m'>price</label>
          </div>
          <div className="edit-item">
            <input
              type="text"
              placeholder="Kitchen"
              value={restaurant.kitchen}
              onChange={(e) => handleInputChange(restaurant.id, 'kitchen', e.target.value)}
              required
            />
            <label className='manage-label label-m'>kitchen type</label>
          </div>
          <div className="edit-item">
            <input
              type="text"
              placeholder="Main Image URL"
              value={restaurant.main_image}
              onChange={(e) => handleInputChange(restaurant.id, 'main_image', e.target.value)}
              required
            />
            <label className='manage-label label-m'>main image: (URL)</label>
          </div>
          <div className="edit-item">
            <input
              type="text"
              placeholder="Image URLs (comma separated)"
              value={restaurant.images.join(', ')}
              onChange={(e) => handleInputChange(restaurant.id, 'images', e.target.value)}
              required
            />
            <label className='manage-label label-m'>Image URLs: (url1, url2, url3)</label>
          </div>
          <div className="edit-item">
            <input
              type="text"
              placeholder="Description"
              value={restaurant.description}
              onChange={(e) => handleInputChange(restaurant.id, 'description', e.target.value)}
            />
            <label className='manage-label label-m'>description</label>
          </div>
          <div className="form-btns">
            <button onClick={() => updateRestaurant(restaurant.id)}>Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
            <button onClick={() => deleteRestaurant(restaurant.id)}>Delete <FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
      ))}
      <Link to="/adding" className="edit-item restaurant-container manage-add">
        <FontAwesomeIcon icon={faPlus} />
        <h1>Add your own restaurant</h1>
      </Link>
    </div>
  );
}

export default Management;
