import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SITE = 'https://flynnjames.com';
const DEFAULT_OG = `${SITE}/og/flynn-james-b2b-sdr.jpg`;

function setMeta(selector: string, attr: string, value: string, create = false) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el && create) {
    const isLink = selector.startsWith('link');
    el = document.createElement(isLink ? 'link' : 'meta');
    if (selector.includes('name=')) {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) (el as HTMLMetaElement).name = name;
    }
    if (selector.includes('property=')) {
      const prop = selector.match(/property="([^"]+)"/)?.[1];
      if (prop) (el as HTMLMetaElement).setAttribute('property', prop);
    }
    if (selector.includes('rel=')) {
      const rel = selector.match(/rel="([^"]+)"/)?.[1];
      if (rel) (el as HTMLLinkElement).rel = rel;
    }
    document.head.appendChild(el);
  }
  if (el) {
    if (attr === 'href') (el as HTMLLinkElement).href = value;
    else el.setAttribute(attr, value);
  }
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    document.title = config.title;

    setMeta('meta[name="description"]', 'content', config.description, true);
    setMeta(
      'meta[name="robots"]',
      'content',
      config.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
      true,
    );
    setMeta(
      'link[rel="canonical"]',
      'href',
      config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`,
      true,
    );

    setMeta('meta[property="og:title"]', 'content', config.title, true);
    setMeta('meta[property="og:description"]', 'content', config.description, true);
    setMeta(
      'meta[property="og:url"]',
      'content',
      config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`,
      true,
    );
    setMeta('meta[property="og:type"]', 'content', config.ogType || 'website', true);
    setMeta('meta[property="og:image"]', 'content', config.ogImage || DEFAULT_OG, true);
    setMeta('meta[property="og:image:alt"]', 'content', `${config.title} — Flynn James B2B sales portfolio`, true);
    setMeta('meta[property="og:locale"]', 'content', 'en_US', true);

    setMeta('meta[name="twitter:title"]', 'content', config.title, true);
    setMeta('meta[name="twitter:description"]', 'content', config.description, true);
    setMeta('meta[name="twitter:image"]', 'content', config.ogImage || DEFAULT_OG, true);
    setMeta('meta[name="twitter:image:alt"]', 'content', `${config.title} — Flynn James B2B sales portfolio`, true);

    if (config.keywords) {
      setMeta('meta[name="keywords"]', 'content', config.keywords, true);
    }

    const existing = document.head.querySelectorAll('script[data-seo-jsonld]');
    existing.forEach((el) => el.remove());
    const schemas = config.jsonLd ? (Array.isArray(config.jsonLd) ? config.jsonLd : [config.jsonLd]) : [];
    schemas.push({
      '@context': 'https://schema.org',
      '@type': config.ogType === 'profile' ? 'ProfilePage' : 'WebPage',
      '@id': `${config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`}#webpage`,
      url: config.canonical.startsWith('http') ? config.canonical : `${SITE}${config.canonical}`,
      name: config.title,
      description: config.description,
      isPartOf: { '@id': `${SITE}/#website` },
      inLanguage: 'en-US'
    });
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [
    config.title,
    config.description,
    config.canonical,
    config.ogImage,
    config.ogType,
    config.noindex,
    config.keywords,
  ]);
}

export const SEO_CONFIGS = {
  home: {
    title: 'Flynn James — B2B Appointment Setting & Cold Calling Specialist',
    description:
      'Senior B2B SDR with 11+ years of outbound experience. $1.8M+ pipeline sourced and 30+ qualified meetings booked monthly for SaaS, agencies, and IT firms.',
    canonical: '/',
    keywords:
      'B2B appointment setting, cold calling specialist, SDR, lead generation, outbound sales, B2B sales development',
  },
  about: {
    title: 'About Flynn James — 11+ Years in B2B Outbound Sales',
    description:
      'Meet Flynn James, a Senior B2B SDR and Junior Sales Team Lead with 11+ years of cold calling, appointment setting, and SDR coaching experience.',
    canonical: '/about',
    keywords: 'about Flynn James, B2B sales specialist, SDR background, outbound sales expert',
  },
  services: {
    title: 'B2B Sales Services — Appointment Setting & Cold Calling',
    description:
      'Six focused B2B outbound services: appointment setting, high-volume cold calling, lead generation, SDR coaching, LinkedIn outreach, and CRM pipeline management.',
    canonical: '/services',
    keywords:
      'B2B appointment setting services, cold calling services, lead generation services, SDR services, outbound sales services',
  },
  experience: {
    title: 'Career Timeline — 11+ Years of B2B Sales Development',
    description:
      'Flynn James career timeline: 11+ years of outbound sales across US, UK, ANZ, and Singapore markets. Consistent 120–150% quota attainment.',
    canonical: '/experience',
    keywords: 'B2B sales career, SDR experience, appointment setting background, outbound sales history',
  },
  caseStudies: {
    title: 'B2B Sales Case Studies — $1.8M+ Pipeline Sourced',
    description:
      'Detailed case studies of outbound campaigns: $1.8M pipeline sourced for a UK agency, 22% demo conversion for enterprise SaaS, and Level 4 ramp in 3 weeks.',
    canonical: '/case-studies',
    keywords:
      'B2B sales case studies, appointment setting results, cold calling case studies, outbound pipeline results',
  },
  samples: {
    title: 'Sales Playbooks & Cold Call Scripts — Flynn James',
    description:
      'Free sales playbooks: cold call scripts, 7-touch multi-channel cadences, BANT qualification scorecards, and AE handoff templates used to source $1.8M+ pipeline.',
    canonical: '/samples',
    keywords: 'cold call scripts, sales playbook, B2B cadence template, BANT qualification, SDR scripts',
  },
  contact: {
    title: 'Contact Flynn James — Book a B2B Outbound Strategy Call',
    description:
      'Get in touch with Flynn James for B2B appointment setting, cold calling, or SDR coaching. Free 20-minute pipeline audit. Response within 24 hours.',
    canonical: '/contact',
    keywords: 'hire B2B SDR, book appointment setter, contact sales specialist, hire cold caller',
  },
};