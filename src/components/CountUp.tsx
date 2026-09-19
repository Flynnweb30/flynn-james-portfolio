import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  'aria-label'?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1400,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  ...rest
}) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setValue(end); return; }

    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setValue(end);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(end * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setValue(end);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });

    io.observe(node);
    return () => io.disconnect();
  }, [end, duration]);

  const display = value.toFixed(decimals);

  return (
    <span ref={ref} className={className} {...rest}>
      {prefix}{display}{suffix}
    </span>
  );
};