/**
 * Canonical SEO Route Definitions for b2blinkedin.marketing
 * Comprehensive routing for Core Services, Commercial Pages, Sectors, Roles, and Comparisons
 */
export const CANONICAL_HOST = 'https://www.b2blinkedin.marketing';

export const ROUTES = {
  tr: {
    home: '/',
    outreach: '/linkedin-outreach/',
    ads: '/linkedin-reklam-yonetimi/',
    profile: '/linkedin-profil-optimizasyonu/',
    company: '/linkedin-sirket-sayfasi-yonetimi/',
    content: '/linkedin-icerik-yonetimi/',
    blog: '/blog/',
    about: '/hakkimizda/',
    contact: '/iletisim/',
    persona: '/hedef-kitle-personalar/',
    comparison: '/b2b-karsilastirma-matrisi/'
  },
  en: {
    home: '/en/',
    outreach: '/en/linkedin-outreach/',
    ads: '/en/linkedin-ads/',
    profile: '/en/linkedin-profile-optimization/',
    company: '/en/linkedin-company-page/',
    content: '/en/linkedin-content-management/',
    blog: '/en/blog/',
    about: '/en/about/',
    contact: '/en/contact/',
    persona: '/en/personas/',
    comparison: '/en/comparisons/'
  }
};

export const COMMERCIAL_SLUGS = {
  'linkedin-musteri-bulma': {
    tr: '/linkedin-musteri-bulma/',
    en: '/en/linkedin-lead-generation-agency/'
  },
  'b2b-lead-generation': {
    tr: '/b2b-lead-generation/',
    en: '/en/b2b-lead-generation-services/'
  },
  'b2b-randevu-ayarlama': {
    tr: '/b2b-randevu-ayarlama/',
    en: '/en/b2b-appointment-setting/'
  },
  'linkedin-ile-ihracat-musterisi-bulma': {
    tr: '/linkedin-ile-ihracat-musterisi-bulma/',
    en: '/en/linkedin-lead-generation-for-exporters/'
  },
  'ai-destekli-linkedin-outreach': {
    tr: '/ai-destekli-linkedin-outreach/',
    en: '/en/ai-powered-linkedin-outreach/'
  },
  'b2b-hedef-kitle-arastirmasi': {
    tr: '/b2b-hedef-kitle-arastirmasi/',
    en: '/en/b2b-audience-research-targeting/'
  }
};

export const ROLE_SLUGS = {
  'satinalma-mudurlerine-ulasma': {
    tr: '/satinalma-mudurlerine-ulasma/',
    en: '/en/reach-procurement-managers-on-linkedin/'
  },
  'ceolara-ulasma': {
    tr: '/ceolara-ulasma/',
    en: '/en/reach-ceos-on-linkedin/'
  }
};

export const SECTOR_SLUGS = {
  'uretim-firmalari-linkedin-pazarlama': {
    tr: '/sektorler/uretim-firmalari-linkedin-pazarlama/',
    en: '/en/industries/linkedin-lead-generation-for-manufacturers/'
  },
  'saas-linkedin-lead-generation': {
    tr: '/sektorler/saas-linkedin-lead-generation/',
    en: '/en/industries/linkedin-lead-generation-for-saas/'
  },
  'ihracat-firmalari-linkedin-musteri-bulma': {
    tr: '/sektorler/ihracat-firmalari-linkedin-musteri-bulma/',
    en: '/en/industries/linkedin-lead-generation-for-exporters/'
  }
};

export const COMPARISON_SLUGS = {
  'linkedin-ads-vs-google-ads': {
    tr: '/karsilastirma/linkedin-ads-vs-google-ads/',
    en: '/en/comparisons/linkedin-ads-vs-google-ads/'
  },
  'linkedin-outreach-vs-cold-email': {
    tr: '/karsilastirma/linkedin-outreach-vs-cold-email/',
    en: '/en/comparisons/linkedin-outreach-vs-cold-email/'
  }
};

/**
 * Parses the current window location into { page, lang, blogSlug, subSlug, isLegacy }
 */
