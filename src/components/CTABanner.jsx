import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const CTABanner = ({ t, onOpenModal }) => {
  return (
    <section className="relative py-20 bg-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-1 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card-dark p-8 sm:p-14 rounded-3xl border border-white/20 shadow-elevated text-center relative overflow-hidden">
          
          {/* Subtle decorative background badges */}
          <div className="absolute top-6 right-6 opacity-10 pointer-events-none hidden md:block">
            <LinkedInIcon className="w-48 h-48 fill-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.ctaBanner.badge}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 max-w-3xl mx-auto">
            {t.ctaBanner.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.ctaBanner.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-overseas hover:bg-overseas-hover text-white text-sm sm:text-base font-bold flex items-center justify-center gap-3 shadow-xl shadow-overseas/40 transition-all group"
            >
              <LinkedInIcon className="w-5 h-5 fill-white" />
              <span>{t.ctaBanner.btn}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.ctaBanner.note}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
