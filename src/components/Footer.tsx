import React from 'react';
import { Mail, Phone, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/60 backdrop-blur-sm mt-auto" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-400/10 border border-amber-400/30">
                <span className="text-[13px] font-bold text-amber-400">F</span>
              </span>
              <span className="text-[15px] font-semibold text-white">Flynn James</span>
            </div>
            <p className="text-[13.5px] text-slate-400 leading-relaxed max-w-md">
              Senior B2B SDR & appointment setter. 11+ years on the phones generating $1.8M+ in qualified pipeline
              for SaaS, agencies, IT firms, and professional services teams across the US, UK, ANZ, and Singapore.
            </p>
            <button
              onClick={() => onOpenContact()}
              className="mt-6 cta-magnetic inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Book a free 20-min pipeline audit
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'about' as PageId, label: 'About Flynn' },
                { id: 'services' as PageId, label: 'B2B Services' },
                { id: 'experience' as PageId, label: 'Experience' },
                { id: 'case-studies' as PageId, label: 'Case Studies' },
                { id: 'samples' as PageId, label: 'Sales Playbooks' },
                { id: 'contact' as PageId, label: 'Contact' },
                { id: 'privacy' as PageId, label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[13px] text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">Direct channels</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-[13px] text-slate-400 hover:text-amber-400 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-[13px] text-slate-400 hover:text-amber-400 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[13px] text-slate-400 hover:text-amber-400 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  linkedin.com/in/fjpontino
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[13px] text-slate-400 hover:text-amber-400 transition-colors">
                  <FileText className="w-3.5 h-3.5" />
                  Verified resume (Google Drive)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11.5px] text-slate-600">
            © {year} Flynn James Q. Pontino. All rights reserved.
          </p>
          <p className="text-[11.5px] text-slate-600">
            Built for B2B teams across the US · UK · ANZ · CA · SG
          </p>
        </div>
      </div>
    </footer>
  );
};