import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FOUNDERS } from '../data/content';

interface CompanyPageProps {
  onRouteChange: (route: any) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen">
      
      {/* Hero Section - Keeps exact dark config */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center px-8 md:px-16 overflow-hidden border-b border-gray-900">
        <div className="relative z-10 max-w-5xl space-y-8 mt-12">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            About Lutix
          </div>
          <h1 className="font-serif-brand font-black text-5xl md:text-7xl leading-none uppercase tracking-tighter">
            CAREFULLY CRAFTED SOFTWARE.<br />BUILT TO NEVER LET YOU DOWN.
          </h1>
        </div>
      </section>

      {/* LIGHT THEME RESTORATION STARTS HERE */}
      <div className="bg-white text-slate-900 w-full relative z-20">
        
        {/* Core Philosophy */}
        <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto w-full border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Core Philosophy</span>
              <h2 className="font-serif-brand text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Carefully crafted software that never lets you down.
              </h2>
            </div>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed font-light">
              We don't use generic, one-size-fits-all software. Everything we build is designed from scratch to be fast, clean, and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-between gap-12 hover:shadow-xl transition-all duration-500">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Custom-Built Systems</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Designed around your exact needs, connecting smoothly with your existing systems while still moving fast on upgrades.
                </p>
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">01 / Principle</div>
            </div>

            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-between gap-12 hover:shadow-xl transition-all duration-500">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Clear, Simple Design</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Inspired by the clean simplicity of tools like Notion and Stripe, our interfaces cut clutter so decision-makers can focus on what matters.
                </p>
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">02 / Principle</div>
            </div>

            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-between gap-12 hover:shadow-xl transition-all duration-500">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Operational Resilience</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Every product is built from the ground up with automatic failure recovery, regulatory compliance, and real-time data accuracy.
                </p>
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">03 / Principle</div>
            </div>
          </div>
        </section>

        {/* Executive Leadership - Light Theme Wix Layout */}
        <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto w-full border-b border-slate-100">
          <div className="text-center space-y-6 mb-24">
            <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">Executive Leadership</p>
            <h2 className="font-serif-brand text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">
              Driven by vision, anchored in execution
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Our leadership trio brings deep expertise in distributed systems, academic administration software, and enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {FOUNDERS.map((leader, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col items-center text-center">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100 mb-8 rounded-2xl">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif-brand text-3xl font-bold text-slate-900 tracking-tight mb-2">
                  {leader.name}
                </h3>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Flagship Product Showcase */}
        <section className="py-32 px-8 md:px-16 w-full bg-slate-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200">
                <span>Flagship Product</span>
              </div>
              <h2 className="font-serif-brand text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
                Introducing academicOS
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light max-w-lg">
                The all-in-one platform built specifically for universities. academicOS brings together student records, faculty tools, and campus analytics into one fast, unified workspace.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <button 
                  onClick={() => onRouteChange('solutions-matrix')}
                  className="px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  Explore academicOS <ArrowUpRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onRouteChange('demo-request')}
                  className="px-8 py-4 border border-slate-300 text-slate-900 text-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-colors"
                >
                  Book a Demo
                </button>
              </div>
            </div>
            
            <div className="bg-white p-16 md:p-24 rounded-[3rem] border border-slate-100 shadow-sm flex items-center justify-center">
              <img 
                className="w-full max-w-sm object-contain opacity-90 mix-blend-multiply hover:scale-105 transition-transform duration-500" 
                alt="academicOS Illustration" 
                src="/logo-horizontal.png"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
