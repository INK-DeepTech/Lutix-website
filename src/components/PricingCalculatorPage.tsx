import React, { useState, useMemo } from 'react';
import { PageRoute, BillingCycle } from '../types';
import { Check, ArrowRight, Database, Sparkles } from 'lucide-react';
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
      <section className="w-full bg-[#f2f3ff] py-8 md:py-8 px-6 md:px-8 border-b border-[#e2e7ff]">
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
      <section className="w-full py-10 md:py-8 px-6 md:px-8 max-w-7xl mx-auto">
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

      
    </div>
  );
};
