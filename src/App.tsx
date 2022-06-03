import React from 'react';
import logo from './logo.svg';
import './style/style.scss';
import './style/style768.scss';
import './style/style1400.scss';
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from './pages/aboutPage';
import ImageByDate from './pages/imageByDate';
import MarsWeather from './pages/marsWeather';
// import './App.css';

function App() {
  return (
    <div className="appRoot">
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/imageByDate" element={<ImageByDate />} />
        <Route path="/weather" element={<MarsWeather />} />
      </Routes>
    </div>
  );
}

export default App;
