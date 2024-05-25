import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import Icon from '@mdi/react';
import { mdiMapMarkerQuestionOutline, mdiCarSeat } from '@mdi/js';

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

// import Icon from '@mdi/react';
// import { mdiMapMarkerQuestionOutline, mdiCarSeat } from '@mdi/js';



// src/components/Top.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Top = () => {
//   return (
//     <nav>
//       <h1 style={{ textAlign: 'center' }}>
//         <Link to="/">My Restaurant Site</Link>
//       </h1>
//     </nav>
//   );
// };

// export default Top;
