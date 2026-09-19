import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WorkSampleModal } from './components/WorkSampleModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Toast } from './components/Toast';
import { Breadcrumbs } from './components/Breadcrumbs';
import { CaseStudy, WorkSample, ServiceItem, PageId } from './types';
import { useSEO, SEO_CONFIGS } from './hooks/useSEO';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { SamplesPage } from './pages/SamplesPage';
import { ContactPage } from './pages/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: 0.45,
};

const VALID_PAGES: PageId[] = ['home', 'about', 'services', 'experience', 'case-studies', 'samples', 'contact'];

const PAGE_TO_SEO_KEY: Record<PageId, keyof typeof SEO_CONFIGS> = {
  home: 'home',
  about: 'about',
  services: 'services',
  experience: 'experience',
  'case-studies': 'caseStudies',
  samples: 'samples',
  contact: 'contact',
};

const BREADCRUMB_LABELS: Record<PageId, string> = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  experience: 'Experience',
  'case-studies': 'Case Studies',
  samples: 'Playbooks',
  contact: 'Contact',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [contactServicePreselect, setContactServicePreselect] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') || 'home';
      if (VALID_PAGES.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((page: PageId) => {
    window.location.hash = `/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToContact = useCallback(
    (serviceName?: string) => {
      if (serviceName) setContactServicePreselect(serviceName);
      navigate('contact');
    },
    [navigate],
  );

  const seo = SEO_CONFIGS[PAGE_TO_SEO_KEY[currentPage]];
  const pageBreadcrumb =
    currentPage !== 'home'
      ? [
          { name: 'Home', url: '/' },
          { name: BREADCRUMB_LABELS[currentPage], url: `/${currentPage}` },
        ]
      : undefined;

  const breadcrumbSchema = pageBreadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: pageBreadcrumb.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `https://flynnjames.com${b.url}`,
        })),
      }
    : undefined;

  useSEO({
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    keywords: seo.keywords,
    ogType: currentPage === 'home' ? 'website' : 'article',
    jsonLd: breadcrumbSchema,
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigate}
            onOpenContact={navigateToContact}
            onSelectCaseStudy={setSelectedCaseStudy}
            onSelectSample={setSelectedSample}
            onSuccessToast={setToastMessage}
          />
        );
      case 'about':
        return <AboutPage onNavigate={navigate} onOpenContact={navigateToContact} />;
      case 'services':
        return <ServicesPage onSelectService={setSelectedService} onOpenContact={navigateToContact} />;
      case 'experience':
        return <ExperiencePage onNavigate={navigate} onOpenContact={navigateToContact} />;
      case 'case-studies':
        return <CaseStudiesPage onSelectCaseStudy={setSelectedCaseStudy} onOpenContact={navigateToContact} />;
      case 'samples':
        return <SamplesPage onSelectSample={setSelectedSample} onOpenContact={navigateToContact} />;
      case 'contact':
        return <ContactPage initialService={contactServicePreselect} onSuccessToast={setToastMessage} />;
      default:
        return (
          <HomePage
            onNavigate={navigate}
            onOpenContact={navigateToContact}
            onSelectCaseStudy={setSelectedCaseStudy}
            onSelectSample={setSelectedSample}
            onSuccessToast={setToastMessage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans antialiased">
      <Navbar currentPage={currentPage} onNavigate={navigate} onOpenContact={() => navigateToContact()} />

      <Breadcrumbs items={pageBreadcrumb} onNavigate={navigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={() => {
          setSelectedCaseStudy(null);
          navigateToContact();
        }}
      />

      <WorkSampleModal
        sample={selectedSample}
        onClose={() => setSelectedSample(null)}
        onOpenContact={() => {
          setSelectedSample(null);
          navigateToContact();
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={(serviceName) => {
          setSelectedService(null);
          navigateToContact(serviceName);
        }}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}