import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='header-container'>
          <div className='header-logo'>
            <img src="../../public/images/Logo-main.svg" alt="" />
          </div>
          <div className='nav-container'>
            <ul>
              <li>HOME</li>
              <li>EXERCISE</li>
              <li>CONTACT US</li>
            </ul>  
          </div>
      </div>
    <App />
  </StrictMode>,
)
