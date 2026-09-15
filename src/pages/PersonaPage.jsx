import React, { useState } from 'react';
import { Target, Users, Building, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const PersonaPage = ({ lang, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [selectedPersona, setSelectedPersona] = useState('ceo');

  const personas = {
    ceo: {
      id: 'ceo',
      titleTr: 'CEO & Şirket Kurucuları',
      titleEn: 'CEOs & Company Founders',
      roleTr: 'Tepe Yönetim & Vizyon Sahibi',
      roleEn: 'Executive Leadership & Vision',
      kpisTr: 'Ciro Büyümesi, Şirket Değerlemesi, Pazar Payı, Sermaye Verimliliği',
      kpisEn: 'Revenue Expansion, Enterprise Valuation, Market Share, Capital Efficiency',
      painPointsTr: 'Yetersiz satış boru hattı, öngörülemeyen çeyreklik gelirler, verimsiz satış temsilcileri, uzun satış döngüleri.',
      painPointsEn: 'Unpredictable pipeline velocity, bloated CAC, long enterprise cycles, missed quarterly sales targets.',
      navFiltersTr: 'Title: Chief Executive Officer, Founder, Managing Director | Headcount: 20-500 | Seniority: CXO / Owner',
      navFiltersEn: 'Title: Chief Executive Officer, Founder, Managing Director | Headcount: 20-500 | Seniority: CXO / Owner',
      messageAngleTr: 'Operasyonel detay yerine makro iş çıktısı, ciro büyüme hızı ve peer (benzer şirket) vaka analizleri ile yaklaşılır.',
      messageAngleEn: 'Avoid operational weeds. Frame direct commercial outcomes, pipeline predictability, and peer benchmark proofs.',
      badLanguageTr: '"Hizmetlerimizi anlatmak için 10 dakikanızı alabilir miyim?" veya teknik özellik listeleri sunmak.',
      badLanguageEn: '"Can I have 10 minutes to pitch our agency?" or feature-heavy technical monologues.',
      recommendedOfferTr: 'Ücretsiz B2B LinkedIn Pipeline & Rakip Analizi',
      recommendedOfferEn: 'Complimentary B2B LinkedIn Pipeline Audit'
    },
    procurement: {
      id: 'procurement',
      titleTr: 'Satın Alma Müdürleri & Direktörleri',
      titleEn: 'Procurement & Purchasing Directors',
      roleTr: 'Maliyet Optimizasyonu & Tedarik Güvencesi',
      roleEn: 'Cost Optimization & Vendor Risk Mitigation',
      kpisTr: 'Tedarikçi Maliyet Tasarrufu, SLA Uyumu, Sözleşme Güvenliği, Ödeme Vadeleri',
      kpisEn: 'Direct Cost Reduction, Contract Compliance, Vendor SLA Stability, Payment Terms',
      painPointsTr: 'Bütçe aşımları, güvenilir olmayan tedarikçiler, geciken teslimatlar, kurumsal uyumsuzluk (compliance riskleri).',
      painPointsEn: 'Over-budget contracts, vendor unreliability, delayed handoffs, regulatory compliance exposure.',
      navFiltersTr: 'Title: Procurement Director, Head of Purchasing, Supply Chain Manager | Industry: Üretim, Perakende, Lojistik',
      navFiltersEn: 'Title: Procurement Director, Head of Purchasing, Sourcing Lead | Industry: Manufacturing, Retail, Logistics',
      messageAngleTr: 'Tedarikçi güvenilirliği, resmi LinkedIn Ads Partnerlik sertifikası ve doğrulanmış ROI/maliyet tasarruf raporları.',
      messageAngleEn: 'Certified vendor credentials, clear contractual SLA benchmarks, and verifiable cost-reduction analytics.',
      badLanguageTr: 'Duygusal veya belirsiz büyüme vaatleri; net olmayan fiyat ve sözleşme koşulları.',
      badLanguageEn: 'Vague marketing promises without verifiable SLA guarantees and cost predictability.',
      recommendedOfferTr: 'Kurumsal Tedarikçi Yetkinlik ve Güven Dosyası',
      recommendedOfferEn: 'Enterprise Vendor Credibility & SLA Dossier'
    },
    cmo: {
      id: 'cmo',
      titleTr: 'Pazarlama Direktörleri & CMO\'lar',
      titleEn: 'Marketing Directors & CMOs',
      roleTr: 'Talep Yaratma & Gelir Katkısı',
      roleEn: 'Demand Generation & Pipeline Contribution',
      kpisTr: 'MQL -> SQL Dönüşüm Oranı, CAC (Müşteri Edinme Maliyeti), Pipeline Katkısı, CPL',
      kpisEn: 'MQL to SQL Velocity, CAC Payback, Pipeline Attribution, Cost Per Qualified Lead',
      painPointsTr: 'Düşük kaliteli lead\'lerden şikayet eden satış ekibi, attribution (kaynak atama) karmaşası, yüksek LinkedIn reklam maliyetleri.',
      painPointsEn: 'Sales complaining about low lead quality, attribution ambiguity, surging LinkedIn ad CPCs.',
      navFiltersTr: 'Title: Chief Marketing Officer, VP of Marketing, Demand Generation Director | Seniority: VP / Director',
      navFiltersEn: 'Title: Chief Marketing Officer, VP of Marketing, Demand Gen Director | Seniority: VP / Director',
      messageAngleTr: 'Lead Gen Form optimizasyonları, ABM 100 hedef hesap kuşatması ve satışın sevdiği SQL üretimi.',
      messageAngleEn: 'In-app Lead Gen Form tuning, full-funnel ABM spearfishing, and sales-approved SQL handoffs.',
      badLanguageTr: 'Sadece sayfa takipçisi veya boş beğeni artışı gibi vanity metric vaatleri.',
      badLanguageEn: 'Promising vanity likes and impressions instead of closed-won pipeline contribution.',
      recommendedOfferTr: 'LinkedIn Ads & CPL Benchmark Raporu',
      recommendedOfferEn: 'LinkedIn Ads & CPL Performance Audit'
    }
  };

  const current = personas[selectedPersona];

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-content-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-navy transition-colors">
            {isTr ? 'Ana Sayfa' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-overseas">{isTr ? 'Hedef Kitle & Karar Vericiler' : 'Target Personas'}</span>
          <span>/</span>
          <span className="text-navy font-bold">{current.titleTr}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-8 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
          <Target className="w-3.5 h-3.5 text-overseas" />
          <span>{isTr ? 'KARAR VERİCİ PERSONA MİMARİSİ' : 'DECISION-MAKER PERSONA ARCHITECTURE'}</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight mb-4">
          {isTr ? 'LinkedIn\'de Doğru Karar Vericiye Doğru Dille Ulaşın' : 'Reach Executive Buyers in Their Native Language'}
        </h1>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed max-w-2xl mx-auto">
          {isTr 
            ? 'Bir CEO ile Satın Alma Müdürü aynı mesaja yanıt vermez. Her karar vericinin satın alma psikolojisine göre özelleştirilmiş persona stratejimiz.'
            : 'A CEO does not respond to the same value proposition as a Procurement Director. Tailored messaging matrices engineered for each executive role.'}
        </p>

        {/* Persona Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {Object.keys(personas).map((key) => {
            const p = personas[key];
            const active = selectedPersona === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedPersona(key)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                  active 
                    ? 'bg-navy text-white shadow-md' 
                    : 'glass-card text-navy/70 hover:text-navy hover:bg-white/80'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{isTr ? p.titleTr : p.titleEn}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected Persona Deep Dive Card */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated space-y-8">
          
          <div className="border-b border-slate-200/80 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-overseas block mb-1">
                {isTr ? current.roleTr : current.roleEn}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                {isTr ? current.titleTr : current.titleEn}
              </h2>
            </div>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>{isTr ? current.recommendedOfferTr : current.recommendedOfferEn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: KPI & Responsibilities */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/60 space-y-2">
              <span className="text-xs font-bold text-overseas uppercase tracking-wider block">
                {isTr ? 'Öncelikli Başarı Metrikleri (KPIs)' : 'Primary Success Metrics (KPIs)'}
              </span>
              <p className="text-xs sm:text-sm text-navy font-medium leading-relaxed">
                {isTr ? current.kpisTr : current.kpisEn}
              </p>
            </div>

            {/* Box 2: Core Pain Points */}
            <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200/60 space-y-2">
              <span className="text-xs font-bold text-red-700 uppercase tracking-wider block">
                {isTr ? 'Günlük Mesleki Acı Noktaları' : 'Core Operational Friction'}
              </span>
              <p className="text-xs sm:text-sm text-navy font-medium leading-relaxed">
                {isTr ? current.painPointsTr : current.painPointsEn}
              </p>
            </div>
          </div>

          {/* Sales Navigator Filters */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
              <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
              <span>{isTr ? 'Sales Navigator Filtreleme Mantığı' : 'Sales Navigator Filter Formula'}</span>
            </div>
            <p className="font-mono text-xs text-slate-300 leading-relaxed">
              {isTr ? current.navFiltersTr : current.navFiltersEn}
            </p>
          </div>

          {/* Strategy & Message Angles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl glass-card border border-emerald-300/80 bg-emerald-50/30 space-y-2">
              <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {isTr ? 'Tavsiye Edilen İletişim Açısı' : 'Recommended Outreach Angle'}
              </span>
              <p className="text-content-secondary leading-relaxed">
                {isTr ? current.messageAngleTr : current.messageAngleEn}
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-rose-300/80 bg-rose-50/30 space-y-2">
              <span className="font-bold text-rose-800 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold text-[10px]">✕</span>
                {isTr ? 'Kaçınılması Gereken Dil' : 'Language to Avoid'}
              </span>
              <p className="text-content-secondary leading-relaxed">
                {isTr ? current.badLanguageTr : current.badLanguageEn}
              </p>
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-content-secondary">
              {isTr 
                ? 'Bu karar verici grubunu hedefleyen özel LinkedIn outreach sekansınızı 48 saatte hazırlayalım.'
                : 'Deploy a high-converting message sequence targeting this executive segment turnkey.'}
            </span>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap"
            >
              {isTr ? 'Hedef Hesap Listesi Çıkarın' : 'Build Target Account List'}
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
