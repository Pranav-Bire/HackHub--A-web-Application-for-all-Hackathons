import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeContextProvider from './Context/HomeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HomeContextProvider>
    <App />
  </HomeContextProvider>
);


