import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage/LandingPage.jsx';
import About from './pages/About/About';
import React from 'react';
import Login from './pages/LoginPage/LoginPage.jsx';
import Register from './pages/RegisterPage/RegisterPage.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

const App = () => {
  return (
    <React.Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/user/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </React.Fragment>
  );
};

export default App
