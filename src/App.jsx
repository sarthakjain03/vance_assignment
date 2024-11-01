import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/home' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
