import React, { useState } from 'react';
import { PageRoute } from '../types';
import { IMAGES } from '../data/content';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface OverviewPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({ onRouteChange }) => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'finance' | 'operations'>('engineering');

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] text-[#131b2e]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f2f3ff] pt-14 pb-20 md:py-16 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3525cd]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#006a61]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#3525cd]/10 text-[#3525cd] rounded-full text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              <span>Smart Automation for Your Whole Organization</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131b2e] tracking-tight leading-[1.15]">
              Run Your Organization Smarter — With Less Manual Work
            </h1>

            <p className="text-base sm:text-lg text-[#464555] max-w-2xl leading-relaxed">
              Bring your engineering, finance, and operations teams onto one platform. Automate approvals, reduce busywork, and grow without needing to hire more people.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => onRouteChange('demo-request')}
                className="px-6 py-3.5 bg-[#3525cd] text-white rounded-xl text-sm font-semibold hover:bg-[#4d44e3] transition-all shadow-md flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => onRouteChange('solutions-matrix')}
                className="px-6 py-3.5 bg-[#e2e7ff] text-[#131b2e] rounded-xl text-sm font-semibold hover:bg-[#dae2fd] transition-all"
              >
                See All Features
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-[#464555] text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#006a61]" aria-hidden="true" />
                <span>SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#006a61]" aria-hidden="true" />
                <span>99.99% Uptime SLA</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#dae2fd] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#eaedff]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ba1a1a]" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-[#c3c7cb]" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-[#006a61]" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono text-[#464555]">nexus-core-prod-01</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 bg-[#f2f3ff] rounded-xl border border-[#e2e7ff]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3525cd]/10 flex items-center justify-center text-[#3525cd]">
                      <span className="material-symbols-outlined">sync</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#131b2e]">Automated Billing Pipeline</div>
                      <div className="text-xs text-[#464555]">Processed 14,280 transactions</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#86f2e4]/30 text-[#006f66] rounded-md text-xs font-bold">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#f2f3ff] rounded-xl border border-[#e2e7ff]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3525cd]/10 flex items-center justify-center text-[#3525cd]">
                      <span className="material-symbols-outlined">shield_locked</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#131b2e]">Security Audit</div>
                      <div className="text-xs text-[#464555]">Scanned 450 microservices</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#86f2e4]/30 text-[#006f66] rounded-md text-xs font-bold">
                    Passed
                  </span>
                </div>

                <div className="p-4 bg-[#3525cd] text-white rounded-xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-xs text-slate-600 font-medium">Efficiency Gain</div>
                    <div className="text-2xl font-bold mt-0.5">+340% YoY</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Metrics */}
      <section className="bg-white py-14 md:py-16 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff] shadow-sm">
            <div className="text-3xl sm:text-4xl font-bold text-[#3525cd]">$4.2B+</div>
            <div className="text-xs text-[#464555] font-semibold mt-2 uppercase tracking-wide">Processed Annually</div>
          </div>
          <div className="p-6 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff] shadow-sm">
            <div className="text-3xl sm:text-4xl font-bold text-[#3525cd]">99.99%</div>
            <div className="text-xs text-[#464555] font-semibold mt-2 uppercase tracking-wide">Guaranteed Uptime</div>
          </div>
          <div className="p-6 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff] shadow-sm">
            <div className="text-3xl sm:text-4xl font-bold text-[#3525cd]">10x</div>
            <div className="text-xs text-[#464555] font-semibold mt-2 uppercase tracking-wide">Faster Deployments</div>
          </div>
          <div className="p-6 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff] shadow-sm">
            <div className="text-3xl sm:text-4xl font-bold text-[#3525cd]">2,500+</div>
            <div className="text-xs text-[#464555] font-semibold mt-2 uppercase tracking-wide">Enterprise Clients</div>
          </div>
        </div>
      </section>

      {/* Dynamic Department Solution Tabs */}
      <section className="py-12 md:py-16 px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider block mb-2">
            Solutions for Every Team
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131b2e] mb-3">
            Tailored Solutions for Every Department
          </h2>
          <p className="text-sm sm:text-base text-[#464555]">
            Empower your entire enterprise with specialized tooling designed for distinct operational workflows.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10" role="tablist" aria-label="Department solutions">
          <div className="inline-flex p-1.5 bg-[#e2e7ff] rounded-2xl gap-2 shadow-inner">
            <button
              onClick={() => setActiveTab('engineering')}
              role="tab"
              aria-selected={activeTab === 'engineering'}
              aria-controls="tab-panel-engineering"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'engineering'
                  ? 'bg-[#3525cd] text-white shadow-md'
                  : 'text-[#464555] hover:text-[#131b2e]'
              }`}
            >
              For Engineering
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              role="tab"
              aria-selected={activeTab === 'finance'}
              aria-controls="tab-panel-finance"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'finance'
                  ? 'bg-[#3525cd] text-white shadow-md'
                  : 'text-[#464555] hover:text-[#131b2e]'
              }`}
            >
              For Finance
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              role="tab"
              aria-selected={activeTab === 'operations'}
              aria-controls="tab-panel-operations"
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'operations'
                  ? 'bg-[#3525cd] text-white shadow-md'
                  : 'text-[#464555] hover:text-[#131b2e]'
              }`}
            >
              For Operations
            </button>
          </div>
        </div>

        {/* Tab 1: Engineering */}
        {activeTab === 'engineering' && (
          <div id="tab-panel-engineering" role="tabpanel" aria-labelledby="tab-engineering" className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-[#dae2fd] animate-in fade-in duration-200">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#3525cd]/10 text-[#3525cd] rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">terminal</span>
                <span>Engineering Velocity</span>
              </div>
              <h3 className="text-2xl font-bold text-[#131b2e]">
                Automatic code testing, deployment, and updates — with zero downtime
              </h3>
              <p className="text-sm sm:text-base text-[#464555] leading-relaxed">
                Speed up your releases with AI-powered testing and infrastructure that automatically scales up or down based on demand.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Automated vulnerability patching across all repositories</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Instant preview environments for every code change — test before you merge</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Performance monitoring with automatic alerts when response times slow down</span>
                </li>
              </ul>
              <div className="pt-2">
                <button 
                  onClick={() => onRouteChange('solutions-matrix')}
                  className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#3525cd] text-white hover:bg-[#4d44e3] transition-all"
                >
                  Explore Engineering Features →
                </button>
              </div>
            </div>
            <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#e2e7ff] overflow-hidden shadow-inner">
              <img 
                className="w-full h-auto rounded-lg shadow-sm object-cover" 
                alt="Engineering Dashboard Mockup" 
                src={IMAGES.engDashboard}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Finance */}
        {activeTab === 'finance' && (
          <div id="tab-panel-finance" role="tabpanel" aria-labelledby="tab-finance" className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-[#dae2fd] animate-in fade-in duration-200">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#3525cd]/10 text-[#3525cd] rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">payments</span>
                <span>Financial Precision</span>
              </div>
              <h3 className="text-2xl font-bold text-[#131b2e]">
                Instant financial reconciliation and automated regulatory compliance
              </h3>
              <p className="text-sm sm:text-base text-[#464555] leading-relaxed">
                Simplify billing, automatically recover missed payments before you lose customers, and handle multi-entity tax calculations — no spreadsheets needed.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Automated multi-currency ledger reconciliation</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Instant audit trails for Sarbanes-Oxley compliance</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Accurate usage tracking that never falls out of sync</span>
                </li>
              </ul>
              <div className="pt-2">
                <button 
                  onClick={() => onRouteChange('pricing-calculator')}
                  className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#3525cd] text-white hover:bg-[#4d44e3] transition-all"
                >
                  Open Pricing & Revenue Calculator →
                </button>
              </div>
            </div>
            <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#e2e7ff] overflow-hidden shadow-inner">
              <img 
                className="w-full h-auto rounded-lg shadow-sm object-cover" 
                alt="Financial Dashboard Mockup" 
                src={IMAGES.finDashboard}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        {/* Tab 3: Operations */}
        {activeTab === 'operations' && (
          <div id="tab-panel-operations" role="tabpanel" aria-labelledby="tab-operations" className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-[#dae2fd] animate-in fade-in duration-200">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#3525cd]/10 text-[#3525cd] rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">hub</span>
                <span>Operational Harmony</span>
              </div>
              <h3 className="text-2xl font-bold text-[#131b2e]">
                Connect workflows across every department
              </h3>
              <p className="text-sm sm:text-base text-[#464555] leading-relaxed">
                Link your <Tooltip label="CRM = Customer Relationship Management">CRM</Tooltip>, student records, <Tooltip label="ERP = Enterprise Resource Planning">ERP</Tooltip>, and internal databases into automated workflows that run complex business processes without anyone being the bottleneck.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Drag-and-drop visual enterprise workflow builder</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>AI-powered detection of workflow slowdowns before they cause problems</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#131b2e]">
                  <CheckCircle2 className="w-5 h-5 text-[#006a61] shrink-0" aria-hidden="true" />
                  <span>Bi-directional sync across AWS, Snowflake, and Salesforce</span>
                </li>
              </ul>
              <div className="pt-2">
                <button 
                  onClick={() => onRouteChange('solutions-matrix')}
                  className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#3525cd] text-white hover:bg-[#4d44e3] transition-all"
                >
                  Test Workflow Engines Live →
                </button>
              </div>
            </div>
            <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#e2e7ff] overflow-hidden shadow-inner">
              <img 
                className="w-full h-auto rounded-lg shadow-sm object-cover" 
                alt="Operations Workflow Canvas Mockup" 
                src={IMAGES.opsCanvas}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}
      </section>

      {/* Core Capabilities Feature Grid */}
      <section className="bg-[#f2f3ff] py-12 md:py-16 px-6 md:px-8 border-b border-[#e2e7ff] relative overflow-hidden">
        <img src={IMAGES.nexusLogo} alt="" className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] -rotate-12 pointer-events-none mix-blend-multiply" aria-hidden="true" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl text-[#131b2e] font-bold tracking-tight">
              A Platform Built for Scale
            </h2>
            <p className="text-base text-[#464555]">
              Discover the core capabilities that make Lutix and NexusScale the choice for modern institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-[#e2e7ff] hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">auto_fix_high</span>
              </div>
              <h3 className="text-lg font-bold text-[#131b2e] mb-2">Intelligent Workflows</h3>
              <p className="text-sm text-[#464555] leading-relaxed">
                Smart workflows that detect and fix common errors automatically — so your team isn't woken up at 2 AM.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-[#e2e7ff] hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">security</span>
              </div>
              <h3 className="text-lg font-bold text-[#131b2e] mb-2">Enterprise Security</h3>
              <p className="text-sm text-[#464555] leading-relaxed">
                Your data is encrypted everywhere — in storage and in transit. Access is controlled by role, compliance is monitored 24/7, and every action is logged.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-[#e2e7ff] hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h3 className="text-lg font-bold text-[#131b2e] mb-2">Real-Time Telemetry</h3>
              <p className="text-sm text-[#464555] leading-relaxed">
                See every automated transaction as it happens, set custom alerts, and dive deep into performance data — all in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting CTA Banner */}
      <section className="py-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-slate-50 text-slate-900 border border-slate-200 rounded-3xl p-10 md:p-14 text-center text-slate-900 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86f2e4] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Modernize How Your Organization Works?
            </h2>
            <p className="text-base text-[#dad7ff] leading-relaxed">
              Join thousands of engineering, academic, and finance teams that have streamlined their operations on one unified platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button 
                onClick={() => onRouteChange('demo-request')}
                className="px-8 py-3.5 bg-white text-[#3525cd] rounded-xl text-sm font-semibold hover:bg-[#faf8ff] transition-all shadow-md"
              >
                Book a Free Consultation
              </button>
              <button 
                onClick={() => onRouteChange('solutions-matrix')}
                className="px-8 py-3.5 bg-[#4f46e5] text-white rounded-xl text-sm font-semibold hover:bg-[#4f46e5]/80 transition-all border border-slate-200"
              >
                Explore Solutions Matrix
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
