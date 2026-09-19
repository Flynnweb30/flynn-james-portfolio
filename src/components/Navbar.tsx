import React, { useEffect, useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Button } from './Button';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'samples', label: 'Playbooks' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0b0f19]/85 backdrop-blur-xl border-b border-slate-800/60' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <button
            onClick={() => handleNav('home')}
            aria-label="Flynn James — home"
            className="flex items-center gap-2.5 group"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-amber-400/10 border border-amber-400/30">
              <span className="text-[13px] font-bold text-amber-400">F</span>
            </span>
            <span className="text-[14px] font-semibold tracking-tight text-white group-hover:text-amber-50 transition-colors">
              Flynn James
              <span className="hidden sm:inline text-slate-500 font-normal"> · B2B SDR</span>
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {LINKS.map((link) => {
              const active = currentPage === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                      active ? 'text-amber-400 bg-amber-400/5' : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hidden sm:inline-flex text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <Button variant="primary" size="sm" onClick={() => handleNav('contact')} className="cta-magnetic hidden sm:inline-flex">
              <PhoneCall className="w-3.5 h-3.5" />
              Book a call
            </Button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-800/60`}
      >
        <ul className="max-w-7xl mx-auto px-5 py-4 space-y-1">
          {LINKS.map((link) => {
            const active = currentPage === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`w-full text-left px-4 py-3 rounded-md text-[14px] font-medium transition-colors ${
                    active ? 'text-amber-400 bg-amber-400/5' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="pt-2">
            <Button variant="primary" onClick={() => handleNav('contact')} className="w-full justify-center">
              <PhoneCall className="w-4 h-4" />
              Book a 20-min strategy call
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};