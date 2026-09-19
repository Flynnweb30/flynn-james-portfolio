import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';
import { WorkSample } from '../types';

export interface WorkSampleModalProps {
  sample?: WorkSample | null;
  isOpen?: boolean;
  onClose: () => void;
  onOpenContact?: (serviceName?: string) => void;
}

export const WorkSampleModal: React.FC<WorkSampleModalProps> = ({
  sample,
  isOpen = true,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const show = Boolean(isOpen && sample);

  useEffect(() => {
    if (!show) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [show, onClose]);

  if (!sample) return null;

  const handleCopy = () => {
    const text = `${sample.title}\n\n${sample.details?.overview || sample.summary}\n\nFramework:\n${sample.details?.framework?.join('\n') || ''}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 z-10 overflow-hidden"
          >
            <div className="p-6 sm:p-7 border-b border-slate-800/80 flex items-start justify-between gap-4 bg-slate-900/50">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[11px] font-mono font-semibold uppercase">
                  {sample.category}
                </span>
                <h2 className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight mt-2.5">
                  {sample.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-slate-200">
              <p className="text-[14.5px] leading-relaxed text-slate-300">
                {sample.summary}
              </p>

              {sample.details?.overview && (
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-[13.5px] text-slate-300 leading-relaxed">
                  {sample.details.overview}
                </div>
              )}

              {sample.details?.framework && (
                <div>
                  <h3 className="text-[11.5px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-3">
                    Playbook Framework & Script
                  </h3>
                  <div className="space-y-2 font-mono text-[12.5px] bg-[#0b0f19] border border-slate-800 p-4 rounded-xl text-slate-300">
                    {sample.details.framework.map((line, idx) => (
                      <div key={idx} className="leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 sm:px-7 border-t border-slate-800/80 bg-slate-900/60 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copied ? 'Copied to clipboard' : 'Copy playbook'}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-[13px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WorkSampleModal;