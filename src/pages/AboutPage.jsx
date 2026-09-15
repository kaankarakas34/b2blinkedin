import React from 'react';
import { ShieldCheck, Building, Globe2, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const AboutPage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-content-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-navy transition-colors">
            {isTr ? 'Ana Sayfa' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-navy font-bold">{isTr ? 'Hakkımızda' : 'About'}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Building className="w-3.5 h-3.5 text-overseas" />
              <span>{isTr ? 'OVERSEAS MARKETING GÜVENCESİ' : 'OVERSEAS MARKETING CREDIBILITY'}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight mb-4">
              {isTr ? 'Global B2B Müşteri Kazanım Ortağınız' : 'Your Global B2B Customer Acquisition Partner'}
            </h1>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
              {t.about.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/80 space-y-4 text-sm text-navy/80 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <div className="pt-4 grid grid-cols-2 gap-3 text-xs font-semibold text-navy">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-overseas font-bold block mb-1">🇩🇪 DACH Bölgesi</span>
                  Almanya, Avusturya ve İsviçre sanayi alıcıları
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-overseas font-bold block mb-1">🇬🇧 Birleşik Krallık</span>
                  Londra finans, teknoloji ve kurumsal hizmetler
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-overseas font-bold block mb-1">🇺🇸 Kuzey Amerika</span>
                  SaaS, kurumsal teknoloji ve girişim ekosistemleri
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-overseas font-bold block mb-1">🇹🇷 Türkiye & Körfez</span>
                  İhracat, sağlık ve B2B endüstriyel liderler
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card-dark p-8 rounded-3xl border border-white/15 text-center flex flex-col items-center">
                <div className="bg-[#0E151F] px-4 py-2.5 rounded-2xl border border-white/15 mb-4">
                  <img src="/linkedin_ads_partner.png" alt="LinkedIn Ads Partner" className="h-10 w-auto block mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Resmi Sertifikalı Ajans</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Overseas Marketing uluslararası B2B büyüme ve performans pazarlamada tescilli LinkedIn Ads Partneridir.
                </p>
                <a
                  href="https://www.overseas.marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Overseas Marketing Resmi Sitesi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.about.stats.map((st, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl text-center border border-white/80">
                <div className="font-heading font-black text-2xl sm:text-3xl text-navy mb-1">{st.val}</div>
                <div className="text-[11px] sm:text-xs font-semibold text-content-secondary">{st.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
