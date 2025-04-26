// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ⬅️ ADD THIS
import Home from './components/Home';
import Course from './components/Course'; // ⬅️ ADD THIS

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
    </Routes>
  );
};

export default App;
