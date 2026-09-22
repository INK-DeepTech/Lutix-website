import React, { useState, useEffect } from 'react';
import { PageRoute, Department, WorkflowEngine } from '../types';
import { CAPABILITIES } from '../data/content';
import { ArrowRight, Check, Sparkles, Terminal, Activity, ArrowRightLeft, ShieldCheck, Database, Cloud } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface SolutionsMatrixPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const SolutionsMatrixPage: React.FC<SolutionsMatrixPageProps> = ({ onRouteChange }) => {
  const [selectedDept, setSelectedDept] = useState<Department>('all');
  const [activeEngine, setActiveEngine] = useState<WorkflowEngine>('state');
  const [activeModalSpec, setActiveModalSpec] = useState<string | null>(null);

  const filteredCapabilities = selectedDept === 'all' 
    ? CAPABILITIES 
    : CAPABILITIES.filter((c) => c.dept === selectedDept);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalSpec) {
        setActiveModalSpec(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalSpec]);

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] text-[#131b2e]">
      {/* Top Banner / Header area */}
      <section className="w-full bg-[#f2f3ff] py-14 md:py-20 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] text-xs font-bold uppercase tracking-wider">
                Full Platform Capabilities
              </span>
              <span className="text-xs text-[#464555] font-mono font-medium">v4.2 Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131b2e] tracking-tight">
              Solutions & Capabilities Matrix
            </h1>
            <p className="text-base sm:text-lg text-[#464555] leading-relaxed">
              Browse our plug-and-play workflow tools, team-specific features, and built-in integrations — all designed to give you full control over how your systems work together.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#matrix" 
              className="px-5 py-3 bg-[#3525cd] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm hover:bg-[#4d44e3] transition-all"
            >
              Filter Matrix
            </a>
            <a 
              href="#engines" 
              className="px-5 py-3 bg-[#e2e7ff] text-[#131b2e] text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#dae2fd] transition-all"
            >
              Workflow Engines
            </a>
          </div>
        </div>
      </section>

      {/* Quick Metric Strip */}
      <section className="w-full bg-white py-8 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col p-4 sm:p-5 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff]">
            <span className="text-xs text-[#464555] uppercase tracking-wider font-semibold">Uptime SLA</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">99.995%</span>
            <span className="text-xs text-[#006f66] mt-1 font-medium">Global Multi-Region</span>
          </div>
          <div className="flex flex-col p-4 sm:p-5 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff]">
            <span className="text-xs text-[#464555] uppercase tracking-wider font-semibold">Integrations</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">250+ Native</span>
            <span className="text-xs text-[#006f66] mt-1 font-medium">Zero-latency sync</span>
          </div>
          <div className="flex flex-col p-4 sm:p-5 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff]">
            <span className="text-xs text-[#464555] uppercase tracking-wider font-semibold">Execution Speed</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">&lt; 12ms</span>
            <span className="text-xs text-[#006f66] mt-1 font-medium">P99 Engine Latency</span>
          </div>
          <div className="flex flex-col p-4 sm:p-5 bg-[#faf8ff] rounded-2xl border border-[#e2e7ff]">
            <span className="text-xs text-[#464555] uppercase tracking-wider font-semibold">Compliance</span>
            <span className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">SOC2 Type II</span>
            <span className="text-xs text-[#006f66] mt-1 font-medium">GDPR & HIPAA Ready</span>
          </div>
        </div>
      </section>

      {/* Filterable Capability Breakdown by Department */}
      <section className="w-full py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto" id="matrix">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider block">
                Department Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
                Capabilities by Business Unit
              </h2>
            </div>

            {/* Department Filter Buttons */}
            <div 
              className="flex flex-wrap items-center gap-1.5 bg-[#f2f3ff] p-1.5 rounded-2xl border border-[#e2e7ff]"
              role="tablist" 
              aria-label="Department filters"
            >
              {(['all', 'engineering', 'revenue', 'security', 'product'] as Department[]).map((dept) => {
                const isSelected = selectedDept === dept;
                const labels: Record<Department, string> = {
                  all: 'All Units',
                  engineering: 'Engineering',
                  revenue: 'Revenue Ops',
                  security: 'Security & GRC',
                  product: 'Product',
                };
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls="capabilities-panel"
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#3525cd] text-white shadow-sm'
                        : 'text-[#464555] hover:text-[#131b2e]'
                    }`}
                  >
                    {labels[dept]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Capability Cards Grid */}
          <div 
            id="capabilities-panel" 
            role="tabpanel" 
            aria-label="Capabilities" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCapabilities.map((card) => {
              const tagStyles = {
                primary: 'bg-[#e2dfff] text-[#0f0069]',
                secondary: 'bg-[#89f5e7]/40 text-[#005049]',
                error: 'bg-[#ffdad6] text-[#93000a]',
                surface: 'bg-[#dae2fd] text-[#131b2e]',
              }[card.tagColor];

              return (
                <div 
                  key={card.id}
                  className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#dae2fd] shadow-sm hover:shadow-md transition-all hover:border-[#3525cd]/40 group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#3525cd] border border-[#e2e7ff]">
                        <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${tagStyles}`}>
                        {card.dept === 'revenue' ? 'Revenue Ops' : card.dept === 'security' ? 'Security & GRC' : card.dept}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#131b2e] group-hover:text-[#3525cd] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#464555] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#eaedff] flex items-center justify-between text-xs text-[#464555]">
                    <span className="font-semibold">{card.metricLabel}: {card.metric}</span>
                    <button 
                      onClick={() => setActiveModalSpec(card.title)}
                      className="text-[#3525cd] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Explore Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep Dive into Modular Workflow Engines */}
      <section className="w-full bg-[#f2f3ff] py-16 md:py-24 px-6 md:px-8 border-y border-[#e2e7ff]" id="engines">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider block">
                Engine Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
                How Your Workflows Actually Run
              </h2>
              <p className="text-sm sm:text-base text-[#464555] mt-2 leading-relaxed">
                Our workflow engine keeps your business rules separate from the technical plumbing — so your processes remember where they left off, retry on failure, and are easy to debug visually.
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[#dae2fd] shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006a61] animate-ping" />
              <span className="text-xs font-semibold text-[#131b2e]">
                Engine Status: Optimal (Cluster A-4)
              </span>
            </div>
          </div>

          {/* Engine Showcase Grid / Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Engine List */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div 
                onClick={() => setActiveEngine('state')}
                className={`p-6 rounded-2xl cursor-pointer border-l-4 transition-all shadow-sm ${
                  activeEngine === 'state'
                    ? 'bg-white border-[#3525cd] shadow-md ring-1 ring-[#dae2fd]'
                    : 'bg-[#faf8ff] border-transparent hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-base font-bold text-[#131b2e]"><Tooltip label="Distributed State Machine">Workflow State Tracker</Tooltip></h4>
                  <span className="material-symbols-outlined text-[#3525cd]">account_tree</span>
                </div>
                <p className="text-xs sm:text-sm text-[#464555] leading-relaxed">
                  Keeps track of every step in your workflow across services. If a server goes down, it automatically picks up right where it left off.
                </p>
              </div>

              <div 
                onClick={() => setActiveEngine('router')}
                className={`p-6 rounded-2xl cursor-pointer border-l-4 transition-all shadow-sm ${
                  activeEngine === 'router'
                    ? 'bg-white border-[#3525cd] shadow-md ring-1 ring-[#dae2fd]'
                    : 'bg-[#faf8ff] border-transparent hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-base font-bold text-[#131b2e]"><Tooltip label="Payload Router">Smart Data Router</Tooltip></h4>
                  <span className="material-symbols-outlined text-[#3525cd]">alt_route</span>
                </div>
                <p className="text-xs sm:text-sm text-[#464555] leading-relaxed">
                  Takes incoming data, validates its format, transforms it as needed, and sends it to the right destination — automatically.
                </p>
              </div>

              <div 
                onClick={() => setActiveEngine('scheduler')}
                className={`p-6 rounded-2xl cursor-pointer border-l-4 transition-all shadow-sm ${
                  activeEngine === 'scheduler'
                    ? 'bg-white border-[#3525cd] shadow-md ring-1 ring-[#dae2fd]'
                    : 'bg-[#faf8ff] border-transparent hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-base font-bold text-[#131b2e]">Cron & Event Scheduler</h4>
                  <span className="material-symbols-outlined text-[#3525cd]">schedule</span>
                </div>
                <p className="text-xs sm:text-sm text-[#464555] leading-relaxed">
                  A precise scheduling engine that can trigger jobs down to the millisecond, <Tooltip label="Backpressure = automatically slowing intake when downstream is overloaded">automatically queue excess work</Tooltip>, and control how many tasks run at once.
                </p>
              </div>
            </div>

            {/* Right: Visual Preview / Diagram */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#dae2fd] flex flex-col gap-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ba1a1a]" />
                  <div className="w-3 h-3 rounded-full bg-[#6bd8cb]" />
                  <div className="w-3 h-3 rounded-full bg-[#c3c0ff]" />
                  <span className="text-xs font-mono text-[#464555] ml-2">
                    {activeEngine === 'state' && 'engine://state-machine/v2.1'}
                    {activeEngine === 'router' && 'engine://payload-router/v1.8'}
                    {activeEngine === 'scheduler' && 'engine://cron-scheduler/v3.0'}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#f2f3ff] text-xs font-mono font-bold text-[#3525cd]">
                  ACTIVE STREAM
                </span>
              </div>

              {/* Dynamic Diagram Content */}
              <div className="w-full bg-[#faf8ff] p-6 sm:p-8 rounded-xl flex flex-col justify-center items-center gap-6 relative overflow-hidden min-h-[260px] border border-[#e2e7ff]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3525cd]/5 via-transparent to-[#006a61]/5 pointer-events-none" />

                {activeEngine === 'state' && (
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 w-full z-10 animate-in fade-in duration-200">
                    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-[#dae2fd] w-36 text-center">
                      <span className="material-symbols-outlined text-[#3525cd] text-3xl mb-1">input</span>
                      <span className="text-xs font-bold text-[#131b2e]">Event Ingest</span>
                      <span className="text-[11px] text-[#464555]">JSON / Protobuf</span>
                    </div>

                    <div className="h-6 md:h-auto md:w-10 border-l md:border-t border-dashed border-[#777587] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#464555] text-lg">arrow_forward</span>
                    </div>

                    <div className="flex flex-col items-center bg-[#3525cd] text-white p-4 rounded-xl shadow-md w-36 text-center">
                      <span className="material-symbols-outlined text-white text-3xl mb-1">bolt</span>
                      <span className="text-xs font-bold text-white">Execution Core</span>
                      <span className="text-[11px] text-[#dad7ff]">State Check</span>
                    </div>

                    <div className="h-6 md:h-auto md:w-10 border-l md:border-t border-dashed border-[#777587] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#464555] text-lg">arrow_forward</span>
                    </div>

                    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-[#dae2fd] w-36 text-center">
                      <span className="material-symbols-outlined text-[#006a61] text-3xl mb-1">output</span>
                      <span className="text-xs font-bold text-[#131b2e]">Sink / DB</span>
                      <span className="text-[11px] text-[#464555]">Snowflake / AWS</span>
                    </div>
                  </div>
                )}

                {activeEngine === 'router' && (
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 w-full z-10 animate-in fade-in duration-200">
                    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-[#dae2fd] w-36 text-center">
                      <span className="material-symbols-outlined text-[#3525cd] text-3xl mb-1">stream</span>
                      <span className="text-xs font-bold text-[#131b2e]">Stream Feed</span>
                      <span className="text-[11px] text-[#464555]">Kafka Topic</span>
                    </div>

                    <div className="h-6 md:h-auto md:w-10 border-l md:border-t border-dashed border-[#777587] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#464555] text-lg">alt_route</span>
                    </div>

                    <div className="flex flex-col items-center bg-[#006a61] text-white p-4 rounded-xl shadow-md w-36 text-center">
                      <span className="material-symbols-outlined text-white text-3xl mb-1">hub</span>
                      <span className="text-xs font-bold text-white">Schema Parser</span>
                      <span className="text-[11px] text-[#86f2e4]">Transform Rule</span>
                    </div>

                    <div className="h-6 md:h-auto md:w-10 border-l md:border-t border-dashed border-[#777587] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#464555] text-lg">arrow_forward</span>
                    </div>

                    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-[#dae2fd] w-36 text-center">
                      <span className="material-symbols-outlined text-[#3525cd] text-3xl mb-1">lan</span>
                      <span className="text-xs font-bold text-[#131b2e]">Multi-Endpoint</span>
                      <span className="text-[11px] text-[#464555]">Webhooks / API</span>
                    </div>
                  </div>
                )}

                {activeEngine === 'scheduler' && (
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 w-full z-10 animate-in fade-in duration-200">
                    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-[#dae2fd] w-36 text-center">
                      <span className="material-symbols-outlined text-[#3525cd] text-3xl mb-1">schedule</span>
                      <span className="text-xs font-bold text-[#131b2e]">Temporal Trigger</span>
                      <span className="text-[11px] text-[#464555]">Sub-second Cron</span>
                    </div>

                    <div className="h-6 md:h-auto md:w-10 border-l md:border-t border-dashed border-[#777587] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#464555] text-lg">arrow_forward</span>
                    </div>

                    <div className="flex flex-col items-center bg-[#5c6164] text-white p-4 rounded-xl shadow-md w-36 text-center">
                      <span className="material-symbols-outlined text-white text-3xl mb-1">hourglass_top</span>
                      <span className="text-xs font-bold text-white">Backpressure</span>
                      <span className="text-[11px] text-[#d8dce0]">Rate Governor</span>
                    </div>

                    <div className="h-6 md:h-auto md:w-10 border-l md:border-t border-dashed border-[#777587] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#464555] text-lg">arrow_forward</span>
                    </div>

                    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-[#dae2fd] w-36 text-center">
                      <span className="material-symbols-outlined text-[#006a61] text-3xl mb-1">task_alt</span>
                      <span className="text-xs font-bold text-[#131b2e]">Job Dispatch</span>
                      <span className="text-[11px] text-[#464555]">Cluster Workers</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between w-full text-xs font-mono text-[#464555] border-t border-[#dae2fd] pt-4 z-10">
                  <span>Memory Allocation: 142MB / 2GB</span>
                  <span>Worker Threads: 64 active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem Showcase */}
      <section className="w-full py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#006a61] uppercase tracking-wider block">
                Ecosystem Connectors
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
                Native Enterprise Integrations
              </h2>
            </div>
            <p className="text-sm text-[#464555] max-w-md">
              Connect to your existing tools with secure, two-way integrations built for high performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AWS */}
            <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#dae2fd] shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#131b2e]">
                    <span className="material-symbols-outlined text-2xl">cloud_sync</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#89f5e7] text-[#00201d] text-xs font-bold">
                    Certified
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#131b2e]">Amazon Web Services</h3>
                <p className="text-xs text-[#464555] leading-relaxed">
                  <Tooltip label="IAM, S3, Lambda, VPC = core AWS services">Built-in AWS identity management, storage streaming, serverless triggers, and private network connections for secure, fast cloud processing.</Tooltip>
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#eaedff] flex items-center justify-between text-xs text-[#464555]">
                <span>Latency: 4ms</span>
                <span className="text-[#3525cd] font-semibold cursor-pointer hover:underline">View Docs</span>
              </div>
            </div>

            {/* Salesforce */}
            <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#dae2fd] shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#131b2e]">
                    <span className="material-symbols-outlined text-2xl">hub</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#89f5e7] text-[#00201d] text-xs font-bold">
                    Certified
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#131b2e]">Salesforce CRM</h3>
                <p className="text-xs text-[#464555] leading-relaxed">
                  Bi-directional contact and account syncing, custom object mapping, and instant trigger actions on opportunity closure.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#eaedff] flex items-center justify-between text-xs text-[#464555]">
                <span>Sync: Real-time</span>
                <span className="text-[#3525cd] font-semibold cursor-pointer hover:underline">View Docs</span>
              </div>
            </div>

            {/* Snowflake */}
            <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#dae2fd] shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#131b2e]">
                    <span className="material-symbols-outlined text-2xl">database</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#89f5e7] text-[#00201d] text-xs font-bold">
                    Certified
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#131b2e]">Snowflake Data Cloud</h3>
                <p className="text-xs text-[#464555] leading-relaxed">
                  Zero-copy data sharing, automated warehouse scaling, and direct SQL query execution embedded in workflow pipelines.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#eaedff] flex items-center justify-between text-xs text-[#464555]">
                <span>Query: Sub-sec</span>
                <span className="text-[#3525cd] font-semibold cursor-pointer hover:underline">View Docs</span>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#dae2fd] shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#131b2e]">
                    <span className="material-symbols-outlined text-2xl">code</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#89f5e7] text-[#00201d] text-xs font-bold">
                    Certified
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#131b2e]">GitHub Enterprise</h3>
                <p className="text-xs text-[#464555] leading-relaxed">
                  Automated PR workflow triggers, Actions runner integration, security webhook verification, and automated branch governance.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#eaedff] flex items-center justify-between text-xs text-[#464555]">
                <span>Webhooks: Instant</span>
                <span className="text-[#3525cd] font-semibold cursor-pointer hover:underline">View Docs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison Table */}
      <section className="w-full bg-[#f2f3ff] py-16 md:py-24 px-6 md:px-8 border-t border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider block">
                Plan Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
                Detailed Feature Matrix
              </h2>
            </div>
            <p className="text-sm text-[#464555] max-w-sm">
              Compare what's included in each plan — from automation limits to support speed and security features.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="w-full bg-white rounded-2xl shadow-sm border border-[#dae2fd] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-[#dae2fd] bg-[#faf8ff]">
                  <th className="p-4 sm:p-5 font-bold text-sm text-[#131b2e]">Capability Feature</th>
                  <th className="p-4 sm:p-5 font-bold text-sm text-[#131b2e] text-center">Growth Tier</th>
                  <th className="p-4 sm:p-5 font-bold text-sm text-[#131b2e] text-center">Business Tier</th>
                  <th className="p-4 sm:p-5 font-bold text-sm text-[#3525cd] text-center bg-[#eaedff]/40">
                    Enterprise Core
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eaedff] text-sm text-[#464555]">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-[#131b2e]">Concurrent Workflow Executions</td>
                  <td className="p-4 sm:p-5 text-center">1,000 / sec</td>
                  <td className="p-4 sm:p-5 text-center">10,000 / sec</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#3525cd] bg-[#eaedff]/20">
                    Unlimited (100k+)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-[#131b2e]">Native Integrations Library</td>
                  <td className="p-4 sm:p-5 text-center">Standard (50+)</td>
                  <td className="p-4 sm:p-5 text-center">Advanced (150+)</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#3525cd] bg-[#eaedff]/20">
                    All (250+ & Custom SDK)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-[#131b2e]">Data Retention & Audit Logs</td>
                  <td className="p-4 sm:p-5 text-center">30 Days</td>
                  <td className="p-4 sm:p-5 text-center">1 Year</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#3525cd] bg-[#eaedff]/20">
                    7 Years (Immutable)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-[#131b2e]">Dedicated Support SLA</td>
                  <td className="p-4 sm:p-5 text-center">24hr Response</td>
                  <td className="p-4 sm:p-5 text-center">4hr Response</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#3525cd] bg-[#eaedff]/20">
                    15-min Dedicated Engineer
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-[#131b2e]">Deployment Model</td>
                  <td className="p-4 sm:p-5 text-center">Multi-Tenant Cloud</td>
                  <td className="p-4 sm:p-5 text-center">Dedicated VPC</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#3525cd] bg-[#eaedff]/20">
                    On-Premise / Air-Gapped
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 px-6 md:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-[#3525cd] text-white rounded-3xl p-10 md:p-14 flex flex-col items-center gap-6 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
          <div className="flex flex-col gap-2 max-w-2xl z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Scale Your Enterprise Architecture?
            </h2>
            <p className="text-sm sm:text-base text-[#dad7ff]">
              Talk to our team to design a custom feature set built around your specific needs.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 z-10 pt-2">
            <button 
              onClick={() => onRouteChange('demo-request')}
              className="px-6 py-3.5 bg-white text-[#3525cd] font-semibold text-sm rounded-xl shadow-md hover:bg-[#faf8ff] transition-all"
            >
              Book a Free Consultation
            </button>
            <button 
              onClick={() => onRouteChange('pricing-calculator')}
              className="px-6 py-3.5 bg-[#4f46e5] text-white font-semibold text-sm rounded-xl hover:bg-[#4f46e5]/80 transition-all border border-white/20"
            >
              Open Pricing Calculator
            </button>
          </div>
        </div>
      </section>

      {/* Spec Details Modal */}
      {activeModalSpec && (
        <div 
          className="fixed inset-0 z-50 bg-[#131b2e]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#dae2fd] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
              <h4 id="modal-title" className="font-bold text-base text-[#131b2e]">{activeModalSpec}</h4>
              <button 
                onClick={() => setActiveModalSpec(null)}
                className="text-[#464555] hover:text-[#131b2e] text-lg font-bold p-1"
                aria-label="Close modal"
                autoFocus
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-[#464555] leading-relaxed">
              Detailed technical specification for <strong className="text-[#131b2e]">{activeModalSpec}</strong>. This module includes deterministic event replay, distributed consensus validation, and sub-15ms cold-start execution times across all deployed edge nodes.
            </p>
            <div className="bg-[#f2f3ff] p-3 rounded-xl text-xs space-y-1 font-mono text-[#131b2e]">
              <div>Endpoint: /v4.2/matrix/capabilities/{activeModalSpec.toLowerCase().replace(/\s+/g, '-')}</div>
              <div>Auth: mTLS + JWT Session Enclave</div>
              <div>Throughput: 100,000+ rps burst</div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => { setActiveModalSpec(null); onRouteChange('demo-request'); }}
                className="px-4 py-2 bg-[#3525cd] text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                Configure in Sandbox →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
