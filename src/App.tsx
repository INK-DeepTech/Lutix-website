/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompanyPage } from './components/CompanyPage';
import { OverviewPage } from './components/OverviewPage';
import { SolutionsMatrixPage } from './components/SolutionsMatrixPage';
import { PricingCalculatorPage } from './components/PricingCalculatorPage';
import { DemoRequestPage } from './components/DemoRequestPage';
import { DashboardPage } from './components/DashboardPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '') as PageRoute;
    if (['company', 'overview', 'solutions-matrix', 'pricing-calculator', 'demo-request', 'dashboard'].includes(hash)) {
      return hash;
    }
    return 'company';
  });

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['company', 'overview', 'solutions-matrix', 'pricing-calculator', 'demo-request', 'dashboard'].includes(hash)) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      'company': 'Lutix — About Us',
      'overview': 'Lutix — Platform Overview',
      'solutions-matrix': 'Lutix — Solutions & Capabilities',
      'pricing-calculator': 'Lutix — Pricing & Plans',
      'demo-request': 'Lutix — Book a Demo',
      'dashboard': 'Lutix — Live Dashboard',
    };
    document.title = titles[currentRoute] || 'Lutix — Enterprise Software';
  }, [currentRoute]);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e] antialiased selection:bg-[#e2dfff] selection:text-[#0f0069]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#3525cd] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <Header currentRoute={currentRoute} onRouteChange={handleRouteChange} />

      <main className="flex-1 pt-16" id="main-content">
        {currentRoute === 'company' && <CompanyPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'overview' && <OverviewPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'solutions-matrix' && <SolutionsMatrixPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'pricing-calculator' && <PricingCalculatorPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'demo-request' && <DemoRequestPage onRouteChange={handleRouteChange} />}
        {currentRoute === 'dashboard' && <DashboardPage onRouteChange={handleRouteChange} />}
      </main>

      <Footer onRouteChange={handleRouteChange} />
    </div>
  );
}

