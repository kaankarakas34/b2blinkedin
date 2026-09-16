import React, { useState } from 'react';
import { Target, CheckCircle2, ShieldCheck, ArrowRight, Layers, BarChart3, Users, DollarSign, Award, ChevronDown, Check } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const AdsPage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const adsFaqs = isTr ? [
    {
      q: "LinkedIn Ads neden diğer reklam platformlarından (Google, Meta) daha etkilidir?",
      a: "LinkedIn, B2B dünyasında doğrudan şirket unvanı, şirket büyüklüğü, sektör, kıdem ve bütçe sahibi pozisyonlarına göre hedefleme yapabilen tek platformdur. 10.000 rastgele kişiye gösterim yapmak yerine, doğrudan satın alma komitesindeki CFO ve direktörlere teklif sunarsınız."
    },
    {
      q: "Minimum ne kadar reklam bütçesiyle başlamalıyız?",
      a: "B2B sektörlerde anlamlı bir test hacmi ve veri olgunluğu elde etmek için aylık 1,500$ - 3,000$ arası bir medya harcaması önerilir. Yüksek ticket (50K$+ ACV) anlaşmalarda ABM modeliyle bütçe çok daha verimli kullanılır."
    },
    {
      q: "Overseas Marketing'in resmi LinkedIn Ads Partner olması bize ne kazandırır?",
      a: "Doğrudan LinkedIn merkez destek ekiplerine erişim, beta reklam formatlarına erken erişim, kampanya optimizasyonlarında algoritmik inceleme ve reklam harcamalarınızda sektör ortalamasından %25 daha düşük CPL (Cost-per-Lead) elde etmenizi sağlar."
    },
    {
      q: "Outreach ile LinkedIn Ads nasıl birlikte çalışır?",
      a: "Outbound mesaj attığınız karar verici, aynı hafta içerisinde LinkedIn akışında sizin uzmanlık vaka çalışmanızı içeren sponsorlu bir reklam görür. Bu çoklu temas, bağlantı kabul oranını %60+, randevu alma oranını %40+ artırır."
    }
  ] : [
    {
      q: "Why is LinkedIn Ads superior to Meta or Google for enterprise B2B?",
      a: "LinkedIn is the only platform capable of targeting buyers strictly by verified job title, seniority, company headcount, and named accounts. Instead of wasting budget on irrelevant impressions, you place your solution directly in front of budget-holding CFOs and VPs."
    },
    {
      q: "What is the recommended minimum ad budget?",
      a: "For statistically significant conversion testing, we recommend starting with $1,500 - $3,000 monthly media budget. In high-ticket enterprise ABM, precision targeting ensures near-zero wasted spend."
    },
    {
      q: "What advantages does an official LinkedIn Ads Partner provide?",
      a: "Direct escalation channels with LinkedIn engineering teams, access to beta targeting parameters, algorithmic audit diagnostics, and benchmark optimization resulting in an average 25% reduction in Cost-Per-Lead (CPL)."
    },
    {
      q: "How do Outbound and Ads synergize?",
      a: "When a target buyer receives your personalized connection request while simultaneously seeing your authoritative sponsored case studies in their feed, acceptance surges by over 60% due to perceived category leadership."
    }
  ];

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-content-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-navy transition-colors">
            {isTr ? 'Ana Sayfa' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-overseas">{isTr ? 'Hizmetlerimiz' : 'Services'}</span>
          <span>/</span>
          <span className="text-navy font-bold">{isTr ? 'LinkedIn Ads & ABM' : 'LinkedIn Ads & ABM'}</span>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="bg-[#0E151F] px-2.5 py-1.5 rounded-xl border border-white/15">
                  <img src="/linkedin_ads_partner.png" alt="LinkedIn Ads Partner" className="h-6 w-auto block" />
                </div>
                <span className="text-xs font-bold text-navy uppercase tracking-wider">
                  {isTr ? 'Resmi Sertifikalı LinkedIn Ads Partneri' : 'Official Certified LinkedIn Ads Partner'}
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
                {isTr 
                  ? 'LinkedIn Ads & ABM: Doğru Şirketleri Reklamla Kuşatın' 
                  : 'LinkedIn Ads & ABM: Surround Key Target Accounts with Paid Precision'}
              </h1>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                {isTr
                  ? '10.000 kişiye rastgele reklam harcamak yerine, hedef listenizdeki 100-500 stratejik kurumsal şirkette satın alma komitelerini sponsorlu reklamlar ve hesap bazlı pazarlama (ABM) ile 360 derece çevreleyin.'
                  : 'Stop burning ad budget on tens of thousands of broad impressions. Laser-target the 100 to 500 accounts that drive 80% of your B2B enterprise revenue with multi-threaded ABM.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenModal}
                  className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-navy/20"
                >
                  <Target className="w-4 h-4" />
                  <span>{isTr ? 'LinkedIn Ads Stratejinizi Planlayalım' : 'Plan Your LinkedIn Ads Strategy'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl glass-card text-xs font-semibold text-navy">
                  <Award className="w-4 h-4 text-overseas" />
                  <span>{isTr ? 'Öncelikli Partner Desteği & Düşük CPL' : 'Certified Partner Support & Lower CPL'}</span>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-overseas block">3.8x</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Pipeline Hacim Artışı' : 'Pipeline Multiple'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-navy block">-%28</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Ortalama CPL Düşüşü' : 'Average CPL Reduction'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-linkedin block">%60+</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Outbound Sinerji Etkisi' : 'Outbound Lift'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card p-4 rounded-3xl shadow-elevated border border-white/80 overflow-hidden group">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 relative shadow-inner">
                  <img 
                    src="/images/linkedin_b2b_hero.webp" 
                    alt="LinkedIn Ads Dashboard" 
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 glass-card-dark px-3 py-1 rounded-xl text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                    <LinkedInIcon className="w-3.5 h-3.5 fill-sky-400" />
                    <span>ABM Campaign Manager</span>
                  </div>
                  <div className="absolute bottom-3 right-3 glass-card px-3 py-1.5 rounded-xl text-[11px] font-bold text-navy flex items-center gap-1.5 shadow-md">
                    <img src="/linkedin_ads_partner.png" alt="Partner" width="300" height="134" loading="lazy" decoding="async" className="h-4 w-auto" />
                    <span>Official Partner</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABM METHODOLOGY BREAKDOWN */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-dark p-8 sm:p-12 rounded-3xl border border-white/15 shadow-elevated max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                HESAP BAZLI PAZARLAMA (ACCOUNT-BASED MARKETING)
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                {isTr ? '10.000 Kişiye Değil, Gelir Getirecek 100 Şirkete Odaklanın' : 'Don’t Reach Everyone. Reach the 100 Accounts That Matter.'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-200">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-mono text-sky-400 font-bold text-sm block">AŞAMA 01</span>
                <h4 className="font-heading font-bold text-base text-white">{isTr ? 'Hedef Şirket Listesi (TAL)' : 'Target Account List'}</h4>
                <p className="leading-relaxed text-slate-300">
                  {isTr ? 'CRM’inizdeki hedef 100-500 kurumsal hesabı LinkedIn Campaign Manager’a Matched Audience olarak aktarırız.' : 'Directly importing your named enterprise target accounts into LinkedIn as custom Matched Audiences.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-mono text-sky-400 font-bold text-sm block">AŞAMA 02</span>
                <h4 className="font-heading font-bold text-base text-white">{isTr ? 'Satın Alma Komitesi' : 'Buying Committee'}</h4>
                <p className="leading-relaxed text-slate-300">
                  {isTr ? 'Yalnızca CEO değil; bütçeyi onaylayan CFO, IT Direktörü ve Satın Alma Liderlerine özel sponsorlu mesajlar gösteririz.' : 'Surrounding all 3-5 stakeholders in the buying committee (Finance, Ops, Procurement) with custom messaging.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-mono text-sky-400 font-bold text-sm block">AŞAMA 03</span>
                <h4 className="font-heading font-bold text-base text-white">{isTr ? 'Outbound Sinerjisi' : 'Outbound Convergence'}</h4>
                <p className="leading-relaxed text-slate-300">
                  {isTr ? 'Reklamınızı görüp markanızı tanıyan yöneticiye gelen outreach daveti rekor hızda kabul edilir ve toplantıya döner.' : 'Outreach messages landing in an executive’s inbox after ad exposure convert at dramatically higher rates.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 KAMPANYA TÜRÜ DETAYLARI */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy mb-4">
              {isTr ? 'LinkedIn Reklam Kampanya Formatlarımız' : 'Our High-Yield LinkedIn Ad Formats'}
            </h2>
            <p className="text-sm text-content-secondary">
              {isTr ? 'Her format karar verici yolculuğunun belirli bir aşamasını hızlandırmak için seçilir.' : 'Engineered to accelerate specific stages of the enterprise buyer journey.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">01</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Lead Gen Forms (Form Reklamları)</h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Kullanıcı profil verileriyle tek tıkla otomatik dolan formlar; dış siteye yönlendirmeden doğrudan LinkedIn içinde yüksek kaliteli B2B başvuru üretir.' : 'Pre-filled native forms capturing verified enterprise emails and phone numbers with minimal friction.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">02</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Document Ads (Rapor & Kılavuz)</h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Beyaz bültenleri (whitepaper) ve sektörel araştırma PDF’lerini doğrudan LinkedIn akışında sunarak yüksek otorite inşa edin.' : 'Deliver multi-page PDF case studies in-feed to build authority and capture gated leads.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">03</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Website Retargeting & Matched Audiences</h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Fiyatlandırma veya demo sayfanızı ziyaret eden fakat henüz görüşme planlamayan sıcak kurumsal alıcıları yeniden yakalayın.' : 'Re-engage high-intent decision-makers who visited your pricing or demo pages without converting.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">04</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Sponsored Content (Carousel & Video)</h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Müşteri başarı hikayelerini ve ürün demolarını yüksek prodüksiyon kalitesinde hedef sektörün akışına yerleştirin.' : 'Showcase quantifiable customer transformations via carousel graphics and video testimonials.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">05</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Executive Event & Webinar Ads</h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Düzenlediğiniz kurumsal B2B web seminerlerine veya yuvarlak masa toplantılarına nitelikli direktör katılımı sağlayın.' : 'Drive verified director-level registrations for exclusive virtual roundtables and demos.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean bg-gradient-to-br from-white/90 to-blue-50/40">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">06</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">Message & Conversation Ads</h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Doğrudan hedef yöneticinin LinkedIn mesaj kutusuna interaktif karar butonları olan sponsorlu diyaloglar iletin.' : 'Interactive direct inbox messaging allowing decision-makers to choose their desired demo flow.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/90 shadow-elevated max-w-5xl mx-auto">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-2 text-center">
              {isTr ? 'LinkedIn Ads Yönetim Kapsamımız' : 'LinkedIn Ads Management Deliverables'}
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary text-center max-w-xl mx-auto mb-10">
              {isTr ? 'Stratejiden kreatif tasarıma, bütçe optimizasyonundan CRM raporlamasına anahtar teslim yönetim.' : 'Turnkey management from creative asset production to CRM revenue attribution.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-navy font-medium">
              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">{isTr ? 'B2B Kreatif & Metin Yazarlığı' : 'Ad Creatives & Copywriting'}</strong>
                  <span className="text-content-secondary">{isTr ? 'Karar vericiye hitap eden görsel, banner ve metinler.' : 'Executive-targeted copywriting and graphics.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">{isTr ? 'Insight Tag & Dönüşüm Takibi' : 'Insight Tag Tracking Setup'}</strong>
                  <span className="text-content-secondary">{isTr ? 'LinkedIn Insight Tag ve CRM API entegrasyonu.' : 'Pixel and CRM conversion API event setup.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">{isTr ? 'Haftalık A/B Split Testleri' : 'Weekly A/B Split Testing'}</strong>
                  <span className="text-content-secondary">{isTr ? 'Farklı kanca ve görsel varyasyonlarının testi.' : 'Testing messaging angles to lower CPL.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">{isTr ? 'Lead Entegrasyonu (CRM/Email)' : 'Instant Lead Forwarding'}</strong>
                  <span className="text-content-secondary">{isTr ? 'Gelen leadlerin anlık olarak satış ekibine aktarımı.' : 'Leads routed within seconds to your sales reps.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">{isTr ? 'Bütçe & Teklifleme Optimizasyonu' : 'Bid & Budget Optimization'}</strong>
                  <span className="text-content-secondary">{isTr ? 'Maksimum verim için algoritmik teklif kontrolü.' : 'Algorithmic pacing avoiding over-bidding.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">{isTr ? 'Aylık ROI & Gelir Analitiği' : 'Revenue Attribution Dashboard'}</strong>
                  <span className="text-content-secondary">{isTr ? 'Reklamların kaç dolarlık kapalı satış getirdiği.' : 'Reporting closed revenue pipeline generated.'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HİZMETE ÖZEL SSS */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              {isTr ? 'LinkedIn Ads & ABM Sıkça Sorulan Sorular' : 'Frequently Asked Questions on LinkedIn Ads'}
            </h3>
          </div>

          <div className="space-y-3">
            {adsFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="glass-card rounded-2xl border border-white/80 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-navy hover:text-overseas transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-overseas shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-content-secondary leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl text-center border border-white/90 shadow-elevated bg-gradient-to-br from-white/90 to-blue-50/50">
            <div className="bg-[#0E151F] px-3 py-1.5 rounded-xl border border-white/15 inline-block mb-3">
              <img src="/linkedin_ads_partner.png" alt="LinkedIn Ads Partner" className="h-6 w-auto block" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-3">
              {isTr ? 'LinkedIn Ads Kampanyanızı Resmi Partnerle Başlatın' : 'Launch Your LinkedIn Ads with a Certified Partner'}
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary max-w-xl mx-auto mb-6">
              {isTr ? 'Sektörünüze özel tahmini CPL ve hedef şirket havuzu analizi için görüşme planlayın.' : 'Schedule an ads scoping briefing to review your vertical benchmarks and projected CPL.'}
            </p>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <span>{isTr ? 'Ücretsiz Ads Strateji Görüşmesi' : 'Schedule Free Ads Strategy Call'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
