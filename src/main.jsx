import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import FirstComponent from './First.jsx'
import Productive from './Productive.jsx'
import Getearly from './Getearly.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <FirstComponent/>
    <Productive/>
    <Getearly/>
    <Footer/>
  </React.StrictMode>,
)
