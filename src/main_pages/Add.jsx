import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '@fontsource/roboto'; 
import '../styles/add.css'; 

function AddRestaurant() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      id: Date.now(),
      name,
      city,
      price,
      kitchen,
      main_image: mainImage,
      images: [image1, image2, image3],
      description,
    };

    const storedRestaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    storedRestaurants.push(newRestaurant);
    localStorage.setItem('restaurants', JSON.stringify(storedRestaurants));

    setName('');
    setCity('');
    setPrice('');
    setKitchen('');
    setDescription('');
    setMainImage('');
    setImage1('');
    setImage2('');
    setImage3('');
    setError('');

    Swal.fire('Added!', 'The restaurant has been added.', 'success');
    navigate('/');
  };

  return (
    <div className="add-restaurant">
      <div id='Add-New-Restaurant'>
        <h2>add new restaurant</h2>
      </div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-left">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Kitchen Type"
              value={kitchen}
              onChange={(e) => setKitchen(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-right">
          <div className="form-group">
            <input
              type="text"
              placeholder="Main Image URL"
              value={mainImage}
              onChange={(e) => setMainImage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Image 1 URL"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Image 2 URL"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Image 3 URL"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group full-width add-description">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="full-width">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurant;
