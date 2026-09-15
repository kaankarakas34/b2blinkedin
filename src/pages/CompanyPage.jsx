import React, { useState } from 'react';
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, Users, TrendingUp, Sparkles, Award, ChevronDown, Check } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const CompanyPage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const companyFaqs = isTr ? [
    {
      q: "Company Page neden outreach sürecinde bu kadar kritiktir?",
      a: "Satış temsilciniz bir prospect ile bağlantı kurduğunda, prospect kişinin profilinde şirketinizi tıklar. Eğer karşısında boş, düzensiz veya 6 aydır güncellenmemiş bir sayfa görürse güveni anında sarsılır. Company Page, outreach sürecinizin kurumsal garanti belgesidir."
    },
    {
      q: "Takipçi sayımız az ise bu bir sorun yaratır mı?",
      a: "Hayır. B2B dünyasında takipçi sayısı bir vanity metriktir (gösteriş metriğidir). Önemli olan 10.000 rastgele takipçi değil, hedef sektörlerinizdeki bütçe sahibi 500 yöneticinin sayfanızı takip etmesi ve içeriklerinizi görmesidir."
    },
    {
      q: "Çalışan Savunuculuğu (Employee Advocacy) nedir?",
      a: "Şirket sayfasında paylaşılan uzmanlık içeriklerinin şirket kurucuları, satış ve mühendislik liderleri tarafından kendi profillerinde yeniden dolaşıma sokulmasıdır. Bu yöntem organik erişimi tek başına şirket sayfasına kıyasla 5x ila 8x artırır."
    },
    {
      q: "Sayfa yönetimini devraldığınızda ne sıklıkla içerik paylaşıyorsunuz?",
      a: "Haftalık 2 ila 3 kurumsal B2B düşünce liderliği, müşteri vaka analizi ve sektörel rapor paylaşımı yapılır. Tüm görseller ve metinler Overseas Marketing tasarım ekibi tarafından anahtar teslim üretilir."
    }
  ] : [
    {
      q: "Why is the Company Page critical for outbound sales?",
      a: "When an executive receives your sales rep's note, they inevitably click through to inspect your company page. If they find an abandoned feed, credibility dissolves. An active page acts as an institutional trust layer validating outbound claims."
    },
    {
      q: "Does follower count matter in enterprise B2B?",
      a: "Raw follower count is a vanity metric. You do not need 10,000 untargeted followers; you need 500 verified procurement heads, CFOs, and VPs from your named accounts actively observing your thought leadership."
    },
    {
      q: "What is Employee Advocacy?",
      a: "Empowering your executive leadership and sales team to amplify company insights through their personal profiles, multiplying organic touchpoints by 5x to 8x across target accounts."
    },
    {
      q: "What is your typical publishing frequency?",
      a: "We publish 2-3 high-impact enterprise thought leadership posts, case studies, and carousel guides weekly, turnkey produced by our content studio."
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
          <span className="text-navy font-bold">{isTr ? 'Company Page Yönetimi' : 'Company Page Management'}</span>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-overseas" />
                <span>{isTr ? 'KURUMSAL GÜVEN VE İTİBAR KATMANI' : 'CORPORATE CREDIBILITY & TRUST LAYER'}</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
                {isTr 
                  ? 'Company Page: Outreach Sürecinizin Kurumsal Güven Dayanağı' 
                  : 'Company Page: The Enterprise Trust Anchor of Your Outbound Sales'}
              </h1>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                {isTr
                  ? 'Potansiyel müşteriniz aldığınız mesajı araştırdığında terk edilmiş ya da aylar önce güncellenmiş bir sayfa görmemeli. Şirket sayfanızı kurumsal prestijin, sosyal kanıtın ve nitelikli lead toplamanın merkezine dönüştürüyoruz.'
                  : 'When target executives vet your firm, they must discover an authoritative, active industry leader. We transform your company page into a polished B2B credential showcase.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenModal}
                  className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-navy/20"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{isTr ? 'Şirket Sayfanızı Güçlendirelim' : 'Upgrade Your Company Page'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl glass-card text-xs font-semibold text-navy">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{isTr ? 'Doğrulanmış Kurumsal Kimlik' : 'Institutional Brand Standards'}</span>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-overseas block">5.2x</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Advocacy Erişim Artışı' : 'Advocacy Reach Lift'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-navy block">%100</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Nitelikli B2B Takipçi' : 'ICP Followers'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-linkedin block">%40+</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Outbound Güven Katkısı' : 'Trust Contribution'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-elevated border border-white/80 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-overseas/10 text-overseas flex items-center justify-center font-bold">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm text-navy block">Company Page Audit</span>
                      <span className="text-[10px] text-content-secondary">B2B Trust Index: A+</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">Aktif Doğrulandı</span>
                </div>

                <div className="space-y-2.5 text-xs text-navy font-medium">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                    <span>Kurumsal Header & Değer Önerisi</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                    <span>Products & Solutions Sekmesi</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                    <span>Çalışan Advocacy Altyapısı</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50">
                    <span>Hedefli Karar Verici Takipçi Havuzu</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 5 BOYUTLU SAYFA YÖNETİM MİMARİSİ */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy mb-4">
              {isTr ? 'Şirket Sayfası Yönetiminde 5 Kritik Boyut' : '5 Pillars of High-Yield Company Page Management'}
            </h2>
            <p className="text-sm text-content-secondary">
              {isTr ? 'Outreach ile temas kurduğumuz her karar verici için güven inşa eden kurumsal altyapı.' : 'Turnkey enterprise presence calibrated to validate outbound outreach efforts.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">01</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Sayfa Optimizasyonu & Görsel Bütünlük' : 'Visual Structure & Positioning'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr 
                  ? "Overseas Marketing standartlarında yüksek çözünürlüklü kapak tasarımı, slogan, 'Products' sekmesi entegrasyonu ve kurumsal dil birliği."
                  : 'Executive header imagery, verified corporate badges, structured solution catalogs, and standardized corporate tone.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">02</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Düzenli B2B Düşünce Liderliği' : 'Consistent Industry Thought Leadership'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr 
                  ? 'Şirketinizin sektördeki otoritesini perçinleyen haftalık teknik vaka analizleri, müşteri başarı hikayeleri ve sektör içgörüleri.'
                  : 'Weekly case study updates, industry problem breakdowns, and client outcome telemetry demonstrating market expertise.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">03</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Employee Advocacy (Çalışan Gücü)' : 'Employee Advocacy Infrastructure'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr 
                  ? 'Ekip liderlerinin ve satış temsilcilerinin kişisel profillerini şirket sayfasıyla entegre ederek toplam organik erişimi 5x katlama.'
                  : 'Empowering team members and department heads to amplify corporate updates, expanding network reach by 5x.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">04</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Nitelikli Karar Verici Takipçi Büyümesi' : 'Targeted Decision-Maker Growth'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr 
                  ? 'Rastgele kitleler yerine yalnızca hedef sektörlerinizdeki CEO, CFO, Direktör ve Satın Alma Liderlerinden oluşan nitelikli takipçi tabanı.'
                  : 'Attracting verified decision-makers from target enterprise verticals rather than low-intent vanity followers.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">05</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Lead Form & Etkinlik Entegrasyonu' : 'Lead Gen Forms & LinkedIn Events'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr 
                  ? 'Sayfa ziyaretçilerini doğrudan web seminerlerine kaydettiren veya demo talep etmelerini sağlayan entegre CTA butonları.'
                  : 'Deploying direct lead capture buttons and hosting native LinkedIn audio/video events for high-ticket prospect engagement.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/80 shadow-clean bg-gradient-to-br from-white/90 to-blue-50/40">
              <span className="font-mono text-xs font-bold text-overseas block mb-1">06</span>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {isTr ? 'Anahtar Teslim Yönetim' : 'Turnkey Management'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr 
                  ? 'İçerik planlama, görsel tasarım, metin yazarlığı ve topluluk etkileşimi Overseas Marketing uzmanları tarafından eksiksiz yönetilir.'
                  : 'Turnkey planning, graphic production, copywriting, and executive monitoring managed entirely by Overseas Marketing.'}
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
              {isTr ? 'Company Page Yönetimi Sıkça Sorulan Sorular' : 'Frequently Asked Questions on Company Pages'}
            </h3>
          </div>

          <div className="space-y-3">
            {companyFaqs.map((faq, idx) => {
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
              {isTr ? 'Şirket Sayfanızı Kurumsal Satış Merkezine Dönüştürelim' : 'Turn Your Company Page Into an Enterprise Credibility Hub'}
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary max-w-xl mx-auto mb-6">
              {isTr ? 'Kurumsal sayfanızı 14 gün içinde Overseas Marketing standartlarında optimize edelim.' : 'Let us audit and rebuild your corporate LinkedIn presence to institutional standards in 14 days.'}
            </p>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <span>{isTr ? 'Şirket Sayfası Denetimi İsteyin' : 'Request Company Page Audit'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
