import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, PhoneCall, Sparkles, Wrench, BarChart3 } from 'lucide-react';
import { ServiceItem } from '../types';

export interface ServiceModalProps {
  service?: ServiceItem | null;
  isOpen?: boolean;
  onClose: () => void;
  onOpenContact?: (serviceName?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen = true,
  onClose,
  onOpenContact,
}) => {
  const show = Boolean(isOpen && service);

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

  if (!service) return null;

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
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[11px] font-mono font-semibold uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3 h-3" />
                  {service.badge}
                </div>
                <h2 className="text-[22px] sm:text-[26px] font-extrabold text-white leading-tight">
                  {service.title}
                </h2>
                <p className="mt-1 text-[14px] text-amber-400/90 font-serif italic">
                  {service.tagline}
                </p>
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
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                    Benchmark KPI
                  </div>
                  <div className="mt-1.5 text-[15px] font-bold text-amber-400">{service.metrics}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Deliverable Output
                  </div>
                  <div className="mt-1.5 text-[14px] font-semibold text-white">{service.deliverableSummary}</div>
                </div>
              </div>

              {service.features && (
                <div>
                  <h3 className="text-[11.5px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-3.5">
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.toolsUsed && (
                <div>
                  <h3 className="text-[11.5px] font-mono text-slate-400 uppercase tracking-wider font-medium mb-3 flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-amber-400" />
                    Tools & Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11.5px] font-mono bg-slate-800/80 border border-slate-700/70 text-slate-300 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 sm:px-7 border-t border-slate-800/80 bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11.5px] font-mono text-slate-400">
                100% confidential outbound sprint
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 text-[13px] font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenContact) onOpenContact(service.title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-[13px] font-bold rounded-lg transition-colors cursor-pointer shadow-lg shadow-amber-400/20"
                >
                  <PhoneCall className="w-4 h-4 text-slate-950" />
                  Request this service
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;