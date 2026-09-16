import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, ArrowRight, Zap, Target, Users, MessageSquare, Repeat, Clock, HelpCircle, FileText, ChevronDown, Check } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const OutreachPage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const outreachFaqs = isTr ? [
    {
      q: "Outreach mesajları spam olarak algılanır mı?",
      a: "Hayır. Spam, binlerce kişiye aynı kopyala-yapıştır metni göndermektir. Bizim sistemimiz yapay zeka ile mikro-segmentasyon yapar ve her mesaja ilgili bir kanca (şirket haberi, sektör regülasyonu, ortak bağlantı) ekler. Ayrıca haftalık LinkedIn bağlantı sınırlarına (100-150 davet) sıkı sıkıya uyar."
    },
    {
      q: "Mesajlar gönderilmeden önce bizim onayımızdan geçebilir mi?",
      a: "Kesinlikle. 'Human-in-the-Loop' modelimizde, AI tarafından hazırlanan mesaj taslakları satış ekibinizin veya danışmanımızın onay paneline düşer. Onayınız olmadan hiçbir üst düzey yöneticiye mesaj iletilmez."
    },
    {
      q: "Aylık ortalama kaç toplantı veya nitelikli lead üretebiliriz?",
      a: "Sektörünüze ve ortalama anlaşma büyüklüğünüze bağlı olarak, 800-1200 hedeflenen karar vericide aylık ortalama 14 ila 28 nitelikli satış görüşmesi (demo / keşif toplantısı) takviminize eklenir."
    },
    {
      q: "Kendi kişisel LinkedIn profilimi mi kullanmalıyım?",
      a: "B2B satışta en yüksek kabul ve güven oranları şirket kurucuları, satış direktörleri veya iş geliştirme liderlerinin profillerinden elde edilir. Gerekirse şirketinize özel tahsis edilen 'özel sender' profilleri de yapılandırılabilir."
    }
  ] : [
    {
      q: "Will outreach messages be flagged as spam?",
      a: "No. Spam is sending identical copy-pasted pitches to thousands of contacts. Our engine leverages AI for persona micro-segmentation and embeds authentic conversational hooks (funding events, mutual connections, industry shifts) while strictly observing LinkedIn's weekly connection limits."
    },
    {
      q: "Can we review and approve messages before dispatch?",
      a: "Absolutely. In our Human-in-the-Loop workflow, AI-drafted messages pass through an approval checkpoint before dispatch. No enterprise executive is contacted without strategic validation."
    },
    {
      q: "How many qualified sales meetings can we expect monthly?",
      a: "Depending on your contract value and target vertical, targeting 800-1,200 decision-makers typically produces 14 to 28 qualified demo or exploratory briefings directly on your sales calendar."
    },
    {
      q: "Do I have to use my personal LinkedIn profile?",
      a: "Highest conversion in B2B is achieved when connection requests stem from founders, VPs of Sales, or BD leads. Dedicated secondary executive sender accounts can also be deployed if preferred."
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
          <span className="text-navy font-bold">{isTr ? 'LinkedIn Outreach & AI' : 'LinkedIn Outreach & AI'}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider">
                <Send className="w-3.5 h-3.5 text-linkedin" />
                <span>{isTr ? 'AI DESTEKLİ B2B OUTREACH SİSTEMİ' : 'AI-POWERED B2B OUTREACH ENGINE'}</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
                {isTr 
                  ? 'Hedef Karar Vericilerle Nitelikli Satış Konuşmaları Başlatın' 
                  : 'Start Qualified Sales Conversations with Decision-Makers'}
              </h1>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                {isTr
                  ? 'Soğuk e-postaların spama düştüğü ve jenerik şablonların yok sayıldığı günümüzde, yapay zeka destekli hedefleme ve insan stratejisiyle C-Level karar vericilerin takvimini doğrudan satış ekibinize açıyoruz.'
                  : 'As cold emails land in spam filters and generic templates fail, our AI-powered micro-targeting and human sales strategy books qualified meetings directly onto your reps’ calendars.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenModal}
                  className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-navy/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{isTr ? 'Outreach Kampanyanızı Başlatın' : 'Launch Your Outreach Campaign'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl glass-card text-xs font-semibold text-navy">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{isTr ? '%100 Güvenli LinkedIn Protokolü' : '100% Safe LinkedIn Protocol'}</span>
                </div>
              </div>

              {/* Quick KPI Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-overseas block">%35 - %48</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Bağlantı Kabul Oranı' : 'Acceptance Rate'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-navy block">%22 - %38</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Pozitif Yanıt Oranı' : 'Positive Reply Rate'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-linkedin block">14-28</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Aylık Satış Toplantısı' : 'Monthly Meetings'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card p-4 rounded-3xl shadow-elevated border border-white/80 overflow-hidden group">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 relative shadow-inner">
                  <img 
                    src="/images/linkedin_ai_outreach.webp" 
                    alt="LinkedIn AI Outreach" 
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 glass-card-dark px-3 py-1 rounded-xl text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                    <LinkedInIcon className="w-3.5 h-3.5 fill-sky-400" />
                    <span>Live B2B Outreach Pipeline</span>
                  </div>
                  <div className="absolute bottom-3 right-3 glass-card px-3 py-1 rounded-xl text-[11px] font-bold text-navy flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>AI + Human Hybrid</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KLASİK VS OVERSEAS OUTREACH KARŞILAŞTIRMASI */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy mb-4">
              {isTr ? 'Geleneksel Soğuk Satış vs. Overseas Outreach Metodolojisi' : 'Traditional Cold Pitching vs. Overseas Outreach Methodology'}
            </h2>
            <p className="text-sm text-content-secondary">
              {isTr 
                ? 'Neden yüzlerce kişiye rastgele mesaj atmak sonuç vermez, ama mikron düzeyde hedeflenmiş akışlar takviminizi toplantılarla doldurur?' 
                : 'Why broad outreach fails and surgically calibrated cadences consistently book executive briefings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Old Way */}
            <div className="p-6 sm:p-8 rounded-3xl bg-red-50/40 border border-red-200/70 text-xs sm:text-sm space-y-4">
              <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                <span className="font-heading font-bold text-base text-red-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✕</span>
                  {isTr ? 'Geleneksel Soğuk Yaklaşım (Sonuçsuz)' : 'The Antiquated Way (Failed Leads)'}
                </span>
              </div>
              <ul className="space-y-3 text-content-secondary">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>{isTr ? 'Herkese aynı kopyala-yapıştır satış mesajı iletilir.' : 'Identical copy-pasted pitches sent to hundreds indiscriminately.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>{isTr ? 'Karar vericinin acil problemleri veya sektörel gerçekleri dikkate alınmaz.' : 'Zero acknowledgment of target buyer’s immediate operational friction.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>{isTr ? 'İlk mesajda agresif ürün satışı yapılmaya çalışılır; anında ret alır.' : 'Aggressive first-touch pitching triggering instant rejection or spam reports.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>{isTr ? 'Satış temsilcilerinin haftalık saatleri manuel aramayla heba olur.' : 'Reps spend 20+ hours weekly manually hunting without meeting yield.'}</span>
                </li>
              </ul>
            </div>

            {/* Overseas Way */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-300/80 shadow-clean text-xs sm:text-sm space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                <span className="font-heading font-bold text-base text-emerald-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                  {isTr ? 'Overseas B2B Outreach Sistemi (Yüksek Dönüşüm)' : 'The Overseas B2B System (High Yield)'}
                </span>
              </div>
              <ul className="space-y-3 text-navy font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Yapay zeka ile satın alma tetikleyicisi olan mikro-segmentler belirlenir.' : 'AI identifies buying triggers (funding, expansion, hiring, tech stack).'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Değer odaklı, problem çözen ve yanıt verme isteği uyandıran temaslar.' : 'Value-first diagnostic touchpoints designed to initiate executive dialogue.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Akıllı follow-up takipleriyle unutulan prospectler sıcak görüşmeye çevrilir.' : 'Contextual timed follow-ups turning silent prospects into booked demos.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Satış ekibiniz sadece toplantıya hazır ilgilenen yöneticilerle görüşür.' : 'Sales reps spend 100% of their time conducting qualified meetings.'}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. UÇTAN UCA 7 ADIMLI OUTREACH İŞ AKIŞI */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/90 shadow-elevated">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-2 text-center">
              {isTr ? '7 Aşamalı Outreach Temas Mimarisi' : 'The 7-Touch Executive Outreach Architecture'}
            </h2>
            <p className="text-xs sm:text-sm text-content-secondary text-center max-w-2xl mx-auto mb-12">
              {isTr ? 'Karar verici psikolojisine göre test edilmiş çok kanallı temas zinciri.' : 'Psychologically engineered touches calibrated to maximize reply velocity.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-overseas block mb-1">01. ICP BELİRLEME</span>
                <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'İdeal Müşteri Profili' : 'ICP Definition'}</h4>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {isTr ? 'Sektör, şirket büyüklüğü, bütçe hacmi ve karar verici unvan kriterleri mikron düzeyde filtrelenir.' : 'Filtering enterprise buyers by revenue, employee headcount, and buying seniority.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-overseas block mb-1">02. VERİ DOĞRULAMA</span>
                <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'AI Karar Verici Taraması' : 'Prospect Verification'}</h4>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {isTr ? 'LinkedIn üzerinde aktif olan, profilinde hareketlilik bulunan ve bütçe yetkisine sahip kişiler ayrıştırılır.' : 'Isolating active in-market executives holding direct budget authority.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-overseas block mb-1">03. İLK TEMAS</span>
                <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Stratejik Bağlantı' : 'Strategic Connection'}</h4>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {isTr ? 'Ortak ilgi alanı veya güncel sektörel gelişme üzerinden samimi, baskısız bağlantı daveti.' : 'Low-friction connection requests referencing mutual industry context.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-overseas block mb-1">04. DEĞER SUNUMU</span>
                <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Değer Odaklı İlk Mesaj' : 'Value-First Opener'}</h4>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {isTr ? 'Kabul sonrası satış yapmayan; sektördeki akut bir problemi ve çözüm bakışını soran açılış.' : 'Opening dialogue diagnosing specific B2B bottlenecks without premature pitching.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-overseas block mb-1">05. SOSYAL KANIT</span>
                <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Vaka Çalışması Follow-up' : 'Case Study Follow-up'}</h4>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {isTr ? 'İlk mesaja dönmeyen yöneticilere 3 gün sonra benzer bir şirkette sağlanan somut ROI verisi iletilir.' : 'Sending verified peer case studies and ROI metrics 72 hours post-opener.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-overseas block mb-1">06. MÜZAKERE & DUYGU</span>
                <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Duygu Analizi & Eleme' : 'Sentiment Analysis'}</h4>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {isTr ? 'Yapay zeka gelen cevapları analiz eder; ilgilenen yöneticileri anında sıcak etiketle satış ekibine aktarır.' : 'Categorizing incoming replies and routing positive buyer intent to sales reps.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                <span className="font-mono text-xs font-bold text-overseas block mb-1">07. TAKVİM AKTARIMI</span>
                <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Doğrudan Toplantı' : 'Calendar Booking'}</h4>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {isTr ? 'Nitelikli karar vericinin satış temsilcinizin Calendly veya takvimine randevu alması sağlanır.' : 'Frictionless handover directly into your team’s calendar for demo or scoping call.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-overseas/10 border border-overseas/30 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-overseas block mb-1">08. SÜREKLİ OPTİMİZASYON</span>
                  <h4 className="font-heading font-bold text-sm text-navy mb-1">{isTr ? 'A/B Testleri & Ölçekleme' : 'A/B Testing & Scale'}</h4>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {isTr ? 'Hangi mesajın ve hangi unvanın daha çok randevu ürettiği analiz edilerek bütçe ölçeklenir.' : 'Continuous messaging optimization scaling high-converting angles.'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. NELER TESLİM EDİYORUZ? (DELIVERABLES) */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-dark p-8 sm:p-12 rounded-3xl border border-white/15 shadow-elevated">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2 text-center">
              {isTr ? 'Outreach Kapsamında Neler Teslim Ediyoruz?' : 'What Is Included in Our Outreach Service?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 text-center max-w-xl mx-auto mb-10">
              {isTr ? 'Hiçbir teknik veya operasyonel yük olmadan anahtar teslim B2B toplantı üretimi.' : 'Turnkey meeting generation with zero operational burden on your team.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-200">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">{isTr ? 'Aylık 1,000+ Hedef Karar Verici' : '1,000+ Targeted Monthly Leads'}</strong>
                  <span>{isTr ? 'Doğrulanmış ICP kriterlerine uygun tam veri tabanı listesi.' : 'Custom verified prospect list matching your exact ICP.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">{isTr ? 'Özel Mesajlaşma Senaryoları' : 'Custom Copywriting Sequences'}</strong>
                  <span>{isTr ? 'Sektörünüze özel yazılmış 3 farklı A/B test mesaj akışı.' : '3 tailored messaging variations optimized for reply velocity.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">{isTr ? 'Dedicated B2B Kampanya Yöneticisi' : 'Dedicated Campaign Strategist'}</strong>
                  <span>{isTr ? 'Gelen yanıtları anlık yöneten ve randevu takvimini dolduran uzman.' : 'A human strategist managing replies and booking qualified calls.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">{isTr ? 'Anti-Spam & Güvenlik Altyapısı' : 'Anti-Spam & Cloud Proxies'}</strong>
                  <span>{isTr ? 'Yerel statik konut IP proxy’leri ve limit denetimleri.' : 'Dedicated residential IP proxies ensuring total profile safety.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">{isTr ? 'CRM ve Takvim Entegrasyonu' : 'CRM & Calendar Sync'}</strong>
                  <span>{isTr ? 'HubSpot, Salesforce, Pipedrive veya Google Calendar entegrasyonu.' : 'Direct two-way sync with your existing CRM and calendar tools.'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">{isTr ? 'Haftalık ROI ve Pipeline Raporu' : 'Weekly Pipeline Telemetry'}</strong>
                  <span>{isTr ? 'Kaç kişiyle konuşulduğu, toplantı adedi ve pipeline değeri analitiği.' : 'Clear metrics reporting connection rates, meetings booked, and pipeline value.'}</span>
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
              {isTr ? 'LinkedIn Outreach Hakkında Sıkça Sorulan Sorular' : 'Frequently Asked Questions on LinkedIn Outreach'}
            </h3>
          </div>

          <div className="space-y-3">
            {outreachFaqs.map((faq, idx) => {
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
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-3">
              {isTr ? 'Şirketiniz İçin Özel Outreach Stratejisini Başlatalım' : 'Let’s Build Your Custom Outreach Strategy'}
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary max-w-xl mx-auto mb-6">
              {isTr ? '30 dakikalık görüşmede hedef sektörünüzdeki karar verici havuzunu canlı analiz edelim.' : 'In a 30-minute scoping session, we will map out your live decision-maker pool and campaign blueprint.'}
            </p>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <span>{isTr ? 'Ücretsiz Outreach Görüşmesi Planlayın' : 'Schedule Free Outreach Scoping Call'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
