import React from 'react';
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
