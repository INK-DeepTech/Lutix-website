import React, { useState, useEffect } from 'react';
import { PageRoute, ConsultationState } from '../types';
import { Calendar, Clock, CheckCircle2, Shield, User, Building, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface DemoRequestPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DemoRequestPage: React.FC<DemoRequestPageProps> = ({ onRouteChange }) => {
  const [formData, setFormData] = useState<ConsultationState>({
    teamSize: '51-250',
    rps: 12500,
    infrastructure: 'aws',
    compliance: ['soc2', 'gdpr'],
    selectedDate: 18,
    selectedTime: '11:30 AM (EST)',
    workEmail: '',
    fullName: '',
    organization: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ email?: string; name?: string; org?: string }>({});

  const toggleCompliance = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      compliance: prev.compliance.includes(item)
        ? prev.compliance.filter((c) => c !== item)
        : [...prev.compliance, item],
    }));
  };

  const validateField = (field: 'name' | 'email' | 'org', value: string) => {
    const errors = { ...formErrors };
    if (field === 'name') {
      if (!value.trim()) errors.name = 'Full name is required';
      else delete errors.name;
    }
    if (field === 'email') {
      if (!value.trim() || !value.includes('@')) errors.email = 'Valid work email is required';
      else delete errors.email;
    }
    if (field === 'org') {
      if (!value.trim()) errors.org = 'Organization name is required';
      else delete errors.org;
    }
    setFormErrors(errors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; name?: string; org?: string } = {};

    if (!formData.fullName.trim()) {
      errors.name = 'Full name is required';
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      errors.email = 'Valid work email is required';
    }
    if (!formData.organization.trim()) {
      errors.org = 'Organization name is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSubmitted) {
        setIsSubmitted(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSubmitted]);

  return (
    <div className="flex flex-col w-full bg-[#faf8ff] text-[#131b2e]">
      {/* Top Banner / Header */}
      <section className="w-full bg-[#f2f3ff] py-14 md:py-12 px-6 md:px-8 border-b border-[#e2e7ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] text-xs font-bold uppercase tracking-wider">
                Book a Demo
              </span>
              <span className="text-xs text-[#006f66] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#006a61]" />
                Direct Access to Principal Engineers
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131b2e] tracking-tight">
              Book a Free Demo
            </h1>
            <p className="text-base sm:text-lg text-[#464555] leading-relaxed">
              See how our platform works in a live environment, and ask our engineers your toughest questions.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 bg-white p-5 rounded-2xl border border-[#dae2fd] shadow-sm text-xs font-medium text-[#464555]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3525cd]" />
              <span>45-Minute Technical Deep Dive</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#006a61]" />
              <span>Zero Obligation & Bilateral NDA</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#3525cd]" />
              <span>Tailored Blueprint & Security Audit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Studio & Booking Section */}
      <section className="w-full py-16 md:py-12 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Form: 3-step Wizard */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#dae2fd] shadow-md">
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              {/* Step 1: Team & Workload Parameters */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3525cd] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#131b2e]">Team & Workload</h3>
                    <p className="text-xs text-[#464555]">Tell us about your organization's scale</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider block">
                    Engineering Team Size
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['1-50', '51-250', '250+'] as const).map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setFormData({ ...formData, teamSize: size })}
                        className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                          formData.teamSize === size
                            ? 'bg-[#3525cd] text-white border-[#3525cd] shadow-sm'
                            : 'bg-[#faf8ff] text-[#464555] border-[#dae2fd] hover:border-[#3525cd]/50'
                        }`}
                      >
                        {size} Engineers
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#464555] uppercase tracking-wider block">
                      Expected Monthly Users
                    </label>
                    <span className="font-mono text-xs font-bold text-[#3525cd] bg-[#f2f3ff] px-2.5 py-1 rounded-lg">
                      {formData.rps.toLocaleString()} Users
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={formData.rps}
                    onChange={(e) => setFormData({ ...formData, rps: Number(e.target.value) })}
                    className="w-full accent-[#3525cd] cursor-pointer"
                    aria-label="Expected Monthly Users"
                  />
                  <div className="flex justify-between text-[11px] text-[#464555]">
                    <span>&lt; 10,000 users</span>
                    <span>10,000 - 50,000 users</span>
                    <span>&gt; 50,000 users (Custom setup)</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Infrastructure & Compliance Demands */}
              <div className="space-y-6 pt-6 border-t border-[#eaedff]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3525cd] text-white flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#131b2e]">Infrastructure & Security</h3>
                    <p className="text-xs text-[#464555]">Select preferred deployment and compliance requirements</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider block">
                    Preferred Data Region
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'aws', label: 'North America' },
                      { id: 'gcp', label: 'Europe' },
                      { id: 'azure', label: 'Asia Pacific' },
                      { id: 'hybrid', label: 'Hybrid / On-Prem' },
                    ].map((provider) => (
                      <button
                        type="button"
                        key={provider.id}
                        onClick={() => setFormData({ ...formData, infrastructure: provider.id as any })}
                        className={`py-3 px-3 rounded-xl text-xs font-semibold transition-all border text-center ${
                          formData.infrastructure === provider.id
                            ? 'bg-[#e2dfff] text-[#0f0069] border-[#3525cd] shadow-sm font-bold'
                            : 'bg-[#faf8ff] text-[#464555] border-[#dae2fd] hover:border-[#3525cd]/50'
                        }`}
                      >
                        {provider.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider block">
                    Required Compliance & Privacy
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'soc2', label: 'SOC2 Type II' },
                      { id: 'hipaa', label: 'HIPAA (Healthcare & Privacy)' },
                      { id: 'gdpr', label: 'GDPR / EU Data Residency' },
                      { id: 'iso', label: 'ISO 27001' },
                    ].map((item) => (
                      <label
                        key={item.id}
                        onClick={() => toggleCompliance(item.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.compliance.includes(item.id)
                            ? 'bg-[#89f5e7]/20 border-[#006a61] text-[#00201d]'
                            : 'bg-[#faf8ff] border-[#dae2fd] text-[#464555]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.compliance.includes(item.id)}
                          onChange={() => {}}
                          className="w-4 h-4 accent-[#006a61] rounded"
                          aria-label={item.label}
                        />
                        <span className="text-xs font-semibold">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Architecture Session Booking & Contact */}
              <div className="space-y-6 pt-6 border-t border-[#eaedff]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3525cd] text-white flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#131b2e]">Session Slot & Contact Details</h3>
                    <p className="text-xs text-[#464555]">Book your 1-on-1 walkthrough with an engineering lead</p>
                  </div>
                </div>

                {/* Calendar & Time Slots */}
                <div className="bg-[#faf8ff] p-5 rounded-2xl border border-[#e2e7ff] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-[#131b2e] flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#3525cd]" />
                      <span>Available Dates (Upcoming)</span>
                    </div>
                    <span className="text-xs text-[#464555]">Eastern Time Zone</span>
                  </div>

                  {/* Day Picker */}
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <div key={day} className="text-[10px] font-semibold text-[#464555] uppercase">
                        {day}
                      </div>
                    ))}
                    {[15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map((day) => {
                      const isSelected = formData.selectedDate === day;
                      const isWeekend = day % 7 === 6 || day % 7 === 0;
                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={isWeekend}
                          onClick={() => setFormData({ ...formData, selectedDate: day })}
                          className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                            isWeekend
                              ? 'text-[#c7c4d8] cursor-not-allowed opacity-50'
                              : isSelected
                              ? 'bg-[#3525cd] text-white font-bold shadow-sm'
                              : 'bg-white text-[#131b2e] hover:bg-[#eaedff] border border-[#e2e7ff]'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time slots */}
                  <div className="pt-2">
                    <label className="text-xs font-bold text-[#464555] uppercase tracking-wider block mb-2">
                      Select Available Slot
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        '09:00 AM (EST)',
                        '11:30 AM (EST)',
                        '02:00 PM (EST)',
                        '04:30 PM (EST)',
                      ].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, selectedTime: time })}
                          className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${
                            formData.selectedTime === time
                              ? 'bg-[#3525cd] text-white border-[#3525cd]'
                              : 'bg-white text-[#464555] border-[#dae2fd] hover:border-[#3525cd]/50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="text-xs font-semibold text-[#131b2e] block mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Dr. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          validateField('name', e.target.value);
                        }}
                        onBlur={(e) => validateField('name', e.target.value)}
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                        aria-required="true"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40 ${
                          formErrors.name ? 'border-[#ba1a1a] bg-[#ffdad6]/20' : 'border-[#dae2fd] bg-white'
                        }`}
                      />
                      <User className="w-4 h-4 text-[#777587] absolute right-3.5 top-3" />
                    </div>
                    {formErrors.name && <span id="name-error" role="alert" className="text-[11px] text-[#ba1a1a] mt-1 block font-medium">{formErrors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="workEmail" className="text-xs font-semibold text-[#131b2e] block mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <input
                        id="workEmail"
                        type="email"
                        placeholder="s.jenkins@stanford.edu"
                        value={formData.workEmail}
                        onChange={(e) => {
                          setFormData({ ...formData, workEmail: e.target.value });
                          validateField('email', e.target.value);
                        }}
                        onBlur={(e) => validateField('email', e.target.value)}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        aria-required="true"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40 ${
                          formErrors.email ? 'border-[#ba1a1a] bg-[#ffdad6]/20' : 'border-[#dae2fd] bg-white'
                        }`}
                      />
                      <Mail className="w-4 h-4 text-[#777587] absolute right-3.5 top-3" />
                    </div>
                    {formErrors.email && <span id="email-error" role="alert" className="text-[11px] text-[#ba1a1a] mt-1 block font-medium">{formErrors.email}</span>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="organization" className="text-xs font-semibold text-[#131b2e] block mb-1">
                      Organization / University Name *
                    </label>
                    <div className="relative">
                      <input
                        id="organization"
                        type="text"
                        placeholder="Stanford University / Enterprise Corp"
                        value={formData.organization}
                        onChange={(e) => {
                          setFormData({ ...formData, organization: e.target.value });
                          validateField('org', e.target.value);
                        }}
                        onBlur={(e) => validateField('org', e.target.value)}
                        aria-invalid={!!formErrors.org}
                        aria-describedby={formErrors.org ? 'org-error' : undefined}
                        aria-required="true"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40 ${
                          formErrors.org ? 'border-[#ba1a1a] bg-[#ffdad6]/20' : 'border-[#dae2fd] bg-white'
                        }`}
                      />
                      <Building className="w-4 h-4 text-[#777587] absolute right-3.5 top-3" />
                    </div>
                    {formErrors.org && <span id="org-error" role="alert" className="text-[11px] text-[#ba1a1a] mt-1 block font-medium">{formErrors.org}</span>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className="text-xs font-semibold text-[#131b2e] block mb-1">
                      What are you hoping to learn on the demo? (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="e.g. We want to see how the student data sync works..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dae2fd] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#3525cd] text-white font-semibold text-sm hover:bg-[#4d44e3] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-[#464555] mt-2">
                  No credit card required. Confirmation and Google Meet link will be dispatched immediately.
                </div>
              </div>
            </form>
          </div>

          {/* Right Sidebar: What to Expect & Architect Lead */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#dae2fd] shadow-sm space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-[#eaedff]">
                <div className="w-12 h-12 rounded-xl bg-[#e2dfff] flex items-center justify-center font-bold text-[#3525cd]">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#131b2e]">Jonathan Davies</h4>
                  <p className="text-xs text-[#006a61] font-semibold">Lead Enterprise Architect</p>
                  <span className="text-[11px] text-[#464555]">Ex-Staff Systems Architect</span>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs font-bold text-[#131b2e] uppercase tracking-wider">
                  What to Expect
                </h5>

                <div className="space-y-3 text-xs text-[#464555]">
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-[#3525cd] mt-0.5">01</span>
                    <div>
                      <strong className="text-[#131b2e] block font-semibold">Real-Time Performance</strong>
                      Test how fast our systems run with your actual data.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-[#3525cd] mt-0.5">02</span>
                    <div>
                      <strong className="text-[#131b2e] block font-semibold">Reliable Automation</strong>
                      See how our workflows never drop data, even if a server unexpectedly shuts down.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-[#3525cd] mt-0.5">03</span>
                    <div>
                      <strong className="text-[#131b2e] block font-semibold">Total Security</strong>
                      Review our security measures, data encryption, and access controls firsthand.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#faf8ff] border border-[#e2e7ff] text-xs text-[#464555] space-y-2">
                <div className="font-semibold text-[#131b2e] flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#006a61]" />
                  <span>Confidentiality & NDA</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  All consultations are conducted under our standard mutual NDA framework. Proprietary schemas remain strictly confidential.
                </p>
              </div>
            </div>

            {/* Direct Contact Box */}
            <div className="bg-[#f2f3ff] p-6 rounded-3xl border border-[#dae2fd] text-xs space-y-2">
              <span className="font-bold text-[#131b2e] block">Immediate Institutional Inquiries?</span>
              <p className="text-[#464555]">
                For urgent RFP evaluations or university board presentations:
              </p>
              <div className="pt-1 font-mono font-bold text-[#3525cd]">
                enterprise@lutix.internal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#dae2fd] space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#86f2e4]/30 text-[#006f66] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#006a61]">
                Session Confirmed
              </span>
              <h3 id="modal-title" className="text-2xl font-bold text-[#131b2e]">
                Request Received
              </h3>
              <p className="text-sm text-[#464555] max-w-sm mx-auto">
                We've received your request. One of our engineers will be in touch within 24 hours to schedule your demo.
              </p>
            </div>

            <div className="bg-[#faf8ff] p-4 rounded-2xl border border-[#e2e7ff] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#464555]">Slot:</span>
                <span className="font-semibold text-[#131b2e]">Day {formData.selectedDate} • {formData.selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#464555]">Organization:</span>
                <span className="font-semibold text-[#131b2e]">{formData.organization}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#464555]">Workload:</span>
                <span className="font-semibold text-[#131b2e]">{formData.rps.toLocaleString()} Users on {formData.infrastructure.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#464555]">Lead Architect:</span>
                <span className="font-semibold text-[#3525cd]">Jonathan Davies</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                autoFocus
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 rounded-xl bg-[#3525cd] text-white font-semibold text-xs sm:text-sm hover:bg-[#4d44e3] transition-all shadow-md"
              >
                Done
              </button>
              <button
                onClick={() => { setIsSubmitted(false); onRouteChange('overview'); }}
                className="px-6 py-3 rounded-xl bg-[#e2e7ff] text-[#131b2e] font-semibold text-xs sm:text-sm hover:bg-[#dae2fd] transition-all"
              >
                Inspect Live Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
