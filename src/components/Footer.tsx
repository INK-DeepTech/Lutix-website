import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="bg-corp-deep text-white py-16 transition-colors duration-300">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <img alt="Lutix" className="h-16 md:h-20 w-auto object-contain invert mix-blend-screen" src="/logo-horizontal.png" />
          <p className="text-corp-accent-sky text-sm max-w-sm leading-relaxed">
            Carefully crafted software that never lets you down. Build your organization's future with our intelligent workflows and resilient infrastructure.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">Platform</h4>
          <ul className="space-y-3 text-sm text-corp-accent-sky">
            <li><button onClick={() => onRouteChange('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => onRouteChange('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Products</h4>
          <ul className="space-y-3 text-sm text-corp-accent-sky">
            <li><button onClick={() => onRouteChange('academic-os')} className="hover:text-white transition-colors">Academic OS</button></li>
            <li><button onClick={() => onRouteChange('demo')} className="hover:text-white transition-colors">Request Demo</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-corp-accent-sky">
            <li>
              <a href="mailto:lutixdeeptech@gmail.com" className="hover:text-white transition-colors">
                lutixdeeptech@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:7397767430" className="hover:text-white transition-colors">
                +91 7397767430
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
