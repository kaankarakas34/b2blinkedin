import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Sparkles, Send, Target, UserCheck, Building2, FileText, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';
import { BrandLogo } from './BrandLogo';
import { getRouteUrl } from '../utils/routes';

export const Navbar = ({ lang, setLang, t, onOpenModal, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isTr = lang === 'tr';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesList = [
    {
      id: 'outreach',
      title: isTr ? 'LinkedIn Outreach & AI' : 'LinkedIn Outreach & AI',
      desc: isTr ? 'Karar vericilere doğrudan ulaşan yapay zeka destekli prospeksiyon ve mesajlaşma akışları.' : 'AI-powered micro-segmentation and contextual messaging to book executive meetings.',
      icon: Send,
      img: '/images/linkedin_ai_outreach.jpg',
      badge: isTr ? 'Yapay Zeka Destekli' : 'AI-Powered'
    },
    {
      id: 'ads',
      title: isTr ? 'LinkedIn Ads & ABM' : 'LinkedIn Ads & ABM',
      desc: isTr ? '100-500 hedef şirkette satın alma komitelerini sponsorlu reklamlarla kuşatın.' : 'Account-based marketing and in-app lead gen targeting 100-500 key enterprise accounts.',
      icon: Target,
      img: '/images/linkedin_b2b_hero.jpg',
      badge: isTr ? 'Resmi Partner' : 'Official Partner'
    },
    {
      id: 'profile',
      title: isTr ? 'Profil Optimizasyonu' : 'Profile Optimization',
      desc: isTr ? 'Profilinizi CV mantığından çıkarıp 5 saniyede randevu alan satış landing page’ine dönüştürün.' : 'Transform your profile from an online CV into a high-converting sales landing page.',
      icon: UserCheck,
      img: '/images/linkedin_profile_abm.jpg',
      badge: isTr ? 'Dönüşüm Odaklı' : 'High-Conversion'
    },
    {
      id: 'company',
      title: isTr ? 'Company Page Yönetimi' : 'Company Page Management',
      desc: isTr ? 'Outreach sürecinin kurumsal güven katmanı; prestijli sayfa mimarisi ve çalışan savunuculuğu.' : 'The enterprise credibility layer behind your outreach; page optimization and employee advocacy.',
      icon: Building2,
      badge: isTr ? 'Kurumsal Güven' : 'Credibility Layer'
    },
    {
      id: 'content',
      title: isTr ? 'LinkedIn İçerik Yönetimi' : 'Content Management',
      desc: isTr ? 'Beğeni için değil; uzmanlığı kanıtlayıp satış sürecini destekleyen B2B düşünce liderliği.' : 'Thought leadership and case study carousels engineered for sales pipeline, not vanity metrics.',
      icon: FileText,
      badge: isTr ? 'Gelir Odaklı' : 'Revenue-Driven'
    }
  ];

  const handleServiceClick = (serviceId) => {
    setMegaMenuOpen(false);
    setIsOpen(false);
    onNavigate(serviceId);
  };

  const handleNavClick = (pageId) => {
    setMegaMenuOpen(false);
    setIsOpen(false);
    onNavigate(pageId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2.5' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href={isTr ? "/" : "/en/"} 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
            className="flex items-center group cursor-pointer text-left"
          >
            <BrandLogo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links (Clean, Uncluttered, with Mega Menu) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* 1. Services with MEGA MENU */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all ${
                  megaMenuOpen || ['outreach', 'ads', 'profile', 'company', 'content'].includes(currentPage)
                    ? 'text-overseas bg-overseas/10' 
                    : 'text-navy/85 hover:text-overseas hover:bg-white/60'
                }`}
              >
                <span>{isTr ? 'Hizmetlerimiz' : 'Services'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-overseas' : 'opacity-60'}`} />
              </button>

              {/* MEGA MENU CONTAINER */}
              {megaMenuOpen && (
                <div className="absolute top-full -left-20 xl:-left-10 mt-1 w-[820px] glass-card bg-white/95 p-6 rounded-3xl shadow-elevated border border-white/90 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-12 gap-6">
                    
                    {/* Left 8 Cols: 5 Services Grid */}
                    <div className="col-span-8 space-y-2.5">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-[11px] font-bold text-content-secondary uppercase tracking-wider">
                          {isTr ? 'ÖZEL LINKEDIN B2B HİZMETLERİMİZ' : 'EXCLUSIVE LINKEDIN B2B SERVICES'}
                        </span>
                        <span className="text-[10px] text-overseas font-semibold">5 Detaylı Hizmet Alanı</span>
                      </div>

                      <div className="space-y-2">
                        {servicesList.map((srv) => {
                          const IconComponent = srv.icon;
                          const isCurrent = currentPage === srv.id;
                          const srvUrl = getRouteUrl(srv.id, lang);
                          return (
                            <a
                              key={srv.id}
                              href={srvUrl}
                              onClick={(e) => {
                                e.preventDefault();
                                handleServiceClick(srv.id);
                              }}
                              className={`w-full p-3 rounded-2xl text-left flex items-start gap-3.5 transition-all group/item block ${
                                isCurrent 
                                  ? 'bg-overseas/10 border border-overseas/30' 
                                  : 'hover:bg-slate-50 border border-transparent hover:border-slate-200/80'
                              }`}
                            >
                              {/* Visual Thumbnail or Icon */}
                              <div className="w-11 h-11 rounded-xl bg-[#16202E] text-white flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover/item:scale-105 transition-transform">
                                {srv.img ? (
                                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover opacity-80" />
                                ) : (
                                  <IconComponent className="w-5 h-5 text-sky-400" />
                                )}
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-0.5">
                                  <span className="font-heading font-bold text-sm text-navy group-hover/item:text-overseas transition-colors">
                                    {srv.title}
                                  </span>
                                  <span className="text-[10px] font-semibold text-overseas px-2 py-0.5 rounded-md bg-overseas/10">
                                    {srv.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] text-content-secondary leading-snug line-clamp-2">
                                  {srv.desc}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right 4 Cols: Featured Partner Highlight Card */}
                    <div className="col-span-4">
                      <div className="glass-card-dark p-5 rounded-2xl border border-white/15 h-full flex flex-col justify-between text-left">
                        <div>
                          <div className="bg-[#0E151F] px-2.5 py-1.5 rounded-xl border border-white/15 inline-block mb-3">
                            <img src="/linkedin_ads_partner.png" alt="LinkedIn Ads Partner" className="h-6 w-auto block" />
                          </div>

                          <h4 className="font-heading font-bold text-sm text-white mb-1.5 leading-snug">
                            {isTr ? 'Resmi Sertifikalı Partner Ajans' : 'Official Certified Partner Agency'}
                          </h4>

                          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
                            {isTr 
                              ? 'Overseas Marketing güvencesiyle uçtan uca B2B müşteri kazanımı ve onaylı LinkedIn reklam yönetimi.' 
                              : 'Turnkey B2B customer acquisition and certified LinkedIn campaign architecture.'}
                          </p>
                        </div>

                        <button
                          onClick={onOpenModal}
                          className="w-full py-2.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-colors"
                        >
                          <span>{isTr ? 'B2B Analiz Al' : 'Get B2B Audit'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 2. Blog */}
            <a
              href={getRouteUrl('blog', lang)}
              onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all block ${
                currentPage === 'blog' 
                  ? 'text-overseas bg-overseas/10' 
                  : 'text-navy/85 hover:text-overseas hover:bg-white/60'
              }`}
            >
              Blog
            </a>

            {/* 2.5 Karşılaştırmalar (BOFU) */}
            <a
              href={getRouteUrl('comparison', lang)}
              onClick={(e) => { e.preventDefault(); handleNavClick('comparison'); }}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all block ${
                currentPage === 'comparison' 
                  ? 'text-overseas bg-overseas/10' 
                  : 'text-navy/85 hover:text-overseas hover:bg-white/60'
              }`}
            >
              {isTr ? 'Karşılaştırma' : 'Comparisons'}
            </a>

            {/* 2.6 Hedef Kitle / Persona */}
            <a
              href={getRouteUrl('persona', lang)}
              onClick={(e) => { e.preventDefault(); handleNavClick('persona'); }}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all block ${
                currentPage === 'persona' 
                  ? 'text-overseas bg-overseas/10' 
                  : 'text-navy/85 hover:text-overseas hover:bg-white/60'
              }`}
            >
              {isTr ? 'Hedef Kitle' : 'Personas'}
            </a>

            {/* 3. Hakkımızda */}
            <a
              href={getRouteUrl('about', lang)}
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all block ${
                currentPage === 'about' 
                  ? 'text-overseas bg-overseas/10' 
                  : 'text-navy/85 hover:text-overseas hover:bg-white/60'
              }`}
            >
              {isTr ? 'Hakkımızda' : 'About'}
            </a>

            {/* 4. İletişim */}
            <a
              href={getRouteUrl('contact', lang)}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className={`px-3.5 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all block ${
                currentPage === 'contact' 
                  ? 'text-overseas bg-overseas/10' 
                  : 'text-navy/85 hover:text-overseas hover:bg-white/60'
              }`}
            >
              {isTr ? 'İletişim' : 'Contact'}
            </a>

          </nav>

          {/* Right Action: Language Switcher & Strategy Call CTA */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Language Switcher */}
            <div className="flex items-center glass-pill rounded-full p-1 text-xs font-semibold">
              <button
                onClick={() => setLang('tr')}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === 'tr' ? 'bg-navy text-white shadow-sm' : 'text-navy/70 hover:text-navy'}`}
              >
                TR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-navy text-white shadow-sm' : 'text-navy/70 hover:text-navy'}`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-4 py-2.5 rounded-xl text-xs xl:text-sm font-bold flex items-center gap-2"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4 text-sky-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center glass-pill rounded-full p-0.5 text-[11px] font-semibold">
              <button
                onClick={() => setLang('tr')}
                className={`px-2 py-0.5 rounded-full transition-all ${lang === 'tr' ? 'bg-navy text-white' : 'text-navy/70'}`}
              >
                TR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${lang === 'en' ? 'bg-navy text-white' : 'text-navy/70'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass-card text-navy hover:text-overseas transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden glass-card mx-4 mt-2 p-5 rounded-2xl shadow-elevated border border-white/60 space-y-4 animate-in fade-in duration-200">
          
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-overseas uppercase tracking-wider block px-2 mb-1">
              {isTr ? 'HİZMETLERİMİZ' : 'OUR SERVICES'}
            </span>
            {servicesList.map((s) => (
              <a
                key={s.id}
                href={getRouteUrl(s.id, lang)}
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceClick(s.id);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-navy hover:bg-overseas/10 flex items-center justify-between block"
              >
                <span>{s.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-overseas" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-1 text-xs font-bold text-navy">
            <a href={getRouteUrl('home', lang)} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 block">{isTr ? 'Ana Sayfa' : 'Home'}</a>
            <a href={getRouteUrl('blog', lang)} onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 block">Blog</a>
            <a href={getRouteUrl('comparison', lang)} onClick={(e) => { e.preventDefault(); handleNavClick('comparison'); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 block">{isTr ? 'Karşılaştırma' : 'Comparisons'}</a>
            <a href={getRouteUrl('persona', lang)} onClick={(e) => { e.preventDefault(); handleNavClick('persona'); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 block">{isTr ? 'Hedef Kitle' : 'Personas'}</a>
            <a href={getRouteUrl('about', lang)} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 block">{isTr ? 'Hakkımızda' : 'About'}</a>
            <a href={getRouteUrl('contact', lang)} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 block">{isTr ? 'İletişim' : 'Contact'}</a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenModal();
              }}
              className="btn-glass-primary w-full py-3 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
