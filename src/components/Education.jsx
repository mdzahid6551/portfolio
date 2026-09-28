import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Star, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Education & <span className="text-gradient-cyan">Coursework</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Formal Computer Applications degree specialization focused on computational data structures, DBMS, and statistical analytics.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 glass-panel-hover relative overflow-hidden space-y-6"
            >
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-mono-code mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{edu.status}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-medium text-gray-300 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-col md:items-end space-y-1">
                  <span className="text-xs font-mono-code text-gray-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                    {edu.period}
                  </span>
                  <div className="text-lg font-bold text-gradient-cyan font-mono-code flex items-center gap-1.5 mt-2">
                    <Star className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-cyan" />
                  <span>Key Coursework & Specializations</span>
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {edu.coursework.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="glass-panel px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold text-gray-200 hover:border-brand-cyan/40 hover:text-brand-cyan transition-all"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
