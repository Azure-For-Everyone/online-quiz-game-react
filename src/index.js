// import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:event" element={<App />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>,
);

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
