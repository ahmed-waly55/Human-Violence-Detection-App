import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Model from "./pages/Model";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

const AppContent = () => {
  const location = useLocation();  
  
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/model" element={<PrivateRoute><Model /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {location.pathname !== "/model" && location.pathname !== "/login" 
      & location.pathname !== "/register" && <Footer />}
      
    </>
  );
};

export default App;
