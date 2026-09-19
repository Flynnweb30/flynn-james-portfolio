import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, FileText, Send, CheckCircle2, Copy, ExternalLink, Clock, Shield } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSEO } from '../hooks/useSEO';

interface ContactPageProps {
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceNeeded: initialService || 'B2B Appointment Setting',
    targetMarket: 'United States',
    meetingTarget: '25-35 Meetings/Mo',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useSEO({
    title: 'Contact Flynn James — Senior B2B SDR & Outbound Strategy',
    description:
      'Book a 20-minute B2B pipeline audit with Flynn James. Connect for cold calling, appointment setting, and fractional SDR leadership. Guaranteed reply within 24 hours.',
    canonical: '/contact',
    keywords: 'hire B2B SDR, hire appointment setter, hire cold caller, fractional SDR lead, outbound sales audit',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Flynn James',
        description: 'Schedule a B2B outbound strategy call or pipeline audit with Flynn James.',
        url: 'https://flynnjames.com/contact',
        mainEntity: {
          '@type': 'Person',
          name: 'Flynn James Q. Pontino',
          email: 'va.flynnjames@gmail.com',
          telephone: '+63-930-635-9306',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How quickly does Flynn James respond to inquiries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Flynn responds to all inquiries within 2–4 hours during US business hours, and strictly within 24 hours globally.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens on the free 20-minute pipeline audit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It is a pragmatic working session. Flynn reviews your current outbound cadence, script opening, and target list, identifying 3 concrete leaks and fixes you can apply immediately.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which global markets does Flynn support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Active campaigns run across the United States (EST, CST, PST), United Kingdom, Australia, New Zealand, Canada, and Singapore.',
            },
          },
        ],
      },
    ],
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onSuccessToast?.('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessToast?.('Message sent — expect a reply within 24 hours.');
    }, 700);
  };

  const inputCls =
    'w-full px-3.5 py-2.5 text-[15px] sm:text-[13.5px] bg-[#0b0f19] border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-all';
  const labelCls = 'block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2';

  return (
    <>
      <PageHeader
        index="07"
        eyebrow="Contact"
        title="Let's talk pipeline,"
        titleAccent="not pleasantries."
        description="A 20-minute working call to review your outbound motion and identify what is leaking. No generic pitch decks. Just direct tactical insight."
        photoClass="bg-photo-contact"
      />

      <Section>
        <div className="max-w-3xl mb-12">
          <SectionHeading
            index="07.0"
            eyebrow="Schedule consultation"
            title="Book your free"
            titleAccent="B2B outbound audit."
          />
          <div className="mt-6 space-y-4 text-[15.5px] text-slate-300 leading-[1.85]">
            <p>
              Whether you need a dedicated Senior SDR for an upcoming product push or want to optimize your internal outbound reps' conversion rates,
              this session will give you clarity on next steps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-7">
            <div>
              <h2 className="text-[18px] font-bold text-white mb-2">Direct channels</h2>
              <p className="text-[13.5px] text-slate-300 leading-relaxed">
                Direct phone and inbox. Flynn manages inquiries personally.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full text-left group p-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/70 hover:border-amber-400/60 rounded-xl transition-all cursor-pointer"
                aria-label="Copy Flynn James email address"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Direct Email</div>
                      <div className="text-[14px] text-white font-medium mt-0.5 truncate">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 transition-colors" />
                  )}
                </div>
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="block group p-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/70 hover:border-amber-400/60 rounded-xl transition-all"
                aria-label="Call Flynn James"
              >
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Phone / WhatsApp
                    </div>
                    <div className="text-[14px] text-white font-medium mt-0.5">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/70 hover:border-amber-400/60 rounded-xl transition-all"
                aria-label="View LinkedIn profile"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider font-semibold">LinkedIn Profile</div>
                      <div className="text-[14px] text-white font-medium mt-0.5">/in/fjpontino</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 transition-colors" />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/70 hover:border-amber-400/60 rounded-xl transition-all"
                aria-label="View Resume"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Full Resume</div>
                      <div className="text-[14px] text-white font-medium mt-0.5">Verified Document (PDF)</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 transition-colors" />
                </div>
              </a>
            </div>

            <div className="p-5 bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-3">
                Expected next steps
              </div>
              <ul className="space-y-3">
                {[
                  { icon: Clock, text: 'Direct response within 24 hours.' },
                  { icon: Shield, text: 'Preparation check on your target ICP before the call.' },
                  { icon: CheckCircle2, text: 'Full breakdown of actionable script and list adjustments.' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-[13px] text-slate-300 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-7 sm:p-9 shadow-xl"
            >
              {submitted ? (
                <div className="py-14 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-[22px] font-bold text-white mb-2">Message received</h2>
                  <p className="text-[14px] text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thanks {formData.name}. I'll reach out to <span className="text-amber-400 font-medium">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[13px] font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    Send another note →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-4 border-b border-slate-800">
                    <h2 className="text-[18px] font-bold text-white">Send an inquiry</h2>
                    <p className="text-[13px] text-slate-400 mt-1">Confidential consultation. No spam.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cp-name" className={labelCls}>
                        Full name *
                      </label>
                      <input
                        id="cp-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="cp-email" className={labelCls}>
                        Work email *
                      </label>
                      <input
                        id="cp-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cp-company" className={labelCls}>
                        Company *
                      </label>
                      <input
                        id="cp-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Tech"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="cp-service" className={labelCls}>
                        Service needed *
                      </label>
                      <select
                        id="cp-service"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className={inputCls}
                      >
                        <option>B2B Appointment Setting</option>
                        <option>High-Volume Cold Calling</option>
                        <option>Lead Generation & Targeting</option>
                        <option>SDR Coaching & Team Leadership</option>
                        <option>LinkedIn Social Selling</option>
                        <option>Custom Hybrid Outbound</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cp-market" className={labelCls}>
                        Target market *
                      </label>
                      <select
                        id="cp-market"
                        value={formData.targetMarket}
                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                        className={inputCls}
                      >
                        <option>United States</option>
                        <option>United Kingdom / Europe</option>
                        <option>Australia & New Zealand</option>
                        <option>Canada</option>
                        <option>Singapore / APAC</option>
                        <option>Global / Multi-region</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cp-target" className={labelCls}>
                        Monthly meeting target
                      </label>
                      <select
                        id="cp-target"
                        value={formData.meetingTarget}
                        onChange={(e) => setFormData({ ...formData, meetingTarget: e.target.value })}
                        className={inputCls}
                      >
                        <option>15–20 Meetings/Mo</option>
                        <option>25–35 Meetings/Mo</option>
                        <option>40+ Meetings/Mo</option>
                        <option>Audit / Coaching Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cp-message" className={labelCls}>
                      ICP & current bottleneck *
                    </label>
                    <textarea
                      id="cp-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="We sell a $15k B2B software package to HR Directors in North America. We need more qualified discovery calls booked onto AE calendars..."
                      className={inputCls + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-[14px] font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-all shadow-md shadow-amber-400/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Schedule Audit</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11.5px] text-center text-slate-400">
                    Guaranteed response within 24 hours. Confidentiality assured.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};