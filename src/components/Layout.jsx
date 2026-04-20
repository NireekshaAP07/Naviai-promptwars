import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStadium } from '../context/StadiumContext';
import { Sun, Moon, Database, Activity, Map, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useStadium();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Features', path: '/#features' },
    { name: 'About', path: '/#about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Stadium<span className="text-indigo-600">SIS</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  location.pathname === link.path 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              Launch System
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="text-indigo-600" size={24} />
              <span className="text-xl font-bold dark:text-white text-slate-900">Stadium Intelligence System</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
              Transforming the physical experience of attendees at large-scale sporting venues through real-time AI and edge computing.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/#features" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">Features</Link></li>
              <li><Link to="/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">Live Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/NireekshaAP07/Naviai-promptwars" className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
                  <ShieldCheck size={16} />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-slate-500 dark:text-slate-500 text-sm">
          © 2024 StadiumSIS. Built for Global Hackathons.
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900 dark:bg-slate-950">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
