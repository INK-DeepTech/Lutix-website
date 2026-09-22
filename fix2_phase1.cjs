const fs = require('fs');

// 1. Update types.ts
let types = fs.readFileSync('a:/Website lutix/src/types.ts', 'utf8');
types = types.replace(
  /export type PageRoute =[\s\S]*?;/,
  "export type PageRoute = 'home' | 'academic-os' | 'pricing' | 'demo';"
);
fs.writeFileSync('a:/Website lutix/src/types.ts', types);

// 2. Update App.tsx
const appTsx = `import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AcademicOSPage } from './components/AcademicOSPage';
import { PricingCalculatorPage } from './components/PricingCalculatorPage';
import { DemoRequestPage } from './components/DemoRequestPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '') as PageRoute;
    if (['home', 'academic-os', 'pricing', 'demo'].includes(hash)) {
      return hash;
    }
    return 'home';
  });
  
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'academic-os', 'pricing', 'demo'].includes(hash)) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-white antialiased transition-colors duration-300">
      <Header currentRoute={currentRoute} onRouteChange={handleRouteChange} theme={theme} setTheme={setTheme} />

      <main className="flex-1" id="main-content">
        {currentRoute === 'home' && <HomePage onRouteChange={handleRouteChange} />}
        {currentRoute === 'academic-os' && <AcademicOSPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'pricing' && <PricingCalculatorPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'demo' && <DemoRequestPage onRouteChange={handleRouteChange} />}
      </main>

      <Footer onRouteChange={handleRouteChange} />
    </div>
  );
}
`;
fs.writeFileSync('a:/Website lutix/src/App.tsx', appTsx);

// 3. Update Header.tsx
const headerTsx = `import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
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
    { route: 'pricing', label: 'Pricing' },
    { route: 'demo', label: 'Demo' }
  ];

  return (
    <header className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <button 
          onClick={() => onRouteChange('home')}
          className="flex items-center"
        >
          <img 
            alt="Lutix" 
            className="h-10 w-auto object-contain dark:invert transition-all" 
            src="/logo-horizontal.png"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => onRouteChange(link.route)}
              className={\`text-sm font-semibold tracking-wide hover:text-[#3525cd] transition-colors \${currentRoute === link.route ? 'text-[#3525cd]' : 'text-slate-600 dark:text-slate-300'}\`}
            >
              {link.label}
            </button>
          ))}
          
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="ml-2 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button 
            onClick={() => onRouteChange('demo')}
            className="ml-4 px-6 py-2.5 bg-[#3525cd] text-white rounded-lg text-sm font-semibold hover:bg-[#2b1da8] transition-colors shadow-sm"
          >
            Book Demo
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button className="p-2 text-slate-900 dark:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
`;
fs.writeFileSync('a:/Website lutix/src/components/Header.tsx', headerTsx);

// 4. Update Footer.tsx
const footerTsx = `import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <img alt="Lutix" className="h-12 w-auto object-contain dark:invert" src="/logo-horizontal.png" />
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
            Carefully crafted software that never lets you down. Build your organization's future with our intelligent workflows and resilient infrastructure.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Platform</h4>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li><button onClick={() => onRouteChange('home')} className="hover:text-[#3525cd]">Home</button></li>
            <li><button onClick={() => onRouteChange('pricing')} className="hover:text-[#3525cd]">Pricing</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Products</h4>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li><button onClick={() => onRouteChange('academic-os')} className="hover:text-[#3525cd]">Academic OS</button></li>
            <li><button onClick={() => onRouteChange('demo')} className="hover:text-[#3525cd]">Request Demo</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
`;
fs.writeFileSync('a:/Website lutix/src/components/Footer.tsx', footerTsx);

console.log("Written Phase 1");
