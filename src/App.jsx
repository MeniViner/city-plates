
// import './App.css';
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import TopNavigation from './components/Top';
// import ButtomInfo from './components/Buttom';
// import Home from './main_pages/Home';
// import Restaurant from './main_pages/Restaurant';
// import AddRestaurant from './main_pages/Add';
// import ManageRestaurants from './main_pages/Management';
// import NotFound from './main_pages/NotFound';

// function App() {
//   return (
//     <div className="App">
//       <TopNavigation/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/adding" element={<AddRestaurant />} />
//         <Route path="/management" element={<ManageRestaurants />} />
//         <Route path="/restaurant/:id" element={<Restaurant />} />
//         <Route path="*" element={<NotFound/>} />
//       </Routes>
//       <ButtomInfo/>
//     </div>
//   );
// }

// export default App;





// src/App.js
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavigation from './components/Top';
import ButtomInfo from './components/Buttom';
import Home from './main_pages/Home';
import Restaurant from './main_pages/Restaurant';
import AddRestaurant from './main_pages/Add';
import ManageRestaurants from './main_pages/Management';
import NotFound from './main_pages/NotFound';
import './db/fontAwesome';


function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adding" element={<AddRestaurant />} />
        <Route path="/management" element={<ManageRestaurants />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <ButtomInfo/>
    </div>
  );
}

export default App;


