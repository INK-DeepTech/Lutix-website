import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Replaced with actual by user
          email: email,
          subject: 'New Newsletter Subscription',
          to: 'lutixdeeptech@gmail.com'
        })
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-brand-slate text-white flex flex-col w-full">

      {/* Massive CTA for all pages */}
      <div className="bg-brand-slate w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-12 max-w-4xl">
            Ready to build a smarter future?
          </h2>
          <button 
            onClick={() => onRouteChange('demo')}
            className="bg-white text-[#064089] hover:bg-slate-100 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Book Your Free Demo
          </button>
        </div>
      </div>

      <div className="py-24 border-t border-[#1e293b] w-full">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Newsletter Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <img alt="Lutix" className="h-12 w-auto object-contain mb-8 invert mix-blend-screen" src="/logo-horizontal.png" />
            <p className="text-xl font-bold text-white mb-4">Join our newsletter</p>
            <p className="text-slate-400 mb-6">Stay up to date with the latest news, announcements, and articles.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2 relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-corp-vibrant focus:border-transparent"
              />
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-3 bg-white text-[#0f172a] rounded-full font-bold hover:bg-slate-200 transition-colors whitespace-nowrap disabled:opacity-70"
              >
                {status === 'submitting' ? '...' : 'Subscribe'}
              </button>
              {status === 'success' && <p className="absolute -bottom-6 left-4 text-xs text-green-400">Subscribed successfully!</p>}
              {status === 'error' && <p className="absolute -bottom-6 left-4 text-xs text-red-400">Error subscribing. Try again.</p>}
            </form>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-6">Main Pages</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-400">
                <li><button onClick={() => onRouteChange('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => onRouteChange('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => onRouteChange('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => onRouteChange('demo')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Inner Pages</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Utility Pages</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Styleguide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">404 Error</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Connect</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-400">
                <li><a href="mailto:lutixdeeptech@gmail.com" className="hover:text-white transition-colors">Email Us</a></li>
                <li><a href="tel:+917397767430" className="hover:text-white transition-colors">+91 7397767430</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-slate-500">
          <p>© {new Date().getFullYear()} Lutix DeepTech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
          </div>
    </footer>
  );
};
