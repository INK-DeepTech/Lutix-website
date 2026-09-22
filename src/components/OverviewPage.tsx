import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FOUNDERS } from '../data/content';

interface OverviewPageProps {
  onRouteChange: (route: any) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
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

      {/* Massive Whitespace Content Section */}
      <section className="w-full bg-[#111111] py-40 px-8 md:px-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="font-serif-brand text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight">
              Academic OS
            </h2>
            <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-lg font-light">
              Link your CRM, student records, ERP, and internal databases into automated workflows that run complex business processes without anyone being the bottleneck.
            </p>
            <div className="pt-8">
               <button 
                onClick={() => onRouteChange('solutions-matrix')}
                className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                Explore Features <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-black/50 p-24 flex items-center justify-center border border-gray-800 rounded-3xl backdrop-blur-sm">
            <img src="/logo-stacked.png" alt="Lutix abstract" className="w-full max-w-xs object-contain opacity-60 hover:opacity-100 transition-all duration-700" onError={(e) => (e.currentTarget.src = '/logo-horizontal.png')} />
          </div>
        </div>
      </section>

      {/* Team / Leadership Section */}
      <section className="w-full bg-[#0a0a0a] py-40 px-8 md:px-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-6">
            <p className="text-gray-400 uppercase tracking-[0.3em] text-sm font-bold">The minds behind Lutix</p>
            <h2 className="font-serif-brand text-6xl md:text-8xl font-black uppercase tracking-tighter">
              Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {FOUNDERS.map((founder, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col items-center text-center">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1a1a1a] mb-8 border border-gray-800">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif-brand text-3xl font-bold uppercase tracking-tight mb-3">
                  {founder.name}
                </h3>
                <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-semibold">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* High-Converting CTA Banner */}
      <section className="py-40 px-8 md:px-16 bg-[#111111] border-t border-gray-900">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="font-serif-brand text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Ready to Modernize?
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Join thousands of engineering, academic, and finance teams that have streamlined their operations on one unified platform.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-12">
            <button 
              onClick={() => onRouteChange('demo-request')}
              className="px-10 py-5 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
