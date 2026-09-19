import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { useSEO } from '../hooks/useSEO';

interface CaseStudiesPageProps {
  onSelectCaseStudy: (cs: CaseStudy) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onSelectCaseStudy }) => {
  useSEO({
    title: 'B2B Sales Case Studies — $1.8M+ Outbound Pipeline Sourced',
    description:
      'Detailed breakdowns of B2B outbound campaigns: $1.8M pipeline for UK marketing agency, 22% demo conversion for SaaS, and Level 4 fast-ramp.',
    canonical: '/case-studies',
    keywords: 'B2B sales case studies, cold calling results, appointment setting pipeline, SDR case study',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'B2B Sales Case Studies',
      numberOfItems: CASE_STUDIES.length,
      itemListElement: CASE_STUDIES.map((cs, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: cs.title,
        url: `https://flynnjames.com/case-studies#${cs.id}`,
      })),
    },
  });

  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Case Studies"
        title="Real campaigns."
        titleAccent="Documented receipts."
        description="Detailed breakdowns of B2B outbound campaigns solving cold acquisition bottlenecks and driving measurable revenue."
        photoClass="bg-photo-cases"
      />

      <Section>
        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.button
              key={cs.id}
              id={cs.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              onClick={() => onSelectCaseStudy(cs)}
              className="w-full text-left group bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 hover:border-amber-400/50 rounded-2xl p-7 sm:p-10 transition-all cursor-pointer shadow-xl"
              aria-label={`Read case study: ${cs.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-[11px] font-mono tracking-wider font-semibold">
                    <span className="text-amber-400 uppercase">{cs.industry}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">{cs.region}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">{cs.period}</span>
                  </div>

                  <h2 className="text-[22px] sm:text-[26px] font-bold text-white leading-snug mb-3 group-hover:text-amber-400 transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-[14.5px] text-slate-300 leading-relaxed line-clamp-3">{cs.challenge}</p>

                  <div className="mt-6 flex items-center gap-2 text-[13px] font-bold text-amber-400">
                    <span>Explore complete campaign blueprint</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="pb-5 mb-5 border-b border-slate-700/80">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-1">
                      Primary Outcome
                    </div>
                    <div className="text-[34px] sm:text-[42px] font-bold text-amber-400 tabular tracking-tight leading-none">
                      {cs.headlineMetric}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    {cs.secondaryMetrics.map((m, j) => (
                      <div key={j}>
                        <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider font-medium">
                          {m.label}
                        </div>
                        <div className="text-[15px] text-white font-bold mt-1 tabular">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>
    </>
  );
};