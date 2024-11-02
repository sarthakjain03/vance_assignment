import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./layout/Navbar";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/signin" element={<SignInPage />} />
            <Route exact path="/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
