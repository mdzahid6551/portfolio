import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Medal, CheckCircle2, GitBranch, Star } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Medal: Medal,
  CheckCircle2: CheckCircle2,
  GitBranch: GitBranch
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan mb-3">
            <Trophy className="w-4 h-4" />
            <span>Honors & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Key <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Recognitions earned across academic performance, analytics hackathons, and community open-source contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((ach, idx) => {
            const IconComponent = iconMap[ach.icon] || Star;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 text-brand-cyan group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-code px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple">
                      #{ach.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                    {ach.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono-code text-gray-500 flex items-center justify-between">
                  <span>Verified Distinction</span>
                  <span className="text-brand-cyan">★ Honor</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
