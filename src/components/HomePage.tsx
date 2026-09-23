import React from 'react';
import { ArrowRight, Zap, Shield, Activity, Monitor, Smartphone, Code, Truck } from 'lucide-react';
import { PageRoute } from '../types';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-corp-light dark:bg-slate-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-800 bg-corp-light dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-corp-deep/10 text-corp-vibrant dark:text-[#8b80f9] rounded-full text-sm font-semibold">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>automate your needs</span>
          </div>

          <h1 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl font-bold text-corp-navy dark:text-white tracking-tight leading-tight max-w-4xl">
            Run Your Organization Smarter — With Less Manual Work
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            To build a smarter, sustainable and future through technology and innovation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onRouteChange('demo')}
              className="px-8 py-3.5 bg-corp-deep text-white rounded-xl text-sm font-semibold hover:bg-corp-vibrant transition-all shadow-md flex items-center gap-2"
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
          <h2 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl font-bold text-corp-navy dark:text-white">
            Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-corp-light/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-corp-vibrant transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-corp-light dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-corp-vibrant dark:text-[#8b80f9]">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-corp-navy dark:text-white mb-2">Custom Web Pages & Software</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Bespoke digital solutions tailored to your brand's specific needs, ensuring a unique and powerful online presence.
            </p>
          </button>
          
          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-corp-light/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-corp-vibrant transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-corp-light dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-corp-vibrant dark:text-[#8b80f9]">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-corp-navy dark:text-white mb-2">Mobile & Web Apps</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Cross-platform applications designed for performance, scalability, and seamless user experiences on any device.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-corp-light/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-corp-vibrant transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-corp-light dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-corp-vibrant dark:text-[#8b80f9]">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-corp-navy dark:text-white mb-2">Website Development</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern, responsive, and robust websites engineered with the latest frontend and backend technologies.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-corp-light/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-corp-vibrant transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-corp-light dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-corp-vibrant dark:text-[#8b80f9]">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-corp-navy dark:text-white mb-2">Supply Chain Solutions</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Intelligent logistics and inventory tracking software to optimize your entire operational pipeline.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-corp-light/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-corp-vibrant transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-corp-light dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-corp-vibrant dark:text-[#8b80f9]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-corp-navy dark:text-white mb-2">Intelligent Systems</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              AI-driven analytics and automation tools designed to simplify complex decision making.
            </p>
          </button>

          <button onClick={() => onRouteChange('demo')} className="text-left p-3 md:p-4 bg-corp-light/80 backdrop-blur-sm dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-corp-vibrant transition-all duration-300 group">
            <div className="w-10 h-10 rounded-2xl bg-corp-light dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center mb-3 text-corp-vibrant dark:text-[#8b80f9]">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-corp-navy dark:text-white mb-2">Portfolio Showcase</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Elegant and interactive digital portfolios to beautifully present your creative and professional work.
            </p>
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 md:pb-16 h-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-corp-light to-corp-accent-sky dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-serif-brand text-5xl md:text-7xl font-bold text-corp-navy dark:text-white tracking-tighter">
            Why Us?
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            We know exactly what problems you face on the ground. Our mission is to make advanced AI and enterprise-grade software <span className="text-corp-vibrant dark:text-cyan-400 font-bold">accessible to absolutely everyone</span>. Whether you are scaling a modern tech startup or running a <span className="text-corp-vibrant dark:text-cyan-400 font-bold">traditional local business</span> &mdash; like a wholesale dhal trader &mdash; we bridge the gap. We turn complex technology into simple, powerful tools that actually work for you.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-corp-light dark:bg-slate-900/50 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-corp-navy dark:text-white">
              A Platform Built for Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-corp-vibrant/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-corp-deep/10 text-corp-vibrant dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-2">Intelligent Workflows</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Smart workflows that detect and fix common errors automatically.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-corp-vibrant/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-corp-deep/10 text-corp-vibrant dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-2">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Your data is encrypted everywhere. Access is controlled by role.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group hover:border-corp-vibrant/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-corp-deep/10 text-corp-vibrant dark:text-[#8b80f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-2">Real-Time Telemetry</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                See every automated transaction as it happens and dive deep into data.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};
