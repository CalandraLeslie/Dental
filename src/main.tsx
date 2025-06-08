import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import ThemeProvider from './contexts/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="app-wrapper">
      <ThemeProvider>
        <BrowserRouter future={{ 
          v7_startTransition: true,
          v7_relativeSplatPath: true 
        }}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);

console.log('Dental Clinic website initialized');