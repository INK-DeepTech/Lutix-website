const fs = require('fs');

const homeTsx = `import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Shield, Activity } from 'lucide-react';
import { PageRoute } from '../types';
import { FOUNDERS } from '../data/content';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'finance' | 'operations'>('engineering');

  return (
    <div className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3525cd]/10 text-[#3525cd] dark:text-[#8b80f9] rounded-full text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Smart Automation for Your Whole Organization</span>
          </div>

          <h1 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl">
            Run Your Organization Smarter — With Less Manual Work
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Bring your engineering, finance, and operations teams onto one platform. Automate approvals, reduce busywork, and grow without needing to hire more people.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onRouteChange('demo')}
              className="px-8 py-3.5 bg-[#3525cd] text-white rounded-xl text-sm font-semibold hover:bg-[#2b1da8] transition-all shadow-md flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#3525cd] dark:text-[#8b80f9]">$4.2B+</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-3 uppercase tracking-wide">Processed Annually</div>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#3525cd] dark:text-[#8b80f9]">99.99%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-3 uppercase tracking-wide">Guaranteed Uptime</div>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#3525cd] dark:text-[#8b80f9]">10x</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-3 uppercase tracking-wide">Faster Deployments</div>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-[#3525cd] dark:text-[#8b80f9]">2,500+</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-3 uppercase tracking-wide">Enterprise Clients</div>
          </div>
        </div>
      </section>

      {/* Dynamic Department Solutions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-[#3525cd] dark:text-[#8b80f9] uppercase tracking-widest">
            Solutions for Every Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Tailored Solutions for Every Department
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl gap-2">
            {['engineering', 'finance', 'operations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={\`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all \${
                  activeTab === tab
                    ? 'bg-white dark:bg-slate-700 text-[#3525cd] dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }\`}
              >
                For {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              {activeTab === 'engineering' && 'Automatic code testing & deployment.'}
              {activeTab === 'finance' && 'Automated billing & reconciliation.'}
              {activeTab === 'operations' && 'Connect workflows across every department.'}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeTab === 'engineering' && 'Speed up your releases with AI-powered testing and infrastructure that automatically scales up or down based on demand.'}
              {activeTab === 'finance' && 'Close your books faster with real-time revenue recognition and automated expense tracking that scales with your business.'}
              {activeTab === 'operations' && 'Link your CRM, student records, ERP, and internal databases into automated workflows that run complex business processes without anyone being the bottleneck.'}
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-12 rounded-2xl flex items-center justify-center">
            <img 
              className="w-full max-w-sm object-contain mix-blend-multiply dark:mix-blend-screen" 
              alt="Platform Demo" 
              src="/logo-stacked.png"
            />
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              A Platform Built for Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 rounded-xl bg-[#3525cd]/10 text-[#3525cd] dark:text-[#8b80f9] flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Intelligent Workflows</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Smart workflows that detect and fix common errors automatically.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 rounded-xl bg-[#3525cd]/10 text-[#3525cd] dark:text-[#8b80f9] flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Security</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Your data is encrypted everywhere. Access is controlled by role.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 rounded-xl bg-[#3525cd]/10 text-[#3525cd] dark:text-[#8b80f9] flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Real-Time Telemetry</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                See every automated transaction as it happens and dive deep into data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-100 dark:border-slate-800">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-bold text-[#3525cd] dark:text-[#8b80f9] uppercase tracking-widest">
            Executive Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Driven by vision, anchored in execution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FOUNDERS.map((leader, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img 
                src={leader.image} 
                alt={leader.name}
                className="w-48 h-48 rounded-full object-cover shadow-md mb-6"
              />
              <h3 className="font-serif-brand text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {leader.name}
              </h3>
              <p className="text-[#3525cd] dark:text-[#8b80f9] font-semibold text-sm">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
`;
fs.writeFileSync('a:/Website lutix/src/components/HomePage.tsx', homeTsx);

const academicOSTsx = `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface AcademicOSPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AcademicOSPage: React.FC<AcademicOSPageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-white dark:bg-slate-900 min-h-screen pt-20 transition-colors duration-300">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#3525cd] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <img src="/logo-stacked.png" alt="" className="w-96 h-96 object-contain invert" />
            </div>

            <div className="max-w-3xl flex flex-col gap-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white font-medium text-xs w-fit">
                <span className="material-symbols-outlined text-[16px]">school</span>
                <span>Flagship Product</span>
              </div>

              <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Introducing academicOS
              </h1>

              <p className="text-lg text-white/90 leading-relaxed">
                The all-in-one platform built specifically for universities. academicOS brings together student records, faculty tools, and campus analytics into one fast, unified workspace.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <button 
                  onClick={() => onRouteChange('demo')}
                  className="bg-white text-[#3525cd] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all shadow-md flex items-center gap-2"
                >
                  <span>Request Consultation & Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
`;
fs.writeFileSync('a:/Website lutix/src/components/AcademicOSPage.tsx', academicOSTsx);

console.log("Written Phase 2");
