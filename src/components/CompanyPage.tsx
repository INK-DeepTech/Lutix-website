import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FOUNDERS } from '../data/content';

interface CompanyPageProps {
  onRouteChange: (route: any) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen">
      
      {/* Hero Section */}
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

      {/* Leadership Section - Exact Template Clone */}
      <section className="w-full bg-[#111111] py-40 px-8 md:px-16 border-t border-gray-900">
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

      {/* Flagship Product */}
      <section className="w-full bg-black py-40 px-8 md:px-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="bg-[#111] p-24 flex items-center justify-center border border-gray-800 rounded-3xl">
            <img src="/logo-stacked.png" alt="academicOS" className="w-full max-w-xs object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-700" onError={(e) => (e.currentTarget.src = '/logo-horizontal.png')} />
          </div>
          <div className="space-y-12">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
              Flagship Product
            </div>
            <h2 className="font-serif-brand text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight">
              academicOS
            </h2>
            <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-lg font-light">
              The all-in-one platform built specifically for universities. academicOS brings together student records, faculty tools, and campus analytics into one fast, unified workspace.
            </p>
            <div className="pt-8">
               <button 
                onClick={() => onRouteChange('solutions-matrix')}
                className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                Explore academicOS <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
