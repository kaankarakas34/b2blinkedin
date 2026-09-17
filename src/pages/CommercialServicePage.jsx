import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, Target, Users, ShieldCheck, 
  HelpCircle, ChevronDown, Sparkles, BarChart3, Clock, AlertCircle, FileText
} from 'lucide-react';
import { commercialPagesData } from '../data/commercialPagesData';

export const CommercialServicePage = ({ slug, lang = 'tr', onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const data = commercialPagesData[slug] || commercialPagesData['linkedin-musteri-bulma'];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const title = isTr ? data.titleTr : data.titleEn;
  const h1 = isTr ? data.h1Tr : data.h1En;
  const badge = isTr ? data.badgeTr : data.badgeEn;
  const directAnswer = isTr ? data.directAnswerTr : data.directAnswerEn;
  const targetAudience = isTr ? data.targetAudienceTr : data.targetAudienceEn;
  const problemsSolved = isTr ? data.problemsSolvedTr : data.problemsSolvedEn;
  const processSteps = isTr ? data.processStepsTr : data.processStepsEn;
  const caseScenario = isTr ? data.caseScenarioTr : data.caseScenarioEn;
  const pricingNote = isTr ? data.pricingNoteTr : data.pricingNoteEn;
  const faqs = isTr ? data.faqsTr : data.faqsEn;
  const relatedLinks = isTr ? data.relatedLinksTr : data.relatedLinksEn;
  const updatedDate = isTr ? data.updatedDateTr : data.updatedDateEn;

  // JSON-LD Schema for Service & FAQ
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
        "serviceType": "B2B LinkedIn Customer Acquisition",
        "areaServed": "Global",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "description": pricingNote
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isTr ? "Ana Sayfa" : "Home", "item": "https://www.b2blinkedin.marketing/" },
          { "@type": "ListItem", "position": 2, "name": h1, "item": `https://www.b2blinkedin.marketing/${slug}/` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
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
      {/* Dynamic JSON-LD injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-content-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-navy transition-colors">
            {isTr ? 'Ana Sayfa' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-overseas">{isTr ? 'B2B Hizmetler' : 'Services'}</span>
          <span>/</span>
          <span className="text-navy font-bold truncate">{h1}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-overseas" />
            <span>{badge}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12] mb-6">
            {h1}
          </h1>

          {/* Author & Editorial Metadata */}
          <div className="flex items-center justify-center gap-4 text-xs text-content-secondary mb-8 pb-4 border-b border-slate-200/80 max-w-md mx-auto">
            <span>{isTr ? 'Yazar:' : 'Author:'} <strong className="text-navy">{data.author}</strong></span>
            <span>•</span>
            <span>{isTr ? 'Son Güncelleme:' : 'Updated:'} <strong className="text-navy">{updatedDate}</strong></span>
          </div>

          {/* Direct 80-120 Words Answer & Value Prop Box (GEO / AI Overviews Optimized) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-sky-200 shadow-elevated text-left mb-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-overseas to-navy"></div>
            <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-overseas" />
              <span>{isTr ? 'Özet ve Değer Önerisi (Kısaca)' : 'Executive Summary & Direct Answer'}</span>
            </div>
            <p className="text-sm sm:text-base text-navy leading-relaxed font-medium">
              {directAnswer}
            </p>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-navy/20"
            >
              <span>{isTr ? 'Hedef Kitlenizi Birlikte Belirleyelim' : 'Map Your Buying Committee'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="px-4 py-3 rounded-2xl glass-card text-xs font-semibold text-navy flex items-center gap-2">
              <Clock className="w-4 h-4 text-overseas" />
              <span>{isTr ? '30 Dakikalık Ücretsiz Strateji Analizi' : '30-Min Complimentary Audit'}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Body with Table of Contents */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Table of Contents (Sticky) */}
            <div className="lg:col-span-4">
              <div className="glass-card p-6 rounded-3xl border border-slate-200 sticky top-32">
                <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-slate-200">
                  <FileText className="w-4 h-4 text-overseas" />
                  <span>{isTr ? 'İçindekiler' : 'Table of Contents'}</span>
                </div>
                <ul className="space-y-2.5 text-xs font-medium text-content-secondary">
                  {data.tableOfContents.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        href={`#${item.id}`}
                        className="hover:text-overseas transition-colors block py-0.5"
                      >
                        {idx + 1}. {isTr ? item.labelTr : item.labelEn}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <button
                    onClick={onOpenModal}
                    className="w-full py-2.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs font-bold transition-colors"
                  >
                    {isTr ? 'Görüşme Planlayın' : 'Book a Briefing'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Deep Detailed Sections */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Section 1: Who is This For */}
              <div id="kimler-icin" className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200">
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-4">
                  {isTr ? 'Kimler İçin Uygundur?' : 'Ideal Customer Fit'}
                </h2>
                <ul className="space-y-3 text-sm text-navy">
                  {targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2: Pain Points Resolved */}
              <div id="hangi-sorunlar" className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200">
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-4">
                  {isTr ? 'Hangi Sorunları Çözer?' : 'Acute Pain Points Resolved'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {problemsSolved.map((prob, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-red-50/50 border border-red-100 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-navy font-medium leading-relaxed">{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Process Steps */}
              <div id="surec" className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200">
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-6">
                  {isTr ? '4 Aşamalı Büyüme Süreci Nasıl Çalışır?' : 'The 4-Stage Acquisition Framework'}
                </h2>
                <div className="space-y-4">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-navy mb-1">{step.title}</h3>
                        <p className="text-xs text-content-secondary leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Performance Benchmarks (KPIs) */}
              <div id="kpi" className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200">
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-4">
                  {isTr ? 'Kampanya Ölçüm Kriterleri (KPI’lar)' : 'Performance Benchmarks & Metrics'}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {data.kpis.map((kpi, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-center">
                      <span className="font-heading font-extrabold text-xl sm:text-2xl text-overseas block mb-1">
                        {kpi.val}
                      </span>
                      <span className="text-xs font-bold text-navy block mb-0.5">
                        {isTr ? kpi.metricTr : kpi.metricEn}
                      </span>
                      <span className="text-[10px] text-content-secondary">
                        {isTr ? kpi.noteTr : kpi.noteEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Verified Case Scenario */}
              <div id="ornek-vaka" className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3">
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isTr ? 'DOĞRULANMIŞ VAKA SENARYOSU' : 'VERIFIED CASE BLUEPRINT'}</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-3">
                  {isTr ? 'Sektörel Vaka Analizi' : 'Vertical Case Breakdown'}
                </h2>
                <div className="space-y-3 text-xs text-navy">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="block text-overseas mb-1">{isTr ? 'Sektör & Kapsam:' : 'Industry & Scope:'}</strong>
                    {caseScenario.industry}
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="block text-red-600 mb-1">{isTr ? 'Başlangıç Sorunu:' : 'Baseline Bottleneck:'}</strong>
                    {caseScenario.problem}
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <strong className="block text-sky-600 mb-1">{isTr ? 'Uygulanan Strateji:' : 'Deployed Strategy:'}</strong>
                    {caseScenario.strategy}
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                    <strong className="block text-emerald-800 mb-1">{isTr ? 'Ölçülebilir Sonuç:' : 'Quantifiable Outcome:'}</strong>
                    {caseScenario.result}
                  </div>
                </div>
              </div>

              {/* Section 6: Pricing Factors */}
              <div className="p-5 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs text-content-secondary leading-relaxed">
                <strong className="text-navy block mb-1">{isTr ? 'Fiyatlandırma Esasları:' : 'Pricing Transparency:'}</strong>
                {pricingNote}
              </div>

              {/* Section 7: FAQs */}
              <div id="faq" className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200">
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-6">
                  {isTr ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx}
                      className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-navy hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-overseas transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === idx && (
                        <div className="px-4 pb-4 pt-1 text-xs text-content-secondary leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8: Related Internal Links */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-3">
                  {isTr ? 'İlgili B2B Hizmetler ve Sektör Sayfaları' : 'Related B2B Services & Vertical Guides'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {relatedLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      onClick={(e) => {
                        e.preventDefault();
                        const pageKey = link.url.replace(/^\/(?:en\/)?/, '').replace(/\/$/, '') || 'home';
                        onNavigate(pageKey);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-overseas/10 border border-slate-200 text-xs font-medium text-overseas hover:border-overseas/40 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Final Bottom CTA */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy to-slate-900 text-white text-center">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
                  {isTr ? 'Hedef Karar Vericilerinizle Tanışın' : 'Meet Your Target Decision-Makers'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
                  {isTr 
                    ? '30 dakikalık ücretsiz strateji toplantısında hedef sektörünüze özel karar verici havuzunu ve öngörülen randevu sayısını çıkaralım.'
                    : 'Schedule a 30-minute discovery session to review your target buying committee and projected pipeline volume.'}
                </p>
                <button
                  onClick={onOpenModal}
                  className="btn-glass-primary px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-xl"
                >
                  <span>{isTr ? 'Ücretsiz Strateji Görüşmesi Planla' : 'Schedule Discovery Briefing'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
