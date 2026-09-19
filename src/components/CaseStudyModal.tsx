import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../types';

export interface CaseStudyModalProps {
  caseStudy?: CaseStudy | null;
  isOpen?: boolean;
  onClose: () => void;
  onOpenContact?: (serviceName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  isOpen = true,
  onClose,
  onOpenContact,
}) => {
  const show = Boolean(isOpen && caseStudy);

  useEffect(() => {
    if (!show) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [show, onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="casestudy-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 z-10 overflow-hidden"
          >
            <div className="p-6 sm:p-7 border-b border-slate-800/80 flex items-start justify-between gap-4 bg-slate-900/50">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[11px] font-mono text-slate-400 uppercase">
                  <span className="text-amber-400 font-semibold">{caseStudy.industry}</span>
                  <span>·</span>
                  <span>{caseStudy.region}</span>
                  <span>·</span>
                  <span>{caseStudy.period}</span>
                </div>
                <h2 id="casestudy-modal-title" className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight">
                  {caseStudy.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-slate-200">
              <div className="p-5 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] font-mono text-amber-400 uppercase font-semibold">Headline Result</div>
                  <div className="text-[32px] sm:text-[38px] font-extrabold text-amber-400 tabular leading-tight mt-1">
                    {caseStudy.headlineMetric}
                  </div>
                </div>
                <TrendingUp className="w-8 h-8 text-amber-400/60" />
              </div>

              <div>
                <h3 className="text-[12px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
                  The Challenge
                </h3>
                <p className="text-[14.5px] leading-relaxed text-slate-300">
                  {caseStudy.challenge}
                </p>
              </div>

              {caseStudy.secondaryMetrics && (
                <div>
                  <h3 className="text-[12px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-3">
                    Key Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {caseStudy.secondaryMetrics.map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                        <div className="text-[16px] font-bold text-white mt-1 tabular">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 sm:px-7 border-t border-slate-800/80 bg-slate-900/60 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-[13px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
              {onOpenContact && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenContact(caseStudy.title);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-[13px] font-bold rounded-lg transition-colors cursor-pointer shadow-lg"
                >
                  Apply this strategy
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;