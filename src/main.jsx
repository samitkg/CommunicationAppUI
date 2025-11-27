import { createRoot } from 'react-dom/client'; // Importing es6 module
import React from 'react';
import App from './App'; // Import App component
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Few Bootstrap Components need this

createRoot(document.getElementById('root')).render(  
    <App /> 
)
