import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Headphones, Shield, Flame, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { OptimizedImage } from '../components/OptimizedImage';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';
import { useSEO } from '../hooks/useSEO';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

const PILLARS = [
  {
    icon: Target,
    title: 'Consultative Discovery, Not Canned Pitches',
    body: 'I diagnose before prescribing. Every call opens with pattern-breaking questions that guide prospects to acknowledge their bottlenecks before introducing our value proposition.',
  },
  {
    icon: Flame,
    title: 'Enduring Outbound Grit',
    body: "150+ dials a day is not a temporary sprint — it has been my baseline for over a decade. True sales endurance requires disciplined focus and consistency.",
  },
  {
    icon: Headphones,
    title: 'Active Listening & Tone Calibration',
    body: 'Cold calling is 80% listening. I disarm defensive gatekeepers in the first seven seconds and convert reflexive objections into genuine commercial dialogues.',
  },
  {
    icon: Shield,
    title: 'Pristine CRM Hygiene & Strict Qualification',
    body: 'No phantom pipeline or vanity calendar bookings. Every contact, disposition note, call recording, and BANT qualifier is documented for accurate forecasting.',
  },
];

const TRAITS = [
  'Fast offer assimilation: ramp to live production in 48–72 hours',
  'Executive presence conversing with C-Suite & VP buyers',
  'Strict BANT & MEDDIC qualification before calendar invites send',
  'Autonomous, metrics-driven execution in remote environments',
];

const EXPERTISE = [
  { icon: Briefcase, label: 'Core Specialization', value: 'B2B Outbound Sales Development' },
  { icon: GraduationCap, label: 'Methodology', value: 'BANT · MEDDIC · Consultative Discovery' },
  { icon: Globe, label: 'Target Markets', value: 'US · UK · ANZ · CA · SG' },
  { icon: Award, label: 'Performance Tier', value: 'Level 4 · Top 5% Rep Across Campaigns' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  useSEO({
    title: 'About Flynn James — Senior B2B SDR & Cold Calling Specialist',
    description:
      'Learn about Flynn James: 11+ years on outbound phone lines, $1.8M+ pipeline sourced, and Junior Sales Team Lead coaching SDRs to exceed quota.',
    canonical: '/about',
    keywords: 'Flynn James, B2B SDR background, appointment setter experience, cold calling expert, outbound sales coach',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Flynn James Q. Pontino',
        jobTitle: 'Senior B2B SDR & Junior Sales Team Lead',
        description: 'Senior B2B SDR with 11+ years of cold calling and appointment setting experience.',
        url: 'https://flynnjames.com/about',
        email: 'va.flynnjames@gmail.com',
        image: 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif',
        sameAs: ['https://www.linkedin.com/in/fjpontino'],
      },
    },
  });

  return (
    <>
      <PageHeader
        index="02"
        eyebrow="About Flynn"
        title="A revenue pipeline partner,"
        titleAccent="not a dialing machine."
        description="I combine high-volume outbound grit with executive consultative dialogue. Here is the operational philosophy behind 11+ years on the phones."
        photoClass="bg-photo-about"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <h2 className="text-[26px] sm:text-[30px] font-bold text-white leading-snug tracking-tight">
                Eleven years of turning cold contacts into qualified revenue.
              </h2>
            </motion.div>

            <p className="text-[15.5px] text-slate-300 leading-[1.8]">
              I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I made my first cold call in 2014 — dialing hundreds of numbers a day across time zones, accents, and complex industries. What began as daily reps transformed into a repeatable science.
            </p>

            <p className="text-[15.5px] text-slate-300 leading-[1.8]">
              Over the last decade, I refined this into a predictable engine: permission-based phone openers, multi-channel email touchpoints, LinkedIn conversational plays, and rigorous qualification so your Account Executives only speak with real buyers.
            </p>

            <div className="my-8 border-l-2 border-amber-400 pl-6 py-1">
              <p className="font-serif italic text-[20px] sm:text-[22px] text-slate-100 leading-[1.5]">
                "A booked meeting is only as valuable as the revenue it generates. My role is never just putting names on a calendar — it is teeing up informed, receptive buyers for your closers."
              </p>
              <div className="mt-3 text-[11.5px] font-mono text-amber-400 uppercase tracking-wider font-semibold">— Flynn James</div>
            </div>

            <p className="text-[15.5px] text-slate-300 leading-[1.8]">
              Currently serving as <strong className="text-white font-semibold">Junior Sales Team Lead</strong> at Regen Digital US, I balance personal quota execution with coaching junior SDRs on call tonality, objection navigation, and pipeline acceleration.
            </p>

            <div className="pt-4 flex flex-wrap gap-3.5">
              <Button variant="primary" onClick={() => onOpenContact()} className="shadow-lg shadow-amber-400/20">
                Work with Flynn
              </Button>
              <Button variant="secondary" onClick={() => onNavigate('experience')} withArrow className="group">
                View career timeline
              </Button>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <OptimizedImage
                  src="https://user29984.na.imgto.link/public/20260907/flynn-profile.avif"
                  alt="Flynn James, Senior B2B SDR"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-amber-400/40"
                  priority
                />
                <div>
                  <div className="text-[15px] font-bold text-white">Flynn James Q. Pontino</div>
                  <div className="text-[12px] text-slate-300 mt-0.5 font-medium">Senior B2B SDR · Team Lead</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-amber-400" />
                <h3 className="text-[12px] font-bold text-white uppercase tracking-wider font-mono">
                  Operating Principles
                </h3>
              </div>

              <ul className="space-y-3.5">
                {TRAITS.map((trait, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-[13.5px] text-slate-300 leading-relaxed">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-[12px] font-bold text-white uppercase tracking-wider font-mono mb-4">
                Professional Profile
              </h3>
              <dl className="space-y-4 text-[13.5px]">
                {EXPERTISE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <dt className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-medium">
                          {item.label}
                        </dt>
                        <dd className="text-slate-100 mt-0.5 font-semibold">{item.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </motion.aside>
        </div>
      </Section>

      {/* Principles Section with Balanced Photo Layer */}
      <Section bordered className="section-photo bg-photo-laptop">
        <SectionHeading
          index="02.1"
          eyebrow="Core philosophy"
          title="Four pillars that guide"
          titleAccent="every outreach interaction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/70 rounded-xl overflow-hidden border border-slate-800/70 mt-12">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#0b0f19]/90 hover:bg-slate-900/90 p-8 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-[14px] text-slate-300 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
};