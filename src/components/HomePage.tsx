import React from 'react';
import { ArrowRight, Zap, Shield, Activity, Monitor, Smartphone, Code, Truck } from 'lucide-react';
import { PageRoute } from '../types';
import { FOUNDERS } from '../data/content';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
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

      {/* Services We Offer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 group hover:border-[#3525cd]/30">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:text-[#3525cd] text-slate-700 dark:text-slate-300 transition-colors">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Custom Web Pages & Software</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Bespoke digital solutions tailored to your brand's specific needs, ensuring a unique and powerful online presence.
            </p>
          </div>
          
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 group hover:border-[#3525cd]/30">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:text-[#3525cd] text-slate-700 dark:text-slate-300 transition-colors">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Mobile & Web Apps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Cross-platform applications designed for performance, scalability, and seamless user experiences on any device.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 group hover:border-[#3525cd]/30">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:text-[#3525cd] text-slate-700 dark:text-slate-300 transition-colors">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Website Development</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern, responsive, and robust websites engineered with the latest frontend and backend technologies.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 group hover:border-[#3525cd]/30">
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:text-[#3525cd] text-slate-700 dark:text-slate-300 transition-colors">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Supply Chain Solutions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Intelligent logistics and inventory tracking software to optimize your entire operational pipeline.
            </p>
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
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-[#3525cd]/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[#3525cd]/10 text-[#3525cd] dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Intelligent Workflows</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Smart workflows that detect and fix common errors automatically.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-[#3525cd]/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[#3525cd]/10 text-[#3525cd] dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Security</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Your data is encrypted everywhere. Access is controlled by role.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-[#3525cd]/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[#3525cd]/10 text-[#3525cd] dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                className="w-48 h-48 rounded-full object-cover shadow-md mb-6 hover:scale-105 transition-transform duration-500"
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
