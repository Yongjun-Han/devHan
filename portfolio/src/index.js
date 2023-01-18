import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import GlobalFonts from './Assets/Font/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalFonts></GlobalFonts>
    <Router/>
    {/* <App /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
