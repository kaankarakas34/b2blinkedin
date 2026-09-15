import React, { useState } from 'react';
import { FileText, CheckCircle2, ArrowRight, Sparkles, TrendingUp, Award, Layers, ChevronDown, Check } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const ContentPage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const contentFaqs = isTr ? [
    {
      q: "İçerik üretmek zorunda mıyım, çok zamanımı alır mı?",
      a: "Hayır. 'Executive Ghostwriting' modelimiz sayesinde sizin zamanınızı almayız. Ayda yalnızca 45 dakikalık tek bir sesli görüşme yapar, sektör içgörülerinizi ve güncel işlerinizi alırız. Kalan tüm araştırma, metin yazarlığı, infografik tasarım ve yayın planlamasını Overseas Marketing içerik stüdyosu üstlenir."
    },
    {
      q: "LinkedIn'de hangi formatlar en yüksek B2B etkileşimi üretir?",
      a: "B2B karar vericilerde en yüksek kaydedilme ve dönüşüm oranını kaydırmalı (PDF carousel) vaka analizleri ve problem/çözüm infografikleri sağlar. Ayrıca kurucunun kişisel dilinden yazılmış samimi tecrübe paylaşımları güven katsayısını katlar."
    },
    {
      q: "Beğeni sayısı (like) neden bizim için birincil metrik değildir?",
      a: "Viral memeler binlerce beğeni alabilir ancak şirketinizin kasasına tek kuruş kazandırmaz. Bizim hedefimiz beğeni sayısı değil; hedef sektörünüzdeki karar vericilerin gönderinizi okuyup satış temsilcinizle görüşme başlatmasıdır."
    },
    {
      q: "İçerikler kurumsal marka kimliğimize uygun olacak mı?",
      a: "Kesinlikle. Onboarding aşamasında markanızın tonu, kurumsal renk kodları ve terminolojisi belirlenir. Onayınız olmadan hiçbir içerik veya görsel yayına alınmaz."
    }
  ] : [
    {
      q: "Do I need to write the content myself?",
      a: "No. Our turnkey Executive Ghostwriting workflow requires just 45 minutes of your time per month. Through a focused discovery briefing, we extract your proprietary insights and translate them into a full month of authoritative carousels, text, and graphics."
    },
    {
      q: "Which formats drive the highest enterprise engagement?",
      a: "Multi-page PDF carousels showcasing tactical frameworks and client ROI case studies drive the highest bookmark and share rates among executive buyers."
    },
    {
      q: "Why don't you optimize for viral likes?",
      a: "Viral superficial memes may generate vanity metrics, but zero qualified enterprise pipeline. We measure content success by executive engagement velocity and inbound discovery meetings booked."
    },
    {
      q: "Will the voice align with our corporate standards?",
      a: "Yes. During onboarding, we establish your brand tone, technical lexicon, and design guidelines. Nothing is published without strict human approval."
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
          <span className="text-navy font-bold">{isTr ? 'İçerik Yönetimi' : 'Content Management'}</span>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-linkedin" />
                <span>{isTr ? 'GELİR ODAKLI B2B İÇERİK STRATEJİSİ' : 'REVENUE-DRIVEN B2B CONTENT STRATEGY'}</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
                {isTr 
                  ? 'İçeriği Beğeni İçin Değil, Satışı Desteklemek İçin Üretiyoruz' 
                  : 'Content Engineered for Revenue Acceleration, Not Vanity Likes'}
              </h1>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                {isTr
                  ? 'Viral memeler ve boş motivasyon sözleri kurumsal B2B satışta sıfır değer üretir. Bir karar verici profilinizi incelediğinde "Bu ekip ne yaptığını gerçekten çok iyi biliyor" demeli. Uzmanlığınızı kanıtlayan otorite içerikleri üretiyoruz.'
                  : 'Viral memes and superficial motivational quotes destroy B2B credibility. When target enterprise leaders inspect your profile, the response must be: "These experts deeply understand our operational reality."'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenModal}
                  className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-navy/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isTr ? 'İçerik Takviminizi Planlayalım' : 'Plan Your Content Roadmap'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl glass-card text-xs font-semibold text-navy">
                  <Sparkles className="w-4 h-4 text-overseas" />
                  <span>{isTr ? 'Turnkey Hayalet Yazarlık (Ghostwriting)' : 'Turnkey Executive Ghostwriting'}</span>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-overseas block">45 Dk</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Aylık Yönetici Eforu' : 'Monthly Exec Effort'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-navy block">12-16</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Aylık Otorite İçeriği' : 'Monthly Assets'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-linkedin block">4.2x</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Profil Ziyareti Artışı' : 'Profile Visit Multiple'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-elevated border border-white/80 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <span className="font-heading font-bold text-sm text-navy">B2B İçerik vs Vanity Metrikler</span>
                  <span className="text-xs font-bold text-overseas">Overseas Yaklaşımı</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-200/60 text-content-secondary">
                    <span className="font-bold text-red-700 block mb-0.5">Klasik Sosyal Medya Ajansı:</span>
                    Bol beğeni alan viral sözler, emoji yığınları, sıfır satış toplantısı ve zedelenen kurumsal itibar.
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-300/70 text-navy font-medium">
                    <span className="font-bold text-emerald-800 block mb-0.5">B2B LinkedIn Marketing:</span>
                    Hedef sektörün bütçe harcadığı sancılı noktaları çözen vaka çalışmaları, doğrudan takvime toplantı çeken otorite içerikleri.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 5 GELİR ODAKLI İÇERİK SÜTUNU */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy mb-4">
              {isTr ? '5 Temel Gelir Odaklı İçerik Sütunumuz' : '5 Revenue-Focused Content Pillars'}
            </h2>
            <p className="text-sm text-content-secondary">
              {isTr ? 'Her içerik parçası satış ekibinizin outreach dönüşümünü beslemek için planlanır.' : 'Every piece of content acts as a trust multiplier for your outbound sales reps.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">01</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Sektörel Derinlik & Düşünce Liderliği' : 'Industry Depth & Thought Leadership'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Sektörünüzdeki regülasyonlar, yeni teknolojiler ve pazar değişimleri üzerine kurucunuzun ve uzmanlarınızın bakış açısını yansıtan analizler.' : 'Technical market dissections demonstrating category ownership to enterprise buyers.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">02</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Gerçek Müşteri Vaka Analizleri (Case Studies)' : 'Verifiable Client Case Studies'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Müşterilerinizin başlangıç durumu, uygulanan çözüm ve elde edilen somut ROI metriklerini şeffaflıkla sunan hikayeler.' : 'Step-by-step case studies diagnosing initial problem, implemented solution, and quantifiable pipeline.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">03</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Uygulanabilir B2B Rehberler & Dokümanlar' : 'Actionable B2B Guides & Carousels'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Karar vericilerin kaydedip ekipleriyle paylaştığı, kaydırmalı (carousel) PDF kılavuzlar ve kontrol listeleri.' : 'High-save PDF carousels and tactical checklists that executives bookmark and circulate internally.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">04</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Kurucu ve Lider Perspektifi' : 'Founder & Leadership Narratives'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Şirket liderlerinin arkasındaki vizyonu, karşılaşılan operasyonel engelleri ve şirket kültürünü anlatan samimi paylaşımlar.' : 'Authentic founder reflections on leadership lessons, scaling hurdles, and organizational values.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">05</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Problem / Çözüm Analizleri' : 'Problem / Solution Breakdowns'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Hedef kitlenizin para ve zaman kaybettiği kör noktaları açıkça tanımlayarak, harekete geçmeme maliyetini ortaya koyan içerikler.' : 'Addressing the cost of inaction and diagnosing acute bottlenecks that drain profitability in target enterprises.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean bg-gradient-to-br from-white/90 to-blue-50/40">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">06</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Sıfır Eforla Anahtar Teslim Üretim' : 'Turnkey Ghostwriting Workflow'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Aylık 45 dakikalık tek bir sesli görüşmeyle tüm içerik takviminizi üretiyor, tasarlıyor ve yayınlıyoruz.' : 'A single 45-minute monthly interview yields an entire month of thought leadership, graphic carousels, and copy.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HİZMETE ÖZEL SSS */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              {isTr ? 'LinkedIn İçerik Yönetimi Sıkça Sorulan Sorular' : 'Frequently Asked Questions on Content Management'}
            </h3>
          </div>

          <div className="space-y-3">
            {contentFaqs.map((faq, idx) => {
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

      {/* 4. BOTTOM CTA */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl text-center border border-white/90 shadow-elevated bg-gradient-to-br from-white/90 to-blue-50/50">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-3">
              {isTr ? 'LinkedIn İçeriklerinizi Satış Makinesine Çevirelim' : 'Turn Your LinkedIn Content Into a Revenue Machine'}
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary max-w-xl mx-auto mb-6">
              {isTr ? 'Overseas Marketing B2B içerik stüdyosu ile uzmanlığınızı kurumsal satış toplantılarına dönüştürün.' : 'Partner with Overseas Marketing content studio to translate deep technical expertise into high-ticket sales meetings.'}
            </p>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <span>{isTr ? 'Örnek İçerik Analizi İsteyin' : 'Request Sample Content Audit'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
