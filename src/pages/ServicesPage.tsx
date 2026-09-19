import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { CORE_SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { Button } from '../components/Button';

interface ServicesPageProps {
  onSelectService: (s: ServiceItem) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenContact }) => {
  const [active, setActive] = useState<string>(CORE_SERVICES[0].id);
  const activeService = CORE_SERVICES.find((s) => s.id === active) || CORE_SERVICES[0];

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: activeService.title,
      description: activeService.description,
      provider: {
        '@type': 'Person',
        name: 'Flynn James Q. Pontino',
        url: 'https://flynnjames.com',
      },
      areaServed: ['US', 'GB', 'AU', 'CA', 'SG'],
      serviceType: activeService.title,
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [activeService]);

  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Services"
        title="B2B sales services built"
        titleAccent="to fill your pipeline."
        description="Six focused outbound engagements — appointment setting, cold calling, lead generation, SDR coaching, LinkedIn outreach, and CRM pipeline management. Each designed to produce qualified meetings, not vanity activity metrics."
        photoClass="bg-photo-services"
      />

      <Section>
        <div className="max-w-3xl mb-14">
          <SectionHeading
            index="03.0"
            eyebrow="Overview"
            title="Six outbound services for"
            titleAccent="B2B sales teams."
          />
          <div className="mt-6 space-y-5 text-[15.5px] text-slate-200 leading-[1.85]">
            <p>
              Flynn James offers six specialised B2B outbound services designed for SaaS, marketing agencies, IT firms,
              and professional services companies. Each engagement is scoped to produce qualified pipeline — not vanity
              activity metrics — and every service can run as a standalone project or as part of a full end-to-end
              outbound motion.
            </p>
            <p>
              Every campaign is executed across phone, email, and LinkedIn, with strict BANT qualification applied before
              any meeting hits an Account Executive's calendar. Flynn supports clients across the United States, United
              Kingdom, Australia, New Zealand, Canada, and Singapore.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-4 font-semibold">
                Select an outbound service
              </div>
              <nav className="space-y-1.5" aria-label="Services list">
                {CORE_SERVICES.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => setActive(service.id)}
                    aria-current={active === service.id ? 'true' : undefined}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all group flex items-start gap-3.5 cursor-pointer ${
                      active === service.id
                        ? 'bg-slate-800/90 text-white border border-amber-400/40 shadow-lg'
                        : 'text-slate-300 hover:bg-slate-900/80 hover:text-white border border-transparent'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono mt-0.5 font-bold ${
                        active === service.id ? 'text-amber-400' : 'text-slate-500'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[14px] font-semibold leading-snug">{service.title}</span>
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
              transition={{ duration: 0.4 }}
              className="bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-xl p-7 sm:p-10 shadow-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[11px] font-mono text-slate-200 uppercase tracking-wider font-medium">
                  {activeService.badge}
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-white leading-tight tracking-tight">
                {activeService.title}
              </h2>
              <p className="mt-3 text-[16px] text-amber-400 font-medium font-serif italic">
                {activeService.tagline}
              </p>

              <p className="mt-7 text-[15px] text-slate-200 leading-[1.85]">{activeService.description}</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800/80 rounded-xl overflow-hidden border border-slate-800/80 shadow-md">
                <div className="bg-[#0b0f19] p-5">
                  <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-medium">
                    Benchmark KPI
                  </div>
                  <div className="text-[15px] text-amber-400 font-bold">{activeService.metrics}</div>
                </div>
                <div className="bg-[#0b0f19] p-5">
                  <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-medium">
                    Typical output
                  </div>
                  <div className="text-[14px] text-slate-100 font-medium">{activeService.deliverableSummary}</div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-5 font-semibold">
                  Included scope & deliverables
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {activeService.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[14px] text-slate-200 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/80">
                <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-4 font-medium">
                  Tools & platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.toolsUsed.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[12px] font-medium bg-slate-800/80 border border-slate-700/70 text-slate-200 rounded-md shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap gap-3.5">
                <Button variant="primary" onClick={() => onOpenContact(activeService.title)} className="shadow-lg shadow-amber-400/10">
                  Request a proposal
                </Button>
                <Button variant="secondary" onClick={() => onSelectService(activeService)} withArrow className="group">
                  Full deliverables breakdown
                </Button>
              </div>
            </motion.article>
          </div>
        </div>
      </Section>

      <Section bordered className="section-photo bg-photo-callcenter">
        <SectionHeading
          index="03.1"
          eyebrow="Service detail"
          title="What each engagement"
          titleAccent="actually delivers."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-xl p-7 shadow-lg"
            >
              <h3 className="text-[18px] font-bold text-white mb-2 leading-snug">{service.title}</h3>
              <p className="text-[13.5px] text-amber-400/90 font-serif italic mb-3">{service.tagline}</p>
              <p className="text-[14px] text-slate-200 leading-[1.8]">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};