import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';
import Navbar from './layout/Navbar';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/signin' element={<SignInPage />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
