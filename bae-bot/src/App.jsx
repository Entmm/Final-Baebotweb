import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Token from './pages/Token';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes for the pages */}
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/token" element={<Token />} />
      </Routes>
    </Router>
  );
};

export default App;
