import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { CORE_SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { Button } from '../components/Button';
import { useSEO } from '../hooks/useSEO';

interface ServicesPageProps {
  onSelectService: (s: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenContact }) => {
  const [active, setActive] = useState<string>(CORE_SERVICES[0].id);
  const activeService = CORE_SERVICES.find((s) => s.id === active) || CORE_SERVICES[0];

  useSEO({
    title: 'B2B Sales Services — Appointment Setting, Cold Calling & Lead Gen',
    description:
      'Explore Flynn James outbound services: B2B appointment setting, high-volume cold calling, LinkedIn outreach, account list targeting, and SDR coaching.',
    canonical: '/services',
    keywords: 'B2B appointment setting, cold calling service, outbound lead generation, hire SDR, SDR coaching',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: activeService.title,
      description: activeService.description,
      provider: {
        '@type': 'Person',
        name: 'Flynn James Q. Pontino',
        url: 'https://flynnjames.com',
      },
      areaServed: ['US', 'GB', 'AU', 'CA', 'SG', 'NZ'],
    },
  });

  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Services"
        title="Focused B2B outbound services"
        titleAccent="built to scale."
        description="Six tactical engagements — appointment setting, cold calling, list targeting, SDR coaching, LinkedIn selling, and CRM architecture. Built for revenue."
        photoClass="bg-photo-services"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-4">
                Select Service
              </div>
              <nav className="space-y-1.5" aria-label="Services list">
                {CORE_SERVICES.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => setActive(service.id)}
                    aria-current={active === service.id ? 'true' : undefined}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all group flex items-start gap-3 cursor-pointer ${
                      active === service.id
                        ? 'bg-slate-800/90 text-white border border-amber-400/40 shadow-md'
                        : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono mt-0.5 font-semibold ${
                        active === service.id ? 'text-amber-400' : 'text-slate-600'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[14px] font-medium leading-snug">{service.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <motion.article
              key={activeService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-7 sm:p-10 shadow-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[11px] font-mono text-slate-200 uppercase tracking-wider font-semibold">
                  {activeService.badge}
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] font-bold text-white leading-tight tracking-tight">
                {activeService.title}
              </h2>
              <p className="mt-2 text-[16px] text-amber-400 font-serif italic">
                {activeService.tagline}
              </p>

              <p className="mt-6 text-[15px] text-slate-200 leading-[1.8]">{activeService.description}</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800/70 rounded-xl overflow-hidden border border-slate-800/70">
                <div className="bg-[#0b0f19] p-5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
                    Performance Benchmark
                  </div>
                  <div className="text-[15px] text-amber-400 font-bold">{activeService.metrics}</div>
                </div>
                <div className="bg-[#0b0f19] p-5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
                    Standard Deliverable
                  </div>
                  <div className="text-[14px] text-slate-200 font-medium">{activeService.deliverableSummary}</div>
                </div>
              </div>

              <div className="mt-9">
                <h3 className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold mb-4">
                  Included Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {activeService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-slate-300 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 pt-7 border-t border-slate-800">
                <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-4">
                  Tech Stack Utilized
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.toolsUsed.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[12px] font-medium bg-slate-800/70 border border-slate-700/70 text-slate-300 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-9 pt-7 border-t border-slate-800 flex flex-wrap gap-3.5">
                <Button variant="primary" onClick={() => onOpenContact(activeService.title)} className="shadow-lg shadow-amber-400/20">
                  Request Service Proposal
                </Button>
                <Button variant="secondary" onClick={() => onSelectService(activeService)} withArrow className="group">
                  Full Deliverables
                </Button>
              </div>
            </motion.article>
          </div>
        </div>
      </Section>
    </>
  );
};