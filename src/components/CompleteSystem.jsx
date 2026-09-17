import React from 'react';
import { Send, UserCheck, FileText, Building2, Target, Layers, ArrowRight } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const CompleteSystem = ({ t, onOpenModal, onNavigate }) => {
  const layerIcons = [Send, UserCheck, FileText, Building2, Target];

  return (
    <section id="system" className="relative py-24 bg-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-overseas" />
            <span>{t.completeSystem.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {t.completeSystem.title}
          </h2>

          <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
            {t.completeSystem.subtitle}
          </p>
        </div>

        {/* 5 Interconnected System Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.completeSystem.layers.map((layer, idx) => {
            const IconComponent = layerIcons[idx] || Target;
            const isLast = idx === 4;
            return (
              <div 
                key={idx}
                className={`glass-card p-6 sm:p-7 rounded-3xl border border-white/80 shadow-clean flex flex-col justify-between group hover:border-overseas/40 transition-all duration-300 ${isLast ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white/90 to-blue-50/40' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-overseas/10 text-overseas flex items-center justify-center group-hover:bg-overseas group-hover:text-white transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      KATMAN 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy mb-2.5 group-hover:text-overseas transition-colors">
                    {layer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
                    {layer.desc}
                  </p>

                  <button
                    onClick={() => {
                      const targets = ['outreach', 'profile', 'content', 'company', 'ads'];
                      if (onNavigate) onNavigate(targets[idx] || 'home');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-overseas hover:text-navy transition-colors group/btn"
                  >
                    <span>Detaylı Hizmet Sayfasını İncele</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {isLast && (
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-navy">
                      <Target className="w-4 h-4 text-overseas" />
                      <span>B2B Hedefli ABM Reklam Gücü</span>
                    </div>
                    <span className="text-xs text-overseas font-semibold">Maksimum ABM Dönüşümü</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
