import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { 
  parseCurrentRoute, 
  getRouteUrl, 
  getAbsoluteCanonicalUrl, 
  CANONICAL_HOST 
} from './utils/routes';
import { commercialPagesData } from './data/commercialPagesData';
import { sectorsData } from './data/sectorsData';
import { rolesData } from './data/rolesData';
import { comparisonsData } from './data/comparisonsData';

// Lazy-loaded Subpages for optimal mobile bundle splitting
const OutreachPage = React.lazy(() => import('./pages/OutreachPage').then(m => ({ default: m.OutreachPage })));
const AdsPage = React.lazy(() => import('./pages/AdsPage').then(m => ({ default: m.AdsPage })));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage').then(m => ({ default: m.ProfilePage })));
const CompanyPage = React.lazy(() => import('./pages/CompanyPage').then(m => ({ default: m.CompanyPage })));
const ContentPage = React.lazy(() => import('./pages/ContentPage').then(m => ({ default: m.ContentPage })));
const BlogPage = React.lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogDetailPage = React.lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PersonaPage = React.lazy(() => import('./pages/PersonaPage').then(m => ({ default: m.PersonaPage })));
const ComparisonPage = React.lazy(() => import('./pages/ComparisonPage').then(m => ({ default: m.ComparisonPage })));
const CommercialServicePage = React.lazy(() => import('./pages/CommercialServicePage').then(m => ({ default: m.CommercialServicePage })));
const SectorPage = React.lazy(() => import('./pages/SectorPage').then(m => ({ default: m.SectorPage })));
const RolePage = React.lazy(() => import('./pages/RolePage').then(m => ({ default: m.RolePage })));
const ContactModal = React.lazy(() => import('./components/ContactModal').then(m => ({ default: m.ContactModal })));

