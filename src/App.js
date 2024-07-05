import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Airports from './Airports';
import AirportDetails from './AirportDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Airports />} />
          <Route path="/details/:id" element={<AirportDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
