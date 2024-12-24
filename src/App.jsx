import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// src/index.js or src/index.jsx
import './index.css';

import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Navbar from './Componets/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
