import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Home }from './pages/home/home'
import {ContactUs }from './pages/contact/contactUs'
import {ExercisePage }from './pages/exercise/exercise'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
function App() {

  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Contact-Us" element={<ContactUs />} />
          <Route path="Exercise" element={<ExercisePage />} />
         
        </Route>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
