


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/restaurants.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faKitchenSet, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import Icon from '@mdi/react';
import { mdiCashMultiple } from '@mdi/js';


const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const storedRestaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    const foundRestaurant = storedRestaurants.find(r => r.id === parseInt(id));
    setRestaurant(foundRestaurant);
  }, [id]);

  const getStarIcons = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i}  icon={['fas', 'star']} className='re-ye-st-icon' />);
    }
  
    if (halfStar) {
      stars.push(<FontAwesomeIcon key={fullStars} icon={faStarHalfStroke} className='re-ye-st-icon' />);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={fullStars + 1 + i} icon={['far', 'star']}  className='re-bl-st-icon' />);
    }
  
    return stars;
  };
  
  
  const handleNext = () => {
    if (restaurant) {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % restaurant.images.length);
    }
  };

  const handlePrev = () => {
    if (restaurant) {
      setCarouselIndex((prevIndex) => (prevIndex - 2 + restaurant.images.length) % restaurant.images.length);
    }
  };

  if (!restaurant) {
    return (
      <div style={{ textAlign: 'center', marginTop: '15vh', marginBottom: '15vh', color: '#fff' }}>
        <h1 style={{color: 'black'}}>restaurant not found.</h1>
        <br/><br/>
        <h3 style={{color: 'gray'}}>looks like you lost your way</h3>
        <h2 style={{color: 'grey'}}>
        Let's take you back <Link to="/" style={{ textDecoration: 'underline', fontWeight: 'bold', color: '#a52a2a' }}>Home</Link>
        </h2>
      </div>
    );    
  }

  const firstCarouselImages = [
    restaurant.images[carouselIndex],
    restaurant.images[(carouselIndex + 1) % restaurant.images.length],
    restaurant.images[(carouselIndex + 2) % restaurant.images.length],
  ];
  
  const secondCarouselImages = [
    restaurant.images[(restaurant.images.length - carouselIndex - 1) % restaurant.images.length],
    restaurant.images[(restaurant.images.length - carouselIndex - 2 + restaurant.images.length) % restaurant.images.length],
    restaurant.images[(restaurant.images.length - carouselIndex - 3 + restaurant.images.length) % restaurant.images.length],
  ];

  return (
    <>
      <div id='restaurant-details-header'><h1>restaurant details</h1></div>
    <div className="main-restaurant" style={{ backgroundImage: `url(${restaurant.main_image})` }}>
      <div className="info-restaurant">
        <h1 id='restaurant-name'>{restaurant.name}</h1>
        <div className="separate-line"></div>
        <p className='ri-t ri-ci'>
          <FontAwesomeIcon icon={faLocationDot} className='re-fi-icon'/> 
          {restaurant.city}
        </p>
        <p className='ri-t'>
          <Icon path={mdiCashMultiple} size={1} className='re-fi-icon'/>
          {restaurant.price}
        </p>
        <p className='ri-t'>
          <FontAwesomeIcon icon={faKitchenSet} 
          className='re-fi-icon'/>{restaurant.kitchen}
        </p>
        <p>
          <FontAwesomeIcon icon={faFaceSmile} className='re-fi-icon'/>
          &nbsp;
          {getStarIcons(restaurant.rating)}
        </p>
      </div>
      <div className="restaurant-main-info">
        <p className="description">{restaurant.description}</p>
        <div className="restaurant-images">
          <button className="carousel-button prev" onClick={handlePrev}><FontAwesomeIcon icon={faAngleLeft} size='2x'/></button>
          <div className="image-carousel-1">
            <div className="image-wrapper" style={{ transform: `translateY(-${carouselIndex * 100}%)` }}>
              {firstCarouselImages.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${restaurant.name} ${carouselIndex + index}`} 
                />
              ))}
            </div>
          </div>
          <div className="image-carousel-2">
            <div className="image-wrapper" style={{ transform: `translateY(${carouselIndex * 100}%)` }}>
              {secondCarouselImages.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${restaurant.name} ${(restaurant.images.length - carouselIndex - 1 + index) % restaurant.images.length}`} 
                />
              ))}
            </div>
          </div>
          <button className="carousel-button next" onClick={handleNext}><FontAwesomeIcon icon={faAngleRight} size='2x'/></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default RestaurantDetails;
