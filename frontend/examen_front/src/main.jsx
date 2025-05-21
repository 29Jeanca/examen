import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './routes/Routing'
import './GlobalStyles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing/>
  </StrictMode>,
)
