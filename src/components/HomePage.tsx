import React from 'react';
import { ArrowRight, Zap, Shield, Activity, Code, Truck } from 'lucide-react';
import { PageRoute } from '../types';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full bg-corp-light dark:bg-slate-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:px-12 bg-corp-light dark:bg-slate-900/50">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-corp-deep/10 text-corp-vibrant dark:text-[#8b80f9] rounded-full text-base md:text-lg font-bold">
            <img src="/standalone-bird.png" alt="Lutix Icon" className="h-6 w-6 object-contain mix-blend-multiply bg-transparent" />
            <span>Automate Your Needs</span>
          </div>

          <h1 className="font-serif-brand text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight text-corp-navy dark:text-white leading-tight max-w-[1400px] w-full">
            Lutix DeepTech
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Imagine, Innovate, and Impact. An intelligent technology solutions company.
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

      {/* Hero Mockup Image */}
      <section className="px-6 md:px-12 pb-24 relative z-20">
        <div className="max-w-[1200px] mx-auto mt-16 h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-gradient-to-br from-corp-soft to-corp-deep flex items-center justify-center">
          <span className="text-white/50 text-xl md:text-3xl font-bold tracking-widest text-center px-4">
            LUTIX SOFTWARE DASHBOARD
          </span>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-slate-100 bg-white dark:bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Trusted by forward-thinking institutions and businesses.</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            <div className="text-2xl font-bold font-serif-brand text-slate-800 dark:text-slate-200">Acme Corp</div>
            <div className="text-2xl font-bold font-serif-brand text-slate-800 dark:text-slate-200">Globex</div>
            <div className="text-2xl font-bold font-serif-brand text-slate-800 dark:text-slate-200">Soylent</div>
            <div className="text-2xl font-bold font-serif-brand text-slate-800 dark:text-slate-200">Initech</div>
          </div>
        </div>
      </section>

      {/* Bento Box */}
      <section className="py-32 px-6 md:px-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-corp-navy dark:text-white mb-16 tracking-tight text-center">
            Intelligent Solutions for Every Scale.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
            {/* Card 1 */}
            <div className="lg:col-span-2 lg:row-span-2 bg-[#F1F7F9] dark:bg-slate-800 rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="absolute top-10 left-10 w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl shadow-sm flex items-center justify-center text-corp-vibrant">
                <Code className="w-8 h-8" />
              </div>
              <div className="mt-32">
                <h3 className="text-3xl md:text-4xl font-bold text-corp-navy dark:text-white mb-4 relative z-10">Custom Web & Software</h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 relative z-10 max-w-xl">Bespoke digital platforms built for scale.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="lg:col-span-1 lg:row-span-1 bg-[#F1F7F9] dark:bg-slate-800 rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group shadow-sm border border-slate-100 dark:border-slate-700">
               <div className="absolute top-10 left-10 w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl shadow-sm flex items-center justify-center text-corp-vibrant">
                <Zap className="w-6 h-6" />
              </div>
              <div className="mt-20">
                <h3 className="text-2xl font-bold text-corp-navy dark:text-white mb-2 relative z-10">Intelligent Systems</h3>
                <p className="text-base text-slate-600 dark:text-slate-400 relative z-10">AI-driven analytics and automation tools.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="lg:col-span-1 lg:row-span-1 bg-[#F1F7F9] dark:bg-slate-800 rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group shadow-sm border border-slate-100 dark:border-slate-700">
               <div className="absolute top-10 left-10 w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl shadow-sm flex items-center justify-center text-corp-vibrant">
                <Truck className="w-6 h-6" />
              </div>
              <div className="mt-20">
                <h3 className="text-2xl font-bold text-corp-navy dark:text-white mb-2 relative z-10">Supply Chain Solutions</h3>
                <p className="text-base text-slate-600 dark:text-slate-400 relative z-10">Optimize logistics from wholesale dhal traders to global distributors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 md:px-12 bg-corp-light dark:bg-slate-900/50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-corp-navy dark:text-white mb-20 tracking-tight text-center">
            How We Build Your Future.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            <div className="space-y-6">
              <div className="text-6xl font-black text-corp-accent-sky/50 dark:text-corp-navy/50">01</div>
              <h3 className="text-2xl font-bold text-corp-navy dark:text-white">Discover.</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">We listen and understand your exact ground-level operational bottlenecks.</p>
            </div>
            <div className="space-y-6">
              <div className="text-6xl font-black text-corp-accent-sky/50 dark:text-corp-navy/50">02</div>
              <h3 className="text-2xl font-bold text-corp-navy dark:text-white">Innovate.</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">We engineer custom, sustainable tech using our Academic OS and enterprise frameworks.</p>
            </div>
            <div className="space-y-6">
              <div className="text-6xl font-black text-corp-accent-sky/50 dark:text-corp-navy/50">03</div>
              <h3 className="text-2xl font-bold text-corp-navy dark:text-white">Impact.</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">You deploy scalable software that creates lasting value for your people and society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 md:px-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-corp-navy dark:text-white">Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-corp-light/50 dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-corp-navy dark:text-white mb-3">Develop Intelligent Technologies</h3>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">Create intelligent and innovative technologies that turn ideas into practical solutions.</p>
            </div>
            <div className="p-10 bg-corp-light/50 dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-corp-navy dark:text-white mb-3">Build Sustainable Solutions</h3>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">Develop sustainable products and solutions that address present and future needs.</p>
            </div>
            <div className="p-10 bg-corp-light/50 dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-corp-navy dark:text-white mb-3">Solve Real-World Challenges</h3>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">Solve meaningful real-world problems through effective, scalable, and impactful solutions.</p>
            </div>
            <div className="p-10 bg-corp-light/50 dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-corp-navy dark:text-white mb-3">Create Lasting Value</h3>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">Deliver lasting value to people, businesses, organizations, and society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-6 md:px-12 bg-corp-light dark:bg-slate-900/50">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-corp-navy dark:text-white">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-3">Innovation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We build technology that solves meaningful real-world problems.</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-3">Integrity</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We act with honesty, transparency and accountability.</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-3">Customer-First Thinking</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We listen, understand and build around real customer needs.</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-corp-navy dark:text-white mb-3">Sustainability</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We create solutions designed for lasting economic, social and environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#064089] text-center border-t border-[#0a61c9]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-12 max-w-4xl">
            Ready to build a smarter future?
          </h2>
          <button 
            onClick={() => onRouteChange('demo')}
            className="bg-white text-[#064089] hover:bg-slate-100 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Book Your Free Demo
          </button>
        </div>
      </section>
    </div>
  );
};
