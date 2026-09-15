import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

// Dedicated Subpages
import { HomePage } from './pages/HomePage';
import { OutreachPage } from './pages/OutreachPage';
import { AdsPage } from './pages/AdsPage';
import { ProfilePage } from './pages/ProfilePage';
import { CompanyPage } from './pages/CompanyPage';
import { ContentPage } from './pages/ContentPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [lang, setLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'tr') return urlLang;
    return 'tr';
  });

  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'outreach', 'ads', 'profile', 'company', 'content', 'blog', 'about', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  }, [lang]);

  // Sync hash with page navigation
  const navigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'outreach', 'ads', 'profile', 'company', 'content', 'blog', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO & Title / Meta Manager for Google and GEO AI crawlers
  useEffect(() => {
    const isTr = lang === 'tr';

    const seoMetaMap = {
      home: {
        title: isTr 
          ? 'B2B LinkedIn Marketing by Overseas Marketing | B2B Müşteri Kazanım Sistemi' 
          : 'B2B LinkedIn Marketing by Overseas Marketing | Enterprise Acquisition System',
        desc: isTr 
          ? 'LinkedIn\'i bir sosyal medya kanalı değil, B2B müşteri kazanım kanalına dönüştürüyoruz. AI destekli LinkedIn outreach, profil optimizasyonu, Ads ve ABM.' 
          : 'Transform LinkedIn into a predictable B2B pipeline engine. Certified LinkedIn Ads Partner specializing in AI outreach, ABM, and profile optimization.'
      },
      outreach: {
        title: isTr 
          ? 'AI LinkedIn Outreach & B2B Lead Gen | B2B LinkedIn Marketing' 
          : 'AI LinkedIn Outreach & Enterprise Lead Generation | Overseas Marketing',
        desc: isTr 
          ? 'Spam yapmadan, hesap sağlığını koruyarak karar vericilere doğrudan ulaşın. 7 temaslı sekans, mikro-segmentasyon ve insan onaylı B2B outreach.' 
          : 'Reach enterprise decision-makers without spam. 7-touch contextual sequences, AI micro-segmentation, and human-in-the-loop executive outreach.'
      },
      ads: {
        title: isTr 
          ? 'LinkedIn Ads & ABM Yönetimi (Resmi Partner) | B2B LinkedIn Marketing' 
          : 'LinkedIn Ads & Account-Based Marketing (Certified Partner) | Overseas',
        desc: isTr 
          ? '100-500 hedef şirkette satın alma komitelerini sponsorlu reklamlarla kuşatın. Düşük CPL, Lead Gen Formları ve resmi partner güvencesi.' 
          : 'Surround buying committees across 100-500 named accounts. High-converting Lead Gen Forms, Thought Leader Ads, and lower enterprise CAC.'
      },
      profile: {
        title: isTr 
          ? 'LinkedIn Profil Optimizasyonu (Satış Landing Page) | B2B LinkedIn Marketing' 
          : 'LinkedIn Profile Optimization & Executive Personal Branding | Overseas',
        desc: isTr 
          ? 'Profilinizi kuru bir CV formatından çıkarıp ilk 5 saniyede randevu alan satış sayfasına çevirin. 10 noktalı optimizasyon ve rol model analizleri.' 
          : 'Transform your LinkedIn profile from a résumé into a high-ticket sales landing page. 5-second test framework and executive branding.'
      },
      company: {
        title: isTr 
          ? 'LinkedIn Company Page Yönetimi & Kurumsal Güven | B2B LinkedIn Marketing' 
          : 'LinkedIn Company Page Management & Corporate Credibility | Overseas',
        desc: isTr 
          ? 'Outreach sürecinin kurumsal güven katmanı. Şirket sayfası optimizasyonu, vitrin yönetimi, çalışan savunuculuğu ve B2B prestij.' 
          : 'The credibility anchor behind outbound prospecting. Corporate page architecture, product showcases, and employee advocacy programs.'
      },
      content: {
        title: isTr 
          ? 'B2B LinkedIn İçerik Yönetimi & Ghostwriting | B2B LinkedIn Marketing' 
          : 'B2B LinkedIn Content Strategy & Executive Ghostwriting | Overseas',
        desc: isTr 
          ? 'Boş beğeniler değil, satış boru hattı üreten içerik stratejisi. C-Level yöneticiler için ayda yalnızca 45 dakikalık iş akışı ve vaka analizleri.' 
          : 'Thought leadership and case study carousels engineered for sales pipeline, not vanity metrics. 45-minute monthly executive ghostwriting workflow.'
      },
      blog: {
        title: isTr 
          ? 'B2B LinkedIn Bilgi Merkezi, Rehberler & GEO Analizleri | B2B LinkedIn Marketing' 
          : 'B2B LinkedIn Knowledge Hub, Guides & GEO Insights | Overseas Marketing',
        desc: isTr 
          ? 'B2B marketing, lead generation, ABM, LinkedIn outreach ve reklam yönetimi hakkında güncel rehberler ve yapay zeka arama analizleri.' 
          : 'Comprehensive B2B guides covering LinkedIn outreach cadences, ABM spearfishing, conversion metrics, and AI search insights.'
      },
      about: {
        title: isTr 
          ? 'Hakkımızda & Resmi LinkedIn Partnerliği | B2B LinkedIn Marketing' 
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
      }
    };

    const currentSeo = seoMetaMap[currentPage] || seoMetaMap.home;
    document.title = currentSeo.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const pageHash = currentPage === 'home' ? '' : `#${currentPage}`;
      canonical.setAttribute('href', `https://b2blinkedin.overseas.marketing/${pageHash}`);
    }
  }, [currentPage, lang]);

  const t = translations[lang];

  const renderPage = () => {
    switch (currentPage) {
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
      case 'home':
      default:
        return <HomePage lang={lang} t={t} onOpenModal={() => setIsModalOpen(true)} onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-overseas selection:text-white">
      {/* Dynamic Navbar with Mega Menu */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onOpenModal={() => setIsModalOpen(true)}
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer 
        t={t} 
        onOpenModal={() => setIsModalOpen(true)} 
        onNavigate={navigate}
      />

      {/* Interactive Booking & Strategy Call Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        t={t} 
      />
    </div>
  );
}
