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
  // Contact form state matching ContactPage exactly
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
    }, 900);
  };

  const inputCls =
    'w-full px-3.5 py-2.5 text-[15px] sm:text-[13.5px] bg-[#0b0f19] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60 transition-colors';
  const labelCls = 'block text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2';

  return (
    <>
      {/* ── HERO: Updated with live team photo background ── */}
      <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden section-photo bg-photo-hero">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 backdrop-blur-md"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-[11.5px] font-medium text-slate-200 tracking-tight">
                  Available for Outbound Campaigns · Remote Worldwide
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-[40px] sm:text-[56px] lg:text-[68px] font-bold text-white leading-[1.02] tracking-tight"
              >
                B2B appointment setting
                <br />
                <span className="font-serif italic text-amber-400/90">that actually converts.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-8 max-w-xl text-[16px] sm:text-[17px] text-slate-300 leading-[1.7]"
              >
                I'm <strong className="text-white font-semibold">Flynn James</strong> — a senior B2B SDR and appointment setter
                with 11+ years on the phones. I help SaaS, agencies, IT firms, and professional services companies
                fill their calendars with qualified decision-maker conversations across the US, UK, ANZ, and Singapore.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Button variant="primary" size="lg" onClick={() => onOpenContact()} className="group">
                  <PhoneCall className="w-4 h-4" />
                  Book a 20-min strategy call
                </Button>
                <Button variant="secondary" size="lg" onClick={() => onNavigate('case-studies')} withArrow className="group">
                  See case studies
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-slate-700/50"
              >
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[12.5px] text-slate-300">
                    Verified by <span className="text-white font-medium">sales leaders</span> across 3 continents
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 lg:pt-12"
            >
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-amber-400/30 rounded-tr-lg pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-slate-600/40 rounded-bl-lg pointer-events-none" />

                <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700/60 rounded-xl p-6 sm:p-7 shadow-2xl shadow-black/40">
                  <div className="flex items-start gap-4 pb-5 border-b border-slate-700/60">
                    <OptimizedImage
                      src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                      alt="Flynn James, Senior B2B SDR and Appointment Setting Specialist"
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-lg object-cover border border-amber-400/30"
                      priority
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Currently
                      </div>
                      <div className="text-[14.5px] font-semibold text-white leading-tight">
                        Junior Sales Team Lead
                      </div>
                      <div className="text-[12px] text-slate-400 mt-0.5">Regen Digital US · Remote</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-5 py-6">
                    {[
                      { v: '$1.8M', l: 'Pipeline sourced' },
                      { v: '120–150%', l: 'Quota attainment' },
                      { v: '30+', l: 'Meetings / month' },
                      { v: '150+', l: 'Dials / day' },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="text-[22px] font-bold text-white tabular leading-none">{s.v}</div>
                        <div className="text-[11px] text-slate-500 mt-2 font-mono uppercase tracking-wider">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-slate-700/60 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-[12.5px] font-medium text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      More about me
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12.5px] font-medium text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY STRIP ── */}
      <section className="border-y border-slate-800/60 bg-slate-950/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { v: '11+', l: 'Years outbound' },
              { v: '5', l: 'Global markets' },
              { v: '70%+', l: 'Show-up rate' },
              { v: '100%', l: 'CRM discipline' },
            ].map((s, i) => (
              <div key={s.l} className={`${i !== 0 ? 'md:border-l md:border-slate-800/60 md:pl-8' : ''}`}>
                <div className="text-[24px] sm:text-[28px] font-bold text-white tabular leading-none tracking-tight">
                  {s.v}
                </div>
                <div className="text-[11.5px] text-slate-500 mt-2 font-mono uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO INTRO CONTENT ── */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeading
            index="00"
            eyebrow="What I do"
            title="Senior B2B SDR & appointment setting"
            titleAccent="specialist."
          />
          <div className="mt-8 space-y-5 text-[15px] text-slate-300 leading-[1.85]">
            <p>
              Flynn James is a senior B2B Sales Development Representative (SDR) and appointment setter with over eleven
              years of experience booking qualified discovery meetings for SaaS companies, marketing agencies, IT firms,
              and professional services businesses. He specialises in cold calling, outbound lead generation, LinkedIn
              Sales Navigator outreach, and SDR team coaching.
            </p>
            <p>
              Working across the United States, United Kingdom, Australia, New Zealand, Canada, and Singapore markets,
              Flynn has sourced more than $1.8M in B2B pipeline, held a consistent 120–150% quota attainment, and
              maintained a 70%+ show-up rate on every meeting booked directly onto client Account Executives' calendars.
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
            title="Focused B2B sales"
            titleAccent="engagements."
            description="Six services designed to move the needle — from cold calling and appointment setting to SDR coaching and CRM hygiene. No fluff, just qualified pipeline."
          />
          <Button variant="ghost" onClick={() => onNavigate('services')} withArrow className="group shrink-0">
            View all services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/60 rounded-lg overflow-hidden border border-slate-800/60">
          {CORE_SERVICES.slice(0, 6).map((service, i) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => onOpenContact(service.title)}
              className="group relative bg-[#0b0f19]/90 hover:bg-slate-900/80 p-7 text-left transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-[10.5px] font-mono text-amber-400/70 tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-[16.5px] font-semibold text-white leading-snug mb-2 group-hover:text-amber-50 transition-colors">
                {service.title}
              </h3>
              <p className="text-[13px] text-slate-400 leading-relaxed">{service.tagline}</p>
            </motion.button>
          ))}
        </div>
      </Section>

      {/* ── CASE STUDIES PREVIEW ── */}
      <Section id="cases-preview" bordered className="section-photo bg-photo-desk">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Campaigns with"
            titleAccent="receipts."
            description="Real numbers from real B2B outbound campaigns across marketing agencies, enterprise SaaS, and government technology."
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
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onSelectCaseStudy(cs)}
              className="group text-left bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-xl p-7 sm:p-8 transition-all"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">{cs.industry}</span>
                <span className="h-px w-4 bg-slate-600" />
                <span className="text-[11px] font-mono text-slate-400 tracking-wider">{cs.region}</span>
              </div>

              <h3 className="text-[19px] sm:text-[21px] font-semibold text-white leading-snug mb-5 group-hover:text-amber-50 transition-colors">
                {cs.title}
              </h3>

              <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-slate-700/60">
                <span className="text-[26px] sm:text-[32px] font-bold text-amber-400 tabular tracking-tight leading-none">
                  {cs.headlineMetric}
                </span>
                <span className="text-[11.5px] text-slate-500 font-mono">headline outcome</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-[12.5px]">
                {cs.secondaryMetrics.slice(0, 4).map((m, j) => (
                  <div key={j}>
                    <div className="text-slate-500 font-mono text-[10.5px] uppercase tracking-wider">{m.label}</div>
                    <div className="text-slate-200 font-medium mt-1 tabular">{m.value}</div>
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
          eyebrow="Client feedback"
          title="What sales leaders"
          titleAccent="say."
          description="Genuine testimonials from operations leads, head of sales, and managing directors I've worked with."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-6 sm:p-7 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-[13.5px] text-slate-300 leading-[1.75] flex-1">"{t.quote}"</p>

              <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-center gap-3">
                <OptimizedImage
                  src={t.avatarUrl}
                  alt={`${t.author}, ${t.title} at ${t.company}`}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover border border-slate-600/60"
                />
                <div className="min-w-0">
                  <div className="text-[13px] font-semibold text-white leading-tight truncate">{t.author}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── MATCHING CONTACT SECTION: Exactly synchronized with ContactPage ── */}
      <Section id="contact" bordered className="section-photo bg-photo-contact">
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="04"
            eyebrow="Get in touch"
            title="Book a free"
            titleAccent="B2B pipeline audit."
            description="A 20-minute call to look at your current outbound motion and identify what's leaking. No pitch decks. No generic discovery framework. Just a working session."
          />
          <div className="mt-6 space-y-4 text-[15px] text-slate-300 leading-[1.85]">
            <p>
              If you're a founder, sales leader, or Account Executive looking to add consistent qualified meetings to
              your calendar, the fastest way to find out if Flynn James is a fit is a 20-minute working session. Bring
              your current outbound motion — scripts, ICP, tool stack, and existing results — and Flynn will identify
              three specific improvements you can apply this week.
            </p>
            <p>
              Whether you need a dedicated senior SDR, an appointment setting specialist for a specific region, or an
              external coach to lift your current team, the call will clarify the next step. All inquiries receive a
              response within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Channels, Next Steps, FAQ */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-[18px] font-semibold text-white mb-3">Direct channels</h2>
              <p className="text-[13.5px] text-slate-400 leading-[1.75]">
                I typically respond within 2–4 hours during US business hours, within 24 hours otherwise.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full text-left group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors cursor-pointer"
                aria-label="Copy Flynn James email address to clipboard"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Email</div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5 truncate">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
                  )}
                </div>
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors"
                aria-label="Call Flynn James"
              >
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">
                      Phone / WhatsApp
                    </div>
                    <div className="text-[13.5px] text-white font-medium mt-0.5">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors"
                aria-label="View Flynn James LinkedIn profile"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn</div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5">/in/fjpontino</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
                </div>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/80 rounded-lg transition-colors"
                aria-label="View Flynn James resume"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">Resume</div>
                      <div className="text-[13.5px] text-white font-medium mt-0.5">Google Drive · PDF</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0" />
                </div>
              </a>
            </div>

            <div className="p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-lg">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                What happens next
              </div>
              <ul className="space-y-3">
                {[
                  { icon: Clock, text: 'Response within 24 hours guaranteed.' },
                  { icon: Shield, text: 'Free 20-minute pipeline audit.' },
                  { icon: CheckCircle2, text: 'Tailored pilot plan with clear KPIs.' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-slate-300 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-lg">
              <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                Frequently asked
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-[12.5px] font-semibold text-slate-200 mb-1">
                    How quickly will Flynn respond?
                  </dt>
                  <dd className="text-[12px] text-slate-400 leading-relaxed">
                    Within 2–4 hours during US business hours, within 24 hours otherwise.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold text-slate-200 mb-1">
                    What happens on the free pipeline audit?
                  </dt>
                  <dd className="text-[12px] text-slate-400 leading-relaxed">
                    A working session reviewing your current outbound motion, plus three specific improvements you can apply that week.
                  </dd>
                </div>
                <div>
                  <dt className="text-[12.5px] font-semibold text-slate-200 mb-1">Which markets are supported?</dt>
                  <dd className="text-[12px] text-slate-400 leading-relaxed">
                    US, UK, Europe, Australia, New Zealand, Canada, and Singapore.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Full Synchronized Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-7 sm:p-9"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-[22px] font-bold text-white mb-3">Message received</h2>
                  <p className="text-[13.5px] text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thanks, {formData.name}. I'll be in touch at{' '}
                    <span className="text-amber-400">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-5 border-b border-slate-800/60">
                    <h2 className="text-[18px] font-semibold text-white">Send a message</h2>
                    <p className="text-[12.5px] text-slate-500 mt-1.5">All information is confidential.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="home-contact-name" className={labelCls}>
                        Full name *
                      </label>
                      <input
                        id="home-contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="home-contact-email" className={labelCls}>
                        Work email *
                      </label>
                      <input
                        id="home-contact-email"
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
                      <label htmlFor="home-contact-company" className={labelCls}>
                        Company *
                      </label>
                      <input
                        id="home-contact-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="home-contact-service" className={labelCls}>
                        Service needed *
                      </label>
                      <select
                        id="home-contact-service"
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
                      <label htmlFor="home-contact-market" className={labelCls}>
                        Target market *
                      </label>
                      <select
                        id="home-contact-market"
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
                      <label htmlFor="home-contact-target" className={labelCls}>
                        Monthly meeting target
                      </label>
                      <select
                        id="home-contact-target"
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
                    <label htmlFor="home-contact-message" className={labelCls}>
                      ICP & current bottleneck *
                    </label>
                    <textarea
                      id="home-contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="We sell a $12k B2B SaaS platform to HR Directors in the US. Our closers aren't getting enough qualified meetings, and our SDR response rates are low..."
                      className={inputCls + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-[13.5px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-600">
                    No spam. 100% confidential. Response within 24 hours.
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
          className="relative rounded-2xl overflow-hidden border border-slate-700/60 section-photo bg-photo-city p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 ambient-accent pointer-events-none" />

          <div className="relative max-w-2xl mx-auto z-10">
            <span className="text-[11px] font-mono text-amber-400 tracking-wider uppercase">Ready when you are</span>
            <h2 className="mt-5 text-[32px] sm:text-[42px] font-bold text-white leading-[1.1] tracking-tight">
              Let's fill your calendar with
              <br />
              <span className="font-serif italic text-amber-400/90">conversations that close.</span>
            </h2>
            <p className="mt-6 text-[15px] text-slate-300 max-w-xl mx-auto">
              A free 20-minute pipeline audit. I'll look at your current outbound motion and share three things you can fix
              this week.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="lg" onClick={() => onOpenContact()}>
                <TrendingUp className="w-4 h-4" />
                Schedule the call
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('samples')} withArrow className="group">
                Browse playbooks
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-700/50 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { l: 'Response time', v: '< 24 hrs' },
                { l: 'Kickoff', v: '48–72 hrs' },
                { l: 'Contract', v: 'Flexible' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[10.5px] font-mono text-slate-500 uppercase tracking-wider">{s.l}</div>
                  <div className="text-[14px] font-semibold text-white mt-1.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};