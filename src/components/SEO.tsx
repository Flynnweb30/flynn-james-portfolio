import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'profile' | 'article';
  keywords?: string[];
  noindex?: boolean;
  jsonLd?: object | object[];
}

const SITE_URL = 'https://flynnjames.com';
const DEFAULT_OG = 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG,
  ogType = 'website',
  keywords,
  noindex,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('Flynn') ? title : `${title} | Flynn James`;
    document.title = fullTitle;

    setMeta('name', 'title', fullTitle);
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');
    if (keywords?.length) setMeta('name', 'keywords', keywords.join(', '));

    const canonicalUrl = canonical
      ? (canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`)
      : SITE_URL + '/';
    setLink('canonical', canonicalUrl);

    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:alt', fullTitle);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    const existing = document.head.querySelectorAll('script[data-page-jsonld="true"]');
    existing.forEach((n) => n.remove());

    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.setAttribute('data-page-jsonld', 'true');
        s.textContent = JSON.stringify(block);
        document.head.appendChild(s);
      });
    }
    return () => {
      const cleanup = document.head.querySelectorAll('script[data-page-jsonld="true"]');
      cleanup.forEach((n) => n.remove());
    };
  }, [title, description, canonical, ogImage, ogType, keywords, noindex, jsonLd]);

  return null;
}