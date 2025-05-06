import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Overview from './components/overview/Overview.jsx';
import Location from './components/location/Location.jsx';
import Amenities from './components/amenities/Amenities.jsx';
import Floor from './components/floor/Floor.jsx';
import Enquire from './components/enquire/Enquire.jsx';
import Footer from './components/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/overview' element={<Overview />}/>
    <Route path='/location' element={<Location />}/>
    <Route path='/amenities' element={<Amenities />}/>
    <Route path='/floor' element={<Floor />}/>
    <Route path='/enquire' element={<Enquire />}/>
  </Routes>
<Footer/>
  </BrowserRouter>

);