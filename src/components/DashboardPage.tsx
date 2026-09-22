import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Activity, Server, Shield, Zap, RefreshCw, CheckCircle2, Play, Terminal, Database, Sparkles } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface DashboardPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onRouteChange }) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [pipelineStep, setPipelineStep] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([
    '[09:42:01.120] [SYSTEM] academicOS institutional gateway listening on port 443',
    '[09:42:01.124] [SECURITY] Zero-Trust Enclave verified: 450 microservices green',
    '[09:42:02.840] [METRICS] Ingestion peak: 14,890 events/sec via Kafka topic #sis-sync',
    '[09:42:03.012] [WORKER] Node us-east-4 auto-scaled +2 replicas (Cluster capacity 98.4%)',
  ]);

  const [currentRps, setCurrentRps] = useState(14890);
  const [p99Latency, setP99Latency] = useState(11.4);

  // Subtle live fluctuation to make telemetry genuinely feel live
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRps((prev) => Math.floor(14500 + Math.random() * 800));
      setP99Latency((prev) => +(11.1 + Math.random() * 0.6).toFixed(1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setPipelineStep(1);

    const now = new Date().toISOString().substring(11, 23);
    setLogs((prev) => [
      `[${now}] [TRIGGER] User initiated simulated institutional student lifecycle sync...`,
      ...prev,
    ]);

    setTimeout(() => {
      setPipelineStep(2);
      const stepTime = new Date().toISOString().substring(11, 23);
      setLogs((prev) => [
        `[${stepTime}] [SCHEMA] Schema validated: 2,400 student grade records matched schema v4.2`,
        ...prev,
      ]);
    }, 800);

    setTimeout(() => {
      setPipelineStep(3);
      const stepTime = new Date().toISOString().substring(11, 23);
      setLogs((prev) => [
        `[${stepTime}] [ROUTER] Dynamic Payload Router dispatched jobs to 4 worker nodes with 0 dropped packets`,
        ...prev,
      ]);
    }, 1600);

    setTimeout(() => {
      setPipelineStep(4);
      const stepTime = new Date().toISOString().substring(11, 23);
      setLogs((prev) => [
        `[${stepTime}] [COMMIT] State Machine committed transaction #tx-9482. Ledger reconciled in 12.8ms.`,
        ...prev,
      ]);
      setIsSimulating(false);
    }, 2400);
  };

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] text-[#131b2e]">
      {/* Header bar */}
      <section className="w-full bg-[#f2f3ff] py-10 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#89f5e7] text-[#00201d] text-xs font-bold uppercase tracking-wider">
                Live Telemetry
              </span>
              <span className="text-xs font-mono text-[#464555]">nexus-core-prod-01</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-1">
              academicOS & NexusScale Operational Console
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                isSimulating
                  ? 'bg-[#eaedff] text-[#777587] cursor-not-allowed'
                  : 'bg-[#3525cd] text-white hover:bg-[#4d44e3] shadow-sm'
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Running Demo...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Run Demo Workflow</span>
                </>
              )}
            </button>

            <button
              onClick={() => onRouteChange('demo-request')}
              className="px-4 py-2.5 rounded-xl bg-white text-[#131b2e] border border-[#dae2fd] text-xs sm:text-sm font-semibold hover:bg-[#faf8ff] transition-all"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Main Console Body */}
      <section className="w-full py-10 px-6 md:px-8 max-w-7xl mx-auto space-y-8">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#dae2fd] shadow-sm">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-xs uppercase tracking-wider font-semibold">Throughput</span>
              <Activity className="w-4 h-4 text-[#3525cd]" aria-hidden="true" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-2 font-mono" aria-live="polite">
              {currentRps.toLocaleString()}
            </div>
            <div className="text-[11px] text-[#006f66] mt-1 flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#006a61] animate-pulse" aria-hidden="true" />
              <span>Events / sec</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dae2fd] shadow-sm">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-xs uppercase tracking-wider font-semibold"><Tooltip label="P99 = 99% of requests are faster than this">Response Time (P99)</Tooltip></span>
              <Zap className="w-4 h-4 text-[#3525cd]" aria-hidden="true" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-2 font-mono" aria-live="polite">
              {p99Latency} ms
            </div>
            <div className="text-[11px] text-[#006f66] mt-1 font-semibold">
              Target: under 20ms worldwide
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dae2fd] shadow-sm">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-xs uppercase tracking-wider font-semibold">Active Campuses</span>
              <Server className="w-4 h-4 text-[#3525cd]" aria-hidden="true" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#131b2e] mt-2 font-mono">
              254
            </div>
            <div className="text-[11px] text-[#464555] mt-1">
              1,840,290 Active Students
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dae2fd] shadow-sm">
            <div className="flex items-center justify-between text-[#464555]">
              <span className="text-xs uppercase tracking-wider font-semibold">Security State</span>
              <Shield className="w-4 h-4 text-[#006a61]" aria-hidden="true" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#006a61] mt-2">
              Optimal
            </div>
            <div className="text-[11px] text-[#006f66] mt-1 font-semibold">
              <Tooltip label="CVE = Common Vulnerabilities and Exposures">No Known Vulnerabilities</Tooltip>
            </div>
          </div>
        </div>

        {/* Live Simulation Visualizer */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#dae2fd] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#eaedff]">
            <div>
              <h3 className="text-base font-bold text-[#131b2e]">
                Live Workflow Demo
              </h3>
              <p className="text-xs text-[#464555]">
                Watch how Lutix processes and transforms data in real time
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 bg-[#f2f3ff] text-[#3525cd] rounded-lg font-bold">
              {isSimulating ? 'PROCESSING' : 'STANDBY READY'}
            </span>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className={`p-4 rounded-xl border transition-all ${
              pipelineStep >= 1 ? 'bg-[#e2dfff] border-[#3525cd] text-[#0f0069]' : 'bg-[#faf8ff] border-[#e2e7ff] text-[#464555]'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider mb-1">01 / Ingest</div>
              <div className="text-sm font-semibold text-[#131b2e]">Kafka Stream Ingest</div>
              <div className="text-[11px] text-[#464555] mt-1">Payload: 2,400 Records</div>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              pipelineStep >= 2 ? 'bg-[#e2dfff] border-[#3525cd] text-[#0f0069]' : 'bg-[#faf8ff] border-[#e2e7ff] text-[#464555]'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider mb-1">02 / Validate</div>
              <div className="text-sm font-semibold text-[#131b2e]"><Tooltip label="Protobuf Schema">Data Format Validation</Tooltip></div>
              <div className="text-[11px] text-[#464555] mt-1">Status: Passed (1.2ms)</div>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              pipelineStep >= 3 ? 'bg-[#e2dfff] border-[#3525cd] text-[#0f0069]' : 'bg-[#faf8ff] border-[#e2e7ff] text-[#464555]'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider mb-1">03 / Route</div>
              <div className="text-sm font-semibold text-[#131b2e]">Worker Node Dispatch</div>
              <div className="text-[11px] text-[#464555] mt-1">Cluster: 4 Replicas</div>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              pipelineStep >= 4 ? 'bg-[#89f5e7]/40 border-[#006a61] text-[#00201d]' : 'bg-[#faf8ff] border-[#e2e7ff] text-[#464555]'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider mb-1">04 / Commit</div>
              <div className="text-sm font-semibold text-[#131b2e]">Permanent Record Saved</div>
              <div className="text-[11px] text-[#006f66] mt-1 font-semibold">Reconciled</div>
            </div>
          </div>
        </div>

        {/* Live Logs & Terminal */}
        <div className="bg-white text-slate-900 border border-slate-200 p-6 rounded-3xl shadow-xl font-mono text-xs space-y-4" role="log" aria-label="Live system activity log">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-slate-500">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#86f2e4]" aria-hidden="true" />
              <span className="font-semibold text-slate-900">Live System Activity Log</span>
            </div>
            <span className="text-[11px] text-slate-400">Listening on channel #cluster-events</span>
          </div>

          <div className="space-y-1.5 max-h-56 overflow-y-auto pr-2 scrollbar-thin">
            {logs.map((log, index) => (
              <div key={index} className="leading-relaxed hover:bg-white/5 px-1 py-0.5 rounded">
                <span className="text-[#86f2e4]">{log.substring(0, 14)}</span>
                <span className="text-[#dad7ff]">{log.substring(14)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
