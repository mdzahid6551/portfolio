import React, { useState, useEffect } from 'react';
import AnalyticsBg from './components/AnalyticsBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BarChart2, Cpu, Sparkles } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Sync dark class on html root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Simulated futuristic AI data loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0A0D14] flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple p-[2px] animate-spin" style={{ animationDuration: '3s' }}>
            <div className="w-full h-full bg-[#0A0D14] rounded-[14px] flex items-center justify-center">
              <BarChart2 className="w-10 h-10 text-brand-cyan" />
            </div>
          </div>
          <div className="absolute inset-0 bg-brand-cyan/20 blur-xl rounded-full pointer-events-none"></div>
        </div>

        <div className="flex flex-col items-center space-y-2 text-center">
          <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
            Md. Zahid <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
          </span>
          <span className="text-xs font-mono-code text-brand-cyan uppercase tracking-widest flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" /> Initializing Data Analytics Suite...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative text-gray-100 selection:bg-brand-cyan selection:text-black transition-colors duration-300 ${darkMode ? 'bg-[#0A0D14]' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Dynamic Node Canvas Background */}
      <AnalyticsBg darkMode={darkMode} />

      {/* Main Application Container */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  );
}
