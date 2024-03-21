import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/Colors.css"
import './styles/index.css'
import "./styles/App.css"
import "./styles/Template.css"
import "./styles/InfoIcon.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
