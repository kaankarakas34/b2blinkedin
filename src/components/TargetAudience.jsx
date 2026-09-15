import React from 'react';
import { Target, CheckCircle, Crosshair, Users, Building, MapPin, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const TargetAudience = ({ t, onOpenModal }) => {
  const criteriaIcons = [
    Building, Crosshair, Users, MapPin, MapPin, Briefcase, Award, CheckCircle
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-surface via-white/80 to-surface overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="bg-glow-orb-2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Strategic Precision (Doğru kişiye. Doğru mesajla. Doğru zamanda.) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Crosshair className="w-3.5 h-3.5 text-overseas" />
            <span>{t.philosophy.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight mb-4">
            {t.philosophy.title}
          </h2>

          <p className="text-base sm:text-lg text-content-secondary font-medium mb-3">
            {t.philosophy.intro}
          </p>

          <p className="text-xs sm:text-sm text-navy/70">
            {t.philosophy.criteriaTitle}
          </p>
        </div>

        {/* 8 Precision Criteria Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {t.philosophy.items.map((item, idx) => {
            const IconComponent = criteriaIcons[idx] || Target;
            return (
              <div 
                key={idx} 
                className="glass-card p-5 rounded-2xl border border-white/70 shadow-clean group hover:border-overseas/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-overseas/10 text-overseas flex items-center justify-center mb-3 group-hover:bg-overseas group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-navy mb-1.5 flex items-center justify-between">
                  <span>{item.label}</span>
                  <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                </h3>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section 2: "LinkedIn'de müşterileriniz zaten var. Sorun onlara ulaşıp ulaşamadığınız." */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-3">
              <LinkedInIcon className="w-3.5 h-3.5 fill-linkedin" />
              <span>{t.alreadyThere.tag}</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight mb-3">
              {t.alreadyThere.title}
            </h2>

            <p className="text-sm sm:text-base text-content-secondary font-medium">
              {t.alreadyThere.subtitle}
            </p>
          </div>

          {/* 4 Case Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {t.alreadyThere.examples.map((ex, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/70 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-overseas uppercase tracking-wider">
                    {ex.type}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>

                <h4 className="font-heading font-bold text-base sm:text-lg text-navy mb-2 flex items-center gap-1.5">
                  <span>{ex.target}</span>
                </h4>

                <p className="text-xs text-content-secondary leading-relaxed">
                  {ex.problem}
                </p>
              </div>
            ))}
          </div>

          {/* Closing callout banner */}
          <div className="p-6 rounded-2xl bg-navy text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="font-heading font-bold text-base sm:text-lg text-white mb-1">
                {t.alreadyThere.closing}
              </p>
              <p className="text-xs text-slate-300">
                Tek bir rastgele adım atmadan, hedef kitlenizi sistematik satış konuşmalarına dahil ediyoruz.
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="px-5 py-3 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap shadow-md shadow-overseas/30 transition-colors"
            >
              <span>ICP Hedeflerinizi Belirleyelim</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
