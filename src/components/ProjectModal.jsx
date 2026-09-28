import React from 'react';
import { X, ExternalLink, CheckCircle2, BarChart2, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#00F2FE', '#4FACFE', '#7F00FF', '#E100FF'];

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/70 animate-fadeIn">
      <div
        className="glass-panel w-full max-w-4xl rounded-3xl border border-white/15 shadow-2xl shadow-black/80 overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono-code text-brand-cyan tracking-wider uppercase">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Embedded Live Interactive Analytics Chart */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-[#070A10]/70">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-cyan" />
                <span>Live Analytics Visualization Preview</span>
              </h4>
              <span className="text-[11px] font-mono-code text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">
                Interactive Chart
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                {project.chartType === 'bar' && (
                  <BarChart data={project.chartData}>
                    <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                    <YAxis stroke="#6B7280" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#0A0D14', borderColor: '#00F2FE', borderRadius: '12px' }} />
                    <Bar dataKey="AvgScore" fill="#00F2FE" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="Actual" fill="#00F2FE" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="Target" fill="#7F00FF" radius={[6, 6, 0, 0]} />
                  </BarChart>
                )}

                {project.chartType === 'area' && (
                  <AreaChart data={project.chartData}>
                    <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                    <YAxis stroke="#6B7280" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#0A0D14', borderColor: '#00F2FE', borderRadius: '12px' }} />
                    <Area type="monotone" dataKey="Revenue" stroke="#00F2FE" fill="#00F2FE" fillOpacity={0.2} />
                    <Area type="monotone" dataKey="Profit" stroke="#7F00FF" fill="#7F00FF" fillOpacity={0.2} />
                  </AreaChart>
                )}

                {project.chartType === 'line' && (
                  <LineChart data={project.chartData}>
                    <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                    <YAxis stroke="#6B7280" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#0A0D14', borderColor: '#00F2FE', borderRadius: '12px' }} />
                    <Line type="monotone" dataKey="Attendance" stroke="#00F2FE" strokeWidth={3} dot={{ fill: '#00F2FE', r: 5 }} />
                  </LineChart>
                )}

                {project.chartType === 'pie' && (
                  <PieChart>
                    <Pie data={project.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {project.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0A0D14', borderColor: '#00F2FE', borderRadius: '12px' }} />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-gray-300 leading-relaxed text-base">
              {project.fullDesc}
            </p>
          </div>

          {/* Highlights Bullet Points */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Key Analytical Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 glass-panel p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Used */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono-code bg-white/5 border border-white/10 text-brand-cyan"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 border-t border-white/10 flex items-center justify-end gap-3 bg-[#070A10]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl glass-panel hover:border-brand-cyan/40 text-gray-200 hover:text-brand-cyan text-xs font-semibold flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-black bg-gradient-to-r from-brand-cyan to-brand-blue hover:opacity-90 text-xs font-bold flex items-center gap-2 shadow-md shadow-brand-cyan/20"
          >
            <span>Live Interactive Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
