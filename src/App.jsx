import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage/LandingPage.jsx';
import About from './pages/About/About';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </React.Fragment>
  );
};

export default App
