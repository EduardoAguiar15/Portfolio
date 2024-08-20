import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Global.css';
import '../src/lib/i18n.js';
import { AnimationProvider } from '../src/components/Presentation/AnimationContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AnimationProvider>
    <App />
  </AnimationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
