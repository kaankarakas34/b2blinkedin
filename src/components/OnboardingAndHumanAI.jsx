import React from 'react';
import { Compass, CheckCircle2, Shield, Sparkles, Sliders, ArrowRight, ArrowDown } from 'lucide-react';

export const OnboardingAndHumanAI = ({ t, onOpenModal }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-surface via-white/80 to-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* =========================================================
            PART 1: ONBOARDING (5 Adımda Canlıya Geçiş)
           ========================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-overseas" />
              <span>{t.onboarding.tag}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
              {t.onboarding.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {t.onboarding.steps.map((st, idx) => (
              <div 
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/80 shadow-clean flex flex-col justify-between group hover:border-overseas/40 transition-all duration-300"
              >
                <div>
                  <span className="font-heading font-black text-2xl text-overseas block mb-2">
                    {st.num}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            PART 2: HUMAN CONTROLLED AI & OUTREACH != SPAM
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Human Controlled AI Box */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-3">
                <Sliders className="w-4 h-4" />
                <span>{t.aiPlusHuman.tag}</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-3">
                {t.aiPlusHuman.title}
              </h3>

              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-6">
                {t.aiPlusHuman.subtitle}
              </p>

              <div className="space-y-2.5 mb-6">
                {t.aiPlusHuman.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-content-secondary font-medium">
              {t.aiPlusHuman.controlNote}
            </div>
          </div>

          {/* Right: LinkedIn Outreach != Spam */}
          <div className="lg:col-span-6 glass-card-dark p-6 sm:p-10 rounded-3xl border border-white/10 shadow-elevated flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                <Shield className="w-4 h-4" />
                <span>Anti-Spam Taahhüdü</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                {t.spamWarning.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                {t.spamWarning.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {t.spamWarning.formula.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="font-heading font-bold text-sm text-sky-300 block mb-1">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-300 leading-snug block">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full py-3 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Temiz & Nitelikli Outreach Başlatın</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
