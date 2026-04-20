import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StadiumProvider } from './context/StadiumContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <StadiumProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </StadiumProvider>
    </Router>
  );
}

export default App;
