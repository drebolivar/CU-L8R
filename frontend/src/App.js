import './App.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
// import Form from './components/Form'
import Update from './pages/Update'
import Moods from './pages/Moods'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Moods" element={<Moods />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
