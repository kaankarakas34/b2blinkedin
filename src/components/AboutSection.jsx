import React from 'react';
import { ShieldCheck, Globe2, Award, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const AboutSection = ({ t, onOpenModal }) => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-surface via-slate-50 to-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5 text-overseas" />
            <span>{t.about.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {t.about.title}
          </h2>

          <p className="text-base sm:text-lg text-content-secondary max-w-2xl mx-auto leading-relaxed">
            {t.about.lead}
          </p>
        </div>

        {/* About Grid: Story & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Narrative Box */}
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-navy/80 leading-relaxed">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/80 shadow-clean space-y-4">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-navy">
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">🇩🇪 DACH Bölgesi</span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">🇬🇧 Birleşik Krallık</span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">🇺🇸 Kuzey Amerika</span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">🇹🇷 Türkiye & Körfez</span>
              </div>
            </div>
          </div>

          {/* Right: Partner Credentials & Trust Badge Card */}
          <div className="lg:col-span-5">
            <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-white/15 shadow-elevated text-center flex flex-col items-center justify-between">
              
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-9 h-9 text-sky-400" />
              </div>

              <div className="mb-4">
                <span className="text-sm font-bold text-white uppercase tracking-wider block mb-1">
                  B2B Büyüme & Outreach Merkezi
                </span>
                <span className="text-xs font-medium text-sky-300 block">
                  Overseas Marketing Küresel Ağı
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-6 max-w-xs leading-relaxed">
                Overseas Marketing'in uluslararası B2B büyüme altyapısı ve insan onaylı AI prospecting metodolojisiyle küresel satış boru hattınızı ölçekleyin.
              </p>

              <a
                href="https://www.overseas.marketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Overseas Marketing Ana Sitesini İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

        {/* 4 Key Numerical Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {t.about.stats.map((st, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl text-center border border-white/80">
              <div className="font-heading font-black text-2xl sm:text-3xl text-navy mb-1">
                {st.val}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-content-secondary">
                {st.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
