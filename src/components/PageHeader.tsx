import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  align?: 'left' | 'center';
  photoClass?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  index,
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'left',
  photoClass,
}) => {
  return (
    <div
      className={`relative pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-slate-800/70 overflow-hidden ${
        photoClass ? `section-photo ${photoClass}` : ''
      } ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
            {index && (
              <>
                <span className="text-[11.5px] font-mono font-semibold text-amber-400 tracking-wider px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {index}
                </span>
                <span className="h-px w-8 bg-slate-700/80" />
              </>
            )}
            <span className="text-[11.5px] font-mono text-slate-300 uppercase tracking-widest font-medium">
              {eyebrow}
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[54px] lg:text-[64px] font-extrabold text-white leading-[1.04] tracking-tight drop-shadow-sm">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="font-serif italic font-normal text-amber-400/95">{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-[15.5px] sm:text-[17.5px] text-slate-200/95 leading-relaxed max-w-2xl font-normal">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};