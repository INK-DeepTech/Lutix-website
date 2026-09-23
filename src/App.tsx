import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AcademicOSPage } from './components/AcademicOSPage';
import { PricingCalculatorPage } from './components/PricingCalculatorPage';
import { DemoRequestPage } from './components/DemoRequestPage';
import AboutPage from './components/AboutPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '') as PageRoute;
    if (['home', 'academic-os', 'pricing', 'demo', 'about'].includes(hash)) {
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
      if (['home', 'academic-os', 'pricing', 'demo', 'about'].includes(hash)) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-corp-light dark:bg-slate-900 text-corp-navy dark:text-white antialiased transition-colors duration-300">
      <Header currentRoute={currentRoute} onRouteChange={handleRouteChange} theme={theme} setTheme={setTheme} />

      <main className="flex-1" id="main-content">
        {currentRoute === 'home' && <HomePage onRouteChange={handleRouteChange} />}
        {currentRoute === 'academic-os' && <AcademicOSPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'pricing' && <PricingCalculatorPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'demo' && <DemoRequestPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'about' && <AboutPage onRouteChange={handleRouteChange} />}
      </main>

      <Footer onRouteChange={handleRouteChange} />
    </div>
  );
}
