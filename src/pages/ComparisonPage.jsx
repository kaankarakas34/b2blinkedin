import React, { useState } from 'react';
import { Scale, Check, X, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const ComparisonPage = ({ lang, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [selectedComp, setSelectedComp] = useState('ads-vs-google');

  const comparisons = {
    'ads-vs-google': {
      titleTr: 'LinkedIn Ads vs. Google Ads: B2B İçin Hangisi Daha İyi?',
      titleEn: 'LinkedIn Ads vs. Google Ads for B2B: The Strategic Decision Matrix',
      summaryTr: 'Google Ads aktif arama anındaki niyeti yakalar; LinkedIn Ads ise aranmasa bile bütçesi olan karar vericilerin önüne çıkar. Karşılaştırma ve hibrit model.',
      summaryEn: 'Google captures immediate search intent; LinkedIn creates demand in front of non-searching enterprise buyers. Decision matrix and hybrid framework.',
      col1Name: 'LinkedIn Ads',
      col2Name: 'Google Ads (B2B)',
      metrics: [
        { labelTr: 'Hedefleme Hassasiyeti', labelEn: 'Targeting Precision', v1Tr: 'Kişi ve unvana göre %100 net (CEO, CFO, Şirket Büyüklüğü)', v2Tr: 'Arama kelimesine göre (Arayanın stajyer mi direktör mü olduğu belirsiz)' },
        { labelTr: 'Ortalama Tıklama Maliyeti (CPC)', labelEn: 'Average CPC', v1Tr: 'Daha yüksek ( - )', v2Tr: 'Orta/Yüksek ( - )' },
        { labelTr: 'Lead Form Dönüşüm Oranı', labelEn: 'Lead Form Conversion', v1Tr: 'Yüksek (%12 - %20 - Profil verisiyle otomatik dolum)', v2Tr: 'Orta (%3 - %7 - Dış landing page sürtünmesi)' },
        { labelTr: 'En Uygun Olduğu Senaryo', labelEn: 'Best Suited For', v1Tr: 'Yıllık anlaşması .000+ olan, karar vericisi net kurumsal B2B', v2Tr: 'Pazarda acil çözüm arayan yüksek niyetli B2B yazılım/hizmetler' }
      ],
      verdictTr: 'Doğru B2B stratejisi ikisini yarıştırmak değil; Google ile arayan niyetli kitleyi yakalarken, LinkedIn Ads ile 100-500 hedef hesaptaki satın alma komitesini kuşatmaktır.',
      verdictEn: 'The winning B2B model is hybrid: capture existing search intent via Google while surrounding 100-500 named accounts via LinkedIn Sponsored Content.'
    },
    'outreach-vs-cold-email': {
      titleTr: 'LinkedIn Outreach vs. Soğuk E-posta: Hangisi Daha Çok Toplantı Üretir?',
      titleEn: 'LinkedIn Outreach vs. Cold Email: Which Drives Higher Meeting Velocity?',
      summaryTr: 'E-posta filtrelerinin sertleştiği kurumsal dünyada doğrudan profil güveni taşıyan LinkedIn temasları %30+ yanıt oranı üretir.',
      summaryEn: 'As enterprise email firewalls block mass cold campaigns, verified LinkedIn profiles command 30%+ executive response rates.',
      col1Name: 'LinkedIn Outreach',
      col2Name: 'Soğuk E-posta (Cold Email)',
      metrics: [
        { labelTr: 'Güven ve Kimlik Doğrulama', labelEn: 'Credibility Verification', v1Tr: 'Anında profil, ortak bağlantılar ve şirket sayfası görünür', v2Tr: 'Kim olduğu belirsiz, spam hissi yüksek' },
        { labelTr: 'Gelen Kutusu Teslimatı', labelEn: 'Inbox Deliverability', v1Tr: '%100 LinkedIn mesaj kutusuna doğrudan düşer', v2Tr: 'SPF, DKIM, DMARC ve kurumsal güvenlik duvarlarına takılır' },
        { labelTr: 'Ortalama Yanıt Oranı', labelEn: 'Typical Reply Rate', v1Tr: '%20 - %35 (Kişiselleştirilmiş değer sekanslarında)', v2Tr: '%1 - %4 (Toplu gönderimlerde)' },
        { labelTr: 'Ölçeklenebilirlik', labelEn: 'Scalability Limits', v1Tr: 'Haftalık 100-150 davet (Kalite ve insan kontrolü şart)', v2Tr: 'Günde yüzlerce mail (Spam riskiyle birlikte)' }
      ],
      verdictTr: 'Outbound B2B satışta en yüksek toplantı hacmini almak için hedef kitleye önce LinkedIn üzerinden insani bir temasla yaklaşmak esastır.',
      verdictEn: 'For enterprise deal sizes, high-touch LinkedIn outreach backed by social proof consistently out-converts volume-driven cold email.'
    }
  };

  const cur = comparisons[selectedComp];

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-content-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-navy transition-colors">
            {isTr ? 'Ana Sayfa' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-overseas">{isTr ? 'Karşılaştırmalar & BOFU' : 'Comparisons'}</span>
          <span>/</span>
          <span className="text-navy font-bold">{cur.col1Name} vs {cur.col2Name}</span>
        </div>
      </div>

      <section className="py-8 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
          <Scale className="w-3.5 h-3.5 text-overseas" />
          <span>{isTr ? 'B2B STRATEJİ KARŞILAŞTIRMA MATRİSİ' : 'B2B DECISION MATRIX'}</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight mb-4">
          {isTr ? cur.titleTr : cur.titleEn}
        </h1>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed max-w-2xl mx-auto mb-8">
          {isTr ? cur.summaryTr : cur.summaryEn}
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(comparisons).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedComp(k)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                selectedComp === k 
                  ? 'bg-navy text-white shadow-md' 
                  : 'glass-card text-navy/70 hover:text-navy hover:bg-white/80'
              }`}
            >
              {comparisons[k].col1Name} vs {comparisons[k].col2Name}
            </button>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl border border-white/90 shadow-elevated overflow-hidden">
          <div className="grid grid-cols-12 bg-navy text-white p-4 sm:p-6 text-xs sm:text-sm font-bold">
            <div className="col-span-4">{isTr ? 'Karar Kriteri' : 'Evaluation Criteria'}</div>
            <div className="col-span-4 text-sky-400 font-extrabold">{cur.col1Name}</div>
            <div className="col-span-4 text-slate-300">{cur.col2Name}</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {cur.metrics.map((m, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center gap-2 hover:bg-slate-50/50 transition-colors">
                <div className="col-span-4 font-bold text-navy">
                  {isTr ? m.labelTr : m.labelEn}
                </div>
                <div className="col-span-4 text-navy font-semibold">
                  {isTr ? m.v1Tr : m.v1Tr}
                </div>
                <div className="col-span-4 text-content-secondary">
                  {isTr ? m.v2Tr : m.v2Tr}
                </div>
              </div>
            ))}
          </div>

          {/* Expert Verdict Box */}
          <div className="p-6 sm:p-8 bg-blue-50/60 border-t border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-overseas uppercase tracking-wider block mb-1">
                {isTr ? 'Overseas Strateji Kararı' : 'Overseas Strategic Verdict'}
              </span>
              <p className="text-xs sm:text-sm text-navy leading-relaxed max-w-2xl">
                {isTr ? cur.verdictTr : cur.verdictEn}
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>{isTr ? 'Kanalınızı Birlikte Seçelim' : 'Schedule Strategy Session'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
