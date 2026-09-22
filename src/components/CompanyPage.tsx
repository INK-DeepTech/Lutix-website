import React from 'react';
import { PageRoute } from '../types';
import { FOUNDERS, EXTENDED_LEADERSHIP, IMAGES } from '../data/content';
import { ArrowRight, CheckCircle2, Globe, Users, Shield, Sparkles, Building, Layers } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface CompanyPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onRouteChange }) => {
  return (
    <div className="flex flex-col w-full bg-[#faf8ff] text-[#131b2e]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#faf8ff] py-8 md:py-8 px-6 md:px-8 border-b border-[#e2e7ff]/60">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e2dfff]/40 via-transparent to-[#e2e7ff]/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          <div className="lg:col-span-12 flex flex-col gap-6 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#131b2e] tracking-tight font-semibold leading-[1.15]">
              Building smart, reliable software for modern institutions.
            </h1>

            <p className="text-base sm:text-lg text-[#464555] max-w-2xl leading-relaxed mx-auto lg:mx-0">
              We help you move from slow, outdated systems to fast, modern platforms — without losing what works.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#philosophy" 
                className="bg-[#3525cd] text-white px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-[#4d44e3] transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>See How We Work</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>

              <a 
                href="#leadership" 
                className="bg-[#e2e7ff] text-[#131b2e] px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-[#dae2fd] transition-all"
              >
                Meet Leadership
              </a>

              
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose & Direction (IMAGINE. INNOVATE. IMPACT.) */}
      <section className="py-10 md:py-10 px-6 md:px-8 bg-white border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-[#3525cd] uppercase tracking-widest">
              Our Purpose & Direction
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#131b2e] font-bold tracking-tight">
              IMAGINE. INNOVATE. IMPACT.
            </h2>
            <p className="text-base text-[#464555]">
              Technology that's built to last — for decades, not just quarters.
            </p>
          </div>

          <div className="bg-[#faf8ff] rounded-2xl p-8 md:p-12 shadow-sm border border-[#e2e7ff] flex flex-col gap-4">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">Our Vision</span>
              <h3 className="text-2xl text-[#131b2e] font-semibold">
                To build a smarter, sustainable future through technology and innovation.
              </h3>
            </div>

            <div className="border-t border-[#dae2fd] pt-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#131b2e]">Our Four-Part Mission</h3>
                <span className="text-xs text-[#464555]">Guiding every deployment</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-[#e2e7ff] shadow-sm flex flex-col gap-2 hover:border-[#3525cd]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#3525cd]">01 / Develop Intelligent Technologies</span>
                    <Sparkles className="w-4 h-4 text-[#3525cd]" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-[#464555] leading-relaxed">
                    Create intelligent and innovative technologies that turn ideas into practical, high-performance solutions for operational leaders.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e2e7ff] shadow-sm flex flex-col gap-2 hover:border-[#006a61]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#006a61]">02 / Build Sustainable Solutions</span>
                    <Globe className="w-4 h-4 text-[#006a61]" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-[#464555] leading-relaxed">
                    Develop sustainable products and cloud solutions that seamlessly address present institutional demands and long-term future needs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e2e7ff] shadow-sm flex flex-col gap-2 hover:border-[#3525cd]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#3525cd]">03 / Solve Real-World Challenges</span>
                    <Shield className="w-4 h-4 text-[#3525cd]" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-[#464555] leading-relaxed">
                    Solve meaningful real-world administrative and computational problems through effective, scalable, and impact-driven codebases.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#e2e7ff] shadow-sm flex flex-col gap-2 hover:border-[#006a61]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#006a61]">04 / Create Lasting Value</span>
                    <Building className="w-4 h-4 text-[#006a61]" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-[#464555] leading-relaxed">
                    Deliver lasting value to people, businesses, academic organizations, and society through uncompromising reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy & Motto */}
      <section className="bg-[#f2f3ff] py-10 md:py-10 px-6 md:px-8 border-b border-[#e2e7ff] relative overflow-hidden" id="philosophy">
        <img src={IMAGES.nexusLogo} alt="" className="absolute -right-20 -top-20 w-96 h-96 opacity-[0.03] rotate-12 pointer-events-none mix-blend-multiply" aria-hidden="true" />
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider">Core Philosophy</span>
              <h2 className="text-2xl sm:text-3xl text-[#131b2e] font-bold mt-2 leading-tight">
                Carefully crafted software that never lets you down.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#464555] max-w-md leading-relaxed">
              We don't use generic, one-size-fits-all software. Everything we build is designed from scratch to be fast, clean, and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Principle 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e7ff] flex flex-col justify-between gap-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#e2dfff] flex items-center justify-center text-[#3525cd]">
                <span className="material-symbols-outlined text-[24px]">architecture</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#131b2e]">Custom-Built Systems</h3>
                <p className="text-sm text-[#464555] leading-relaxed">
                  Designed around your exact needs, connecting smoothly with your existing systems while still moving fast on upgrades.
                </p>
              </div>
              <div className="text-xs text-[#3525cd] font-semibold flex items-center gap-1">
                <span>01 / Principle</span>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e7ff] flex flex-col justify-between gap-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#86f2e4]/30 flex items-center justify-center text-[#006f66]">
                <span className="material-symbols-outlined text-[24px]">psychology</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#131b2e]">Clear, Simple Design</h3>
                <p className="text-sm text-[#464555] leading-relaxed">
                  Inspired by the clean simplicity of tools like Notion and Stripe, our interfaces cut clutter so decision-makers can focus on what matters.
                </p>
              </div>
              <div className="text-xs text-[#006a61] font-semibold flex items-center gap-1">
                <span>02 / Principle</span>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e7ff] flex flex-col justify-between gap-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#dfe3e7] flex items-center justify-center text-[#171c1f]">
                <span className="material-symbols-outlined text-[24px]">shield</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#131b2e]">Operational Resilience</h3>
                <p className="text-sm text-[#464555] leading-relaxed">
                  Every product is built from the ground up with automatic failure recovery, regulatory compliance, and real-time data accuracy.
                </p>
              </div>
              <div className="text-xs text-[#44494d] font-semibold flex items-center gap-1">
                <span>03 / Principle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-10 md:py-10 px-6 md:px-8 bg-white border-b border-[#e2e7ff]" id="leadership">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider">
              Executive Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#131b2e] font-bold">
              Driven by vision, anchored in execution
            </h2>
            <p className="text-sm sm:text-base text-[#464555]">
              Our leadership trio brings deep expertise in distributed systems, academic administration software, and enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {FOUNDERS.map((leader) => (
              <div 
                key={leader.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e7ff] flex flex-col items-center text-center gap-4 hover:shadow-md transition-all"
              >
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md border border-[#dae2fd]"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-[#131b2e] font-serif">{leader.name}</h3>
                  <p className="text-sm text-[#3525cd] font-semibold">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
      </section>

      {/* Global Scale & Customer-Centric Philosophy */}
      <section className="bg-[#f2f3ff] py-10 md:py-10 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-12 flex flex-col gap-6 max-w-3xl">
            <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider">
              Global Scale
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#131b2e] font-bold leading-tight">
              Built for worldwide compliance, localized performance, and scale.
            </h2>
            <p className="text-sm sm:text-base text-[#464555] leading-relaxed">
              Before writing a single line of code, our team embeds within your institution — observing how registrars, faculty, and IT staff actually work — so our software fits your real workflows, not the other way around.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-xl border border-[#e2e7ff] shadow-sm">
                <span className="text-3xl font-bold text-[#3525cd] block">14+</span>
                <span className="text-xs text-[#464555] font-medium mt-1 block">Countries Served</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#e2e7ff] shadow-sm">
                <span className="text-3xl font-bold text-[#006a61] block">99.8%</span>
                <span className="text-xs text-[#464555] font-medium mt-1 block">Customer Retention</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#464555]">
              <CheckCircle2 className="w-4 h-4 text-[#006a61]" aria-hidden="true" />
              <span>Fast, local servers across North America, Europe, and Asia-Pacific — so your team always gets a snappy experience.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product: academicOS Showcase */}
      <section className="py-10 md:py-10 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#3525cd] via-[#4f46e5] to-[#3323cc] rounded-3xl p-8 sm:p-12 md:p-16 text-slate-900 relative overflow-hidden shadow-xl">
            <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl flex flex-col gap-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white font-medium text-xs w-fit backdrop-blur-md">
                <span className="material-symbols-outlined text-[16px]">school</span>
                <span>Flagship Product</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Introducing academicOS
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                The all-in-one platform built specifically for universities. academicOS brings together student records, faculty tools, and campus analytics into one fast, unified workspace.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button 
                  onClick={() => onRouteChange('solutions-matrix')}
                  className="bg-white text-[#3525cd] px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#faf8ff] transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore academicOS Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => onRouteChange('demo-request')}
                  className="bg-transparent border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  Request Consultation & Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
