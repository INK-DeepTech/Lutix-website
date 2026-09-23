import React from 'react';
import { ArrowRight, Zap, Shield, Activity, Code, Truck, Plus, FileText, Sparkles, CheckCircle2, BarChart3, Clock, Users, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-white transition-colors duration-300 font-sans">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6 md:px-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
        {/* Background Pattern (+) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Plus className="absolute top-20 left-[10%] text-slate-200 w-6 h-6" />
          <Plus className="absolute top-40 right-[20%] text-slate-200 w-8 h-8" />
          <Plus className="absolute bottom-40 left-[20%] text-slate-200 w-5 h-5" />
          <Plus className="absolute top-60 left-[80%] text-slate-200 w-6 h-6" />
          <Plus className="absolute bottom-20 right-[15%] text-slate-200 w-8 h-8" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 text-corp-navy shadow-sm rounded-full text-sm font-bold">
            <img src="/standalone-bird.png" alt="Lutix Icon" className="h-5 w-5 object-contain mix-blend-multiply bg-transparent" />
            <span>Automate Your Needs</span>
          </div>

          <h1 className="font-serif-brand text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight text-corp-navy leading-[1.1] max-w-5xl w-full">
            Lutix DeepTech
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
            Imagine, Innovate, and Impact. An intelligent technology solutions company.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => onRouteChange('demo')}
              className="px-8 py-4 bg-corp-navy text-white rounded-full text-base font-bold hover:bg-corp-vibrant transition-all shadow-lg flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Floating UI Mockup */}
          <div className="mx-auto mt-20 w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer group">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <FileText className="w-8 h-8 text-corp-vibrant" />
            </div>
            <div className="flex-1 space-y-3 w-full text-left">
              <div className="flex justify-between items-center">
                <span className="font-bold text-corp-navy text-lg">Shareholder Agreement.pdf</span>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Secure</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full w-full overflow-hidden">
                 <div className="h-full bg-corp-vibrant w-3/4 rounded-full relative">
                    <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                 </div>
              </div>
              <p className="text-sm text-slate-500">Scanning document for critical clauses...</p>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-corp-vibrant text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:bg-corp-navy transition-colors">
              <Sparkles className="w-4 h-4"/> Review with AI
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By & Stats Section */}
      <section className="py-24 bg-white border-y border-slate-100">
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-corp-navy">Real results from real users</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-corp-vibrant mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-corp-navy tracking-tight mb-2">1.5K+</h3>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Tasks Automated</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-corp-vibrant mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-corp-navy tracking-tight mb-2">30K</h3>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">Platform Uptime</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-corp-vibrant mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-corp-navy tracking-tight mb-2">89%</h3>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">AI Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Vertical Flow) */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 lg:gap-32">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-corp-navy leading-tight sticky top-32">
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
                  <span className="text-xl md:text-2xl font-black text-corp-vibrant">1</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-corp-navy mb-4">Discover</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">We listen and understand real customer needs.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex gap-8 md:gap-12 relative group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-200 group-hover:border-corp-vibrant transition-colors duration-500 shadow-xl flex items-center justify-center shrink-0 z-10 mt-1">
                  <span className="text-xl md:text-2xl font-black text-slate-400 group-hover:text-corp-vibrant transition-colors">2</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-corp-navy mb-4">Innovate</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">We engineer intelligent, sustainable technologies.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex gap-8 md:gap-12 relative group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-200 group-hover:border-corp-vibrant transition-colors duration-500 shadow-xl flex items-center justify-center shrink-0 z-10 mt-1">
                  <span className="text-xl md:text-2xl font-black text-slate-400 group-hover:text-corp-vibrant transition-colors">3</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-corp-navy mb-4">Impact</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">We deliver lasting value to your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders / Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-corp-navy tracking-tight">The minds driving our innovation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col items-start group">
              <div className="w-full aspect-square overflow-hidden rounded-[2.5rem] mb-6 bg-slate-100 relative shadow-sm">
                <img src="/ceo.jpg" alt="Iswarya" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-corp-navy/0 group-hover:bg-corp-navy/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-corp-navy mb-1">Iswarya</h3>
              <p className="text-base font-semibold text-slate-500">CEO & Co-Founder</p>
            </div>
            
            <div className="flex flex-col items-start group">
              <div className="w-full aspect-square overflow-hidden rounded-[2.5rem] mb-6 bg-slate-100 relative shadow-sm">
                <img src="/cto.jpg" alt="Nithishkumar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" />
                <div className="absolute inset-0 bg-corp-navy/0 group-hover:bg-corp-navy/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-corp-navy mb-1">Nithishkumar</h3>
              <p className="text-base font-semibold text-slate-500">CTO & Co-Founder</p>
            </div>

            <div className="flex flex-col items-start group">
              <div className="w-full aspect-square overflow-hidden rounded-[2.5rem] mb-6 bg-slate-100 relative shadow-sm">
                <img src="/coo.jpg" alt="Karthik Balaji" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" />
                <div className="absolute inset-0 bg-corp-navy/0 group-hover:bg-corp-navy/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-corp-navy mb-1">Karthik Balaji</h3>
              <p className="text-base font-semibold text-slate-500">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Bottom CTA (Dark UI Card) */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#064089] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-12 md:p-20 lg:p-24 shadow-2xl relative">
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left mb-16 lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-10 max-w-xl mx-auto lg:mx-0">
                Transform the way you work with intelligent technology.
              </h2>
              <button 
                onClick={() => onRouteChange('demo')}
                className="inline-flex items-center gap-2 bg-white text-[#064089] hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform"
              >
                <span>Book Your Free Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Dashboard Mockup on Right */}
            <div className="lg:w-1/2 relative z-10 w-full flex justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-md">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-white/60 text-sm font-semibold">Dashboard</div>
                </div>
                
                <div className="space-y-6">
                  {/* Chart Bars */}
                  <div className="flex items-end gap-3 h-40">
                    <div className="w-1/6 bg-white/20 rounded-t-lg h-[40%] hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-1/6 bg-white/20 rounded-t-lg h-[60%] hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-1/6 bg-corp-vibrant rounded-t-lg h-[90%] shadow-[0_0_20px_rgba(10,97,201,0.5)] cursor-pointer"></div>
                    <div className="w-1/6 bg-white/20 rounded-t-lg h-[50%] hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-1/6 bg-white/20 rounded-t-lg h-[75%] hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-1/6 bg-white/20 rounded-t-lg h-[30%] hover:bg-white/40 transition-colors cursor-pointer"></div>
                  </div>
                  {/* Mock Data Rows */}
                  <div className="space-y-3">
                    <div className="w-full h-10 bg-white/5 rounded-xl flex items-center px-4 gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                      <div className="h-2 w-12 bg-white/40 rounded-full ml-auto"></div>
                    </div>
                    <div className="w-full h-10 bg-white/5 rounded-xl flex items-center px-4 gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20"></div>
                      <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                      <div className="h-2 w-16 bg-white/40 rounded-full ml-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
