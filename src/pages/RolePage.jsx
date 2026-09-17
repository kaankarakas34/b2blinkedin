import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Target, Users, ShieldCheck, 
  HelpCircle, ChevronDown, Sparkles, BarChart3, Clock, AlertCircle, FileText, Bookmark
} from 'lucide-react';
import { rolesData } from '../data/rolesData';

export const RolePage = ({ slug, lang = 'tr', onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const data = rolesData[slug] || rolesData['satinalma-mudurlerine-ulasma'];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const title = isTr ? data.titleTr : data.titleEn;
  const h1 = isTr ? data.h1Tr : data.h1En;
  const badge = isTr ? data.badgeTr : data.badgeEn;
  const directAnswer = isTr ? data.directAnswerTr : data.directAnswerEn;
  const toc = data.tableOfContents || [];
  const overview = isTr ? data.roleOverviewTr : data.roleOverviewEn;
  const targetingFormula = isTr ? data.targetingFormulaTr : data.targetingFormulaEn;
  const connectionApproach = isTr ? data.connectionApproachTr : data.connectionApproachEn;
  const firstMessageGoal = isTr ? data.firstMessageGoalTr : data.firstMessageGoalEn;
  const timingOfOffer = isTr ? data.timingOfOfferTr : data.timingOfOfferEn;
  const adSupport = isTr ? data.adContentSupportTr : data.adContentSupportEn;
  const kpis = data.kpis || [];
  const faqs = isTr ? data.faqsTr : data.faqsEn;
  const related = isTr ? data.relatedServicesTr : data.relatedServicesEn;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": h1,
        "description": isTr ? data.descTr : data.descEn,
        "author": {
          "@type": "Organization",
          "name": data.author || "Overseas Marketing"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Overseas Marketing",
          "url": "https://www.b2blinkedin.marketing/"
        },
        "mainEntityOfPage": `https://www.b2blinkedin.marketing/${slug}/`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isTr ? "Ana Sayfa" : "Home", "item": "https://www.b2blinkedin.marketing/" },
          { "@type": "ListItem", "position": 2, "name": isTr ? "Karar Vericiler" : "Decision Makers", "item": "https://www.b2blinkedin.marketing/#roller" },
          { "@type": "ListItem", "position": 3, "name": h1, "item": `https://www.b2blinkedin.marketing/${slug}/` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": (faqs || []).map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
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
          <span className="text-overseas">{isTr ? 'Karar Vericilere Ulaşma' : 'Decision Makers'}</span>
          <span>/</span>
          <span className="text-navy font-bold truncate">{h1}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-overseas" />
            <span>{badge}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12] mb-6">
            {h1}
          </h1>

          <div className="flex items-center justify-center gap-4 text-xs font-medium text-content-secondary mb-8">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {isTr ? 'Doğrulanmış Karar Verici Stratejisi' : 'Verified Prospecting Framework'}
            </span>
            <span>•</span>
            <span>{isTr ? 'Güncelleme: ' : 'Updated: '} {isTr ? data.updatedDateTr : data.updatedDateEn}</span>
          </div>

          {/* Section 9: 80-120 Word Direct Answer */}
          <div className="bg-gradient-to-br from-white to-sky-50/40 border-2 border-overseas/20 rounded-2xl p-6 sm:p-8 text-left shadow-lg relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-overseas/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>{isTr ? 'Hızlı Yönetici Özeti (Doğrudan Yanıt)' : 'Executive Briefing (Direct Answer)'}</span>
            </div>
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
              {directAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout with TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar TOC (Desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-slate-100">
                <Bookmark className="w-4 h-4 text-overseas" />
                <span>{isTr ? 'İçindekiler Rehberi' : 'Table of Contents'}</span>
              </div>
              <ul className="space-y-2.5 text-xs font-medium">
                {toc.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={`#${item.id}`}
                      className="text-slate-600 hover:text-overseas transition-colors block py-1"
                    >
                      {isTr ? item.labelTr : item.labelEn}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
                  <div className="text-xs font-bold text-navy mb-1">
                    {isTr ? 'Bu Karar Vericilere Ulaşın' : 'Reach These Decision-Makers'}
                  </div>
                  <p className="text-[11px] text-content-secondary mb-3">
                    {isTr 
                      ? 'Listenizi çıkarıp onaylı toplantılar planlayalım.'
                      : 'Build your named list and book validated briefings.'}
                  </p>
                  <button
                    onClick={onOpenModal}
                    className="w-full py-2 px-3 rounded-lg bg-overseas text-white text-xs font-bold hover:bg-sky-500 transition-colors text-center"
                  >
                    {isTr ? 'Toplantı Planla' : 'Schedule Strategy Call'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Core Body Sections */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Role Influence */}
            <section id="rol-etkisi" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                {isTr ? '1. Bu Rolün Satın Alma ve Bütçe Gücü' : '1. Decision-Making Authority & Budget Signoff'}
              </h2>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                  <strong className="text-navy block mb-1">
                    {isTr ? 'Rol Tanımı & Kapsamı:' : 'Scope of Role:'}
                  </strong>
                  <span>{overview?.roleTitle}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                  <strong className="text-navy block mb-1">
                    {isTr ? 'Satın Alma Yetkisi:' : 'Budget Signoff Authority:'}
                  </strong>
                  <span>{overview?.buyingInfluence}</span>
                </div>
              </div>
            </section>

            {/* 2. Target Companies */}
            <section id="sirket-turleri" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                {isTr ? '2. Hangi Büyüklük ve Türdeki Şirketlerde Bulunur?' : '2. Target Company Archetypes & Headcount'}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {overview?.targetCompanies}
              </p>
              <div className="text-xs text-content-secondary bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                {isTr 
                  ? 'İpucu: Küçük işletmelerde karar doğrudan kurucudayken, 100+ kişilik organizasyonlarda bu unvanlar teknik şartnameyi ve onay listesini tek başına yönetir.'
                  : 'Key takeaway: In companies with 100+ headcount, this executive controls vendor shortlists and specification criteria.'}
              </div>
            </section>

            {/* 3. Targeting Formula */}
            <section id="hedefleme" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                {isTr ? '3. LinkedIn & Sales Navigator Arama Formülü' : '3. Targeting & Boolean Search Formula'}
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                {isTr 
                  ? 'Doğru kişiyi bulmak için unvan çöplüğüne düşmeden uyguladığımız kesin filtreleme mantığı:'
                  : 'The verified boolean syntax we use to eliminate vanity results and target economic buyers:'}
              </p>
              <div className="bg-slate-900 text-sky-300 font-mono text-xs sm:text-sm p-4 rounded-xl overflow-x-auto border border-slate-800 leading-relaxed">
                {targetingFormula}
              </div>
            </section>

            {/* 4. Messaging Cadence */}
            <section id="mesaj-akisi" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                {isTr ? '4. İletişim Yaklaşımı ve 3 Cümlelik Değer Önerisi' : '4. Messaging Protocol & Value Cadence'}
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="text-xs font-bold text-overseas uppercase tracking-wider block mb-1">
                    {isTr ? 'Adım 1: Bağlantı Notu Yaklaşımı' : 'Step 1: Connection Request Angle'}
                  </span>
                  <p className="text-sm text-slate-700">{connectionApproach}</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="text-xs font-bold text-overseas uppercase tracking-wider block mb-1">
                    {isTr ? 'Adım 2: İlk Mesajın Amacı' : 'Step 2: First Direct Message Objective'}
                  </span>
                  <p className="text-sm text-slate-700">{firstMessageGoal}</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="text-xs font-bold text-overseas uppercase tracking-wider block mb-1">
                    {isTr ? 'Adım 3: Teklif ve Toplantı Zamanlaması' : 'Step 3: Timing of the Discovery Call'}
                  </span>
                  <p className="text-sm text-slate-700">{timingOfOffer}</p>
                </div>
              </div>
            </section>

            {/* 5. Ads & Content Lift */}
            <section id="reklam-icerik" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                {isTr ? '5. Thought Leader Ads ve İçerik Desteği' : '5. Thought Leader Ads & Authority Support'}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {adSupport}
              </p>
            </section>

            {/* 6. Conversion Benchmarks */}
            <section id="olcum" className="bg-navy text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl mb-4">
                {isTr ? '6. Ölçüm Standartları ve Dönüşüm KPI’ları' : '6. Conversion Benchmarks & Target KPIs'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {kpis.map((kpi, idx) => (
                  <div key={idx} className="bg-white/10 rounded-xl p-4 border border-white/15 text-center">
                    <div className="font-heading font-extrabold text-2xl text-sky-400 mb-1">
                      {kpi.val}
                    </div>
                    <div className="text-xs font-semibold text-slate-200">
                      {isTr ? kpi.labelTr : kpi.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. FAQs */}
            {faqs && faqs.length > 0 && (
              <section id="faq" className="space-y-4">
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy mb-4">
                  {isTr ? '7. Sık Sorulan Sorular' : '7. Frequently Asked Questions'}
                </h2>
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-navy text-sm sm:text-base hover:text-overseas transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-overseas' : 'text-slate-400'}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-content-secondary leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </section>
            )}

            {/* Related Services */}
            {related && related.length > 0 && (
              <section className="pt-6 border-t border-slate-200">
                <h3 className="text-xs font-bold text-content-secondary uppercase tracking-wider mb-4">
                  {isTr ? 'İlgili B2B Müşteri Kazanım Çözümleri' : 'Related B2B Acquisition Services'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {related.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.url.replace(/^\//, ''));
                      }}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-overseas hover:text-white text-navy transition-colors border border-slate-200"
                    >
                      {item.label} →
                    </a>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 mt-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy tracking-tight mb-4">
            {isTr 
              ? 'Hedef Karar Vericilerinizle 14-28 Nitelikli Toplantı Planlayalım'
              : 'Secure 14-28 Validated Executive Briefings Monthly'}
          </h2>
          <p className="text-content-secondary text-sm sm:text-base max-w-2xl mx-auto mb-8">
            {isTr 
              ? 'ICP profilinizi belirleyelim, onaylı karar verici listelerini çıkarıp ekibinizin takvimine bağlayalım.'
              : 'Define your ICP criteria, build validated decision-maker rosters, and pipeline meetings onto your calendar.'}
          </p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-overseas hover:bg-sky-400 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-overseas/30 hover:scale-105"
          >
            <span>{isTr ? 'Hedef Kitle ve Toplantı Stratejisi Alın' : 'Schedule Targeting Consultation'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
