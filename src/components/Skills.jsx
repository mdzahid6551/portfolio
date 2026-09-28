import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code, Database, Wrench, Cpu, CheckCircle } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Tech Stack', icon: Cpu },
  { id: 'programming', label: 'Programming', icon: Code },
  { id: 'analyticsTools', label: 'Analytics Tools', icon: Wrench },
  { id: 'databases', label: 'Databases', icon: Database },
  { id: 'otherSkills', label: 'Core Competencies', icon: CheckCircle },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan mb-3">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Skills & <span className="text-gradient-cyan">Proficiencies</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Hands-on technical stack and analytical toolsets used for processing, modeling, and visualizing complex data.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 text-brand-cyan border border-brand-cyan/40 shadow-lg shadow-brand-cyan/15 scale-105'
                    : 'glass-panel text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brand-cyan/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Programming Languages</h3>
                  <span className="text-xs text-gray-400 font-mono-code">Core Code Logic</span>
                </div>
              </div>

              <div className="space-y-4">
                {skillsData.programming.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-brand-cyan font-mono-code">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Data Analytics Tools */}
          {(activeTab === 'all' || activeTab === 'analyticsTools') && (
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brand-purple/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-brand-purple/20 text-brand-purple">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Analytics Tools</h3>
                  <span className="text-xs text-gray-400 font-mono-code">Python & BI Suite</span>
                </div>
              </div>

              <div className="space-y-4">
                {skillsData.analyticsTools.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-brand-purple font-mono-code">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-pink transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Databases */}
          {(activeTab === 'all' || activeTab === 'databases') && (
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brand-cyan/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Databases</h3>
                  <span className="text-xs text-gray-400 font-mono-code">Relational Data Store</span>
                </div>
              </div>

              <div className="space-y-4">
                {skillsData.databases.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-brand-cyan font-mono-code">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Competencies & Other Skills */}
          {(activeTab === 'all' || activeTab === 'otherSkills') && (
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brand-accent/30 transition-all md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Core Analytics Methodologies</h3>
                  <span className="text-xs text-gray-400 font-mono-code">Practical Data Engineering & Insights</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skillsData.otherSkills.map((skill, idx) => (
                  <div key={idx} className="glass-panel p-4 rounded-2xl border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-brand-cyan font-mono-code">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
