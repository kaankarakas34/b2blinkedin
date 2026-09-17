import React from 'react';
import { Target, CheckCircle2, ShieldCheck, ArrowRight, Zap, Layers, BarChart3 } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const AdsAndABM = ({ t, onOpenModal }) => {
  return (
    <section id="ads" className="relative py-24 bg-gradient-to-b from-surface via-slate-50 to-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-1 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-linkedin" />
            <span>{t.adsAndAbm.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {t.adsAndAbm.title}
          </h2>

          <p className="text-base sm:text-lg text-navy/80 font-medium mb-3">
            {t.adsAndAbm.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-content-secondary max-w-2xl mx-auto">
            {t.adsAndAbm.intro}
          </p>
        </div>

        {/* 2-Column: ABM Strategy Box & Campaign Types */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: ABM Core Strategy Card */}
          <div className="lg:col-span-6 glass-card-dark p-6 sm:p-10 rounded-3xl flex flex-col justify-between shadow-elevated border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">
                  Hesap Bazlı Pazarlama (ABM)
                </span>
                <Target className="w-6 h-6 text-sky-400" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 leading-tight">
                {t.adsAndAbm.abmBox.subtitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.adsAndAbm.abmBox.desc}
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 mb-6 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Hedef listenizdeki 100-500 şirketi CRM'den LinkedIn'e Matched Audience olarak bağlıyoruz.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>CFO, CTO ve Satın Alma Liderlerini hem sponsorlu içerik hem de outreach ile kuşatıyoruz.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Markanızı daha önce gören karar vericilerde bağlantı kabul oranı %60+ artar.</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full py-3.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-overseas/30 transition-colors"
            >
              <span>ABM Hedef Listenizi Planlayalım</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: 6 Campaign Types */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200 shadow-sm">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-navy block mb-3">
                {t.adsAndAbm.campaignTypesTitle}
              </span>
              <div className="space-y-2.5">
                {t.adsAndAbm.campaignTypes.map((camp, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs font-semibold text-navy hover:bg-overseas/5 hover:border-overseas/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-linkedin/10 text-linkedin flex items-center justify-center shrink-0">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <span>{camp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-white/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100 shrink-0 text-overseas">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs text-navy font-medium">
                  <span className="font-bold block">B2B LinkedIn Ads & ABM Kuşatması</span>
                  Yalnızca satın alma yetkisi olan karar vericilere yönelik sıfır kayıp reklam modeli.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
