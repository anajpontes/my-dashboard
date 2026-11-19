import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MoviesProvider from './context/MoviesProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MoviesProvider>
    <App />
    </MoviesProvider>
    </BrowserRouter>
  </StrictMode>,
)
