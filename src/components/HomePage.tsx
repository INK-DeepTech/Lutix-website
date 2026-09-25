import React from 'react';
import { ArrowRight, Zap, Shield, Activity, Code, Truck, Plus, FileText, Sparkles, CheckCircle2, BarChart3, Clock, Users, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-white transition-colors duration-300 font-sans">
      
            <div className="relative bg-brand-slate min-h-[80vh] pt-32 pb-20 px-6 overflow-hidden flex items-center justify-center">
  {/* Braid Background Plus Pattern */}
  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#749DC8 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>
  
  <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center">
    
    {/* Automate Your Needs Badge */}
    <div className="inline-flex items-center gap-3 bg-brand-cream/10 px-6 py-2.5 rounded-full mb-12 shadow-sm border border-white/60">
       {/* Note: Ensure 'bird-icon.png' is the transparent bird-only file in the public folder */}
       <img src="/standalone-bird.png" alt="Lutix Bird" className="h-7 w-7 object-contain invert mix-blend-screen" />
       <span className="text-brand-cream font-bold tracking-wide text-lg md:text-xl font-extrabold uppercase">Automate Your Needs</span>
    </div>

    {/* Massive Braid Typography */}
    <h1 className="text-6xl md:text-[8rem] leading-[1.1] font-extrabold text-brand-cream tracking-tighter mb-8 font-serif w-full">
      Lutix DeepTech
    </h1>
    
    {/* Subtitle */}
    <p className="text-xl md:text-3xl text-brand-cream/80 max-w-4xl mx-auto mb-14 font-medium leading-relaxed">
      Imagine, Innovate, and Impact. An intelligent technology solutions company.
    </p>

    {/* Braid Pill Button */}
    <button onClick={() => onRouteChange('demo')} className="bg-brand-cream text-brand-slate px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl shadow-black/20 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
      Get Started <span className="text-2xl font-light">&#8594;</span>
    </button>
    </div>
</div>

      {/* Trusted By & Stats Section */}
      <section className="py-24 bg-brand-cream border-y border-brand-slate/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Logos */}
          <div className="text-center mb-24">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by forward-thinking institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              <div className="text-2xl font-black font-sans text-slate-800 flex items-center gap-2"><div className="w-8 h-8 bg-slate-800 rounded-full"></div> Acme Corp</div>
              <div className="text-2xl font-black font-sans text-slate-800 flex items-center gap-2"><div className="w-8 h-8 border-4 border-slate-800"></div> Globex</div>
              <div className="text-2xl font-black font-sans text-slate-800 flex items-center gap-2"><div className="w-8 h-8 border-4 border-slate-800 rounded-lg transform rotate-45"></div> Soylent</div>
              <div className="text-2xl font-black font-sans text-slate-800 flex items-center gap-2"><div className="w-8 h-8 bg-slate-800 rounded-tl-full rounded-br-full"></div> Initech</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate"><img src="/bird-icon.png" alt="Lutix Bird" className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 object-contain mix-blend-multiply" />Real results from real users</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-brand-slate/80 mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-brand-slate tracking-tight mb-2">10x</h3>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Faster Deployments</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-brand-slate/80 mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-brand-slate tracking-tight mb-2">99.9%</h3>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Platform Uptime</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-brand-slate/80 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-brand-slate tracking-tight mb-2">2.5K+</h3>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Users Supported</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Services Bento Box */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-slate mb-6">
              <img src="/bird-icon.png" alt="Lutix Bird" className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 object-contain mix-blend-multiply" />
              Intelligent Solutions for Every Scale
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              From modern tech startups to traditional local businesses—like a wholesale dhal trader—we bridge the gap. We turn complex operations into simple, scalable tools that actually work for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            <div className="lg:col-span-2 bg-white rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#0A61C9] mb-6"><Code className="w-7 h-7" /></div>
                <h3 className="text-3xl font-bold text-brand-slate mb-4">Custom Web & Software</h3>
                <p className="text-lg text-brand-slate/80 leading-relaxed">End-to-end bespoke digital platforms designed specifically for your operational requirements.</p>
              </div>
            </div>
            <div className="bg-brand-slate rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6"><Zap className="w-7 h-7" /></div>
                <h3 className="text-3xl font-bold text-white mb-4">Intelligent Systems</h3>
                <p className="text-lg text-blue-100 leading-relaxed">AI and intelligent automations integrated directly into your workflow.</p>
              </div>
            </div>
            <div className="lg:col-span-3 bg-slate-900 rounded-3xl p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex items-end">
              <div className="relative z-10 w-full md:w-1/2">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6"><Truck className="w-7 h-7" /></div>
                <h3 className="text-3xl font-bold text-white mb-4">Supply Chain Solutions</h3>
                <p className="text-lg text-slate-400 leading-relaxed">Advanced logistics, predictive routing, and comprehensive inventory intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Vertical Flow) */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 lg:gap-32">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-slate leading-tight sticky top-32"><img src="/bird-icon.png" alt="Lutix Bird" className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 object-contain mix-blend-multiply" />
              Start building smarter with Lutix.
            </h2>
          </div>
          <div className="md:w-2/3 relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

            <div className="space-y-20 relative z-10">
              {/* Step 1 */}
              <div className="flex gap-8 md:gap-12 relative group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-corp-vibrant shadow-xl flex items-center justify-center shrink-0 z-10 mt-1">
                  <span className="text-xl md:text-2xl font-black text-brand-slate/80">1</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-brand-slate mb-4">Discover</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">We listen and understand real customer needs.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex gap-8 md:gap-12 relative group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-200 group-hover:border-corp-vibrant transition-colors duration-500 shadow-xl flex items-center justify-center shrink-0 z-10 mt-1">
                  <span className="text-xl md:text-2xl font-black text-slate-400 group-hover:text-brand-slate/80 transition-colors">2</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-brand-slate mb-4">Innovate</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">We engineer intelligent, sustainable technologies.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex gap-8 md:gap-12 relative group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-200 group-hover:border-corp-vibrant transition-colors duration-500 shadow-xl flex items-center justify-center shrink-0 z-10 mt-1">
                  <span className="text-xl md:text-2xl font-black text-slate-400 group-hover:text-brand-slate/80 transition-colors">3</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-brand-slate mb-4">Impact</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">We deliver lasting value to your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  );
};
