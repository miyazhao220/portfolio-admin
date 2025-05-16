import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutEdit from './pages/AboutEdit';
import PortfolioEdit from './pages/PortfolioEdit';
import ContactEdit from './pages/ContactEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutEdit />} />
        <Route path="/portfolio" element={<PortfolioEdit />} />
        <Route path="/contact" element={<ContactEdit />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App; 