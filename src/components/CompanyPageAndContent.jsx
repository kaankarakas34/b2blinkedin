import React from 'react';
import { Building2, FileText, CheckCircle2, Award, TrendingUp, Sparkles } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const CompanyPageAndContent = ({ t, onOpenModal }) => {
  return (
    <section id="company" className="relative py-24 bg-surface overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="bg-glow-orb-3 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* =========================================================
            PART 1: COMPANY PAGE MANAGEMENT (Güven Katmanı)
           ========================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5 text-overseas" />
              <span>{t.companyPage.tag}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy tracking-tight mb-4">
              {t.companyPage.title}
            </h2>

            <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
              {t.companyPage.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {t.companyPage.items.map((item, idx) => (
              <div 
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/80 shadow-clean flex flex-col justify-between group hover:border-overseas/40 transition-all duration-300"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-overseas/10 text-overseas flex items-center justify-center font-bold text-xs mb-3 group-hover:bg-overseas group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            PART 2: CONTENT MANAGEMENT FOR REVENUE (Satış Destekli İçerik)
           ========================================================= */}
        <div id="content" className="glass-card p-6 sm:p-12 rounded-3xl border border-white/90 shadow-elevated">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-4">
              <FileText className="w-3.5 h-3.5 text-linkedin" />
              <span>{t.contentMgmt.tag}</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight mb-4">
              {t.contentMgmt.title}
            </h2>

            <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
              {t.contentMgmt.subtitle}
            </p>
          </div>

          {/* 5 Content Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {t.contentMgmt.types.map((type, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 text-overseas font-bold text-xs uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-overseas" />
                  <span>İçerik Sütunu 0{idx + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-base text-navy mb-2 group-hover:text-overseas transition-colors">
                  {type.title}
                </h3>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}

            {/* Turnkey Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy to-navy-light text-white flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block mb-2">Turnkey Hizmet</span>
                <h3 className="font-heading font-bold text-base text-white mb-2">
                  İçerik Üretmek Zorunda Değilsiniz
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Sektörel derinlik taşıyan araştırmaları, infografikleri ve vaka analizlerini Overseas Marketing içerik ekibi sizin adınıza uçtan uca üretir.
                </p>
              </div>

              <button 
                onClick={onOpenModal}
                className="w-full py-2.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs font-bold transition-colors"
              >
                İçerik Takviminizi Hazırlayalım
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
