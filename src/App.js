import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayHome from './components/DisplayHome/DisplayHome';
import Home from './components/Home/Home';
import Details from './components/Content/Details/Details';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
