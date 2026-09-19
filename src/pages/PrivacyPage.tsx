import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumbs, breadcrumbSchema } from '../components/Breadcrumbs';
import { Section } from '../components/Section';
import { useSEO } from '../hooks/useSEO';

export const PrivacyPage: React.FC = () => {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }];

  useSEO({
    title: 'Privacy Policy — Flynn James Portfolio',
    description: 'Privacy policy for Flynn James B2B sales portfolio website. Outlines data handling and communication practices.',
    canonical: '/privacy',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHeader
        index=""
        eyebrow="Privacy Policy"
        title="Privacy & Data Policy"
        description="Complete transparency regarding information submitted through this site."
        photoClass="bg-photo-about"
      />
      <Section>
        <article className="max-w-3xl space-y-8 text-[15px] text-slate-300 leading-[1.85]">
          <div>
            <h2 className="text-[22px] font-bold text-white mb-3">Overview</h2>
            <p>
              This website serves as the professional sales portfolio of Flynn James Q. Pontino. Information submitted via inquiries is kept strictly confidential and used solely for direct business communication.
            </p>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-3">Information Collected</h2>
            <p className="mb-2">When scheduling a session or submitting an audit inquiry, the following information is gathered:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-400">
              <li>Full Name</li>
              <li>Work Email Address</li>
              <li>Company Name</li>
              <li>Target Market & Outbound Requirements</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-white mb-3">Data Retention & Deletion</h2>
            <p>
              Your contact details are never rented, sold, or shared with third-party vendors. You may request full removal of your information at any time by emailing <a href="mailto:va.flynnjames@gmail.com" className="text-amber-400 font-medium hover:underline">va.flynnjames@gmail.com</a>.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
};