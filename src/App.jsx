import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Report from './components/Report'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App
