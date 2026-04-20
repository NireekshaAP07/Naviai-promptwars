import React from 'react';
import { useStadium } from '../context/StadiumContext';
import { Users, Timer, AlertTriangle, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SectionCard = ({ section }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'critical': return 'text-red-500';
      case 'warning': return 'text-amber-500';
      default: return 'text-emerald-500';
    }
  };

  const getProgressColor = (density) => {
    if (density > 80) return 'bg-red-500';
    if (density > 60) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
    >
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${section.density > 80 ? 'bg-red-500 animate-pulse' : section.density > 60 ? 'bg-amber-500' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`} />
      
      <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">{section.name}</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center">
              <Users size={14} className="mr-2" /> Crowd Density
            </span>
            <span className={`text-2xl font-black ${getStatusColor(section.status)}`}>{section.density}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${section.density}%` }}
              className={`h-full ${getProgressColor(section.density)}`}
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-slate-50 dark:border-slate-800/50">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center">
            <Timer size={14} className="mr-2" /> Est. Queue
          </span>
          <span className="text-lg font-bold text-slate-900 dark:text-white">{section.queueTime} min</span>
        </div>
      </div>

      {section.status === 'critical' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center text-[10px] font-black text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg"
        >
          <AlertTriangle size={12} className="mr-2" />
          IMMEDIATE ACTION REQUIRED: HIGH CONGESTION
        </motion.div>
      )}
    </motion.div>
  );
};

const Dashboard = () => {
  const { sections, lastUpdated } = useStadium();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
               <Activity size={20} />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Stadium Intelligence <span className="text-indigo-600 uppercase text-sm">Live</span></h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Monitoring <span className="text-indigo-600 dark:text-indigo-400">10 active zones</span> with real-time AI telemetry.
          </p>
        </div>
        <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Last Pulse</div>
           <div className="text-sm font-mono font-bold text-slate-900 dark:text-white">{lastUpdated.toLocaleTimeString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </AnimatePresence>
      </div>
      
      <div className="mt-16 p-8 rounded-3xl bg-indigo-600 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-10">
            <Activity size={120} />
         </div>
         <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">System Health: Optimal</h2>
            <p className="text-indigo-100 max-w-xl text-sm">All edge nodes are reporting normal latency. AI models are operating with 99.8% precision for crowd flow prediction.</p>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
