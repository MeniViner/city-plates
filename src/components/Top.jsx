import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import '../styles/top.css'; 

const TopNavigation = () => {

    const location = useLocation();
    const isActive = (pathname) => {
        return location.pathname === pathname;
    };

    return (
    <div className="top-menu">
        <div className="top">

            {!isActive('/') && (
                <Link to="/" className={`faHome ${isActive('/home') ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            )}

            {isActive('/') && (
                <div id='City-Plates'>
                    <div id='name-and-logo'>
                        <img src='/restaurant.png' alt='restaurant'/>
                        <h1 id='website-name'>City Plates</h1>
                    </div>
                </div>
            )}

            {/* {isActive('/') && ( */}
                <Link 
                    to="/management" 
                    className={`faBarsProgress ${isActive('/management') ? 'active' : ''}`}
                    id='top-management'
                >
                    <FontAwesomeIcon icon={faBarsProgress} />
                </Link>
            {/* )} */}

        </div>
    </div>
    );
};

export default TopNavigation;
