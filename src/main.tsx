import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/index'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
