import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_SECTIONS, generateNextState } from '../utils/mockDataEngine';

const StadiumContext = createContext();

export const StadiumProvider = ({ children }) => {
  const [sections, setSections] = useState(INITIAL_SECTIONS);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const interval = setInterval(() => {
      setSections((prev) => generateNextState(prev));
      setLastUpdated(new Date());
    }, 10000); // 10s increment as requested

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <StadiumContext.Provider value={{ sections, lastUpdated, theme, toggleTheme }}>
      <div className={`app-container ${theme}-theme`}>
        {children}
      </div>
    </StadiumContext.Provider>
  );
};

export const useStadium = () => {
  const context = useContext(StadiumContext);
  if (!context) {
    throw new Error('useStadium must be used within a StadiumProvider');
  }
  return context;
};
