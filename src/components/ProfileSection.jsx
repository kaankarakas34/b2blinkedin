import React from 'react';
import { UserCheck, XCircle, CheckCircle2, ArrowRight, Sparkles, Layout, Eye } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const ProfileSection = ({ t, onOpenModal }) => {
  return (
    <section id="profile" className="relative py-24 bg-gradient-to-b from-surface via-white to-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-1 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-4">
            <UserCheck className="w-3.5 h-3.5 text-linkedin" />
            <span>{t.profileLandingPage.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {t.profileLandingPage.title}
          </h2>

          <p className="text-base sm:text-lg text-content-secondary max-w-2xl mx-auto leading-relaxed">
            {t.profileLandingPage.lead}
          </p>
        </div>

        {/* Transformation Visual & CV vs Landing Page Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Profile Transformation Image */}
          <div className="lg:col-span-6">
            <div className="glass-card p-3 sm:p-4 rounded-3xl shadow-elevated border border-white/80 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-950 shadow-inner">
                <picture>
                  <source 
                    media="(max-width: 640px)" 
                    srcSet="/images/linkedin_profile_abm-mobile.webp" 
                    type="image/webp" 
                  />
                  <source 
                    srcSet="/images/linkedin_profile_abm.webp" 
                    type="image/webp" 
                  />
                  <img 
                    src="/images/linkedin_profile_abm.jpg" 
                    alt="LinkedIn Profile Landing Page Transformation" 
                    width="1376"
                    height="768"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </picture>

                <div className="absolute top-3 left-3 glass-card-dark px-3 py-1.5 rounded-xl text-[11px] font-semibold flex items-center gap-2 border border-white/20">
                  <LinkedInIcon className="w-4 h-4 fill-sky-400" />
                  <span>Conversion Landing Profile</span>
                </div>

                <div className="absolute bottom-3 right-3 glass-card px-3 py-1.5 rounded-xl text-[11px] font-bold text-navy flex items-center gap-1.5 shadow-md">
                  <Eye className="w-3.5 h-3.5 text-overseas" />
                  <span>5-Saniye Testi Başarılı</span>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-navy font-medium text-center">
                CV mantığını terk edip, ziyaretçiyi doğrudan takviminize çeken satış makinesi kurguluyoruz.
              </div>
            </div>
          </div>

          {/* Comparative Cards: Traditional CV vs Sales Landing Page */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Traditional CV (Loss) */}
            <div className="p-5 rounded-2xl bg-red-50/40 border border-red-200/60 text-xs">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-3">
                <XCircle className="w-4 h-4" />
                <span>{t.profileLandingPage.cvVsLanding.cvTitle}</span>
              </div>
              <ul className="space-y-2 text-content-secondary">
                {t.profileLandingPage.cvVsLanding.cvItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sales Landing Page (Win) */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-300/70 shadow-sm text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.profileLandingPage.cvVsLanding.landingTitle}</span>
              </div>
              <ul className="space-y-2 text-navy font-medium">
                {t.profileLandingPage.cvVsLanding.landingItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* 10-Point Audit Checklist Grid */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated">
          <div className="max-w-2xl mb-8">
            <h3 className="font-heading font-extrabold text-2xl text-navy mb-2">
              {t.profileLandingPage.auditAreasTitle}
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary">
              {t.profileLandingPage.auditAreasIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {t.profileLandingPage.auditPoints.map((point, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-white/80 border border-slate-200/70 shadow-sm flex items-center gap-2.5 text-xs font-semibold text-navy hover:border-overseas transition-colors"
              >
                <div className="w-5 h-5 rounded-md bg-overseas/10 text-overseas flex items-center justify-center shrink-0">
                  <span className="font-mono text-[10px] font-bold">✓</span>
                </div>
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>

          {/* Conclusion Callout */}
          <div className="p-4 rounded-2xl bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="font-heading font-bold text-sm sm:text-base">
              {t.profileLandingPage.conclusion}
            </p>
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs font-bold whitespace-nowrap shadow-md transition-colors"
            >
              Profilinizi Optimize Edelim
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