export function parseCurrentRoute() {
  const pathname = window.location.pathname;
  const hash = window.location.hash.replace('#', '');
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');

  const isEn = pathname.startsWith('/en') || queryLang === 'en';
  const lang = isEn ? 'en' : 'tr';

  // Legacy hash fallback
  if (hash && ['outreach', 'ads', 'profile', 'company', 'content', 'blog', 'about', 'contact', 'persona', 'comparison'].includes(hash)) {
    return { page: hash, lang, blogSlug: null, subSlug: null, isLegacy: true };
  }

  // Clean trailing slash for regex matching
  const clean = pathname.replace(/\/+$/, '') || '/';

  // 1. Blog detail page: /blog/:slug or /en/blog/:slug
  const blogDetailMatch = clean.match(/^(?:\/en)?\/blog\/([^/]+)$/);
  if (blogDetailMatch && blogDetailMatch[1]) {
    return { page: 'blog-detail', lang, blogSlug: blogDetailMatch[1], subSlug: null, isLegacy: false };
  }

  // 2. Commercial Pages matching
  for (const [key, mapping] of Object.entries(COMMERCIAL_SLUGS)) {
    const trPath = mapping.tr.replace(/\/+$/, '');
    const enPath = mapping.en.replace(/\/+$/, '');
    if (clean === trPath || clean === enPath) {
      return { page: 'commercial-service', lang, blogSlug: null, subSlug: key, isLegacy: false };
    }
  }

  // 3. Role Pages matching
  for (const [key, mapping] of Object.entries(ROLE_SLUGS)) {
    const trPath = mapping.tr.replace(/\/+$/, '');
    const enPath = mapping.en.replace(/\/+$/, '');
    if (clean === trPath || clean === enPath) {
      return { page: 'role', lang, blogSlug: null, subSlug: key, isLegacy: false };
    }
  }

  // 4. Sector Pages matching
  for (const [key, mapping] of Object.entries(SECTOR_SLUGS)) {
    const trPath = mapping.tr.replace(/\/+$/, '');
    const enPath = mapping.en.replace(/\/+$/, '');
    if (clean === trPath || clean === enPath) {
      return { page: 'sector', lang, blogSlug: null, subSlug: key, isLegacy: false };
    }
  }

  // 5. Comparison Pages matching
  for (const [key, mapping] of Object.entries(COMPARISON_SLUGS)) {
    const trPath = mapping.tr.replace(/\/+$/, '');
    const enPath = mapping.en.replace(/\/+$/, '');
    if (clean === trPath || clean === enPath) {
      return { page: 'comparison', lang, blogSlug: null, subSlug: key, isLegacy: false };
    }
  }

  // 6. Core Pages matching
  if (clean === '/' || clean === '/en') return { page: 'home', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/linkedin-outreach' || clean === '/en/linkedin-outreach' || clean === '/outreach') return { page: 'outreach', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/linkedin-reklam-yonetimi' || clean === '/en/linkedin-ads' || clean === '/ads') return { page: 'ads', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/linkedin-profil-optimizasyonu' || clean === '/en/linkedin-profile-optimization' || clean === '/profile') return { page: 'profile', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/linkedin-sirket-sayfasi-yonetimi' || clean === '/en/linkedin-company-page' || clean === '/company') return { page: 'company', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/linkedin-icerik-yonetimi' || clean === '/en/linkedin-content-management' || clean === '/content') return { page: 'content', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/blog' || clean === '/en/blog') return { page: 'blog', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/hakkimizda' || clean === '/en/about' || clean === '/about') return { page: 'about', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/iletisim' || clean === '/en/contact' || clean === '/contact') return { page: 'contact', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/hedef-kitle-personalar' || clean === '/en/personas' || clean === '/persona') return { page: 'persona', lang, blogSlug: null, subSlug: null, isLegacy: false };
  if (clean === '/b2b-karsilastirma-matrisi' || clean === '/en/comparisons' || clean === '/comparison') return { page: 'comparison', lang, blogSlug: null, subSlug: 'linkedin-ads-vs-google-ads', isLegacy: false };

  return { page: 'home', lang, blogSlug: null, subSlug: null, isLegacy: false };
}

/**
 * Returns canonical URL for a given page, language, and subSlug/blogSlug
 */
export function getRouteUrl(pageId, lang = 'tr', subSlug = null) {
  if (pageId === 'blog-detail' && subSlug) {
    return lang === 'en' ? `/en/blog/${subSlug}/` : `/blog/${subSlug}/`;
  }

  if (pageId === 'commercial-service' && subSlug && COMMERCIAL_SLUGS[subSlug]) {
    return COMMERCIAL_SLUGS[subSlug][lang];
  }

  if (pageId === 'role' && subSlug && ROLE_SLUGS[subSlug]) {
    return ROLE_SLUGS[subSlug][lang];
  }

  if (pageId === 'sector' && subSlug && SECTOR_SLUGS[subSlug]) {
    return SECTOR_SLUGS[subSlug][lang];
  }

  if (pageId === 'comparison') {
    const compKey = subSlug || 'linkedin-ads-vs-google-ads';
    if (COMPARISON_SLUGS[compKey]) {
      return COMPARISON_SLUGS[compKey][lang];
    }
    return ROUTES[lang]?.comparison || '/';
  }

  // Also support direct slug passed as pageId
  if (COMMERCIAL_SLUGS[pageId]) return COMMERCIAL_SLUGS[pageId][lang];
  if (ROLE_SLUGS[pageId]) return ROLE_SLUGS[pageId][lang];
  if (SECTOR_SLUGS[pageId]) return SECTOR_SLUGS[pageId][lang];
  if (COMPARISON_SLUGS[pageId]) return COMPARISON_SLUGS[pageId][lang];

  return ROUTES[lang]?.[pageId] || ROUTES[lang]?.home || '/';
}

/**
 * Returns full absolute canonical URL
 */
export function getAbsoluteCanonicalUrl(pageId, lang = 'tr', subSlug = null) {
  const relative = getRouteUrl(pageId, lang, subSlug);
  return `${CANONICAL_HOST}${relative}`;
}
