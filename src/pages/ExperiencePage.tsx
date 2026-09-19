import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Breadcrumbs, breadcrumbSchema } from '../components/Breadcrumbs';
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
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Experience', href: '/experience' }];

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <Breadcrumbs crumbs={crumbs} />
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
          <SectionHeading index="04.0" eyebrow="Career overview" title="A documented track record in" titleAccent="B2B sales development." />
          <div className="mt-6 space-y-5 text-[15px] text-slate-300 leading-[1.85]">
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
            <nav className="lg:sticky lg:top-24" aria-label="Career timeline">
              <h2 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-6">Career milestones</h2>
              <div className="relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-800" aria-hidden="true" />
                <ul className="space-y-1 relative list-none p-0 m-0">
                  {CAREER_EXPERIENCES.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActive(item.id)}
                          className="w-full text-left flex gap-5 py-4 group"
                          aria-current={isActive ? 'true' : undefined}
                        >
                          <span className={`relative z-10 shrink-0 mt-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                            isActive ? 'bg-amber-400 border-amber-400' : 'bg-[#0b0f19] border-slate-700 group-hover:border-slate-500'
                          }`} aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                            <div className={`text-[11px] font-mono ${isActive ? 'text-amber-400' : 'text-slate-400'} transition-colors`}>
                              {item.period}
                            </div>
                            <div className={`text-[14px] font-semibold mt-1.5 leading-snug transition-colors ${
                              isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                            }`}>{item.role}</div>
                            <div className="text-[12.5px] text-slate-400 mt-1">{item.company}</div>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </aside>

          <article className="lg:col-span-7">
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl p-7 sm:p-10"
            >
              <div className="pb-7 border-b border-slate-800/60">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" aria-hidden="true" />{exp.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" aria-hidden="true" />{exp.location}</span>
                  <span className="flex items-center gap-1.5"><Building2 className="w-3 h-3" aria-hidden="true" />{exp.type}</span>
                </div>
                <h2 className="text-[24px] sm:text-[28px] font-bold text-white leading-tight tracking-tight">{exp.role}</h2>
                <div className="mt-2 text-[14.5px] text-slate-200">
                  <span className="text-white font-semibold">{exp.company}</span>
                  <span className="text-slate-400"> · {exp.industry}</span>
                </div>
                <div className="mt-6 inline-flex items-baseline gap-3 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-lg">
                  <span className="text-[10.5px] font-mono text-amber-400 uppercase tracking-wider">Key metric</span>
                  <span className="text-[15px] font-semibold text-amber-400 tabular">{exp.highlightMetric}</span>
                </div>
              </div>

              <div className="py-7 border-b border-slate-800/60">
                <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-5">Scope of responsibility</h3>
                <ul className="space-y-3">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 shrink-0" aria-hidden="true" />
                      <span className="text-[13.5px] text-slate-200 leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-7">
                <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />Key achievements
                </h3>
                <ul className="space-y-3">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 p-3.5 bg-[#0b0f19]/70 border border-slate-800/60 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-[13.5px] text-slate-100 leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="mt-8 p-6 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-[14px] font-semibold text-white">Want to see these numbers on your team?</div>
                <div className="text-[12.5px] text-slate-300 mt-1">A quick call to align on your ICP and outbound goals.</div>
              </div>
              <Button variant="primary" onClick={() => onOpenContact()} className="shrink-0">Get in touch</Button>
            </div>
          </article>
        </div>
      </Section>

      <Section bordered className="section-photo bg-photo-team">
        <SectionHeading index="04.1" eyebrow="Career highlights" title="Industries served &" titleAccent="markets covered." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl p-7">
            <h3 className="text-[15px] font-semibold text-white mb-4">Industries served</h3>
            <ul className="space-y-2.5">
              {[
                'BPO & international telemarketing',
                'B2B events & government technology summits',
                'Enterprise SaaS & cloud IT infrastructure',
                'Digital marketing & performance media',
                'Web design & custom web applications',
                'Customer acquisition & retail services',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13.5px] text-slate-200 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-amber-400/80 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl p-7">
            <h3 className="text-[15px] font-semibold text-white mb-4">Global markets covered</h3>
            <ul className="space-y-2.5">
              {[
                'United States — EST, CST, MST, PST time zones',
                'United Kingdom & Europe — GMT / BST calling hours',
                'Australia & New Zealand — AEST / NZST coverage',
                'Canada — EST, MST, PST',
                'Singapore & APAC — SGT coverage',
                'Philippines — native market experience',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13.5px] text-slate-200 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-amber-400/80 shrink-0" aria-hidden="true" />
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