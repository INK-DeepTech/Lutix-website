import React, { useState } from 'react';
import { ArrowUpRight, Shield, Activity, Zap } from 'lucide-react';
import { FOUNDERS } from '../data/content';

interface OverviewPageProps {
  onRouteChange: (route: any) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({ onRouteChange }) => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'finance' | 'operations'>('engineering');

  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section - Keeps exact dark config */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-8 md:px-16 overflow-hidden">
        {/* Background Image / Logo styling */}
        <div className="absolute inset-0 z-0 flex items-center justify-end p-20 opacity-20 pointer-events-none">
           <img src="/logo-horizontal.png" alt="" className="w-full max-w-5xl object-contain mix-blend-screen grayscale" />
        </div>
        
        <div className="relative z-10 max-w-6xl space-y-8 mt-24">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            Lutix <span className="text-white ml-2">Academic OS</span>
          </div>
          
          <h1 className="font-serif-brand font-black text-6xl md:text-[8rem] leading-[0.85] uppercase tracking-tighter">
            IT DOESN'T GET EASIER.<br />YOUR SOFTWARE GETS BETTER.
          </h1>
          
          <div className="flex flex-wrap gap-6 pt-12">
            <button 
              onClick={() => onRouteChange('solutions-matrix')}
              className="px-8 py-4 border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              My Plans <ArrowUpRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onRouteChange('demo-request')}
              className="px-8 py-4 border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2"
            >
              Contact Now <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* LIGHT THEME RESTORATION STARTS HERE */}
      <div className="bg-white text-slate-900 w-full relative z-20">
        
        {/* Social Proof Metrics - Light Theme massive spacing */}
        <section className="py-24 px-8 md:px-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">$4.2B+</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Processed Annually</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">99.99%</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Guaranteed Uptime</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">10x</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Faster Deployments</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">2,500+</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Enterprise Clients</div>
            </div>
          </div>
        </section>

        {/* Dynamic Department Solution Tabs - Crisp light theme */}
        <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Solutions for Every Team
            </span>
            <h2 className="font-serif-brand text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Tailored Solutions for Every Department
            </h2>
          </div>

          <div className="flex justify-center mb-16 flex-wrap gap-4">
            <div className="inline-flex p-2 bg-slate-50 rounded-full gap-2 border border-slate-200">
              {['engineering', 'finance', 'operations'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? 'bg-black text-white shadow-md'
                      : 'text-slate-500 hover:text-black'
                  }`}
                >
                  For {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Render Tab Content based on selection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-xs font-bold uppercase tracking-widest">
                <span>
                  {activeTab === 'engineering' ? 'Engineering Velocity' : activeTab === 'finance' ? 'Financial Control' : 'Operational Harmony'}
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {activeTab === 'engineering' && 'Automatic code testing, deployment, and updates.'}
                {activeTab === 'finance' && 'Automated billing, reconciliation, and reporting.'}
                {activeTab === 'operations' && 'Connect workflows across every department.'}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {activeTab === 'engineering' && 'Speed up your releases with AI-powered testing and infrastructure that automatically scales up or down based on demand.'}
                {activeTab === 'finance' && 'Close your books faster with real-time revenue recognition and automated expense tracking that scales with your business.'}
                {activeTab === 'operations' && 'Link your CRM, student records, ERP, and internal databases into automated workflows that run complex business processes without anyone being the bottleneck.'}
              </p>
              
              <button 
                onClick={() => onRouteChange('solutions-matrix')}
                className="mt-8 px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                Explore Features <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-slate-50 p-16 md:p-24 rounded-3xl border border-slate-100 flex items-center justify-center">
              <img 
                className="w-full max-w-sm object-contain opacity-90 mix-blend-multiply hover:scale-105 transition-transform duration-500" 
                alt="Feature Illustration" 
                src="/logo-stacked.png"
              />
            </div>
          </div>
        </section>

        {/* Core Capabilities Feature Grid */}
        <section className="bg-slate-50 py-32 px-8 md:px-16 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
              <h2 className="font-serif-brand text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
                A Platform Built for Scale
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                Discover the core capabilities that make Lutix the choice for modern institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Intelligent Workflows</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Smart workflows that detect and fix common errors automatically — so your team isn't woken up at 2 AM.
                </p>
              </div>

              <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Security</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Your data is encrypted everywhere — in storage and in transit. Access is controlled by role, compliance is monitored 24/7.
                </p>
              </div>

              <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Telemetry</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  See every automated transaction as it happens, set custom alerts, and dive deep into performance data — all in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High-Converting CTA Banner */}
        <section className="py-32 px-8 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto bg-black text-white rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="font-serif-brand text-5xl md:text-7xl font-bold tracking-tighter">
                READY TO MODERNIZE?
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Join thousands of engineering, academic, and finance teams that have streamlined their operations on one unified platform.
              </p>
              <div className="flex justify-center pt-8">
                <button 
                  onClick={() => onRouteChange('demo-request')}
                  className="px-10 py-5 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors"
                >
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
