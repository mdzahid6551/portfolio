import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, FileSpreadsheet, Code, Database } from 'lucide-react';

const iconMap = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  Code: Code,
  Database: Database,
  FileSpreadsheet: FileSpreadsheet
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan mb-3">
            <Award className="w-4 h-4" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Industry <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Professional certifications demonstrating validated expertise across global technology platforms and analytical tools.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 text-brand-cyan group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-gradient-purple mb-4">
                    {cert.issuer} • {cert.date}
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono-code bg-white/5 border border-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span>Issued Certificate</span>
                  <span className="text-brand-cyan font-mono-code">ID: CERT-{2024001 + idx}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
