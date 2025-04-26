// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // ⬅️ ADD THIS
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router> {/* ⬅️ WRAP App in Router */}
      <App />
    </Router>
  </React.StrictMode>
);
