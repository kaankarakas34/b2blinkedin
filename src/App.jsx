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
