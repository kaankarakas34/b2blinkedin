import React, { useState } from 'react';
import { Cpu, CheckCircle2, ArrowRight, Quote, Sparkles, Sliders, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const AIOutreach = ({ t, onOpenModal }) => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  return (
    <section id="outreach" className="relative py-24 bg-gradient-to-b from-surface via-slate-50 to-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-1 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-linkedin" />
            <span>{t.aiOutreach.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {t.aiOutreach.title}
          </h2>

          <p className="text-base sm:text-xl font-medium text-navy/80 mb-3">
            {t.aiOutreach.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-content-secondary max-w-2xl mx-auto leading-relaxed">
            {t.aiOutreach.description}
          </p>
        </div>

        {/* 2-Column High-Tech Interface & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: AI Control Visual Preview with Generated Image */}
          <div className="lg:col-span-7">
            <div className="glass-card p-3 sm:p-4 rounded-3xl shadow-elevated border border-white/80 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-950 shadow-inner">
                <img 
                  src="/images/linkedin_ai_outreach.jpg" 
                  alt="AI-Powered LinkedIn Outreach Control Center" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Floating telemetry pills */}
                <div className="absolute top-3 left-3 glass-card-dark px-3 py-1.5 rounded-xl text-[11px] font-medium flex items-center gap-2 border border-white/20">
                  <LinkedInIcon className="w-4 h-4 fill-sky-400" />
                  <span>AI Prospect Scoring: 98.4%</span>
                </div>

                <div className="absolute bottom-3 right-3 glass-card px-3 py-1.5 rounded-xl text-[11px] font-bold text-navy flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Human-in-the-Loop Active</span>
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-3 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs text-content-secondary">
                <span className="flex items-center gap-1.5 font-medium text-navy">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  LinkedIn Güvenlik Protokolü & Hız Limitleri Aktif
                </span>
                <span className="font-mono text-[11px] text-overseas font-bold">2026 AI-Engine</span>
              </div>
            </div>
          </div>

          {/* Right: 6 AI Automation Pillars */}
          <div className="lg:col-span-5 space-y-3">
            {t.aiOutreach.features.map((feat, idx) => (
              <div 
                key={idx}
                className="glass-card p-4 rounded-2xl border border-white/80 shadow-clean flex items-start gap-3.5 hover:border-overseas/40 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-overseas/10 text-overseas flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-navy leading-snug">
                  {feat}
                </span>
              </div>
            ))}

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-overseas/10 border border-overseas/20 text-xs text-navy">
                <span className="font-bold text-overseas block text-xs uppercase mb-1">Kritik Avantaj:</span>
                Satış ekibiniz saatlerce LinkedIn'de prospect aramaz. Sadece görüşmeye hazır, ilgisini belirtmiş sıcak kararları yanıtlar.
              </div>
            </div>
          </div>

        </div>

        {/* Real Persona Quotes Block ("Kime ulaşmak istediğinizi söyleyin") */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/90 shadow-elevated max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-overseas" />
            <span>Hedef Odaklı Kampanyalar</span>
          </div>

          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
            {t.aiOutreach.boxTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {t.aiOutreach.quotes.map((quote, qIdx) => (
              <div 
                key={qIdx}
                className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-start gap-2 mb-2">
                  <Quote className="w-4 h-4 text-overseas shrink-0 opacity-60" />
                  <p className="text-xs font-medium text-navy italic leading-relaxed">
                    {quote}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-overseas uppercase tracking-wider block text-right mt-2">
                  Hazır B2B Senaryosu
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-content-secondary font-medium text-center sm:text-left">
              {t.aiOutreach.boxFooter}
            </p>

            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap"
            >
              <span>Hedef Kitlenizi Tanımlayın</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
