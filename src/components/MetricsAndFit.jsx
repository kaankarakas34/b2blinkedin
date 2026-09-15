import React from 'react';
import { BarChart3, CheckCircle2, TrendingUp, Users, DollarSign, Target, Check, HelpCircle } from 'lucide-react';

export const MetricsAndFit = ({ t, onOpenModal }) => {
  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* =========================================================
            PART 1: METRICS THAT MATTER (Rakam değil, sonuç)
           ========================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
              <BarChart3 className="w-3.5 h-3.5 text-overseas" />
              <span>{t.metricsSection.tag}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
              {t.metricsSection.title}
            </h2>

            <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
              {t.metricsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.metricsSection.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean flex flex-col justify-between group hover:border-overseas/40 transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-slate-400 block mb-2">METRİK 0{idx + 1}</span>
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-1 group-hover:text-overseas transition-colors">
                    {metric.unit}
                  </div>
                  <h3 className="font-heading font-bold text-base text-navy mb-2">
                    {metric.label}
                  </h3>
                </div>
                <p className="text-xs text-content-secondary leading-relaxed pt-3 border-t border-slate-100">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            PART 2: WHO IS THIS FOR? (Kimler İçin?)
           ========================================================= */}
        <div className="glass-card p-6 sm:p-12 rounded-3xl border border-white/90 shadow-elevated">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5 text-linkedin" />
              <span>{t.targetAudience.tag}</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight mb-3">
              {t.targetAudience.title}
            </h2>

            <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
              {t.targetAudience.subtitle}
            </p>
          </div>

          {/* 10 Sectors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
            {t.targetAudience.sectors.map((sec, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm flex items-center gap-2.5 text-xs font-semibold text-navy hover:bg-overseas/5 hover:border-overseas/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-overseas shrink-0"></div>
                <span className="leading-tight">{sec}</span>
              </div>
            ))}
          </div>

          {/* 4-Point High-Conversion Test Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navy text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                {t.targetAudience.criteriaBox.title}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {t.targetAudience.criteriaBox.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-sky-300 font-semibold pt-2">
                {t.targetAudience.criteriaBox.summary}
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg shadow-overseas/30 transition-colors"
            >
              Şirketinizin Uygunluğunu Değerlendirelim
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
