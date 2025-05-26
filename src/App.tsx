// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import Donate from './components/Donate';
import About from './components/About';
import Gallery from './components/Gallery';
import MobileNavbar from './components/MobileNavbar';

const App: React.FC = () => {
  return (
    <>
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
