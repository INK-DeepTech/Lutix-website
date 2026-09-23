import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onRouteChange, theme, setTheme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white text-corp-navy sticky top-0 z-50 border-b border-slate-200 transition-colors duration-300">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <button 
          onClick={() => onRouteChange('home')}
          className="flex items-center"
        >
          <img 
            alt="Lutix" 
            className="h-16 md:h-20 lg:h-24 w-auto object-contain mix-blend-multiply transition-all" 
            src="/logo-horizontal.png"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8 relative">
          
          <button
            onClick={() => onRouteChange('home')}
            className={`text-sm font-semibold tracking-wide hover:text-corp-vibrant transition-colors ${currentRoute === 'home' ? 'text-corp-navy border-b-2 border-corp-navy' : 'text-slate-600'}`}
          >
            HOME
          </button>

          <button
            onClick={() => onRouteChange('academic-os')}
            className={`text-sm font-semibold tracking-wide hover:text-corp-vibrant transition-colors ${currentRoute === 'academic-os' ? 'text-corp-navy border-b-2 border-corp-navy' : 'text-slate-600'}`}
          >
            ACADEMIC OS
          </button>

          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold tracking-wide text-slate-600 hover:text-corp-vibrant transition-colors py-2">
              SOLUTIONS <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-[#1e3b70] rounded-2xl shadow-xl py-3 overflow-hidden border border-[#2a4d8c] z-50">
                <div className="flex flex-col">
                  <button 
                    onClick={() => { onRouteChange('about'); setIsDropdownOpen(false); }}
                    className="px-6 py-3 text-left text-white uppercase text-sm font-semibold tracking-wider hover:bg-white/10 transition-colors"
                  >
                    ABOUT
                  </button>
                  <button 
                    onClick={() => { /* noop for now */ setIsDropdownOpen(false); }}
                    className="px-6 py-3 text-left text-white uppercase text-sm font-semibold tracking-wider hover:bg-white/10 transition-colors"
                  >
                    INTEGRATIONS
                  </button>
                  <button 
                    onClick={() => { onRouteChange('pricing'); setIsDropdownOpen(false); }}
                    className="px-6 py-3 text-left text-white uppercase text-sm font-semibold tracking-wider hover:bg-white/10 transition-colors"
                  >
                    PRICING
                  </button>
                  <button 
                    onClick={() => { /* noop for now */ setIsDropdownOpen(false); }}
                    className="px-6 py-3 text-left text-white uppercase text-sm font-semibold tracking-wider hover:bg-white/10 transition-colors"
                  >
                    CAREER
                  </button>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => onRouteChange('demo')}
            className="ml-4 px-6 py-3 bg-corp-vibrant text-white rounded-full text-sm font-bold hover:bg-corp-soft transition-colors shadow-sm"
          >
            Book Demo
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button className="p-2 text-corp-navy">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
