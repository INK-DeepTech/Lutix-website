import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Mail, ArrowRight, CheckCircle2, User, Building, MessageCircle } from 'lucide-react';

interface DemoRequestPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DemoRequestPage: React.FC<DemoRequestPageProps> = ({ onRouteChange }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ email?: string; name?: string; org?: string }>({});

  const validateField = (field: 'name' | 'email' | 'org', value: string) => {
    const errors = { ...formErrors };
    if (field === 'name') {
      if (!value.trim()) errors.name = 'Name is required';
      else delete errors.name;
    }
    if (field === 'email') {
      if (!value.trim() || !value.includes('@')) errors.email = 'Valid email is required';
      else delete errors.email;
    }
    if (field === 'org') {
      if (!value.trim()) errors.org = 'Organization is required';
      else delete errors.org;
    }
    setFormErrors(errors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; name?: string; org?: string } = {};

    if (!formData.fullName.trim()) errors.name = 'Name is required';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) errors.email = 'Valid email is required';
    if (!formData.organization.trim()) errors.org = 'Organization is required';

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
    <div className="flex flex-col w-full bg-[#faf8ff] text-[#131b2e] min-h-screen">
      {/* Top Banner / Header */}
      <section className="w-full bg-[#f2f3ff] py-12 md:py-16 px-6 md:px-8 border-b border-[#e2e7ff] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] text-xs font-bold uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#131b2e] tracking-tight font-serif-brand">
            <img src="/bird-icon.png" alt="" className="h-8 w-8 mr-3 inline-block object-contain mix-blend-darken" aria-hidden="true" />
            Let's discuss your ecosystem.
          </h1>
          <p className="text-base sm:text-lg text-[#464555] leading-relaxed max-w-2xl mt-2">
            Drop us a line to schedule a private, tailored demonstration of our platform. Our executive team will reach out directly.
          </p>
        </div>
      </section>

      {/* Booking Portal */}
      <section className="w-full py-12 md:py-16 px-6 md:px-8 max-w-3xl mx-auto -mt-12 relative z-20">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#dae2fd] shadow-xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-[#464555] block mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      validateField('name', e.target.value);
                    }}
                    onBlur={(e) => validateField('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40 transition-all ${
                      formErrors.name ? 'border-[#ba1a1a] bg-[#ffdad6]/10' : 'border-[#e2e7ff] bg-[#faf8ff] hover:border-[#dae2fd]'
                    }`}
                  />
                  <User className="w-4 h-4 text-[#777587] absolute right-4 top-3.5 pointer-events-none" />
                </div>
                {formErrors.name && <span className="text-[11px] text-[#ba1a1a] mt-1.5 block font-medium">{formErrors.name}</span>}
              </div>

              <div>
                <label htmlFor="workEmail" className="text-xs font-bold uppercase tracking-wider text-[#464555] block mb-2">
                  Work Email
                </label>
                <div className="relative">
                  <input
                    id="workEmail"
                    type="email"
                    placeholder="jane@university.edu"
                    value={formData.workEmail}
                    onChange={(e) => {
                      setFormData({ ...formData, workEmail: e.target.value });
                      validateField('email', e.target.value);
                    }}
                    onBlur={(e) => validateField('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40 transition-all ${
                      formErrors.email ? 'border-[#ba1a1a] bg-[#ffdad6]/10' : 'border-[#e2e7ff] bg-[#faf8ff] hover:border-[#dae2fd]'
                    }`}
                  />
                  <Mail className="w-4 h-4 text-[#777587] absolute right-4 top-3.5 pointer-events-none" />
                </div>
                {formErrors.email && <span className="text-[11px] text-[#ba1a1a] mt-1.5 block font-medium">{formErrors.email}</span>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="organization" className="text-xs font-bold uppercase tracking-wider text-[#464555] block mb-2">
                  Organization / University Name
                </label>
                <div className="relative">
                  <input
                    id="organization"
                    type="text"
                    placeholder="Stanford University"
                    value={formData.organization}
                    onChange={(e) => {
                      setFormData({ ...formData, organization: e.target.value });
                      validateField('org', e.target.value);
                    }}
                    onBlur={(e) => validateField('org', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40 transition-all ${
                      formErrors.org ? 'border-[#ba1a1a] bg-[#ffdad6]/10' : 'border-[#e2e7ff] bg-[#faf8ff] hover:border-[#dae2fd]'
                    }`}
                  />
                  <Building className="w-4 h-4 text-[#777587] absolute right-4 top-3.5 pointer-events-none" />
                </div>
                {formErrors.org && <span className="text-[11px] text-[#ba1a1a] mt-1.5 block font-medium">{formErrors.org}</span>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#464555] block mb-2">
                  How can we help? (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us a little bit about what you're looking to solve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e7ff] bg-[#faf8ff] hover:border-[#dae2fd] text-sm focus:outline-none focus:ring-2 focus:ring-[#3525cd]/40 transition-all resize-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#eaedff]">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#3525cd] text-white font-bold text-sm hover:bg-[#4d44e3] transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Send Inquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-xs text-[#777587]">
          Prefer direct email? Contact us at <a href="mailto:enterprise@lutix.internal" className="text-[#3525cd] font-semibold hover:underline">enterprise@lutix.internal</a>
        </div>
      </section>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div 
          className="fixed inset-0 z-50 bg-[#131b2e]/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-sm w-full p-8 shadow-2xl border border-[#dae2fd] text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#89f5e7]/20 text-[#006f66] flex items-center justify-center mx-auto border border-[#6bd8cb]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#131b2e] font-serif-brand">
                Message Received
              </h3>
              <p className="text-sm text-[#464555] leading-relaxed">
                Thank you for reaching out, {formData.fullName.split(' ')[0]}. Our team will contact you shortly to arrange a meeting.
              </p>
            </div>

            <button
              autoFocus
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3.5 rounded-xl bg-[#3525cd] text-white font-semibold text-sm hover:bg-[#4d44e3] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
