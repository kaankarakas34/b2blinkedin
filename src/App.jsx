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
const ContactModal = React.lazy(() => import('./components/ContactModal').then(m => ({ default: m.ContactModal })));

export default function App() {
  const initialRoute = parseCurrentRoute();

  const [lang, setLang] = useState(initialRoute.lang);
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [currentBlogSlug, setCurrentBlogSlug] = useState(initialRoute.blogSlug);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Clean URL navigation without page reload
  const navigate = (pageId, blogSlug = null) => {
    setCurrentPage(pageId);
    setCurrentBlogSlug(blogSlug);
    const newPath = getRouteUrl(pageId, lang, blogSlug);
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Language switch handler
  const handleLangChange = (newLang) => {
    setLang(newLang);
    const newPath = getRouteUrl(currentPage, newLang, currentBlogSlug);
    window.history.pushState({}, '', newPath);
  };

  // Listen to browser back/forward buttons (popstate) & legacy hashchange
  useEffect(() => {
    const handleRouteSync = () => {
      const parsed = parseCurrentRoute();
      setCurrentPage(parsed.page);
      setCurrentBlogSlug(parsed.blogSlug);
      setLang(parsed.lang);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleRouteSync);
    window.addEventListener('hashchange', handleRouteSync);

    // If loaded via legacy hash link (e.g. /#outreach), rewrite immediately to canonical path
    if (initialRoute.isLegacy) {
      const canonicalTarget = getRouteUrl(initialRoute.page, initialRoute.lang, initialRoute.blogSlug);
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

    // Tailored high-intent metadata based on the SEO report
    const seoMetaMap = {
      home: {
        title: isTr 
          ? 'LinkedIn B2B Pazarlama Ajansı | Overseas Marketing' 
          : 'LinkedIn B2B Marketing Agency | Overseas Marketing',
        desc: isTr 
          ? 'LinkedIn reklam yönetimi, profil optimizasyonu ve B2B outreach hizmetleriyle doğru karar vericilere ulaşın. İşletmenize özel strateji görüşmesi planlayın.' 
          : 'Transform LinkedIn into a predictable B2B pipeline engine. Certified LinkedIn Ads Partner specializing in AI outreach, ABM, and profile optimization.'
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
          ? 'LinkedIn Reklam Ajansı & Yönetim Hizmeti | Resmi Partner' 
          : 'LinkedIn Ads & Account-Based Marketing (Certified Partner) | Overseas',
        desc: isTr 
          ? '100-500 hedef şirkette satın alma komitelerini sponsorlu reklamlarla kuşatın. Düşük CPL, Lead Gen Formları ve resmi partner güvencesi.' 
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
          ? 'Hakkımızda & Onaylı LinkedIn Partnerliği | Overseas Marketing' 
          : 'About Us & Certified LinkedIn Partner Credentials | Overseas Marketing',
        desc: isTr 
          ? 'Overseas Marketing çatısı altında İstanbul, Londra ve Berlin merkezli küresel B2B müşteri kazanımı ve onaylı LinkedIn ajansı.' 
          : 'Global B2B growth agency headquartered across Istanbul, London, and Berlin. Official Certified LinkedIn Ads Partner.'
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
          ? 'B2B Karar Matrisi: LinkedIn Ads vs Google Ads & Outreach vs Cold Email'
          : 'B2B Strategy Matrix: LinkedIn Ads vs Google Ads & Outreach vs Cold Email',
        desc: isTr
          ? 'B2B kanal karşılaştırmaları, maliyet analizleri ve hibrit müşteri kazanım modelleri.'
          : 'Detailed comparative analysis of LinkedIn Ads, Google Search, cold email, and account-based marketing.'
      }
    };

    if (currentPage !== 'blog-detail') {
      const currentSeo = seoMetaMap[currentPage] || seoMetaMap.home;
      document.title = currentSeo.title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', currentSeo.desc);
      }
    }

    // Synchronize Canonical and Hreflang Tags with Canonical Host
    const currentCanonicalUrl = getAbsoluteCanonicalUrl(currentPage, lang, currentBlogSlug);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentCanonicalUrl);
    }

    const trAltUrl = getAbsoluteCanonicalUrl(currentPage, 'tr', currentBlogSlug);
    const enAltUrl = getAbsoluteCanonicalUrl(currentPage, 'en', currentBlogSlug);

    let trAlt = document.querySelector('link[rel="alternate"][hreflang="tr"]');
    if (trAlt) trAlt.setAttribute('href', trAltUrl);

    let enAlt = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (enAlt) enAlt.setAttribute('href', enAltUrl);

    let xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (xDefault) xDefault.setAttribute('href', trAltUrl);

  }, [currentPage, currentBlogSlug, lang]);

  const t = translations[lang];

  const renderPage = () => {
    switch (currentPage) {
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
      case 'comparison':
        return <ComparisonPage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
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
