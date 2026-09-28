import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Experience & <span className="text-gradient-cyan">Internships</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Practical application of data analysis, dashboard building, and business intelligence across industry and academic roles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12">
          
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0A0D14] border-2 border-brand-cyan flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-brand-cyan/30">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 glass-panel-hover space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono-code text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-gradient-purple">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-gray-400 font-mono-code space-y-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  {exp.description.map((item, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item}
                      </p>
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
