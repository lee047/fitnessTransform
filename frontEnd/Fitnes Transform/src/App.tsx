import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Home }from './pages/home/home'
import {ContactUs }from './pages/contact/contactUs'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="Contact US" element={<ContactUs />} />
         
        </Route>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
