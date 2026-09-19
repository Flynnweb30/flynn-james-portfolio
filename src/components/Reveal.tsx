import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  id?: string;
  'aria-label'?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  style,
  id,
  ...rest
}) => {
  return (
    <Tag
      id={id}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};