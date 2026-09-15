import React, { useState } from 'react';
import { solutionsData } from '../data/solutionsData';
import { Code, Factory, Activity, Briefcase, Sparkles, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const SolutionsSection = ({ lang, t, onOpenModal }) => {
  const [selectedId, setSelectedId] = useState(solutionsData[0].id);

  const iconsMap = {
    Code, Factory, Activity, Briefcase, Sparkles, Users
  };

  const activeSolution = solutionsData.find(s => s.id === selectedId) || solutionsData[0];
  const ActiveIcon = iconsMap[activeSolution.icon] || Briefcase;

  return (
    <section id="solutions" className="relative py-24 bg-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-overseas" />
            <span>{lang === 'tr' ? 'SEKTÖREL MİMARİ' : 'INDUSTRY ARCHITECTURE'}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {lang === 'tr' ? 'Sektörünüze Özel LinkedIn B2B Çözümleri' : 'Tailored LinkedIn B2B Solutions for Your Industry'}
          </h2>

          <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
            {lang === 'tr' 
              ? 'Her sektörün karar verici hiyerarşisi ve satın alma dinamikleri farklıdır. LinkedIn sistemimizi sektörünüze özel parametrelerle kuruyoruz.'
              : 'Every industry possesses distinct buying hierarchies. We calibrate our LinkedIn acquisition engine to your vertical specifics.'}
          </p>
        </div>

        {/* Industry Pill Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {solutionsData.map((item) => {
            const Icon = iconsMap[item.icon] || Briefcase;
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected 
                    ? 'bg-navy text-white shadow-md shadow-navy/20' 
                    : 'glass-card text-navy/80 hover:text-navy hover:bg-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-sky-400' : 'text-overseas'}`} />
                <span>{lang === 'tr' ? item.titleTr : item.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Spotlight Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-overseas/10 text-overseas flex items-center justify-center shadow-sm">
                <ActiveIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-overseas uppercase tracking-wider block">
                  {lang === 'tr' ? 'Sektörel Strateji' : 'Industry Strategy'}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                  {lang === 'tr' ? activeSolution.titleTr : activeSolution.titleEn}
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'tr' ? activeSolution.metricsTr : activeSolution.metricsEn}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-content-secondary uppercase tracking-wider block mb-1.5">
                {lang === 'tr' ? 'HEDEF KARAR VERİCİLER:' : 'TARGET DECISION-MAKERS:'}
              </span>
              <p className="text-sm sm:text-base font-bold text-navy bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                {lang === 'tr' ? activeSolution.targetRolesTr : activeSolution.targetRolesEn}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-content-secondary uppercase tracking-wider block mb-1.5">
                {lang === 'tr' ? 'BÜYÜME VE SATIŞ STRATEJİSİ:' : 'GROWTH & ACQUISITION STRATEGY:'}
              </span>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                {lang === 'tr' ? activeSolution.descTr : activeSolution.descEn}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-navy font-semibold flex items-center gap-1.5">
                <LinkedInIcon className="w-4 h-4 fill-linkedin" />
                {lang === 'tr' ? 'Sektörünüze özel hazır LinkedIn şablonları & hedef listesi' : 'Pre-calibrated LinkedIn targeting lists and playbooks'}
              </span>

              <button
                onClick={onOpenModal}
                className="btn-glass-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap"
              >
                <span>{lang === 'tr' ? 'Bu Sektör İçin Strateji Al' : 'Get Strategy for This Vertical'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
