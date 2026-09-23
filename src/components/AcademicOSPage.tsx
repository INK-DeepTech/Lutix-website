import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface AcademicOSPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AcademicOSPage: React.FC<AcademicOSPageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-brand-mint dark:bg-slate-900 min-h-screen pt-20 transition-colors duration-300">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-teal rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <img src="/logo-stacked.png" alt="" className="w-96 h-96 object-contain invert" />
            </div>

            <div className="max-w-3xl flex flex-col gap-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-mint/20 text-white font-medium text-xs w-fit">
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
                  className="bg-brand-mint text-brand-teal px-8 py-4 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all shadow-md flex items-center gap-2"
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
