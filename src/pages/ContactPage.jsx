import React from 'react';
import { MapPin, Mail, Globe, Phone, Shield, Send, Sparkles } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const ContactPage = ({ lang, t, onOpenModal, onNavigate }) => {
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
          <span className="text-navy font-bold">{isTr ? 'İletişim' : 'Contact'}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5 text-overseas" />
              <span>{isTr ? 'B2B STRATEJİ DANIŞMANLIĞI' : 'B2B STRATEGY BRIEFING'}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight mb-4">
              {isTr ? 'Bir Sonraki Müşteriniz LinkedIn’de.' : 'Your Next Enterprise Client Is on LinkedIn.'}
            </h1>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
              {isTr 
                ? 'Hedef şirketlerinizi, karar verici profillerinizi ve LinkedIn B2B müşteri edinimi yol haritanızı birlikte oluşturalım.'
                : 'Let us engineer your target-account list, decision-maker personas, and high-converting acquisition workflows.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-white/80 space-y-6">
              <h3 className="font-heading font-bold text-xl text-navy">
                {isTr ? 'İletişim Bilgileri' : 'Office Information'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-navy/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-overseas shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-navy">İstanbul Merkez:</span>
                    <span>Levent, Büyükdere Cad. No:199, Şişli / İstanbul</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-overseas shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-navy">E-posta:</span>
                    <a href="mailto:hello@overseas.marketing" className="text-overseas hover:underline">hello@overseas.marketing</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-overseas shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-navy">Global Operasyon:</span>
                    <span>İstanbul • London • Berlin</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E151F] text-white flex items-center gap-3">
                <img src="/linkedin_ads_partner.png" alt="Partner" className="h-7 w-auto block" />
                <div className="text-xs">
                  <span className="font-bold block text-sky-400">Resmi LinkedIn Ads Partneri</span>
                  <span className="text-[10px] text-slate-300">Overseas Marketing</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Request Box */}
            <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated">
              <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Ücretsiz Analiz</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-navy mb-2">
                {isTr ? 'B2B Strateji Görüşmesi Planlayın' : 'Book a Strategy Consultation'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed mb-6">
                {isTr 
                  ? '30 dakikalık online görüşmede şirketinizin sektörüne özel LinkedIn ICP ve potansiyel müşteri havuzu analizi sunuyoruz.'
                  : 'In a 30-minute strategic briefing, we present a customized LinkedIn ICP and decision-maker pool audit for your firm.'}
              </p>

              <button
                onClick={onOpenModal}
                className="btn-glass-primary w-full py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-overseas/30"
              >
                <Send className="w-4 h-4" />
                <span>{isTr ? 'Strateji Formunu Doldurun' : 'Open Strategy Form'}</span>
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
