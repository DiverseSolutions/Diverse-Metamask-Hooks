import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import { BrowserRouter } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";

import Home from './routes/Home.jsx'
import UsingHaveMetamaskPage from './routes/UsingHaveMetamaskPage.jsx'
import UsingMetamaskConnectPage from './routes/UsingMetamaskConnectPage.jsx'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usingHaveMetamask" element={< UsingHaveMetamaskPage />} />
        <Route path="/usingMetamaskConnect" element={< UsingMetamaskConnectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
