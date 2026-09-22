import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onRouteChange: (route: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onRouteChange }) => {
  const navLinks = [
    { route: 'overview', label: 'Home' },
    { route: 'company', label: 'About' },
    { route: 'pricing', label: 'Plans' },
    { route: 'demo-request', label: 'Contact' }
  ];

  return (
    <header className="w-full bg-black text-white sticky top-0 z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <button 
          onClick={() => onRouteChange('overview')}
          className="flex items-center bg-white/5 px-4 py-2 rounded-lg"
        >
          <img 
            alt="Lutix" 
            className="h-10 md:h-12 w-auto object-contain" 
            src="/logo-horizontal.png"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => onRouteChange(link.route)}
              className={`text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors ${currentRoute === link.route ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'}`}
            >
              {link.label}
            </button>
          ))}
          <button className="flex items-center gap-2 ml-4 text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            Log In
          </button>
        </nav>

        <button className="md:hidden p-2 text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