export default function App() {
  const initialRoute = parseCurrentRoute();

  const [lang, setLang] = useState(initialRoute.lang);
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [currentBlogSlug, setCurrentBlogSlug] = useState(initialRoute.blogSlug);
  const [currentSubSlug, setCurrentSubSlug] = useState(initialRoute.subSlug);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Clean URL navigation without page reload
  const navigate = (pageId, subSlug = null) => {
    // If navigating by direct slug string, resolve it
    if (commercialPagesData[pageId]) {
      setCurrentPage('commercial-service');
      setCurrentSubSlug(pageId);
      setCurrentBlogSlug(null);
      const newPath = getRouteUrl('commercial-service', lang, pageId);
      window.history.pushState({}, '', newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectorsData[pageId]) {
      setCurrentPage('sector');
      setCurrentSubSlug(pageId);
      setCurrentBlogSlug(null);
      const newPath = getRouteUrl('sector', lang, pageId);
      window.history.pushState({}, '', newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (rolesData[pageId]) {
      setCurrentPage('role');
      setCurrentSubSlug(pageId);
      setCurrentBlogSlug(null);
      const newPath = getRouteUrl('role', lang, pageId);
      window.history.pushState({}, '', newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (comparisonsData[pageId]) {
      setCurrentPage('comparison');
      setCurrentSubSlug(pageId);
      setCurrentBlogSlug(null);
      const newPath = getRouteUrl('comparison', lang, pageId);
      window.history.pushState({}, '', newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Default handling
    setCurrentPage(pageId);
    if (pageId === 'blog-detail') {
      setCurrentBlogSlug(subSlug);
      setCurrentSubSlug(null);
    } else {
      setCurrentSubSlug(subSlug);
      if (pageId !== 'blog') setCurrentBlogSlug(null);
    }
    const newPath = getRouteUrl(pageId, lang, subSlug);
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Language switch handler
  const handleLangChange = (newLang) => {
    setLang(newLang);
    const activeSub = currentBlogSlug || currentSubSlug;
    const newPath = getRouteUrl(currentPage, newLang, activeSub);
    window.history.pushState({}, '', newPath);
  };

  // Listen to browser back/forward buttons (popstate) & legacy hashchange
  useEffect(() => {
    const handleRouteSync = () => {
      const parsed = parseCurrentRoute();
      setCurrentPage(parsed.page);
      setCurrentBlogSlug(parsed.blogSlug);
      setCurrentSubSlug(parsed.subSlug);
      setLang(parsed.lang);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleRouteSync);
    window.addEventListener('hashchange', handleRouteSync);

    // If loaded via legacy hash link (e.g. /#outreach), rewrite immediately to canonical path
    if (initialRoute.isLegacy) {
      const canonicalTarget = getRouteUrl(initialRoute.page, initialRoute.lang, initialRoute.blogSlug || initialRoute.subSlug);
      window.history.replaceState({}, '', canonicalTarget);
    }

    return () => {
      window.removeEventListener('popstate', handleRouteSync);
      window.removeEventListener('hashchange', handleRouteSync);
    };
  }, []);

  // Dynamic SEO & Title / Meta / Canonical / Hreflang Manager
  useEffect(() => {
    const isTr = lang === 'tr';

    // Tailored high-intent metadata map
    const seoMetaMap = {
      home: {
        title: isTr 
          ? 'B2B LinkedIn Pazarlama ve Müşteri Kazanım Ajansı | Overseas Marketing' 
          : 'B2B LinkedIn Marketing & Customer Acquisition Agency | Overseas Marketing',
        desc: isTr 
          ? 'LinkedIn üzerinden B2B müşteri bulma, yapay zekâ destekli outreach, LinkedIn Ads ve profil optimizasyonu ile karar vericilerle satış toplantıları oluşturun.' 
          : 'Transform LinkedIn into a predictable B2B pipeline engine. Specialized in AI-powered human-in-the-loop outreach, ABM ads, and executive profile optimization.'
      },
      outreach: {
        title: isTr 
          ? 'LinkedIn Müşteri Bulma & Outreach Hizmeti | B2B LinkedIn Marketing' 
          : 'AI LinkedIn Outreach & Enterprise Lead Generation | Overseas Marketing',
        desc: isTr 
          ? 'Yapay zeka destekli LinkedIn outreach ile karar vericilere doğrudan ulaşın. 7 temaslı sekans, mikro-segmentasyon ve insan onaylı B2B müşteri kazanımı.' 
          : 'Reach enterprise decision-makers without spam. 7-touch contextual sequences, AI micro-segmentation, and human-in-the-loop executive outreach.'
      },
      ads: {
        title: isTr 
          ? 'LinkedIn Reklam Ajansı & Yönetim Hizmeti | B2B LinkedIn Ads' 
          : 'LinkedIn Ads & Account-Based Marketing Management | Overseas Marketing',
        desc: isTr 
          ? '100-500 hedef şirkette satın alma komitelerini sponsorlu reklamlarla kuşatın. Düşük CPL, Lead Gen Formları ve ölçülebilir B2B boru hattı.' 
          : 'Surround buying committees across 100-500 named accounts. High-converting Lead Gen Forms, Thought Leader Ads, and lower enterprise CAC.'
      },
      profile: {
        title: isTr 
          ? 'LinkedIn Profil Optimizasyon Hizmeti | B2B Satış Landing Page' 
          : 'LinkedIn Profile Optimization & Executive Personal Branding | Overseas',
        desc: isTr 
          ? 'Profilinizi kuru bir CV formatından çıkarıp ilk 5 saniyede randevu alan satış sayfasına çevirin. 10 noktalı optimizasyon ve rol model analizleri.' 
          : 'Transform your LinkedIn profile from a résumé into a high-ticket sales landing page. 5-second test framework and executive branding.'
      },
      company: {
        title: isTr 
          ? 'LinkedIn Şirket Sayfası Yönetimi & Kurumsal Güven | B2B Marketing' 
          : 'LinkedIn Company Page Management & Corporate Credibility | Overseas',
        desc: isTr 
          ? 'Outreach sürecinin kurumsal güven katmanı. Şirket sayfası optimizasyonu, vitrin yönetimi, çalışan savunuculuğu ve B2B prestij.' 
          : 'The credibility anchor behind outbound prospecting. Corporate page architecture, product showcases, and employee advocacy programs.'
      },
      content: {
        title: isTr 
          ? 'LinkedIn İçerik Yönetimi & Yönetici İletişimi | B2B Ghostwriting' 
          : 'B2B LinkedIn Content Strategy & Executive Ghostwriting | Overseas',
        desc: isTr 
          ? 'Boş beğeniler değil, satış boru hattı üreten içerik stratejisi. C-Level yöneticiler için ayda yalnızca 45 dakikalık iş akışı ve vaka analizleri.' 
          : 'Thought leadership and case study carousels engineered for sales pipeline, not vanity metrics. 45-minute monthly executive ghostwriting workflow.'
      },
      blog: {
        title: isTr 
          ? 'B2B LinkedIn Pazarlama Blogu & Rehberler | Bilgi Merkezi' 
          : 'B2B LinkedIn Knowledge Hub, Guides & GEO Insights | Overseas Marketing',
        desc: isTr 
          ? 'B2B marketing, lead generation, ABM, LinkedIn outreach ve reklam yönetimi hakkında güncel rehberler ve yapay zeka arama analizleri.' 
          : 'Comprehensive B2B guides covering LinkedIn outreach cadences, ABM spearfishing, conversion metrics, and AI search insights.'
      },
      about: {
        title: isTr 
          ? 'Hakkımızda: B2B LinkedIn Müşteri Kazanım Uzmanlığı | Overseas Marketing' 
          : 'About Us: B2B LinkedIn Growth & Prospecting Specialists | Overseas',
        desc: isTr 
          ? 'Overseas Marketing çatısı altında İstanbul, Londra ve Berlin merkezli küresel B2B müşteri kazanımı, outreach ve LinkedIn büyüme uzmanlığı.' 
          : 'Global B2B customer acquisition and outbound prospecting specialists under Overseas Marketing. Scalable B2B sales meetings without spam.'
      },
      contact: {
        title: isTr 
          ? 'İletişim & B2B Strateji Görüşmesi | B2B LinkedIn Marketing' 
          : 'Contact & B2B Strategy Consultation | B2B LinkedIn Marketing',
        desc: isTr 
          ? 'Hedef hesap listenizi ve sektörünüze özel LinkedIn müşteri kazanım planınızı 24 saat içinde çıkaralım. Hemen strateji talebi iletin.' 
          : 'Request your customized target-account audit and B2B LinkedIn pipeline roadmap within 24 hours. Contact our strategists.'
      },
      persona: {
        title: isTr
          ? 'LinkedIn Karar Verici Personaları (CEO, CMO, Satın Alma) | B2B'
          : 'B2B LinkedIn Persona Targeting (CEO, CMO, Procurement) | Overseas',
        desc: isTr
          ? 'LinkedIn\'de CEO, CMO ve Satın Alma Direktörlerine özel mesajlaşma ve Sales Navigator filtreleme stratejileri.'
          : 'Role-specific LinkedIn outreach and Sales Navigator targeting matrices for CEOs, CMOs, and Procurement Directors.'
      },
      comparison: {
        title: isTr
          ? (comparisonsData[currentSubSlug]?.titleTr || 'B2B Karar Matrisi: LinkedIn Ads vs Google Ads & Outreach vs Cold Email')
          : (comparisonsData[currentSubSlug]?.titleEn || 'B2B Strategy Matrix: LinkedIn Ads vs Google Ads & Outreach vs Cold Email'),
        desc: isTr
          ? (comparisonsData[currentSubSlug]?.descTr || 'B2B kanal karşılaştırmaları, maliyet analizleri ve hibrit müşteri kazanım modelleri.')
          : (comparisonsData[currentSubSlug]?.descEn || 'Detailed comparative analysis of LinkedIn Ads, Google Search, cold email, and account-based marketing.')
      }
    };

    // Determine current SEO title and description
    let activeTitle = '';
    let activeDesc = '';

    if (currentPage === 'commercial-service' && currentSubSlug && commercialPagesData[currentSubSlug]) {
      const item = commercialPagesData[currentSubSlug];
      activeTitle = isTr ? item.titleTr : item.titleEn;
      activeDesc = isTr ? item.descTr : item.descEn;
    } else if (currentPage === 'sector' && currentSubSlug && sectorsData[currentSubSlug]) {
      const item = sectorsData[currentSubSlug];
      activeTitle = isTr ? item.titleTr : item.titleEn;
      activeDesc = isTr ? item.descTr : item.descEn;
    } else if (currentPage === 'role' && currentSubSlug && rolesData[currentSubSlug]) {
      const item = rolesData[currentSubSlug];
      activeTitle = isTr ? item.titleTr : item.titleEn;
      activeDesc = isTr ? item.descTr : item.descEn;
    } else if (currentPage !== 'blog-detail') {
      const currentSeo = seoMetaMap[currentPage] || seoMetaMap.home;
      activeTitle = currentSeo.title;
      activeDesc = currentSeo.desc;
    }

    if (activeTitle) {
      document.title = activeTitle;
    }
    if (activeDesc) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', activeDesc);
      }
    }

    // Synchronize Canonical and Hreflang Tags with Canonical Host
    const activeSubKey = currentBlogSlug || currentSubSlug;
    const currentCanonicalUrl = getAbsoluteCanonicalUrl(currentPage, lang, activeSubKey);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentCanonicalUrl);
    }

    const trAltUrl = getAbsoluteCanonicalUrl(currentPage, 'tr', activeSubKey);
    const enAltUrl = getAbsoluteCanonicalUrl(currentPage, 'en', activeSubKey);

    let trAlt = document.querySelector('link[rel="alternate"][hreflang="tr"]');
    if (trAlt) trAlt.setAttribute('href', trAltUrl);

    let enAlt = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (enAlt) enAlt.setAttribute('href', enAltUrl);

    let xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (xDefault) xDefault.setAttribute('href', trAltUrl);

  }, [currentPage, currentBlogSlug, currentSubSlug, lang]);

  const t = translations[lang];

  const renderPage = () => {
    switch (currentPage) {
      case 'commercial-service':
        return (
          <CommercialServicePage 
            slug={currentSubSlug} 
            lang={lang} 
            onOpenModal={() => setIsModalOpen(true)} 
            onNavigate={navigate} 
          />
        );
      case 'sector':
        return (
          <SectorPage 
            slug={currentSubSlug} 
            lang={lang} 
            onOpenModal={() => setIsModalOpen(true)} 
            onNavigate={navigate} 
          />
        );
      case 'role':
        return (
          <RolePage 
            slug={currentSubSlug} 
            lang={lang} 
            onOpenModal={() => setIsModalOpen(true)} 
            onNavigate={navigate} 
          />
        );
      case 'comparison':
        return (
          <ComparisonPage 
            slug={currentSubSlug} 
            lang={lang} 
            onOpenModal={() => setIsModalOpen(true)} 
            onNavigate={navigate} 
          />
        );
      case 'blog-detail':
        return (
          <BlogDetailPage 
            slug={currentBlogSlug} 
            lang={lang} 
            t={t} 
            onOpenModal={() => setIsModalOpen(true)} 
            onNavigate={navigate} 
          />
        );
      case 'outreach':
        return <OutreachPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'ads':
        return <AdsPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'profile':
        return <ProfilePage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'company':
        return <CompanyPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'content':
        return <ContentPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'blog':
        return <BlogPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'about':
        return <AboutPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'contact':
        return <ContactPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'persona':
        return <PersonaPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
      case 'home':
      default:
        return <HomePage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-overseas selection:text-white">
      {/* Dynamic Navbar with Real <a href> Links */}
      <Navbar 
        lang={lang} 
        setLang={handleLangChange} 
        t={t} 
        onOpenModal={() => setIsModalOpen(true)} 
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <React.Suspense fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="w-8 h-8 border-3 border-overseas border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          {renderPage()}
        </React.Suspense>
      </main>

      {/* Footer with Real <a href> Links */}
      <Footer 
        t={t} 
        lang={lang}
        onOpenModal={() => setIsModalOpen(true)} 
        onNavigate={navigate} 
      />

      {/* Interactive Booking & Strategy Call Modal (Loaded on demand) */}
      {isModalOpen && (
        <React.Suspense fallback={null}>
          <ContactModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            t={t} 
          />
        </React.Suspense>
      )}
    </div>
  );
}
