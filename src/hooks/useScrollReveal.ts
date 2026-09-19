import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodes = document.querySelectorAll<HTMLElement>('.reveal');

    if (prefersReduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}