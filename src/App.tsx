import React, { useEffect, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { useScrollReveal } from './hooks/useScrollReveal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { SamplesPage } from './pages/SamplesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CaseStudy, ServiceItem, WorkSample, PageId } from './types';
import { SEO_DATA } from './data/seoData';

const ROUTE_MAP: Record<string, PageId> = {
  '': 'home',
  '#': 'home',
  '#home': 'home',
  '#about': 'about',
  '#services': 'services',
  '#experience': 'experience',
  '#case-studies': 'case-studies',
  '#samples': 'samples',
  '#contact': 'contact',
  '#privacy': 'privacy',
};

export default function App() {
  useScrollReveal();

  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window === 'undefined') return 'home';
    return ROUTE_MAP[window.location.hash] || 'home';
  });
  const [isCaseModalOpen, setCaseModalOpen] = useState(false);
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [isSampleModalOpen, setSampleModalOpen] = useState(false);
  const [activeSample, setActiveSample] = useState<WorkSample | null>(null);
  const [contactPrefill, setContactPrefill] = useState<string | undefined>(undefined);
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null);

  // Sync hash -> state
  useEffect(() => {
    const onHash = () => {
      const id = ROUTE_MAP[window.location.hash] || 'home';
      setCurrentPage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((page: PageId) => {
    const hash = page === 'home' ? '#home' : `#${page}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToast({ id, message });
    setTimeout(() => setToast((t) => (t?.id === id ? null : t)), 3400);
  }, []);

  const openContact = useCallback((service?: string) => {
    setContactPrefill(service);
    navigate('contact');
  }, [navigate]);

  const pageSeo = SEO_DATA[currentPage] || SEO_DATA.home;

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 relative">
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        canonical={pageSeo.canonical}
        ogImage={pageSeo.ogImage}
        ogType={(pageSeo.ogType as any) || 'website'}
        keywords={pageSeo.keywords}
        noindex={pageSeo.noindex}
      />

      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main id="main-content" role="main" className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <HomePage
              key="home"
              onNavigate={navigate}
              onOpenContact={openContact}
              onSelectCaseStudy={(cs) => { setActiveCase(cs); setCaseModalOpen(true); }}
              onSelectSample={(s) => { setActiveSample(s); setSampleModalOpen(true); }}
              onSuccessToast={showToast}
            />
          )}
          {currentPage === 'about' && (
            <AboutPage key="about" onNavigate={navigate} onOpenContact={openContact} />
          )}
          {currentPage === 'services' && (
            <ServicesPage
              key="services"
              onSelectService={(s) => { setActiveService(s); setServiceModalOpen(true); }}
              onOpenContact={openContact}
            />
          )}
          {currentPage === 'experience' && (
            <ExperiencePage key="experience" onNavigate={navigate} onOpenContact={openContact} />
          )}
          {currentPage === 'case-studies' && (
            <CaseStudiesPage
              key="case-studies"
              onSelectCaseStudy={(cs) => { setActiveCase(cs); setCaseModalOpen(true); }}
              onOpenContact={openContact}
            />
          )}
          {currentPage === 'samples' && (
            <SamplesPage
              key="samples"
              onSelectSample={(s) => { setActiveSample(s); setSampleModalOpen(true); }}
              onOpenContact={openContact}
            />
          )}
          {currentPage === 'contact' && (
            <ContactPage key="contact" initialService={contactPrefill} onSuccessToast={showToast} />
          )}
          {currentPage === 'privacy' && <PrivacyPage key="privacy" />}
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} onOpenContact={openContact} />

      {/* Toast */}
      <div aria-live="polite" aria-atomic="true" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
        <AnimatePresence>
          {toast && (
            <div
              key={toast.id}
              className="pointer-events-auto px-5 py-3 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-100 text-[13px] shadow-xl backdrop-blur-md"
            >
              {toast.message}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      {isCaseModalOpen && activeCase && (
        <CaseStudyModal caseStudy={activeCase} onClose={() => { setCaseModalOpen(false); setActiveCase(null); }} onOpenContact={openContact} />
      )}
      {/* Service Modal */}
      {isServiceModalOpen && activeService && (
        <ServiceModal service={activeService} onClose={() => { setServiceModalOpen(false); setActiveService(null); }} onOpenContact={openContact} />
      )}
      {/* Sample Modal */}
      {isSampleModalOpen && activeSample && (
        <SampleModal sample={activeSample} onClose={() => { setSampleModalOpen(false); setActiveSample(null); }} />
      )}
    </div>
  );
}

/* ============================================================
 * Modal wrappers (lazy — kept inline to avoid extra files)
 * ============================================================ */
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceModal } from './components/ServiceModal';
import { SampleModal } from './components/SampleModal';