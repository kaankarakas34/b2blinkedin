import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Target, Users, ShieldCheck, 
  HelpCircle, ChevronDown, Sparkles, BarChart3, Clock, AlertCircle, Building2, Briefcase
} from 'lucide-react';
import { sectorsData } from '../data/sectorsData';

export const SectorPage = ({ slug, lang = 'tr', onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const data = sectorsData[slug] || sectorsData['uretim-firmalari-linkedin-pazarlama'];
  const [openFaq, setOpenFaq] = useState(null);

  const title = isTr ? data.titleTr : data.titleEn;
  const h1 = isTr ? data.h1Tr : data.h1En;
  const badge = isTr ? data.badgeTr : data.badgeEn;
  const directAnswer = isTr ? data.directAnswerTr : data.directAnswerEn;
  const salesCycle = isTr ? data.salesCycleTr : data.salesCycleEn;
  const messageTone = isTr ? data.messageToneTr : data.messageToneEn;
  const targetRoles = isTr ? data.targetRolesTr : data.targetRolesEn;
  const objections = isTr ? data.commonObjectionsTr : data.commonObjectionsEn;
  const balance = isTr ? data.adOutreachBalanceTr : data.adOutreachBalanceEn;
  const kpis = data.kpis || [];
  const caseData = isTr ? data.caseScenarioTr : data.caseScenarioEn;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": h1,
        "description": isTr ? data.descTr : data.descEn,
        "provider": {
          "@type": "Organization",
          "name": "Overseas Marketing",
          "url": "https://www.b2blinkedin.marketing/"
        },
        "serviceType": "Industry Specific B2B LinkedIn Lead Generation",
        "areaServed": "Global"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isTr ? "Ana Sayfa" : "Home", "item": "https://www.b2blinkedin.marketing/" },
          { "@type": "ListItem", "position": 2, "name": isTr ? "Sektörel Çözümler" : "Industries", "item": "https://www.b2blinkedin.marketing/#sektorler" },
          { "@type": "ListItem", "position": 3, "name": h1, "item": `https://www.b2blinkedin.marketing/sektorler/${slug}/` }
        ]
      }
    ]
  };

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-content-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-navy transition-colors">
            {isTr ? 'Ana Sayfa' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-overseas">{isTr ? 'Sektörel B2B Çözümleri' : 'Industries'}</span>
          <span>/</span>
          <span className="text-navy font-bold truncate">{h1}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-overseas" />
            <span>{badge}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12] mb-6">
            {h1}
          </h1>

          <div className="flex items-center justify-center gap-4 text-xs font-medium text-content-secondary mb-8">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {isTr ? 'Doğrulanmış B2B Sektör Mimarisi' : 'Verified Industry Architecture'}
            </span>
            <span>•</span>
            <span>Overseas Marketing B2B Practice</span>
          </div>

          {/* Section 9: 80-120 Word Direct Answer Box */}
          <div className="bg-gradient-to-br from-white to-sky-50/40 border-2 border-overseas/20 rounded-2xl p-6 sm:p-8 text-left shadow-lg relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-overseas/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>{isTr ? 'Sektörel Stratejik Özet (Doğrudan Yanıt)' : 'Executive Summary (Direct Answer)'}</span>
            </div>
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
              {directAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Sector Realities & ICP Specs */}
      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy tracking-tight mb-3">
              {isTr ? 'Bu Sektörün Satın Alma Dinamikleri ve ICP Profili' : 'Industry Dynamics & ICP Specifications'}
            </h2>
            <p className="text-content-secondary text-sm sm:text-base">
              {isTr 
                ? 'Standart pazarlama mesajları endüstriyel karar vericilerde karşılık bulmaz. Her sektörün kendi satın alma temposu ve termin dili vardır.'
                : 'Generic marketing scripts fail with technical stakeholders. Every vertical requires distinct sales cycles and tone.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Sales Cycle & Tone */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-overseas mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Ortalama Satış Döngüsü' : 'Average Sales Cycle'}
              </h3>
              <div className="text-sm font-semibold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg inline-block mb-3">
                {salesCycle}
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                <strong>{isTr ? 'İletişim Tonu: ' : 'Tone of Voice: '}</strong>
                {messageTone}
              </p>
            </div>

            {/* Box 2: Target Decision Makers */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-navy mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Hedeflenen Karar Vericiler' : 'Target Decision-Makers'}
              </h3>
              <ul className="space-y-2">
                {targetRoles.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Strategic Balance */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Stratejik Kanal Dengesi' : 'Channel Balance'}
              </h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
                {balance}
              </p>
              <div className="text-[11px] text-content-secondary bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                {isTr 
                  ? 'Bütçe israfını önlemek için unvan ve hesap doğrulaması zorunlu tutulur.'
                  : 'Zero vanity spend. Strictly filtered by verified headcount & title authority.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objections & Solutions */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy tracking-tight mb-2">
              {isTr ? 'Bu Sektörde En Sık Karşılaşılan İtirazlar ve Çözümümüz' : 'Industry Objections & Strategic Neutralization'}
            </h2>
            <p className="text-sm text-content-secondary">
              {isTr 
                ? 'Karar vericiler masaya oturmadan önce bu şüpheleri gidermek zorundasınız.'
                : 'Overcome enterprise risk aversion before booking discovery calls.'}
            </p>
          </div>

          <div className="space-y-4">
            {objections.map((obj, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-overseas/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    !
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-navy mb-1.5">
                      "{obj}"
                    </h4>
                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                      {isTr 
                        ? 'Çözüm: Mesaj akışında doğrudan vaka belgeleri, bağımsız kalite testleri veya 15 dakikalık kıyaslama analizi sunarak bu itirazı ilk temas anında çürütüyoruz.'
                        : 'Solution: Neutralized proactively within outreach sequences using audited technical specs, third-party tests, and frictionless 15-minute briefings.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benchmarks (KPIs) */}
      {kpis.length > 0 && (
        <section className="py-12 bg-navy text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                {isTr ? 'Sektörel Dönüşüm Standartları' : 'Industry Performance Benchmarks'}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight mt-1">
                {isTr ? 'Ölçülebilir Çıktılar ve Hedeflenen Metrikler' : 'Target Deliverables & Realistic Benchmarks'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-sky-400 mb-2">
                    {kpi.val}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {isTr ? kpi.labelTr : kpi.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Blueprint */}
      {caseData && (
        <section className="py-14 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold mb-4">
                <BarChart3 className="w-4 h-4" />
                <span>{isTr ? 'Örnek Sektörel Vaka Senaryosu' : 'Industry Case Blueprint'}</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-navy mb-4">
                {caseData.client} ({caseData.market})
              </h3>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-red-50/50 border border-red-100">
                  <strong className="text-red-900 block mb-1">{isTr ? 'Problem:' : 'The Challenge:'}</strong>
                  <p className="text-red-800 text-xs sm:text-sm">{caseData.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                  <strong className="text-sky-900 block mb-1">{isTr ? 'Uygulanan Strateji:' : 'The Solution:'}</strong>
                  <p className="text-sky-800 text-xs sm:text-sm">{caseData.solution}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <strong className="text-emerald-900 block mb-1">{isTr ? 'Elde Edilen Sonuç:' : 'Measurable Outcome:'}</strong>
                  <p className="text-emerald-800 text-xs sm:text-sm font-semibold">{caseData.outcome || caseData.result}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-navy to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight mb-4">
              {isTr 
                ? 'Sektörünüze Özel B2B Müşteri Kazanım Sistemini Konuşalım'
                : 'Discuss Your Tailored Industry Lead Acquisition Strategy'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              {isTr 
                ? 'Hedef şirket listenizi (ICP), karar verici unvanlarını ve 90 günlük toplantı hedefinizi birlikte planlayalım.'
                : 'Map your named account list, buyer personas, and 90-day meeting targets with our B2B team.'}
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-overseas hover:bg-sky-400 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-overseas/30 hover:scale-105"
            >
              <span>{isTr ? 'Ücretsiz Sektörel B2B Analizi Alın' : 'Get Free Industry B2B Audit'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
