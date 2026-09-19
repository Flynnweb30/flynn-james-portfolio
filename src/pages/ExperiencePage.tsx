import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { CAREER_EXPERIENCES } from '../data/portfolioData';
import { PageId } from '../types';
import { Button } from '../components/Button';
import { useSEO } from '../hooks/useSEO';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenContact }) => {
  const [active, setActive] = useState(CAREER_EXPERIENCES[0].id);
  const exp = CAREER_EXPERIENCES.find((e) => e.id === active) || CAREER_EXPERIENCES[0];

  useSEO({
    title: 'Career Timeline — 11+ Years of B2B Sales Development',
    description:
      'Review Flynn James 11+ year sales trajectory: Junior Sales Team Lead at Regen Digital US, Senior SDR at Seek Marketing, and Averps Pte Ltd. Consistent 120–150% quota attainment.',
    canonical: '/experience',
    keywords: 'sales career timeline, senior SDR experience, sales team lead history, outbound quota attainment',
  });

  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Experience"
        title="Eleven years of verified"
        titleAccent="quota attainment."
        description="From frontline outbound caller to Junior Sales Team Lead. Consistently exceeding targets across North America, the UK, Europe, Australia, and Singapore."
        photoClass="bg-photo-experience"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-6">
                Career History
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
                          className="w-full text-left flex gap-4 py-3.5 group cursor-pointer"
                        >
                          <span
                            className={`relative z-10 shrink-0 mt-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                              isActive
                                ? 'bg-amber-400 border-amber-400 ring-2 ring-amber-400/30'
                                : 'bg-[#0b0f19] border-slate-700 group-hover:border-slate-500'
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
              transition={{ duration: 0.35 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-7 sm:p-10 shadow-xl"
            >
              <div className="pb-6 border-b border-slate-800">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] font-mono text-slate-400 mb-3 font-medium">
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

                <h2 className="text-[25px] sm:text-[30px] font-bold text-white leading-tight tracking-tight">
                  {exp.role}
                </h2>
                <div className="mt-1 text-[15px] text-slate-300">
                  <span className="text-white font-semibold">{exp.company}</span>
                  <span className="text-slate-400"> · {exp.industry}</span>
                </div>

                <div className="mt-5 inline-flex items-baseline gap-2.5 px-4 py-2 bg-amber-400/10 border border-amber-400/25 rounded-lg">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    Key Performance
                  </span>
                  <span className="text-[15px] font-bold text-amber-400 tabular">{exp.highlightMetric}</span>
                </div>
              </div>

              <div className="py-6 border-b border-slate-800">
                <h3 className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-4">
                  Scope of Impact
                </h3>
                <ul className="space-y-3">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                      <span className="text-[14px] text-slate-300 leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <h3 className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  {exp.achievements.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-[#0b0f19]/70 border border-slate-800/80 rounded-xl"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-slate-200 leading-relaxed">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            <div className="mt-8 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-[14.5px] font-bold text-white">Deploy these numbers to your outbound pipeline</div>
                <div className="text-[13px] text-slate-300 mt-1">
                  Schedule a quick discovery session with Flynn.
                </div>
              </div>
              <Button variant="primary" onClick={() => onOpenContact()} className="shrink-0 shadow-lg shadow-amber-400/20">
                Schedule Audit
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};