import React from 'react';
import { StadiumProvider } from './context/StadiumContext';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  return (
    <StadiumProvider>
      <Dashboard />
    </StadiumProvider>
  );
}

export default App;
