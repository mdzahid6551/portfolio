import React from 'react';
import { heroData } from '../data/portfolioData';
import CounterAnimation from './CounterAnimation';
import { ArrowRight, Download, Mail, Sparkles, Database, TrendingUp, Award, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Glow Backdrop Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan shadow-lg shadow-brand-cyan/10">
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Available for Data Analytics & AI Roles</span>
            </div>

            {/* Main Name & Title Header */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                Hi, I'm <span className="text-gradient-cyan">{heroData.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 dark:text-gray-300">
                {heroData.title}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-medium text-gradient-purple max-w-2xl leading-relaxed">
              "{heroData.tagline}"
            </p>

            {/* Short Intro Paragraph */}
            <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 max-w-2xl leading-relaxed">
              {heroData.shortIntro}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/25 transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Md_Zahid_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm glass-panel hover:border-brand-cyan/40 text-gray-200 hover:text-brand-cyan transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm glass-panel hover:border-brand-purple/40 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-brand-purple" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-white/10 mt-6">
              {heroData.stats.map((stat, idx) => (
                <div key={idx} className="glass-panel p-3.5 rounded-xl flex flex-col items-start border border-white/5 hover:border-brand-cyan/30 transition-all">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan">
                    <CounterAnimation target={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Profile Photo & Floating Hologram Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-3xl p-1 bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple shadow-2xl shadow-brand-cyan/20 group">
              
              {/* Image Wrapper */}
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0A0D14] relative">
                <img
                  src="/avatar.jpg"
                  alt="Md. Zahid"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-5 -right-5 glass-panel p-3 rounded-2xl border border-brand-cyan/40 shadow-xl flex items-center gap-2 animate-float">
                <div className="p-2 rounded-lg bg-brand-cyan/20 text-brand-cyan">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Data Specialist</div>
                  <div className="text-[10px] text-gray-400">SQL & Python Expert</div>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="absolute -bottom-5 -left-5 glass-panel p-3 rounded-2xl border border-brand-purple/40 shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '3s' }}>
                <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-purple">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Power BI & BI</div>
                  <div className="text-[10px] text-gray-400">Executive Dashboards</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
