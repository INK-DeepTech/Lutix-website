import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="bg-black text-white py-24 px-8 md:px-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-8">
          <div className="flex items-center gap-3">
            <img 
              alt="Lutix" 
              className="h-24 w-auto object-contain" 
              src="/logo-horizontal.png"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
            Smart software built for complex organizations. Modernize your infrastructure and scale with confidence.
          </p>
          <div className="pt-4">
             <button 
                onClick={() => onRouteChange('demo-request')}
                className="px-6 py-3 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2"
              >
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </button>
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 md:pl-16">
          <nav className="space-y-6" aria-label="Platform features">
            <span className="text-xs font-bold text-white uppercase tracking-[0.2em] block mb-8">Platform</span>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <button onClick={() => onRouteChange('overview')} className="hover:text-white transition-colors text-left uppercase tracking-wider text-xs">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onRouteChange('solutions-matrix')} className="hover:text-white transition-colors text-left uppercase tracking-wider text-xs">
                  Solutions Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onRouteChange('pricing')} className="hover:text-white transition-colors text-left uppercase tracking-wider text-xs">
                  Pricing & Scale
                </button>
              </li>
            </ul>
          </nav>

          <nav className="space-y-6" aria-label="Offerings">
            <span className="text-xs font-bold text-white uppercase tracking-[0.2em] block mb-8">Offerings</span>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="text-white font-bold uppercase tracking-wider text-xs">academicOS</span>
                <p className="text-xs text-gray-500 mt-1">Higher Education & Institutional ERP</p>
              </li>
            </ul>
          </nav>

          <nav className="space-y-6" aria-label="Company links">
            <span className="text-xs font-bold text-white uppercase tracking-[0.2em] block mb-8">Company</span>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <button onClick={() => onRouteChange('company')} className="hover:text-white transition-colors text-left uppercase tracking-wider text-xs">
                  Executive Leadership
                </button>
              </li>
              <li>
                <span className="text-gray-500 uppercase tracking-wider text-xs cursor-not-allowed">
                  Careers (Hiring)
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 uppercase tracking-widest font-semibold">
        <p>© {new Date().getFullYear()} Lutix, Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};
