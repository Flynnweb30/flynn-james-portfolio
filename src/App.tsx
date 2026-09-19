import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { SamplesPage } from './pages/SamplesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ServiceModal } from './components/ServiceModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WorkSampleModal } from './components/WorkSampleModal';
import { PageId, ServiceItem, CaseStudy, WorkSample } from './types';
import { CheckCircle2, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [contactServicePrefill, setContactServicePrefill] = useState<string | undefined>(undefined);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleOpenContact = (serviceName?: string) => {
    setContactServicePrefill(serviceName);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'samples', label: 'Playbooks' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-amber-400/30 selection:text-amber-100">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-500/90 text-white shadow-xl backdrop-blur-sm border border-emerald-400/40 text-[13px] font-medium animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b0f19]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow-md">
              FJ
            </div>
            <div>
              <div className="text-[14px] font-bold text-white group-hover:text-amber-400 transition-colors leading-none">
                Flynn James
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-0.5">B2B Outbound Specialist</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-slate-800/80 text-amber-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleOpenContact()}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-[12.5px] font-bold transition-all shadow-md cursor-pointer"
            >
              Book Audit
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#0f172a] px-5 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] ${
                  currentPage === item.id ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                handleOpenContact();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-2.5 text-center bg-amber-400 text-slate-950 text-[13px] font-bold rounded-lg"
            >
              Book 20-Min Strategy Call
            </button>
          </div>
        )}
      </header>

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenContact={handleOpenContact}
            onSelectCaseStudy={setSelectedCaseStudy}
            onSuccessToast={showToast}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={setCurrentPage} onOpenContact={handleOpenContact} />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={setSelectedService}
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'experience' && (
          <ExperiencePage onNavigate={setCurrentPage} onOpenContact={handleOpenContact} />
        )}
        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            onSelectCaseStudy={setSelectedCaseStudy}
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'samples' && (
          <SamplesPage
            onSelectSample={setSelectedSample}
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            initialService={contactServicePrefill}
            onSuccessToast={showToast}
          />
        )}
        {currentPage === 'privacy' && <PrivacyPage />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-[14px] font-bold text-white">Flynn James Q. Pontino</div>
            <div className="text-[12px] text-slate-400 mt-0.5">Senior B2B SDR & Appointment Setter</div>
          </div>

          <div className="flex items-center gap-6 text-[12.5px] text-slate-400">
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </button>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              LinkedIn
            </a>
            <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Resume
            </a>
          </div>

          <div className="text-[11.5px] font-mono text-slate-400">
            © {new Date().getFullYear()} Flynn James. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onOpenContact={handleOpenContact}
      />
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={handleOpenContact}
      />
      <WorkSampleModal
        sample={selectedSample}
        isOpen={Boolean(selectedSample)}
        onClose={() => setSelectedSample(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
};

export default App;