import React from 'react';
import { heroData } from '../data/portfolioData';
import { ArrowUp, BarChart2, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 relative z-10 bg-[#070A10]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple p-[1.5px]">
                <div className="w-full h-full bg-[#0A0D14] rounded-[10px] flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Md. Zahid
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              BCA Final Year Student specializing in Data Analytics, Business Intelligence, and AI-driven solutions.
            </p>
          </div>

          {/* Center Social Links */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-center gap-3">
            <a
              href={heroData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel hover:border-brand-cyan/40 text-gray-400 hover:text-brand-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href={heroData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel hover:border-brand-purple/40 text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${heroData.contactEmail}`}
              className="p-2.5 rounded-xl glass-panel hover:border-brand-cyan/40 text-gray-400 hover:text-brand-cyan transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${heroData.contactPhone}`}
              className="p-2.5 rounded-xl glass-panel hover:border-brand-purple/40 text-gray-400 hover:text-brand-purple transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Right Copyright & Back to top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
            <div className="text-[11px] text-gray-500 font-mono-code">
              © {new Date().getFullYear()} Md. Zahid
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl glass-panel hover:border-brand-cyan/40 text-brand-cyan hover:scale-110 transition-transform"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
