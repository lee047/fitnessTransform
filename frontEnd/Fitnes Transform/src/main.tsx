import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Subscribe} from './components/subscribe'
import {Footer} from './components/footer'
import {Header} from './components/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Subscribe />
    <Footer />
  </StrictMode>,
)
