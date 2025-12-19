import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Report from './components/Report'
import Admin from './components/Admin'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report/>} />
          <Route path="/admin" element={<Admin/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App
