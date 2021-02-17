/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Components from './Components';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Components /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
