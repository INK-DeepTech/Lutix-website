import React, { useState, useMemo } from 'react';
import { PageRoute, BillingCycle } from '../types';
import { Check, Shield, Zap, Sparkles, ArrowRight, Server, Users, Database } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface PricingCalculatorPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PricingCalculatorPage: React.FC<PricingCalculatorPageProps> = ({ onRouteChange }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');
  
  // Interactive Calculator Sliders
  const [seats, setSeats] = useState<number>(25);
  const [executions, setExecutions] = useState<number>(350000); // 350k
  const [storageGb, setStorageGb] = useState<number>(250); // 250 GB
  const [multiRegion, setMultiRegion] = useState<boolean>(true);

  // Dynamic Calculation
  const calculation = useMemo(() => {
    // Base per seat: $8/mo
    const seatCost = seats * 8;
    // Base per 10k executions: $2.50
    const execCost = Math.ceil(executions / 10000) * 2.5;
    // Storage: $0.10 per GB
    const storageCost = storageGb * 0.12;
    // Multi-region flat fee: $80
    const regionCost = multiRegion ? 80 : 0;

    let subtotal = seatCost + execCost + storageCost + regionCost;
    if (billingCycle === 'annual') {
      subtotal = subtotal * 0.8; // 20% discount
    }

    // Determine recommended tier
    let recommendedTier = 'Growth Plan';
    if (seats > 50 || executions > 500000 || multiRegion) {
      recommendedTier = 'Enterprise Plan';
    } else if (seats > 10 || executions > 50000) {
      recommendedTier = 'Business Plan';
    }

    return {
      seatCost: Math.round(seatCost),
      execCost: Math.round(execCost),
      storageCost: Math.round(storageCost),
      regionCost,
      total: Math.max(39, Math.round(subtotal)),
      recommendedTier,
    };
  }, [seats, executions, storageGb, multiRegion, billingCycle]);

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] text-[#131b2e]">
      {/* Top Banner / Header area */}
      <section className="w-full bg-[#f2f3ff] py-14 md:py-12 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] text-xs font-bold uppercase tracking-wider">
            Transparent Scaling
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131b2e] tracking-tight max-w-3xl">
            Pricing & Plans
          </h1>
          <p className="text-base sm:text-lg text-[#464555] max-w-2xl leading-relaxed">
            Estimate your costs based on your specific needs — from data storage to global server locations.
          </p>

          {/* Billing Toggle */}
          <div 
            className="flex items-center gap-3 mt-4 bg-white p-1.5 rounded-2xl border border-[#dae2fd] shadow-sm"
            role="radiogroup" 
            aria-label="Billing cycle"
          >
            <button
              role="radio"
              aria-checked={billingCycle === 'monthly'}
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#3525cd] text-white shadow-sm'
                  : 'text-[#464555] hover:text-[#131b2e]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              role="radio"
              aria-checked={billingCycle === 'annual'}
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#3525cd] text-white shadow-sm'
                  : 'text-[#464555] hover:text-[#131b2e]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#89f5e7] text-[#00201d] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Tier Cards Grid */}
      <section className="w-full py-16 md:py-12 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* Card 1: Developer & Team */}
          <div className="bg-white rounded-3xl p-8 border border-[#dae2fd] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#131b2e]">Growth Plan</h3>
                <p className="text-xs text-[#464555] mt-1">For small teams automating core microservices & internal workflows.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#131b2e]">
                  ${billingCycle === 'annual' ? '39' : '49'}
                </span>
                <span className="text-xs text-[#464555] font-semibold">/ month</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#464555] pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Up to 10 team seats included</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>50,000 workflow executions / mo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Standard support response times</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Shared cloud infrastructure</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Basic security & threat protection</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRouteChange('demo-request')}
                className="w-full py-3 rounded-xl bg-[#e2e7ff] text-[#131b2e] font-semibold text-xs sm:text-sm hover:bg-[#dae2fd] transition-all"
              >
                Deploy Growth Plan
              </button>
            </div>
          </div>

          {/* Card 2: Business Growth (Popular) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#3525cd] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#3525cd] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Most Popular</span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#131b2e]">Business Plan</h3>
                <p className="text-xs text-[#464555] mt-1">For scaling organizations requiring advanced state management & VPC peering.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#3525cd]">
                  ${billingCycle === 'annual' ? '159' : '199'}
                </span>
                <span className="text-xs text-[#464555] font-semibold">/ month</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#464555] pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3525cd] shrink-0" />
                  <span className="font-semibold text-[#131b2e]">Up to 50 team seats included</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3525cd] shrink-0" />
                  <span>500,000 workflow executions / mo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3525cd] shrink-0" />
                  <span>Priority support (4h response SLA)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3525cd] shrink-0" />
                  <span>Dedicated private servers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3525cd] shrink-0" />
                  <span>Advanced security firewall</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#3525cd] shrink-0" />
                  <span>99.99% uptime guarantee</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRouteChange('demo-request')}
                className="w-full py-3.5 rounded-xl bg-[#3525cd] text-white font-semibold text-xs sm:text-sm hover:bg-[#4d44e3] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Enterprise Core */}
          <div className="bg-white rounded-3xl p-8 border border-[#dae2fd] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#131b2e]">Enterprise Plan</h3>
                <p className="text-xs text-[#464555] mt-1">Mission-critical deployments requiring dedicated infrastructure & air-gapped options.</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#131b2e]">Custom</span>
                <span className="text-xs text-[#464555] font-semibold">/ agreement</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#464555] pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Unlimited team seats</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Unlimited workflow throughput (100k+ rps)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Dedicated 24/7 technical architect</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Can run on your own private network</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Full security audit support</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#006a61] shrink-0" />
                  <span>Custom SLA guarantee (99.999%)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onRouteChange('demo-request')}
                className="w-full py-3 rounded-xl bg-[#e2e7ff] text-[#131b2e] font-semibold text-xs sm:text-sm hover:bg-[#dae2fd] transition-all"
              >
                Contact Architecture Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Resource Utilization Estimator / Calculator */}
      <section className="w-full bg-[#f2f3ff] py-16 md:py-16 px-6 md:px-8 border-y border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider block">
              Dynamic Sizing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
              Interactive Cost & Capacity Estimator
            </h2>
            <p className="text-sm sm:text-base text-[#464555] mt-1">
              Simulate monthly billing based on your exact team size, transaction frequency, and storage footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sliders Area */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#dae2fd] space-y-8">
              {/* Slider 1: Seats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-[#131b2e] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#3525cd]" />
                    <span>Team Seats</span>
                  </label>
                  <span className="px-3 py-1 bg-[#f2f3ff] text-[#3525cd] font-mono font-bold rounded-lg text-sm">
                    {seats} members
                  </span>
                </div>
                <input 
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={seats}
                  onChange={(e) => setSeats(Number(e.target.value))}
                  className="w-full accent-[#3525cd] cursor-pointer"
                  aria-label="Team Seats"
                  aria-valuemin={5}
                  aria-valuemax={250}
                  aria-valuenow={seats}
                />
                <div className="flex justify-between text-[11px] text-[#464555]">
                  <span>5 seats (Base)</span>
                  <span>100 seats</span>
                  <span>250+ seats</span>
                </div>
              </div>

              {/* Slider 2: Workflow Executions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-[#131b2e] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#3525cd]" />
                    <span>Automation Volume</span>
                  </label>
                  <span className="px-3 py-1 bg-[#f2f3ff] text-[#3525cd] font-mono font-bold rounded-lg text-sm">
                    {(executions / 1000).toLocaleString()}k runs
                  </span>
                </div>
                <p className="text-xs text-[#464555]">
                  <Tooltip label="Ops/sec = Operations per second">How many automated tasks do you need to run per month?</Tooltip>
                </p>
                <input 
                  type="range"
                  min="10000"
                  max="2000000"
                  step="50000"
                  value={executions}
                  onChange={(e) => setExecutions(Number(e.target.value))}
                  className="w-full accent-[#3525cd] cursor-pointer"
                  aria-label="Automation Volume"
                  aria-valuemin={10000}
                  aria-valuemax={2000000}
                  aria-valuenow={executions}
                />
                <div className="flex justify-between text-[11px] text-[#464555]">
                  <span>10k / mo</span>
                  <span>1,000k / mo</span>
                  <span>2,000k+ / mo</span>
                </div>
              </div>

              {/* Slider 3: Event Storage */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-[#131b2e] flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#3525cd]" />
                    <span>Storage Space (TB)</span>
                  </label>
                  <span className="px-3 py-1 bg-[#f2f3ff] text-[#3525cd] font-mono font-bold rounded-lg text-sm">
                    {storageGb} GB
                  </span>
                </div>
                <p className="text-xs text-[#464555]">
                  <Tooltip label="Triple-replicated = Data is backed up in three separate places">How much data do you need to store securely?</Tooltip>
                </p>
                <input 
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={storageGb}
                  onChange={(e) => setStorageGb(Number(e.target.value))}
                  className="w-full accent-[#3525cd] cursor-pointer"
                  aria-label="Storage Space"
                  aria-valuemin={50}
                  aria-valuemax={1000}
                  aria-valuenow={storageGb}
                />
                <div className="flex justify-between text-[11px] text-[#464555]">
                  <span>50 GB</span>
                  <span>500 GB</span>
                  <span>1,000 GB (1TB)</span>
                </div>
              </div>

              {/* Toggle: Multi-region */}
              <div className="pt-2 border-t border-[#eaedff] flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#131b2e]"><Tooltip label="Multi-region active-active replication">Global Backup</Tooltip></div>
                  <div className="text-xs text-[#464555]">Active-active replication across US, EU, and APAC</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={multiRegion} 
                    onChange={(e) => setMultiRegion(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle multi-region backup"
                  />
                  <div className="w-11 h-6 bg-[#dae2fd] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#777587] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3525cd]" />
                </label>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#dae2fd] flex flex-col justify-between gap-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
                    Estimated monthly cost:
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#89f5e7] text-[#00201d] text-xs font-bold">
                    {billingCycle === 'annual' ? '20% OFF APPLIED' : 'MONTHLY'}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-[#3525cd]">
                      ${calculation.total}
                    </span>
                    <span className="text-sm text-[#464555] font-semibold">/ month</span>
                  </div>
                  <p className="text-xs text-[#464555] mt-1">
                    Billed {billingCycle === 'annual' ? 'annually' : 'monthly'} with zero hidden cloud egress fees.
                  </p>
                </div>

                <div className="bg-[#faf8ff] p-4 rounded-2xl border border-[#e2e7ff] space-y-2 text-xs">
                  <div className="flex justify-between text-[#464555]">
                    <span>Seats Allocation ({seats} users):</span>
                    <span className="font-mono font-semibold text-[#131b2e]">${calculation.seatCost}/mo</span>
                  </div>
                  <div className="flex justify-between text-[#464555]">
                    <span>Workflows ({(executions / 1000).toLocaleString()}k runs):</span>
                    <span className="font-mono font-semibold text-[#131b2e]">${calculation.execCost}/mo</span>
                  </div>
                  <div className="flex justify-between text-[#464555]">
                    <span>Storage footprint ({storageGb} GB):</span>
                    <span className="font-mono font-semibold text-[#131b2e]">${calculation.storageCost}/mo</span>
                  </div>
                  {multiRegion && (
                    <div className="flex justify-between text-[#006f66]">
                      <span>Multi-Region Active Replication:</span>
                      <span className="font-mono font-semibold">$80/mo</span>
                    </div>
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-[#e2dfff] text-[#0f0069] flex items-center justify-between text-xs font-semibold">
                  <span>Recommended Architecture Tier:</span>
                  <span className="underline">{calculation.recommendedTier}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onRouteChange('demo-request')}
                  className="w-full py-3.5 rounded-xl bg-[#3525cd] text-white font-semibold text-sm hover:bg-[#4d44e3] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Start Building</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Trust Badges */}
      <section className="w-full py-16 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#e2e7ff] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#e2dfff] flex items-center justify-center text-[#3525cd] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#131b2e]">SOC2 Type II Certified</h4>
              <p className="text-xs text-[#464555] mt-1 leading-relaxed">
                Audited annually by independent third-party assessors with strict adherence to Trust Services Criteria.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2e7ff] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 flex items-center justify-center text-[#006f66] shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#131b2e]">HIPAA & GDPR Ready</h4>
              <p className="text-xs text-[#464555] mt-1 leading-relaxed">
                Comprehensive Data Processing Agreements (<Tooltip label="DPA = Data Processing Agreement">DPA</Tooltip>) and <Tooltip label="BAA = Business Associate Agreement">BAA</Tooltip> options available for healthcare and institutional partners.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2e7ff] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#dfe3e7] flex items-center justify-center text-[#171c1f] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#131b2e]">99.999% SLA Option</h4>
              <p className="text-xs text-[#464555] mt-1 leading-relaxed">
                Financial penalty-backed uptime guarantees with real-time public status dashboard and automated refund credits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
