import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Subscribe} from './components/subscribe'
import {Footer} from './components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='header-container'>
          <div className='header-logo'>
            <img src="../../public/images/Logo-main.svg" alt="" />
          </div>
          <div className='nav-container'>
            <ul>
              <li><a href='/'>HOME</a> </li>
              <li><a href='/Exercise'>EXERCISE</a> </li>
              <li><a href='/Contact-Us'>CONTACT US</a> </li>
            </ul>  
          </div>
      </div>
    <App />
    <Subscribe />
    <Footer />
  </StrictMode>,
)
