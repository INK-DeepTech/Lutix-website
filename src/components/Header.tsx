import React, { useState, useEffect, useRef } from 'react';
import { PageRoute } from '../types';
import { IMAGES } from '../data/content';
import { Menu, X, Shield, Sparkles, ChevronRight, Check } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onRouteChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const navLinks: { route: PageRoute; label: string; badge?: string }[] = [
    { route: 'company', label: 'Company' },
    { route: 'overview', label: 'Overview' },
    { route: 'dashboard', label: 'Dashboard', badge: 'Live' },
    { route: 'solutions-matrix', label: 'academicOS Solutions' },
    { route: 'pricing-calculator', label: 'Pricing & Calculator' },
    { route: 'demo-request', label: 'Demo / Request' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close profile dropdown on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowProfileMenu(false);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf8ff]/85 backdrop-blur-xl border-b border-[#e2e7ff]/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)]" role="banner">
      <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('company')}
          className="flex items-center gap-3 cursor-pointer group bg-transparent border-none"
          id="brand-logo-button"
          aria-label="Lutix — go to homepage"
        >
          <div className="relative flex items-center justify-center">
            <img 
              alt="Lutix" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 mix-blend-multiply" 
              src="/logo-horizontal.jpg"
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                id={`nav-link-${link.route}`}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#4f46e5] text-white shadow-sm font-semibold'
                    : 'text-[#464555] hover:text-[#131b2e] hover:bg-[#eaedff]/60'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                    isActive ? 'bg-white/25 text-white' : 'bg-[#86f2e4]/30 text-[#006f66]'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Actions & Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('demo-request')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-[#3525cd] text-white hover:bg-[#4d44e3] transition-all shadow-sm"
          >
            <span>Book a Demo</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* User profile dropdown trigger */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              id="profile-dropdown-button"
              className="w-9 h-9 rounded-full bg-[#3525cd] text-white flex items-center justify-center hover:ring-2 hover:ring-[#4f46e5]/40 transition-all shadow-sm"
              title="Enterprise Session"
              aria-haspopup="true"
              aria-expanded={showProfileMenu}
              aria-controls="profile-dropdown-menu"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
            </button>

            {showProfileMenu && (
              <div 
                className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#dae2fd] p-3 text-sm z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                id="profile-dropdown-menu"
                role="menu"
              >
                <div className="pb-2 mb-2 border-b border-[#eaedff]">
                  <div className="font-semibold text-[#131b2e]">Lutix Enterprise Console</div>
                  <div className="text-xs text-[#464555] truncate">user@lutix.dev</div>
                </div>
                <div className="space-y-1">
                  <button 
                    onClick={() => { setShowProfileMenu(false); onRouteChange('dashboard'); }}
                    className="w-full text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-[#f2f3ff] text-[#131b2e] flex items-center justify-between"
                    role="menuitem"
                  >
                    <span>Live Dashboard</span>
                    <span className="text-[10px] bg-[#89f5e7] text-[#00201d] px-1.5 py-0.5 rounded font-bold">ACTIVE</span>
                  </button>
                  <button 
                    onClick={() => { setShowProfileMenu(false); onRouteChange('solutions-matrix'); }}
                    className="w-full text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-[#f2f3ff] text-[#131b2e]"
                    role="menuitem"
                  >
                    Automation Tools
                  </button>
                  <button 
                    onClick={() => { setShowProfileMenu(false); onRouteChange('pricing-calculator'); }}
                    className="w-full text-left px-2.5 py-1.5 rounded-md text-xs hover:bg-[#f2f3ff] text-[#131b2e]"
                    role="menuitem"
                  >
                    Pricing & Plans
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#eaedff] flex items-center gap-1.5 text-[11px] text-[#006f66]">
                  <Shield className="w-3.5 h-3.5 text-[#006a61]" aria-hidden="true" />
                  <span>Secure Session ✓</span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#131b2e] hover:bg-[#e2e7ff]/50 transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="lg:hidden bg-[#faf8ff] border-b border-[#e2e7ff] px-6 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200 relative z-50"
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#4f46e5] text-white font-semibold'
                      : 'text-[#464555] hover:bg-[#e2e7ff]/60 hover:text-[#131b2e]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Check className="w-4 h-4" />}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#dae2fd] flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('demo-request')}
                className="w-full text-center py-2.5 rounded-lg bg-[#3525cd] text-white text-sm font-semibold shadow-sm"
              >
                Book a Free Demo
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};
