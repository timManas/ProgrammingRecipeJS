import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Header } from './Header'
import { Menu } from './Menu'
import { Footer } from './Footer'

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

//React version 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
