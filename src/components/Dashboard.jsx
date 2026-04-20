import React from 'react';
import { useStadium } from '../context/StadiumContext';
import { Users, Timer, Sun, Moon, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SectionCard = ({ section }) => {
  return (
    <motion.div 
      layout
      className={`section-card ${section.status}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={`status-indicator status-${section.status}`} />
      <h3 className="card-title">{section.name}</h3>
      
      <div className="metrics">
        <div className="metric-item">
          <div className="metric-label">
            <Users size={12} style={{ marginRight: 4 }} />
            Crowd Density
          </div>
          <div className="metric-value">{section.density}%</div>
          <div className="progress-container">
            <div 
              className="progress-fill" 
              style={{ 
                width: `${section.density}%`,
                backgroundColor: section.density > 80 ? 'var(--status-critical)' : section.density > 60 ? 'var(--status-warning)' : 'var(--status-normal)'
              }} 
            />
          </div>
        </div>

        <div className="metric-item">
          <div className="metric-label">
            <Timer size={12} style={{ marginRight: 4 }} />
            Est. Queue Time
          </div>
          <div className="metric-value">{section.queueTime} min</div>
        </div>
      </div>

      {section.status === 'critical' && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="alert-banner"
          style={{ color: 'var(--status-critical)', fontSize: '0.7rem', marginTop: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}
        >
          <AlertTriangle size={12} style={{ marginRight: 4 }} />
          HIGH CONGESTION
        </motion.div>
      )}
    </motion.div>
  );
};

const Dashboard = () => {
  const { sections, lastUpdated, theme, toggleTheme } = useStadium();

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.025em' }}>
            Stadium Intelligence <span style={{ color: 'var(--primary)' }}>SIS</span>
          </h1>
          <p className="refresh-indicator">
            Real-time feed • Last update: {lastUpdated.toLocaleTimeString()} (Updates every 10s)
          </p>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div className="stats-grid">
        <AnimatePresence>
          {sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </AnimatePresence>
      </div>

      <footer style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        <p>© 2024 Stadium Intelligence System. All data is simulated for demonstration.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
