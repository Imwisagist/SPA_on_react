import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './adaptive.css';
import Table from "./components/Table/Table";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/table" element={<Table/>}/>
    </Routes>
  </BrowserRouter>

);
