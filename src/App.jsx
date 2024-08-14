import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from './pages/home'
import Grade from './pages/Grade'
import Tools from './pages/Tools'

// React Routes
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/tool" element={<Tools/>} />
        </Routes>        
    </div>
  )
}

export default App
