/**
 * Canonical SEO Route Definitions for b2blinkedin.marketing
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

/**
 * Parses the current window location into { page, lang, blogSlug }
 * Gracefully handles backwards compatibility with hash navigation (#outreach) and query params (?lang=en)
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
    return { page: hash, lang, blogSlug: null, isLegacy: true };
  }

  // Clean trailing slash for regex matching
  const clean = pathname.replace(/\/+$/, '') || '/';

  // Blog detail page: /blog/:slug or /en/blog/:slug
  const blogDetailMatch = clean.match(/^(?:\/en)?\/blog\/([^/]+)$/);
  if (blogDetailMatch && blogDetailMatch[1]) {
    return { page: 'blog-detail', lang, blogSlug: blogDetailMatch[1], isLegacy: false };
  }

  // Exact path matching
  if (clean === '/' || clean === '/en') return { page: 'home', lang, blogSlug: null, isLegacy: false };
  if (clean === '/linkedin-outreach' || clean === '/en/linkedin-outreach' || clean === '/outreach') return { page: 'outreach', lang, blogSlug: null, isLegacy: false };
  if (clean === '/linkedin-reklam-yonetimi' || clean === '/en/linkedin-ads' || clean === '/ads') return { page: 'ads', lang, blogSlug: null, isLegacy: false };
  if (clean === '/linkedin-profil-optimizasyonu' || clean === '/en/linkedin-profile-optimization' || clean === '/profile') return { page: 'profile', lang, blogSlug: null, isLegacy: false };
  if (clean === '/linkedin-sirket-sayfasi-yonetimi' || clean === '/en/linkedin-company-page' || clean === '/company') return { page: 'company', lang, blogSlug: null, isLegacy: false };
  if (clean === '/linkedin-icerik-yonetimi' || clean === '/en/linkedin-content-management' || clean === '/content') return { page: 'content', lang, blogSlug: null, isLegacy: false };
  if (clean === '/blog' || clean === '/en/blog') return { page: 'blog', lang, blogSlug: null, isLegacy: false };
  if (clean === '/hakkimizda' || clean === '/en/about' || clean === '/about') return { page: 'about', lang, blogSlug: null, isLegacy: false };
  if (clean === '/iletisim' || clean === '/en/contact' || clean === '/contact') return { page: 'contact', lang, blogSlug: null, isLegacy: false };
  if (clean === '/hedef-kitle-personalar' || clean === '/en/personas' || clean === '/persona') return { page: 'persona', lang, blogSlug: null, isLegacy: false };
  if (clean === '/b2b-karsilastirma-matrisi' || clean === '/en/comparisons' || clean === '/comparison') return { page: 'comparison', lang, blogSlug: null, isLegacy: false };

  return { page: 'home', lang, blogSlug: null, isLegacy: false };
}

/**
 * Returns canonical URL for a given page and language
 */
export function getRouteUrl(pageId, lang = 'tr', blogSlug = null) {
  if (pageId === 'blog-detail' && blogSlug) {
    return lang === 'en' ? `/en/blog/${blogSlug}/` : `/blog/${blogSlug}/`;
  }
  return ROUTES[lang]?.[pageId] || ROUTES[lang]?.home || '/';
}

/**
 * Returns full absolute canonical URL
 */
export function getAbsoluteCanonicalUrl(pageId, lang = 'tr', blogSlug = null) {
  const relative = getRouteUrl(pageId, lang, blogSlug);
  return `${CANONICAL_HOST}${relative}`;
}
