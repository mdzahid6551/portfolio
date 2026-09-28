import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ExternalLink, Eye, BarChart2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { BarChart, Bar, ResponsiveContainer, AreaChart, Area, LineChart, Line } from 'recharts';

const categories = ['All', 'Business Intelligence', 'Data Analytics', 'AI & Dashboards', 'Machine Learning'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-cyan/30 text-xs font-mono-code text-brand-cyan mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Analytics & AI <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Real-world data solutions ranging from automated Business Intelligence dashboards to predictive machine learning models.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 text-brand-cyan border border-brand-cyan/40 shadow-lg shadow-brand-cyan/15 scale-105'
                  : 'glass-panel text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between overflow-hidden group"
            >
              <div>
                
                {/* Mini Recharts Interactive Visual Header */}
                <div className="h-44 w-full bg-[#070A10]/90 p-4 border-b border-white/10 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono-code px-2.5 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan">
                      {project.category}
                    </span>
                    <BarChart2 className="w-4 h-4 text-gray-500 group-hover:text-brand-cyan transition-colors" />
                  </div>

                  {/* Sparkline chart inside preview */}
                  <div className="h-28 w-full mt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      {project.chartType === 'area' ? (
                        <AreaChart data={project.chartData}>
                          <Area type="monotone" dataKey="Revenue" stroke="#00F2FE" fill="#00F2FE" fillOpacity={0.25} />
                        </AreaChart>
                      ) : project.chartType === 'line' ? (
                        <LineChart data={project.chartData}>
                          <Line type="monotone" dataKey="Attendance" stroke="#7F00FF" strokeWidth={2.5} dot={false} />
                        </LineChart>
                      ) : (
                        <BarChart data={project.chartData}>
                          <Bar dataKey="AvgScore" fill="#00F2FE" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="Actual" fill="#00F2FE" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="value" fill="#7F00FF" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-panel hover:border-brand-cyan/40 text-gray-400 hover:text-white transition-colors"
                    title="View GitHub Source"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-panel hover:border-brand-purple/40 text-gray-400 hover:text-brand-cyan transition-colors"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
