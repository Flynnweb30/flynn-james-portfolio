import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { WORK_SAMPLES } from '../data/portfolioData';
import { WorkSample } from '../types';

interface SamplesPageProps {
  onSelectSample: (s: WorkSample) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const SamplesPage: React.FC<SamplesPageProps> = ({ onSelectSample }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

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
        title="The scripts and frameworks"
        titleAccent="I use every day."
        description="Not prototypes. Not templates from the internet. These are the exact scripts, cadences, and scorecards that have produced $1.8M+ in pipeline."
        photoClass="bg-photo-playbooks"
      />

      <Section>
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="06.0"
            eyebrow="Free resources"
            title="Battle-tested sales playbooks,"
            titleAccent="free to copy."
          />
          <div className="mt-6 space-y-5 text-[15.5px] text-slate-200 leading-[1.85]">
            <p>
              These four B2B outbound playbooks are the exact frameworks Flynn James uses on live client campaigns today.
              They include the permission-based cold call script that yields 12–18% conversation-to-meeting conversion,
              a 7-touch multi-channel outbound cadence across phone + email + LinkedIn, a strict BANT & MEDDIC
              qualification scorecard, and the executive handoff template used before every Account Executive discovery
              call.
            </p>
            <p>
              Everything on this page is free to copy, adapt, and implement on your own sales team. If you want help
              customising any of these frameworks for your specific ICP, industry, or market — book a call and we'll
              build it together.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {WORK_SAMPLES.map((sample, i) => {
            const isCopied = copiedId === sample.id;
            return (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => onSelectSample(sample)}
                className="group cursor-pointer bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-md border border-slate-700/70 hover:border-amber-400/60 rounded-xl p-7 sm:p-9 transition-all shadow-xl hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                        {sample.category}
                      </span>
                    </div>

                    <h2 className="text-[21px] sm:text-[25px] font-extrabold text-white leading-tight tracking-tight mb-4 group-hover:text-amber-300 transition-colors">
                      {sample.title}
                    </h2>

                    <p className="text-[14.5px] text-slate-300 leading-[1.8]">{sample.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {sample.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-mono bg-slate-800/80 border border-slate-700/70 text-slate-300 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="bg-[#0b0f19] border border-slate-800/80 rounded-xl p-5 h-full flex flex-col justify-between shadow-inner">
                      <div>
                        <div className="text-[10.5px] font-mono text-amber-400/80 uppercase tracking-wider mb-3 font-semibold">
                          Framework Preview
                        </div>
                        <p className="text-[12.5px] text-slate-300 leading-[1.7] line-clamp-5 font-mono">
                          {sample.details.framework[0]}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <button
                          onClick={(e) => handleCopy(sample, e)}
                          className="text-[12px] font-semibold text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-amber-400" />
                              <span>Copy script</span>
                            </>
                          )}
                        </button>

                        <span className="text-[12px] font-bold text-amber-400 inline-flex items-center gap-1">
                          Open details
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