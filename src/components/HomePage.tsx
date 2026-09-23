import React from 'react';
import { ArrowRight, Zap, Shield, Activity, Monitor, Smartphone, Code, Truck } from 'lucide-react';
import { PageRoute } from '../types';
import { FOUNDERS } from '../data/content';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-brand-mint dark:bg-slate-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-800 bg-brand-mint dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 text-brand-teal dark:text-[#8b80f9] rounded-full text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Smart Automation for Your Whole Organization</span>
          </div>

          <h1 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy dark:text-white tracking-tight leading-tight max-w-4xl">
            Run Your Organization Smarter — With Less Manual Work
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Bring your engineering, finance, and operations teams onto one platform. Automate approvals, reduce busywork, and grow without needing to hire more people.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onRouteChange('demo')}
              className="px-8 py-3.5 bg-brand-teal text-white rounded-xl text-sm font-semibold hover:bg-brand-cyan transition-all shadow-md flex items-center gap-2"
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
          <h2 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy dark:text-white">
            Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-brand-mint/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand-cyan transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-mint dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-brand-teal dark:text-[#8b80f9]">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-brand-navy dark:text-white mb-2">Custom Web Pages & Software</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Bespoke digital solutions tailored to your brand's specific needs, ensuring a unique and powerful online presence.
            </p>
          </button>
          
          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-brand-mint/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand-cyan transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-mint dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-brand-teal dark:text-[#8b80f9]">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-brand-navy dark:text-white mb-2">Mobile & Web Apps</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Cross-platform applications designed for performance, scalability, and seamless user experiences on any device.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-brand-mint/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand-cyan transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-mint dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-brand-teal dark:text-[#8b80f9]">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-brand-navy dark:text-white mb-2">Website Development</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern, responsive, and robust websites engineered with the latest frontend and backend technologies.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-brand-mint/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand-cyan transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-mint dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-brand-teal dark:text-[#8b80f9]">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-brand-navy dark:text-white mb-2">Supply Chain Solutions</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Intelligent logistics and inventory tracking software to optimize your entire operational pipeline.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-brand-mint/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand-cyan transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-mint dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-brand-teal dark:text-[#8b80f9]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-brand-navy dark:text-white mb-2">Intelligent Systems</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              AI-driven analytics and automation tools designed to simplify complex decision making.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-brand-mint/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand-cyan transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-mint dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-brand-teal dark:text-[#8b80f9]">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-brand-navy dark:text-white mb-2">Portfolio Showcase</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Elegant and interactive digital portfolios to beautifully present your creative and professional work.
            </p>
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 md:pb-16 h-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-serif-brand text-5xl md:text-7xl font-bold text-brand-navy dark:text-white tracking-tighter">
            Why Us?
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            We know exactly what problems you face on the ground. Our mission is to make advanced AI and enterprise-grade software <span className="text-brand-cyan dark:text-cyan-400 font-bold">accessible to absolutely everyone</span>. Whether you are scaling a modern tech startup or running a <span className="text-brand-cyan dark:text-cyan-400 font-bold">traditional local business</span> &mdash; like a wholesale dhal trader &mdash; we bridge the gap. We turn complex technology into simple, powerful tools that actually work for you.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white">
              A Platform Built for Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-brand-cyan/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Intelligent Workflows</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Smart workflows that detect and fix common errors automatically.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-brand-cyan/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Your data is encrypted everywhere. Access is controlled by role.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-brand-cyan/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Real-Time Telemetry</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                See every automated transaction as it happens and dive deep into data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-100 dark:border-slate-800">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-bold text-brand-rust dark:text-brand-rust uppercase tracking-widest">
            Executive Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white">
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
              <h3 className="font-serif-brand text-base md:text-lg font-bold text-brand-navy dark:text-white mb-2">
                {leader.name}
              </h3>
              <p className="text-brand-teal dark:text-[#8b80f9] font-semibold text-sm">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
