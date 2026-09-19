import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  bordered?: boolean;
  children: React.ReactNode;
  as?: 'section' | 'div' | 'article';
  'aria-labelledby'?: string;
  'aria-label'?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  bordered = false,
  children,
  as: Tag = 'section',
  ...rest
}) => {
  return (
    <Tag
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 ${
        bordered ? 'border-t border-slate-800/60' : ''
      } ${className}`}
      {...rest}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">{children}</div>
    </Tag>
  );
};