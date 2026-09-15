import React from 'react';
import { Layers, ArrowRight, CheckCircle, Sparkles, Send, Users, UserCheck, MessageSquare, Repeat, CalendarCheck } from 'lucide-react';

export const HowItWorks = ({ t, onOpenModal }) => {
  const stepIcons = [
    Users, TargetStepIcon, UserCheck, Send, MessageSquare, Repeat, CalendarCheck
  ];

  function TargetStepIcon() {
    return <Layers className="w-5 h-5" />;
  }

  return (
    <section id="how-it-works" className="relative py-24 bg-surface overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="bg-glow-orb-3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-overseas" />
            <span>{t.howItWorks.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {t.howItWorks.title}
          </h2>

          <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Flow */}
        <div className="space-y-4 max-w-5xl mx-auto mb-16">
          {t.howItWorks.steps.map((step, idx) => (
            <div 
              key={idx}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/80 shadow-clean flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group hover:border-overseas/40 transition-all duration-300"
            >
              
              {/* Step number badge & Title */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy font-heading font-black text-xl flex items-center justify-center border border-slate-200 group-hover:bg-navy group-hover:text-white transition-all shadow-sm shrink-0">
                  {step.num}
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-navy mb-1 group-hover:text-overseas transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Extra context or benefit callout */}
              {(step.example || step.benefit) && (
                <div className="w-full md:w-80 shrink-0 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs">
                  {step.example && (
                    <div className="text-navy font-medium">
                      <span className="font-bold text-overseas block text-[11px] uppercase mb-0.5">Stratejik Kriter:</span>
                      {step.example}
                    </div>
                  )}
                  {step.benefit && (
                    <div className="text-navy font-medium flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{step.benefit}</span>
                    </div>
                  )}
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Step Summary CTA Box */}
        <div className="glass-card-dark p-8 sm:p-10 rounded-3xl text-center max-w-3xl mx-auto shadow-elevated border border-white/10">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Amacımız mesaj göndermek değil, satış konuşması başlatmaktır.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            7 adımlı sistemimizle satış temsilcileriniz haftalarca soğuk lead aramak yerine, takvimlerine eklenen nitelikli B2B toplantılarına odaklanır.
          </p>
          <button
            onClick={onOpenModal}
            className="px-6 py-3.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg shadow-overseas/30 transition-all"
          >
            <span>7 Adımlı Süreci Şirketiniz İçin Kuralım</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
