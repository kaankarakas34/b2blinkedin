import React from 'react';
import { ShieldCheck, MapPin, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';
import { BrandLogo } from './BrandLogo';
import { getRouteUrl } from '../utils/routes';

export const Footer = ({ t, lang = 'tr', onOpenModal, onNavigate }) => {
  return (
    <footer id="contact" className="bg-navy text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-overseas/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand & Partner Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" size="md" />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            {/* B2B Authority Badge */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 inline-flex items-center gap-3">
              <div className="bg-sky-500/20 p-2 rounded-xl border border-sky-400/20 text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-sky-400 block leading-tight">
                  {t.footer.partnerBadgeTitle}: B2B LinkedIn Marketing
                </span>
                <span className="text-[10px] text-slate-400">
                  Global B2B Büyüme & Müşteri Kazanımı
                </span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://overseas.marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Overseas Marketing Resmi Web Sitesi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-sky-400 mb-3">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href={getRouteUrl('outreach', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('outreach'); }} className="hover:text-white transition-colors block">AI LinkedIn Outreach</a></li>
              <li><a href={getRouteUrl('profile', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('profile'); }} className="hover:text-white transition-colors block">Profil Optimizasyonu</a></li>
              <li><a href={getRouteUrl('company', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('company'); }} className="hover:text-white transition-colors block">Company Page Yönetimi</a></li>
              <li><a href={getRouteUrl('content', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('content'); }} className="hover:text-white transition-colors block">İçerik Yönetimi</a></li>
              <li><a href={getRouteUrl('ads', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('ads'); }} className="hover:text-white transition-colors block">LinkedIn Ads & ABM</a></li>
            </ul>
          </div>

          {/* Col 4: Solutions & Resources */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-sky-400 mb-3">
              {t.footer.solutionsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href={getRouteUrl('home', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }} className="hover:text-white transition-colors block">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</a></li>
              <li><a href={getRouteUrl('outreach', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('outreach'); }} className="hover:text-white transition-colors block">{lang === 'tr' ? 'B2B Outreach Çözümleri' : 'B2B Outreach Solutions'}</a></li>
              <li><a href={getRouteUrl('about', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }} className="hover:text-white transition-colors block">{lang === 'tr' ? 'Hakkımızda & Overseas' : 'About & Overseas'}</a></li>
              <li><a href={getRouteUrl('blog', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog'); }} className="hover:text-white transition-colors block">LinkedIn B2B Blog</a></li>
              <li><a href={getRouteUrl('contact', lang)} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }} className="hover:text-white transition-colors block">{lang === 'tr' ? 'İletişim & Strateji Görüşmesi' : 'Contact & Strategy Call'}</a></li>
            </ul>
          </div>

          {/* Col 5: Contact & Location (GEO Friendly) */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-sky-400 mb-3">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-overseas shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-overseas shrink-0" />
                <a href="mailto:hello@overseas.marketing" className="hover:text-white">hello@overseas.marketing</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-overseas shrink-0" />
                <span>İstanbul • London • Berlin</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-colors"
                >
                  Strateji Görüşmesi Planla
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* B2B Topic Cluster & Industry Navigation Matrix (SEO / Topical Authority) */}
        <div className="pt-8 pb-6 border-t border-white/10">
          <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-3">
            {lang === 'tr' ? 'B2B Müşteri Kazanım ve Karşılaştırma Ağımız' : 'B2B Acquisition & Strategy Matrix'}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300">
            <a href={getRouteUrl('commercial-service', lang, 'linkedin-musteri-bulma')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('commercial-service', 'linkedin-musteri-bulma'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'LinkedIn Müşteri Bulma' : 'LinkedIn Lead Generation Agency'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('commercial-service', lang, 'b2b-lead-generation')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('commercial-service', 'b2b-lead-generation'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'B2B Lead Generation' : 'B2B Lead Generation Services'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('commercial-service', lang, 'b2b-randevu-ayarlama')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('commercial-service', 'b2b-randevu-ayarlama'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'B2B Randevu Ayarlama' : 'B2B Appointment Setting'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('commercial-service', lang, 'linkedin-ile-ihracat-musterisi-bulma')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('commercial-service', 'linkedin-ile-ihracat-musterisi-bulma'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'İhracat Müşterisi Bulma' : 'Export Lead Generation'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('sector', lang, 'uretim-firmalari-linkedin-pazarlama')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('sector', 'uretim-firmalari-linkedin-pazarlama'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Üretim & Sanayi LinkedIn Pazarlama' : 'Manufacturing B2B'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('sector', lang, 'saas-linkedin-lead-generation')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('sector', 'saas-linkedin-lead-generation'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'B2B SaaS Lead Generation' : 'SaaS Lead Generation'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('role', lang, 'satinalma-mudurlerine-ulasma')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('role', 'satinalma-mudurlerine-ulasma'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Satın Alma Müdürlerine Ulaşma' : 'Reach Procurement'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('role', lang, 'ceolara-ulasma')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('role', 'ceolara-ulasma'); }} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'CEO\'lara Ulaşma' : 'Reach CEOs'}
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('comparison', lang, 'linkedin-ads-vs-google-ads')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('comparison', 'linkedin-ads-vs-google-ads'); }} className="hover:text-white transition-colors">
              LinkedIn Ads vs. Google Ads
            </a>
            <span className="text-slate-600">•</span>
            <a href={getRouteUrl('comparison', lang, 'linkedin-outreach-vs-cold-email')} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('comparison', 'linkedin-outreach-vs-cold-email'); }} className="hover:text-white transition-colors">
              LinkedIn Outreach vs. Cold Email
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} B2B LinkedIn Marketing. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white">{t.footer.privacy}</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white">{t.footer.terms}</a>
            <span>•</span>
            <a href="#cookies" className="hover:text-white">{t.footer.cookies}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
