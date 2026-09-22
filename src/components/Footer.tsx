import React from 'react';
import { PageRoute } from '../types';
import { IMAGES } from '../data/content';
import { ShieldCheck, ArrowUpRight, ArrowUp, Code, Briefcase, MessageCircle } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f2f3ff] border-t border-[#dae2fd] py-8 text-[#464555]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
        {/* Brand Summary */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              alt="Lutix" 
              className="h-32 w-auto object-contain mix-blend-darken" 
              src="/logo-stacked.jpg"
            />
          </div>
          <p className="text-sm text-[#464555] leading-relaxed max-w-sm">
            Building smart, reliable software for universities and large organizations worldwide.
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs text-[#006f66] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#006a61]" aria-hidden="true" />
            <span>SOC2 Type II • ISO 27001 • HIPAA & GDPR Certified</span>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white border border-[#dae2fd] flex items-center justify-center text-[#464555] hover:text-[#3525cd] hover:border-[#3525cd]/40 transition-colors">
              <Briefcase className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white border border-[#dae2fd] flex items-center justify-center text-[#464555] hover:text-[#3525cd] hover:border-[#3525cd]/40 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-white border border-[#dae2fd] flex items-center justify-center text-[#464555] hover:text-[#3525cd] hover:border-[#3525cd]/40 transition-colors">
              <Code className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <nav className="md:col-span-2 space-y-3" aria-label="Platform links">
          <span className="text-xs font-semibold text-[#131b2e] uppercase tracking-wider block">Platform</span>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => onRouteChange('overview')} className="hover:text-[#3525cd] transition-colors text-left">
                Platform Overview
              </button>
            </li>
            <li>
              <button onClick={() => onRouteChange('solutions-matrix')} className="hover:text-[#3525cd] transition-colors text-left">
                Features & Solutions
              </button>
            </li>
            <li>
              <button onClick={() => onRouteChange('pricing-calculator')} className="hover:text-[#3525cd] transition-colors text-left">
                Pricing Calculator
              </button>
            </li>
          </ul>
        </nav>

        <nav className="md:col-span-3 space-y-3" aria-label="Offerings">
          <span className="text-xs font-semibold text-[#131b2e] uppercase tracking-wider block">Offerings</span>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-[#131b2e] font-medium flex items-center gap-1">
                <span>academicOS</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#e2dfff] text-[#3323cc] font-semibold">Flagship</span>
              </span>
              <p className="text-xs text-[#464555] mt-0.5">Higher Education & Institutional ERP</p>
            </li>
            <li>
              <span className="text-[#131b2e] font-medium">NexusScale Mesh</span>
              <p className="text-xs text-[#464555] mt-0.5">Self-Managing Cloud Infrastructure</p>
            </li>
            <li>
              <button onClick={() => onRouteChange('demo-request')} className="text-xs text-[#3525cd] hover:underline flex items-center gap-1 font-medium mt-1">
                <span>Book a Demo</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </nav>

        <nav className="md:col-span-3 space-y-3" aria-label="Company links">
          <span className="text-xs font-semibold text-[#131b2e] uppercase tracking-wider block">Company & Leadership</span>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => onRouteChange('company')} className="hover:text-[#3525cd] transition-colors text-left">
                Executive Leadership
              </button>
            </li>
            <li>
              <button onClick={() => onRouteChange('company')} className="hover:text-[#3525cd] transition-colors text-left">
                Our Purpose: IMAGINE. INNOVATE. IMPACT.
              </button>
            </li>
            <li>
              <button onClick={() => onRouteChange('company')} className="hover:text-[#3525cd] transition-colors text-left">
                Our Mission
              </button>
            </li>
            <li>
              <span className="text-xs text-[#464555] block pt-1">
                Global Operations: Silicon Valley • Chennai • Singapore
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-[#dae2fd]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#464555] gap-4">
        <div>
          © {new Date().getFullYear()} Lutix Inc. & NexusScale Architecture. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#131b2e] transition-colors">Security Whitepaper</a>
          <a href="#" className="hover:text-[#131b2e] transition-colors">Privacy Framework</a>
          <a href="#" className="hover:text-[#131b2e] transition-colors">Compliance Trust Portal</a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#3525cd] transition-colors font-medium"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
