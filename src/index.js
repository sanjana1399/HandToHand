// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  // Wrap your App with BrowserRouter
    <App />
  </BrowserRouter>
);

>>>>>>> b480771 (Your commit message describing the changes)
reportWebVitals();
