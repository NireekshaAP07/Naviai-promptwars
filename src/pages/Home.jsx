import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, Timer, Map, Bell, LayoutDashboard, WifiOff, 
  Database, Activity, CheckCircle, ArrowRight, Zap, Target
} from 'lucide-react';
import { useStadium } from '../context/StadiumContext';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Home = () => {
  const { sections, theme } = useStadium();

  const features = [
    { icon: Users, title: "Crowd Density Monitoring", description: "Real-time heatmaps and occupancy tracking across 10+ stadium zones." },
    { icon: Timer, title: "Smart Queue Prediction", description: "AI-driven wait time estimates for concessions and restrooms." },
    { icon: Map, title: "AI-Based Navigation", description: "Dynamic route guidance to find your seat or the shortest food queue." },
    { icon: Bell, title: "Live Alerts", description: "Instant notifications for emergencies, delays, and gate changes." },
    { icon: LayoutDashboard, title: "Ops Dashboard", description: "Full visibility for staff to manage crowd flow and incidents." },
    { icon: WifiOff, title: "Offline Mesh Support", description: "Resilient connectivity even during peak mobile network congestion." },
  ];

  const steps = [
    { icon: Database, title: "Collect Data", description: "IoT sensors, CCTV vision, and mobile signals feed the engine." },
    { icon: Activity, title: "Analyze", description: "Edge computing & AI process flow patterns in milliseconds." },
    { icon: Target, title: "Guide", description: "Predictive recommendations sent straight to fans and staff." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
              The Future of Live Sports
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.1]">
              Smarter Stadiums.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Better Experiences.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Real-time crowd intelligence, queue optimization, and seamless event navigation powered by edge AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-indigo-500/25 flex items-center">
                View Live Dashboard <ArrowRight size={20} className="ml-2" />
              </Link>
              <a href="#features" className="px-8 py-4 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Powerful Core Capabilities</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Our system integrates data from multiple sources to provide a 360° view of stadium operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Real-Time Monitoring at Your Fingertips
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Track crowd density and queue times in real time across all sections. Our predictive engine alerts staff before bottlenecks even form.
              </p>
              <div className="space-y-4">
                {['Live telemetry from 10+ sections', 'Dynamic queue update every 10s', 'AI-assisted staff deployment'].map((item, i) => (
                  <div key={item} className="flex items-center space-x-3 text-slate-900 dark:text-white font-medium">
                    <CheckCircle className="text-indigo-600" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-indigo-600/10 blur-[60px] rounded-full"></div>
              <div className="relative bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-800 max-w-lg mx-auto">
                <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">SIS LIVE PREVIEW</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {sections.slice(0, 4).map(s => (
                    <div key={s.id} className="bg-slate-800 rounded-xl p-4 border border-slate-700/50">
                      <div className="text-[10px] text-indigo-400 font-bold mb-1 uppercase tracking-tighter">{s.name}</div>
                      <div className="text-xl font-bold text-white mb-2">{s.density}%</div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${s.density}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-indigo-600 dark:bg-indigo-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Precision Engineering</h2>
            <p className="text-indigo-100 dark:text-indigo-200">How SIS transforms chaos into a seamless experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-px bg-indigo-400 opacity-30"></div>
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-xl mb-6 ring-4 ring-indigo-400/20">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-indigo-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Experience Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-indigo-600 mix-blend-overlay opacity-20 group-hover:opacity-10 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000" 
                  alt="Stadium Atmosphere" 
                  className="w-full h-full object-cover aspect-video"
                />
             </div>
             <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Elevating Every Fan's Journey</h2>
                <div className="space-y-8">
                   <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <Zap size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Personalized Support</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Tailored suggestions for concessions based on your seat and preferences.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <Users size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Gamification</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Earn rewards for helping balance crowd density by visiting "Blue Zones".</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8">Ready to Experience the Future?</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
            Join the stadium operators who are already transforming their venues into smart, responsive environments.
          </p>
          <Link to="/dashboard" className="inline-flex items-center px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-extrabold text-xl transition-all shadow-2xl shadow-indigo-500/40">
            Launch System <Zap size={24} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
