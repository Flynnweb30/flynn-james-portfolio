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
    description: 'Senior B2B SDR with 11+ years generating $1.8M+ pipeline and booking 30+ qualified meetings monthly. Cold calling, appointment setting, and outbound strategy for US, UK, ANZ, and SG markets.',
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG,
    ogType: 'website',
    keywords: ['B2B SDR', 'appointment setting', 'cold calling specialist', 'outbound sales', 'sales development representative'],
  },
  about: {
    title: 'About Flynn James — 11+ Years in B2B Outbound Sales',
    description: 'Eleven years of outbound sales experience across SaaS, IT, events, and marketing. Learn how Flynn builds predictable pipelines for B2B teams worldwide.',
    canonical: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG,
    ogType: 'profile',
  },
  services: {
    title: 'B2B Sales Services — Appointment Setting & Cold Calling',
    description: 'Six focused outbound services: appointment setting, cold calling, lead generation, SDR support, LinkedIn outreach, and pipeline management. Custom engagements for B2B teams.',
    canonical: `${SITE_URL}/services`,
    ogImage: DEFAULT_OG,
    ogType: 'website',
  },
  experience: {
    title: 'Career Timeline — 11+ Years of B2B Sales Development',
    description: 'Eleven years of quota attainment across Regen Digital US, Seek Marketing, Averps, Public Sector Network, and Pacific Outsource. Full career breakdown.',
    canonical: `${SITE_URL}/experience`,
    ogImage: DEFAULT_OG,
  },
  'case-studies': {
    title: 'B2B Sales Case Studies — $1.8M+ Pipeline Sourced',
    description: 'Detailed B2B sales case studies showing $1.8M+ pipeline generated, 120% quota attainment, and 30+ qualified meetings booked monthly. Real outbound results.',
    canonical: `${SITE_URL}/case-studies`,
    ogImage: DEFAULT_OG,
  },
  samples: {
    title: 'Sales Playbooks & Cold Call Scripts — Flynn James',
    description: 'The exact cold call scripts, 7-touch cadences, BANT scorecards, and AE handoff templates used to generate $1.8M+ pipeline. Free to download.',
    canonical: `${SITE_URL}/samples`,
    ogImage: DEFAULT_OG,
  },
  contact: {
    title: 'Contact Flynn James — Book a B2B Outbound Strategy Call',
    description: 'Book a free 20-minute pipeline audit. Direct email, phone, and LinkedIn contact for B2B SDR engagements. Response guaranteed within 24 hours.',
    canonical: `${SITE_URL}/contact`,
    ogImage: DEFAULT_OG,
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