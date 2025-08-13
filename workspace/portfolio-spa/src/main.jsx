import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Root() {
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'ar')
    document.documentElement.setAttribute('dir', 'rtl')
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
