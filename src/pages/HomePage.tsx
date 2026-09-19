import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  FileText,
  Star,
  PhoneCall,
  TrendingUp,
  Mail,
  Linkedin,
  Copy,
  CheckCircle2,
  ExternalLink,
  Clock,
  Shield,
  Send,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO, CASE_STUDIES, CORE_SERVICES, TESTIMONIALS } from '../data/portfolioData';
import { PageId, CaseStudy, WorkSample } from '../types';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { OptimizedImage } from '../components/OptimizedImage';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onSelectSample: (s: WorkSample) => void;
  onSuccessToast?: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContact,
  onSelectCaseStudy,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceNeeded: 'B2B Appointment Setting',
    targetMarket: 'United States',
    meetingTarget: '25-35 Meetings/Mo',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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
      {/* ── HERO: Enhanced with Team Photo Background Layer & Playful Polish ── */}
      <section className="relative pt-24 pb-24 sm:pt-36 sm:pb-36 overflow-hidden section-photo bg-photo-hero">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-amber-400/30 backdrop-blur-md shadow-lg shadow-black/30"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[12px] font-medium text-slate-200 tracking-tight flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-amber-400 fill-amber-400" /> Available for Outbound Campaigns · US, UK, ANZ & SG
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-[42px] sm:text-[60px] lg:text-[70px] font-bold text-white leading-[1.02] tracking-tight"
              >
                B2B appointment setting
                <br />
                <span className="font-serif italic text-amber-400 font-normal">that actually converts.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-7 max-w-xl text-[16px] sm:text-[18px] text-slate-200 leading-[1.7] font-normal"
              >
                I'm <strong className="text-white font-semibold">Flynn James</strong> — a Senior B2B SDR and cold calling specialist
                with 11+ years on the phone lines. I help high-growth SaaS, agencies, and tech firms fill calendars with qualified decision-maker conversations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="mt-10 flex flex-wrap items-center gap-3.5"
              >
                <Button variant="primary" size="lg" onClick={() => onOpenContact()} className="group shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30">
                  <PhoneCall className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  Book a 20-min strategy call
                </Button>
                <Button variant="secondary" size="lg" onClick={() => onNavigate('case-studies')} withArrow className="group">
                  See verified results
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-12 pt-7 border-t border-slate-700/60"
              >
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[13px] text-slate-300">
                    Trusted by <span className="text-white font-semibold">founders & sales leaders</span> across 3 continents
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Profile & KPI Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative animate-float-subtle">
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-amber-400/40 rounded-tr-xl pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-slate-600/50 rounded-bl-xl pointer-events-none" />

                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/60">
                  <div className="flex items-start gap-4 pb-5 border-b border-slate-700/70">
                    <OptimizedImage
                      src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                      alt="Flynn James, Senior B2B SDR and Appointment Setting Specialist"
                      width={60}
                      height={60}
                      className="w-14 h-14 rounded-xl object-cover border-2 border-amber-400/40 shadow-md"
                      priority
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10.5px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-1">
                        Currently Active
                      </div>
                      <div className="text-[15px] font-bold text-white leading-tight">
                        Junior Sales Team Lead
                      </div>
                      <div className="text-[12px] text-slate-300 mt-0.5">Regen Digital US · Remote</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 py-6">
                    {[
                      { v: '$1.8M', l: 'Pipeline sourced' },
                      { v: '120–150%', l: 'Quota attainment' },
                      { v: '30+', l: 'Meetings / month' },
                      { v: '150+', l: 'Dials / day' },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="text-[24px] font-bold text-white tabular leading-none">{s.v}</div>
                        <div className="text-[11px] text-slate-400 mt-2 font-mono uppercase tracking-wider font-medium">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-slate-700/70 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-[13px] font-semibold text-slate-200 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group cursor-pointer"
                    >
                      More about me
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-400" />
                    </button>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-slate-200 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY STAT STRIP ── */}
      <section className="border-y border-slate-800/70 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { v: '11+', l: 'Years on phones' },
              { v: '5', l: 'Global markets' },
              { v: '70%+', l: 'Show-up rate' },
              { v: '100%', l: 'CRM discipline' },
            ].map((s, i) => (
              <div key={s.l} className={`${i !== 0 ? 'md:border-l md:border-slate-800/80 md:pl-8' : ''}`}>
                <div className="text-[26px] sm:text-[30px] font-bold text-amber-400 tabular leading-none tracking-tight">
                  {s.v}
                </div>
                <div className="text-[11.5px] text-slate-400 mt-2 font-mono uppercase tracking-wider font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO INTRO OVERVIEW ── */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeading
            index="00"
            eyebrow="What I do"
            title="B2B appointment setting & outbound sales"
            titleAccent="specialist."
          />
          <div className="mt-8 space-y-5 text-[15.5px] text-slate-300 leading-[1.85]">
            <p>
              Flynn James is a Senior B2B Sales Development Representative (SDR) and appointment setter with over eleven
              years of experience booking qualified discovery meetings for high-ticket SaaS providers, digital agencies, IT firms,
              and professional services businesses.
            </p>
            <p>
              Operating across North America, the UK, Australia, New Zealand, and Singapore, Flynn specializes in cold calling, multi-touch cadences,
              LinkedIn Sales Navigator outreach, and rigorous BANT qualification. He maintains a verified 70%+ show-up rate on meetings booked directly into Account Executives' calendars.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SERVICES PREVIEW ── */}
      <Section id="services-preview" bordered>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            index="01"
            eyebrow="Outbound services"
            title="Engineered outbound sales"
            titleAccent="engagements."
            description="Six specialized engagements designed to produce pipeline — from cold calling and B2B appointment setting to SDR coaching and CRM hygiene."
          />
          <Button variant="ghost" onClick={() => onNavigate('services')} withArrow className="group shrink-0">
            View all 6 services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/70 rounded-xl overflow-hidden border border-slate-800/70">
          {CORE_SERVICES.slice(0, 6).map((service, i) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              onClick={() => onOpenContact(service.title)}
              className="group relative bg-[#0b0f19]/90 hover:bg-slate-900/90 p-7 text-left transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[11px] font-mono text-amber-400 font-semibold tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-[13.5px] text-slate-400 leading-relaxed">{service.tagline}</p>
            </motion.button>
          ))}
        </div>
      </Section>

      {/* ── CASE STUDIES PREVIEW ── */}
      <Section id="cases-preview" bordered className="section-photo bg-photo-desk">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            index="02"
            eyebrow="Proven case studies"
            title="Real campaigns with"
            titleAccent="measurable pipeline."
            description="Documented numbers from cold acquisition campaigns across marketing agencies, enterprise SaaS, and IT platforms."
          />
          <Button variant="ghost" onClick={() => onNavigate('case-studies')} withArrow className="group shrink-0">
            All case studies
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_STUDIES.slice(0, 2).map((cs, i) => (
            <motion.button
              key={cs.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onSelectCaseStudy(cs)}
              className="group text-left bg-slate-900/75 hover:bg-slate-900/95 backdrop-blur-md border border-slate-700/70 hover:border-amber-400/50 rounded-xl p-7 sm:p-8 transition-all cursor-pointer shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-mono text-slate-300 tracking-wider uppercase font-medium">{cs.industry}</span>
                <span className="h-px w-4 bg-slate-600" />
                <span className="text-[11px] font-mono text-slate-300 tracking-wider">{cs.region}</span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-white leading-snug mb-5 group-hover:text-amber-400 transition-colors">
                {cs.title}
              </h3>

              <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-slate-700/70">
                <span className="text-[28px] sm:text-[34px] font-bold text-amber-400 tabular tracking-tight leading-none">
                  {cs.headlineMetric}
                </span>
                <span className="text-[11.5px] text-slate-400 font-mono">headline outcome</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-[13px]">
                {cs.secondaryMetrics.slice(0, 4).map((m, j) => (
                  <div key={j}>
                    <div className="text-slate-400 font-mono text-[10.5px] uppercase tracking-wider">{m.label}</div>
                    <div className="text-slate-100 font-semibold mt-1 tabular">{m.value}</div>
                  </div>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section bordered className="section-photo bg-photo-meeting">
        <SectionHeading
          index="03"
          eyebrow="Social proof"
          title="What sales leaders"
          titleAccent="say."
          description="Direct testimonials from founders, head of sales, and managing directors."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-slate-900/75 backdrop-blur-md border border-slate-700/70 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-[14px] text-slate-200 leading-[1.75]">"{t.quote}"</p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/70 flex items-center gap-3">
                <OptimizedImage
                  src={t.avatarUrl}
                  alt={`${t.author}, ${t.title} at ${t.company}`}
                  width={38}
                  height={38}
                  className="w-9 h-9 rounded-full object-cover border border-amber-400/40"
                />
                <div className="min-w-0">
                  <div className="text-[13px] font-bold text-white leading-tight truncate">{t.author}</div>
                  <div className="text-[11.5px] text-slate-400 mt-0.5 truncate font-medium">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── SYNCHRONIZED CONTACT SECTION ── */}
      <Section id="contact" bordered className="section-photo bg-photo-contact">
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="04"
            eyebrow="Get in touch"
            title="Book a free 20-minute"
            titleAccent="B2B pipeline audit."
            description="A working session to review your outbound motion, scripts, and targeting. We'll identify 3 actionable leaks you can fix this week."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-[18px] font-bold text-white mb-2">Direct channels</h2>
              <p className="text-[13.5px] text-slate-300 leading-relaxed">
                Guaranteed response within 2–4 hours during US business hours; under 24 hours globally.
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
                    <PhoneCall className="w-4 h-4 text-amber-400" />
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
                aria-label="View Flynn James LinkedIn"
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
            </div>

            <div className="p-5 bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-3">
                Working session guarantees
              </div>
              <ul className="space-y-2.5">
                {[
                  { icon: Clock, text: 'Strict 24-hour response SLA.' },
                  { icon: Shield, text: '100% confidential outbound review.' },
                  { icon: CheckCircle2, text: '3 actionable takeaways whether we partner or not.' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-[13px] text-slate-300">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-7 sm:p-9 shadow-xl"
            >
              {submitted ? (
                <div className="py-14 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-[22px] font-bold text-white mb-2">Inquiry Confirmed</h2>
                  <p className="text-[14px] text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thanks {formData.name}, I'll reach out to <span className="text-amber-400 font-medium">{formData.email}</span> within 24 hours with session slots.
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
                    <h2 className="text-[18px] font-bold text-white">Send a direct message</h2>
                    <p className="text-[13px] text-slate-400 mt-1">Briefly describe your offer and outbound target.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="hp-name" className={labelCls}>
                        Full name *
                      </label>
                      <input
                        id="hp-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="hp-email" className={labelCls}>
                        Work email *
                      </label>
                      <input
                        id="hp-email"
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
                      <label htmlFor="hp-company" className={labelCls}>
                        Company name *
                      </label>
                      <input
                        id="hp-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme SaaS"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="hp-service" className={labelCls}>
                        Service needed *
                      </label>
                      <select
                        id="hp-service"
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
                      <label htmlFor="hp-market" className={labelCls}>
                        Target market *
                      </label>
                      <select
                        id="hp-market"
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
                      <label htmlFor="hp-target" className={labelCls}>
                        Monthly meeting target
                      </label>
                      <select
                        id="hp-target"
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
                    <label htmlFor="hp-message" className={labelCls}>
                      ICP & current bottleneck *
                    </label>
                    <textarea
                      id="hp-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="We sell an enterprise platform to VPs of Engineering. Reps struggle getting past gatekeepers and show-up rates are lagging..."
                      className={inputCls + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-[14px] font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-all shadow-md shadow-amber-400/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Free Pipeline Audit</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11.5px] text-center text-slate-400">
                    No spam. Confidential working session. Direct reply from Flynn within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section bordered>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-slate-700/80 section-photo bg-photo-city p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 ambient-accent pointer-events-none" />

          <div className="relative max-w-2xl mx-auto z-10">
            <span className="text-[11px] font-mono text-amber-400 font-semibold tracking-wider uppercase">Ready for steady pipeline?</span>
            <h2 className="mt-4 text-[34px] sm:text-[46px] font-bold text-white leading-[1.08] tracking-tight">
              Let's put decision-makers on
              <br />
              <span className="font-serif italic text-amber-400 font-normal">your closers' calendars.</span>
            </h2>
            <p className="mt-5 text-[16px] text-slate-200 max-w-xl mx-auto leading-relaxed">
              Book a 20-minute working session. We'll examine your outbound motion and construct three immediate adjustments you can deploy this week.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Button variant="primary" size="lg" onClick={() => onOpenContact()} className="shadow-lg shadow-amber-400/20">
                <TrendingUp className="w-4 h-4" />
                Schedule Strategy Session
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('samples')} withArrow className="group">
                Review Cold Call Playbooks
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};