import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { CAREER_EXPERIENCES } from '../data/portfolioData';
import { PageId } from '../types';
import { Button } from '../components/Button';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenContact }) => {
  const [active, setActive] = useState(CAREER_EXPERIENCES[0].id);
  const exp = CAREER_EXPERIENCES.find((e) => e.id === active) || CAREER_EXPERIENCES[0];

  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Experience"
        title="Eleven years of"
        titleAccent="quota attainment."
        description="From frontline power caller to Junior Sales Team Lead. Consistently exceeding KPIs across North America, the UK, Europe, Australia, and Singapore."
        photoClass="bg-photo-experience"
      />

      <Section>
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="04.0"
            eyebrow="Career overview"
            title="A documented track record in"
            titleAccent="B2B sales development."
          />
          <div className="mt-6 space-y-5 text-[15.5px] text-slate-200 leading-[1.85]">
            <p>
              Flynn James has spent more than a decade in B2B outbound sales, progressing from a high-volume power caller
              to a Junior Sales Team Lead responsible for coaching SDR teams. His career spans five distinct global
              markets and four separate industries — BPO teleservices, B2B events, enterprise cloud SaaS, and digital
              marketing services.
            </p>
            <p>
              Highlights include: 120–150% quota attainment sustained over a 6-year tenure at Pacific Outsource
              Teleservices; a Top 5% company-wide ranking across two consecutive years at Public Sector Network in
              Toronto; $1.2M in qualified pipeline for Averps Pte Ltd in Singapore; $1.8M in sourced pipeline for Seek
              Marketing Partners in the UK; and a Level 4 (highest tier) achievement at Regen Digital US within 3 weeks
              of joining.
            </p>
            <p>
              Every role has been remote-first since 2022, with disciplined KPI tracking, CRM hygiene, and structured
              coaching of junior reps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-6 font-semibold">
                Career milestones
              </div>

              <div className="relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-800" />
                <ul className="space-y-2 relative">
                  {CAREER_EXPERIENCES.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActive(item.id)}
                          className="w-full text-left flex gap-5 py-3.5 group cursor-pointer"
                        >
                          <span
                            className={`relative z-10 shrink-0 mt-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                              isActive
                                ? 'bg-amber-400 border-amber-400 shadow-md shadow-amber-400/50'
                                : 'bg-[#0b0f19] border-slate-700 group-hover:border-slate-400'
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <div
                              className={`text-[11px] font-mono font-medium ${
                                isActive ? 'text-amber-400' : 'text-slate-500'
                              } transition-colors`}
                            >
                              {item.period}
                            </div>
                            <div
                              className={`text-[14.5px] font-bold mt-1 leading-snug transition-colors ${
                                isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                              }`}
                            >
                              {item.role}
                            </div>
                            <div className="text-[12.5px] text-slate-400 mt-0.5">{item.company}</div>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-xl p-7 sm:p-10 shadow-2xl"
            >
              <div className="pb-7 border-b border-slate-800/80">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    {exp.type}
                  </span>
                </div>

                <h2 className="text-[26px] sm:text-[30px] font-extrabold text-white leading-tight tracking-tight">
                  {exp.role}
                </h2>
                <div className="mt-2 text-[15px] text-slate-300">
                  <span className="text-white font-bold">{exp.company}</span>
                  <span className="text-slate-400"> · {exp.industry}</span>
                </div>

                <div className="mt-6 inline-flex items-baseline gap-3 px-4 py-2.5 bg-amber-400/10 border border-amber-400/30 rounded-xl">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    Key performance metric
                  </span>
                  <span className="text-[16px] font-bold text-amber-400 tabular">{exp.highlightMetric}</span>
                </div>
              </div>

              <div className="py-7 border-b border-slate-800/80">
                <h3 className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-5 font-semibold">
                  Scope of responsibility
                </h3>
                <ul className="space-y-3.5">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                      <span className="text-[14px] text-slate-200 leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-7">
                <h3 className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-5 flex items-center gap-2 font-semibold">
                  <Award className="w-4 h-4 text-amber-400" />
                  Key verified achievements
                </h3>
                <div className="space-y-3">
                  {exp.achievements.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-[#0b0f19]/80 border border-slate-800/80 rounded-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[14px] text-slate-200 leading-relaxed">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            <div className="mt-8 p-6 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
              <div>
                <div className="text-[15px] font-bold text-white">Want to see these numbers on your team?</div>
                <div className="text-[13px] text-slate-300 mt-1">
                  A quick 20-minute working call to align on your ICP and revenue goals.
                </div>
              </div>
              <Button variant="primary" onClick={() => onOpenContact()} className="shrink-0 shadow-md">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section bordered className="section-photo bg-photo-team">
        <SectionHeading
          index="04.1"
          eyebrow="Career highlights"
          title="Industries served &"
          titleAccent="markets covered."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl p-7 shadow-lg">
            <h3 className="text-[16px] font-bold text-white mb-4">Industries served</h3>
            <ul className="space-y-3">
              {[
                'BPO & international telemarketing',
                'B2B events & government technology summits',
                'Enterprise SaaS & cloud IT infrastructure',
                'Digital marketing & performance media',
                'Web design & custom web applications',
                'Customer acquisition & professional services',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-slate-200 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl p-7 shadow-lg">
            <h3 className="text-[16px] font-bold text-white mb-4">Global markets covered</h3>
            <ul className="space-y-3">
              {[
                'United States — EST, CST, MST, PST time zones',
                'United Kingdom & Europe — GMT / BST calling hours',
                'Australia & New Zealand — AEST / NZST coverage',
                'Canada — EST, MST, PST coverage',
                'Singapore & APAC — SGT business hours',
                'Philippines — native market experience',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-slate-200 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};