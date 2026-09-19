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
      className={`relative pt-32 pb-18 sm:pt-40 sm:pb-24 border-b border-slate-800/70 overflow-hidden ${
        photoClass ? `section-photo ${photoClass}` : ''
      } ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className="absolute inset-0 grid-lines opacity-35 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <div className={`flex items-center gap-3 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
            {index && <span className="text-[11px] font-mono text-amber-400 font-semibold tracking-wider">{index}</span>}
            {index && <span className="h-px w-8 bg-slate-700/80" />}
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">{eyebrow}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[62px] font-bold text-white leading-[1.04] tracking-tight">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="font-serif italic text-amber-400 font-normal">{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-[15.5px] sm:text-[17px] text-slate-300 leading-relaxed max-w-2xl font-normal">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};