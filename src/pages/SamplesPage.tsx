import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { WORK_SAMPLES } from '../data/portfolioData';
import { WorkSample } from '../types';
import { useSEO } from '../hooks/useSEO';

interface SamplesPageProps {
  onSelectSample: (s: WorkSample) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const SamplesPage: React.FC<SamplesPageProps> = ({ onSelectSample }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useSEO({
    title: 'Sales Playbooks & Cold Call Scripts — Flynn James',
    description:
      'Battle-tested B2B sales playbooks: permission-based cold call scripts, multi-channel 7-touch cadences, and BANT qualification scorecards.',
    canonical: '/samples',
    keywords: 'cold call scripts, SDR playbooks, outbound sales cadence, BANT qualification scorecard',
  });

  const handleCopy = (sample: WorkSample, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${sample.title}\n\n${sample.details.overview}\n\nFramework:\n${sample.details.framework.join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(sample.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Playbooks"
        title="Battle-tested scripts & frameworks"
        titleAccent="from live campaigns."
        description="Not generic internet templates. These are the exact multi-touch cadences, objection loops, and BANT qualification frameworks used on live calls."
        photoClass="bg-photo-playbooks"
      />

      <Section>
        <div className="space-y-6">
          {WORK_SAMPLES.map((sample, i) => {
            const isCopied = copiedId === sample.id;
            return (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                onClick={() => onSelectSample(sample)}
                className="group cursor-pointer bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 hover:border-amber-400/50 rounded-2xl p-7 sm:p-9 transition-all shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold block mb-3">
                      {sample.category}
                    </span>

                    <h2 className="text-[21px] sm:text-[25px] font-bold text-white leading-tight mb-3 group-hover:text-amber-400 transition-colors">
                      {sample.title}
                    </h2>

                    <p className="text-[14.5px] text-slate-300 leading-relaxed">{sample.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {sample.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[11px] font-mono bg-slate-800/80 border border-slate-700/80 text-slate-300 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="bg-[#0b0f19] border border-slate-800 rounded-xl p-5 h-full flex flex-col justify-between">
                      <div>
                        <div className="text-[10.5px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-2">
                          Framework Excerpt
                        </div>
                        <p className="text-[12.5px] text-slate-300 leading-relaxed font-mono line-clamp-5">
                          {sample.details.framework[0]}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <button
                          onClick={(e) => handleCopy(sample, e)}
                          className="text-[12px] font-semibold text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Excerpt</span>
                            </>
                          )}
                        </button>

                        <span className="text-[12px] font-bold text-amber-400 inline-flex items-center gap-1">
                          View Details
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
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