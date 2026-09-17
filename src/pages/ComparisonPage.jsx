import React, { useState, useEffect } from 'react';
import { Scale, Check, X, ArrowRight, Sparkles, HelpCircle, ShieldCheck, BarChart3 } from 'lucide-react';
import { comparisonsData } from '../data/comparisonsData';

export const ComparisonPage = ({ slug, lang = 'tr', onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const initialSlug = slug && comparisonsData[slug] ? slug : 'linkedin-ads-vs-google-ads';
  const [selectedComp, setSelectedComp] = useState(initialSlug);

  useEffect(() => {
    if (slug && comparisonsData[slug]) {
      setSelectedComp(slug);
    }
  }, [slug]);

  const cur = comparisonsData[selectedComp] || comparisonsData['linkedin-ads-vs-google-ads'];

  const title = isTr ? cur.titleTr : cur.titleEn;
  const h1 = isTr ? cur.h1Tr : cur.h1En;
  const badge = isTr ? cur.badgeTr : cur.badgeEn;
  const directAnswer = isTr ? cur.directAnswerTr : cur.directAnswerEn;
  const criteria = cur.criteriaComparison || [];
  const verdict = isTr ? cur.verdictTr : cur.verdictEn;
  const relatedLinks = isTr ? cur.relatedLinksTr : cur.relatedLinksEn;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": h1,
        "description": isTr ? cur.descTr : cur.descEn,
        "author": {
          "@type": "Organization",
          "name": cur.author || "Overseas Marketing"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Overseas Marketing",
          "url": "https://www.b2blinkedin.marketing/"
        },
        "mainEntityOfPage": `https://www.b2blinkedin.marketing/karsilastirma/${selectedComp}/`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isTr ? "Ana Sayfa" : "Home", "item": "https://www.b2blinkedin.marketing/" },
          { "@type": "ListItem", "position": 2, "name": isTr ? "Karşılaştırmalar" : "Comparisons", "item": "https://www.b2blinkedin.marketing/karsilastirma/linkedin-ads-vs-google-ads/" },
          { "@type": "ListItem", "position": 3, "name": h1, "item": `https://www.b2blinkedin.marketing/karsilastirma/${selectedComp}/` }
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
          <span className="text-overseas">{isTr ? 'Strateji Karşılaştırmaları' : 'Comparisons'}</span>
          <span>/</span>
          <span className="text-navy font-bold truncate">{h1}</span>
        </div>
      </div>

      <section className="py-8 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 uppercase tracking-wider mb-4">
          <Scale className="w-3.5 h-3.5 text-overseas" />
          <span>{badge}</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight mb-4">
          {h1}
        </h1>

        <div className="flex items-center justify-center gap-4 text-xs font-medium text-content-secondary mb-8">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            {isTr ? 'B2B Karar Matrisi ve Analizi' : 'Enterprise B2B Decision Matrix'}
          </span>
          <span>•</span>
          <span>{isTr ? cur.updatedDateTr : cur.updatedDateEn}</span>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(comparisonsData).map((k) => (
            <button
              key={k}
              onClick={() => {
                setSelectedComp(k);
                onNavigate(`karsilastirma/${k}`);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedComp === k 
                  ? 'bg-navy text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-navy hover:bg-slate-50'
              }`}
            >
              {k === 'linkedin-ads-vs-google-ads' 
                ? 'LinkedIn Ads vs. Google Ads' 
                : 'LinkedIn Outreach vs. Cold Email'}
            </button>
          ))}
        </div>

        {/* Section 9/12: 80-120 Word Direct Answer Box */}
        <div className="bg-gradient-to-br from-white to-sky-50/40 border-2 border-overseas/20 rounded-2xl p-6 sm:p-8 text-left shadow-lg relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-overseas/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{isTr ? 'Stratejik Özet ve Karar (Doğrudan Yanıt)' : 'Strategic Summary & Verdict (Direct Answer)'}</span>
          </div>
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            {directAnswer}
          </p>
        </div>
      </section>

      {/* Semantic Comparison Table */}
      <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="p-4 sm:p-6 font-extrabold w-1/3 border-b border-navy/20">
                    {isTr ? 'Karşılaştırma Kriteri' : 'Evaluation Criteria'}
                  </th>
                  <th className="p-4 sm:p-6 font-extrabold text-sky-400 w-1/3 border-b border-navy/20">
                    {selectedComp === 'linkedin-ads-vs-google-ads' ? 'LinkedIn Ads' : 'LinkedIn Outreach'}
                  </th>
                  <th className="p-4 sm:p-6 font-extrabold text-slate-300 w-1/3 border-b border-navy/20">
                    {selectedComp === 'linkedin-ads-vs-google-ads' ? 'Google Ads (B2B)' : 'Cold Email'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {criteria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-navy align-top">
                      {isTr ? item.criterionTr : item.criterionEn}
                    </td>
                    <td className="p-4 sm:p-6 text-slate-900 font-semibold align-top bg-sky-50/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item.linkedinTr}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-slate-600 align-top">
                      <div className="flex items-start gap-2">
                        <span className="text-slate-400 font-mono">•</span>
                        <span>{item.googleTr}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Expert Verdict Box */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-sky-50 to-blue-50 border-t border-sky-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-overseas uppercase tracking-wider block">
                {isTr ? 'Overseas B2B Danışmanlık Kararı' : 'Overseas Strategic Verdict'}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed max-w-2xl">
                {verdict}
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="px-6 py-3 rounded-xl bg-overseas hover:bg-sky-500 text-white text-xs font-bold whitespace-nowrap shrink-0 flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <span>{isTr ? 'Doğru Kanalı Birlikte Seçelim' : 'Schedule Strategy Session'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Related Strategy Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-bold text-content-secondary uppercase">
              {isTr ? 'İlgili B2B Çözümler:' : 'Related Solutions:'}
            </span>
            {relatedLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.url.replace(/^\//, ''));
                }}
                className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-navy hover:text-overseas hover:border-overseas transition-colors shadow-sm"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
