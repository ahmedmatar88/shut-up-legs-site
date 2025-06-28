// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/global.css';

// Disable browser scroll restoration completely
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Also disable it programmatically
window.addEventListener('beforeunload', () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);