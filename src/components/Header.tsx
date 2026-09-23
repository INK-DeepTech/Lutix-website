import React from 'react';
import { Menu } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onRouteChange, theme, setTheme }) => {
  const navLinks: { route: PageRoute; label: string }[] = [
    { route: 'home', label: 'Home' },
    { route: 'academic-os', label: 'Academic OS' },
    { route: 'pricing', label: 'Pricing' }
  ];

  return (
    <header className="w-full bg-white dark:bg-slate-900 text-corp-navy dark:text-white sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button 
          onClick={() => onRouteChange('home')}
          className="flex items-center"
        >
          <img 
            alt="Lutix" 
            className="h-16 md:h-24 lg:h-28 w-auto object-contain mix-blend-multiply dark:invert transition-all" 
            src="/logo-horizontal.png"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => onRouteChange(link.route)}
              className={`text-sm font-semibold tracking-wide hover:text-corp-vibrant transition-colors ${currentRoute === link.route ? 'text-corp-navy border-b-2 border-corp-navy' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {link.label}
            </button>
          ))}

          <button 
            onClick={() => onRouteChange('demo')}
            className="ml-4 px-6 py-2.5 bg-corp-vibrant text-white rounded-lg text-sm font-semibold hover:bg-corp-soft transition-colors shadow-sm"
          >
            Book Demo
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button className="p-2 text-corp-navy dark:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
