import React from 'react'
import Navbar from './components/Navbar'
import Mainbar from './components/Mainbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App