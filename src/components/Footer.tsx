import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="bg-white text-corp-navy py-24 border-t border-slate-200">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Newsletter Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <img alt="Lutix" className="h-12 w-auto object-contain mb-8 mix-blend-multiply" src="/logo-horizontal.png" />
            <p className="text-xl font-bold text-corp-navy mb-4">Join our newsletter</p>
            <p className="text-slate-500 mb-6">Stay up to date with the latest news, announcements, and articles.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-corp-vibrant focus:border-transparent"
              />
              <button className="px-6 py-3 bg-corp-navy text-white rounded-full font-bold hover:bg-corp-vibrant transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-corp-navy mb-6">Main Pages</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li><button onClick={() => onRouteChange('home')} className="hover:text-corp-vibrant transition-colors">Home</button></li>
                <li><button onClick={() => onRouteChange('academic-os')} className="hover:text-corp-vibrant transition-colors flex items-center gap-1">Academic OS <ArrowUpRight className="w-3 h-3"/></button></li>
                <li><button onClick={() => onRouteChange('pricing')} className="hover:text-corp-vibrant transition-colors">Pricing</button></li>
                <li><button onClick={() => onRouteChange('demo')} className="hover:text-corp-vibrant transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-corp-navy mb-6">Inner Pages</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-corp-navy mb-6">Utility Pages</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Styleguide</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">404 Error</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Licenses</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-corp-navy mb-6">Connect</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li><a href="mailto:lutixdeeptech@gmail.com" className="hover:text-corp-vibrant transition-colors">Email Us</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-corp-vibrant transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-slate-400">
          <p>© {new Date().getFullYear()} Lutix DeepTech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-corp-vibrant">Privacy Policy</a>
            <a href="#" className="hover:text-corp-vibrant">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
