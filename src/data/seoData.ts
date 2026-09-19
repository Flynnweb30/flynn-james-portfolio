export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType?: string;
  keywords?: string[];
  noindex?: boolean;
}

const SITE_URL = 'https://flynnjames.com';
const DEFAULT_OG = `${SITE_URL}/og/flynn-james-b2b-sdr.jpg`;

export const SEO_DATA: Record<string, SEOMetadata> = {
  home: {
    title: 'Flynn James — B2B Appointment Setting & Cold Calling Specialist',
    description: 'Hire a senior B2B SDR with 11+ years booking 30+ qualified meetings/month. $1.8M+ pipeline for SaaS, agencies & IT firms across US, UK, ANZ & Singapore.',
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG,
    ogType: 'website',
    keywords: ['B2B SDR', 'appointment setting', 'cold calling specialist', 'outbound sales', 'sales development representative', 'hire SDR'],
  },
  about: {
    title: 'About Flynn James — Senior B2B SDR With 11+ Years on the Phones',
    description: 'Meet Flynn James, Senior B2B SDR with 11+ years in cold calling, appointment setting, and SDR coaching. $1.8M+ pipeline sourced across 5 global markets.',
    canonical: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG,
    ogType: 'profile',
    keywords: ['about Flynn James', 'B2B SDR profile', 'outbound sales specialist', 'appointment setter background'],
  },
  services: {
    title: 'B2B Sales Services — Appointment Setting, Cold Calling & SDR Coaching',
    description: 'Six focused outbound services: B2B appointment setting, cold calling, lead generation, SDR coaching, LinkedIn outreach, and CRM pipeline management.',
    canonical: `${SITE_URL}/services`,
    ogImage: DEFAULT_OG,
    ogType: 'website',
    keywords: ['B2B appointment setting services', 'cold calling services', 'SDR coaching', 'lead generation agency'],
  },
  experience: {
    title: 'Career Timeline — 11+ Years of B2B Sales Development Experience',
    description: 'Eleven years of quota attainment across Regen Digital US, Seek Marketing, Averps, Public Sector Network, and Pacific Outsource. Full career breakdown.',
    canonical: `${SITE_URL}/experience`,
    ogImage: DEFAULT_OG,
    keywords: ['B2B SDR experience', 'sales development resume', 'outbound sales career'],
  },
  'case-studies': {
    title: 'B2B Sales Case Studies — $1.8M+ Pipeline Sourced for Real Clients',
    description: 'Real B2B outbound campaigns: $1.8M pipeline for a UK agency, 22% demo conversion for enterprise SaaS, Top 5% ranking at Public Sector Network.',
    canonical: `${SITE_URL}/case-studies`,
    ogImage: DEFAULT_OG,
    keywords: ['B2B sales case studies', 'appointment setting results', 'outbound pipeline results'],
  },
  samples: {
    title: 'Free B2B Cold Call Scripts & Sales Playbooks — Flynn James',
    description: 'Download the exact cold call scripts, 7-touch cadences, and BANT scorecards used to generate $1.8M+ pipeline. Free to copy for your team.',
    canonical: `${SITE_URL}/samples`,
    ogImage: DEFAULT_OG,
    keywords: ['cold call scripts', 'B2B sales playbooks', 'appointment setting scripts', 'BANT scorecard'],
  },
  contact: {
    title: 'Contact Flynn James — Book a Free B2B Pipeline Audit',
    description: 'Hire a senior B2B SDR with 11+ years experience. Free 20-minute pipeline audit. Response within 24 hours. Email, phone, or LinkedIn.',
    canonical: `${SITE_URL}/contact`,
    ogImage: DEFAULT_OG,
    keywords: ['hire B2B SDR', 'book appointment setter', 'contact sales specialist', 'B2B pipeline audit'],
  },
  privacy: {
    title: 'Privacy Policy | Flynn James',
    description: 'How Flynn James Pontino handles data submitted through this portfolio site.',
    canonical: `${SITE_URL}/privacy`,
    ogImage: DEFAULT_OG,
    noindex: false,
  },
  '404': {
    title: 'Page Not Found | Flynn James',
    description: 'The page you were looking for could not be found.',
    canonical: `${SITE_URL}/404`,
    ogImage: DEFAULT_OG,
    noindex: true,
  },
};