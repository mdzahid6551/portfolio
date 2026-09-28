import React from 'react';
import { aboutData } from '../data/portfolioData';
import { Brain, Lightbulb, BarChart3, Users, Zap, GraduationCap, Target, Compass } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Lightbulb: Lightbulb,
  BarChart3: BarChart3,
  Users: Users,
  Zap: Zap
};

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan mb-3">
            <Compass className="w-4 h-4" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Passionate BCA Final Year student with a relentless drive to transform complex datasets into high-impact business decisions.
          </p>
        </div>

        {/* Top Split: Career Objective & Education Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Objective Glass Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-36 h-36 text-brand-cyan" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Career Objective</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg relative z-10">
              {aboutData.careerObjective}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {aboutData.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan"
                >
                  #{area}
                </span>
              ))}
            </div>
          </div>

          {/* Education Highlight Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 hover:border-brand-purple/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap className="w-36 h-36 text-brand-purple" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-brand-purple/20 text-brand-purple">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education Status</h3>
              </div>

              <h4 className="text-lg font-semibold text-brand-cyan mb-2">
                {aboutData.education}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently completing capstone project in AI Data Modeling & Advanced SQL query optimizations. Graduating in 2025.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400">Current CGPA</span>
              <span className="text-xl font-bold text-white font-mono-code">8.8 / 10.0</span>
            </div>
          </div>

        </div>

        {/* Bottom Strengths Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-200">
            Personal Strengths & Core Competencies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {aboutData.strengths.map((strength, idx) => {
              const IconComponent = iconMap[strength.icon] || Brain;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col items-start justify-between group"
                >
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 text-brand-cyan group-hover:scale-110 transition-transform mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {strength.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
