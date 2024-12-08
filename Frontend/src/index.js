import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./assets/scss/main.scss";
// import { AuthProvider } from './AuthContext';
// ✨ Minimal Polyfills for Node.js modules
import { Buffer } from 'buffer';
import process from 'process';

// Set up Node.js global variables and polyfills
window.process = process; 
window.Buffer = Buffer; 

if (!window.global) {
  window.global = window; // Polyfill `global` for libraries expecting a Node.js environment
}

window.fs = false; // Disable file system (fs) since it's not needed in the browser

// ✨ End of Polyfills

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import "./assets/scss/main.scss"


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename="/matamaps">
//       <App />
//     </BrowserRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

