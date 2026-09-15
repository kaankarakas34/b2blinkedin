import React, { useState } from 'react';
import { UserCheck, CheckCircle2, ArrowRight, Eye, Layout, Award, Sparkles, FileText, ChevronDown, Check } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const ProfilePage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const profileFaqs = isTr ? [
    {
      q: "Neden klasik CV formatı B2B müşterileri kaçırıyor?",
      a: "Çünkü kurumsal bir karar verici, geçmişte hangi şirkette hangi görevleri yaptığınızla değil; şu anda onun şirketine nasıl para kazandıracağınız, maliyetini nasıl düşüreceğiniz veya operasyonel yükünü nasıl hafifleteceğinizle ilgilenir. Profilinizi bir iş arayan değil, çözüm sunan otorite gibi kurgulamak zorundasınız."
    },
    {
      q: "5 saniye kuralı tam olarak nedir?",
      a: "Bir prospect profilinize tıkladığında, sayfadan çıkmadan önceki ilk 5 saniyede şu 3 soruya net yanıt almalıdır: 1) Kimsiniz? 2) Kime ne konuda yardımcı oluyorsunuz? 3) Neden hemen bir görüşme planlamalıyım?"
    },
    {
      q: "Optimizasyon süreci ne kadar sürer ve ne yapmamız gerekir?",
      a: "Süreç ortalama 5 iş günü sürer. Sizinle 30 dakikalık bir strateji görüşmesi yapar, ardından kapak banner'ı tasarımından başlık (headline), hakkında (about), öne çıkanlar (featured) ve vaka anlatımlarına kadar tüm metin ve görselleri anahtar teslim hazırlarız."
    },
    {
      q: "Birden fazla ekip üyesinin profilini optimize edebilir misiniz?",
      a: "Evet. Kurucular, Satış Direktörleri ve BDR/SDR ekipleri için kurumsal marka kimliğiyle uyumlu, ortak mesaj hiyerarşisine sahip ekip profili optimizasyon paketleri sunuyoruz."
    }
  ] : [
    {
      q: "Why does a traditional résumé repel enterprise B2B buyers?",
      a: "Enterprise buyers do not care about a chronological list of past job duties. They care exclusively about whether you can solve their immediate corporate pain. Formatting your profile as a sales landing page positions you as an indispensable industry advisor."
    },
    {
      q: "What is the 5-Second Test?",
      a: "Within 5 seconds of opening your profile, an executive must clearly recognize: 1) Who you are, 2) The exact ICP outcome you achieve, and 3) Clear proof of why they should book a conversation."
    },
    {
      q: "How long does the optimization take?",
      a: "Turnaround is 5 business days. Following a 30-minute discovery briefing, our copywriting and design team engineers your header banner, headline, about narrative, featured funnel, and experience assets turnkey."
    },
    {
      q: "Can you optimize multiple leadership profiles across our sales team?",
      a: "Yes. We offer enterprise team bundles aligning founders, VP of Sales, and account executives under a unified corporate positioning framework."
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
          <span className="text-navy font-bold">{isTr ? 'Profil Optimizasyonu' : 'Profile Optimization'}</span>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5 text-linkedin" />
                <span>{isTr ? 'SATIŞ LANDING PAGE DÖNÜŞÜMÜ' : 'SALES LANDING PAGE CONVERSION'}</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
                {isTr 
                  ? 'Profiliniz Bir CV Değil, Satış Landing Page’inizdir' 
                  : 'Your Profile Is Not a Résumé — It’s a High-Ticket Landing Page'}
              </h1>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                {isTr
                  ? 'Bir karar verici mesajınızı gördüğünde web sitenizden önce profilinizi inceler. Profilinizi CV formatından çıkarıp ilk 5 saniyede toplantı rezervasyonu alan yüksek dönüşümlü bir satış varlığına çeviriyoruz.'
                  : 'Before visiting your website or replying to your outreach note, enterprise buyers click your profile. We turn it into a high-converting landing page answering: Who do you help, what outcome do you guarantee, and why should they speak with you?'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenModal}
                  className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-navy/20"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>{isTr ? 'Ücretsiz Profil Denetimi Başlatın' : 'Start Free Profile Audit'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl glass-card text-xs font-semibold text-navy">
                  <Eye className="w-4 h-4 text-overseas" />
                  <span>{isTr ? '5 Saniye Kuralına Uygun Tasarım' : 'Engineered for the 5-Second Test'}</span>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-overseas block">2.4x</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Bağlantı Kabul Artışı' : 'Acceptance Lift'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-navy block">5 Sn</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Değer Anlaşılma Süresi' : 'Clarity Window'}</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-linkedin block">%65+</span>
                  <span className="text-[11px] text-content-secondary">{isTr ? 'Görüşme Randevu Hızı' : 'Meeting Velocity'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-card p-4 rounded-3xl shadow-elevated border border-white/80 overflow-hidden group">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 relative shadow-inner">
                  <img 
                    src="/images/linkedin_profile_abm.jpg" 
                    alt="LinkedIn Profile Transformation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 glass-card-dark px-3 py-1 rounded-xl text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                    <LinkedInIcon className="w-3.5 h-3.5 fill-sky-400" />
                    <span>Executive Transformation</span>
                  </div>
                  <div className="absolute bottom-3 right-3 glass-card px-3 py-1.5 rounded-xl text-[11px] font-bold text-navy flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Landing Page Ready</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CV VS SALES LANDING PAGE DETAYLI KARŞILAŞTIRMA */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy mb-4">
              {isTr ? 'Klasik CV Profili ile Satış Landing Page’i Arasındaki Fark' : 'Traditional CV Profile vs. Sales Landing Page'}
            </h2>
            <p className="text-sm text-content-secondary">
              {isTr ? 'Profilinizin dönüşüm alması için bakış açınızı çalışan modundan kurumsal çözüm sağlayıcı moduna geçirmelisiniz.' : 'Shifting your profile from an employee looking for a job to an authority driving enterprise revenue.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-red-50/40 border border-red-200/70 text-xs sm:text-sm space-y-4">
              <div className="flex items-center justify-between border-b border-red-200/80 pb-3">
                <span className="font-heading font-bold text-base text-red-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✕</span>
                  {isTr ? 'Klasik CV Profili (Müşteri Kaçırır)' : 'Traditional CV Profile (Zero Pipeline)'}
                </span>
              </div>
              <ul className="space-y-3 text-content-secondary">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{isTr ? 'Başlık: Yalnızca "CEO at X Şirketi" gibi jenerik unvan yazar.' : 'Headline: Dry, passive titles like "Managing Director at XYZ Ltd".'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{isTr ? 'Banner: Standart boş mavi LinkedIn görseli veya jenerik stok fotoğraf.' : 'Banner: Default empty blue header or generic stock skyline.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{isTr ? 'Hakkında: Kişinin geçmişte hangi okullara gittiğini ve görevlerini anlatır.' : 'About: Monologue detailing past university education and job tasks.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{isTr ? 'Featured: Boş bırakılmış veya alakasız bayram tebrikleri paylaşılmış.' : 'Featured: Empty or showcasing sporadic holiday greetings.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{isTr ? 'CTA: Hiçbir toplantı veya takvim linki içermez.' : 'CTA: Zero booking mechanism or next-step direction for buyers.'}</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-300/80 shadow-clean text-xs sm:text-sm space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                <span className="font-heading font-bold text-base text-emerald-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                  {isTr ? 'Satış Landing Page Profili (Toplantı Üretir)' : 'Sales Landing Page (Books Meetings)'}
                </span>
              </div>
              <ul className="space-y-3 text-navy font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Başlık: "[Hedef Kitle]"ye [Sonuç] sağlamasında [Yöntem] ile yardımcı oluyoruz formülü.' : 'Headline: Proven B2B formula highlighting exact client outcomes.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Banner: Değer önerisi, müşteri logoları ve partnerlik rozetlerini içeren tasarım.' : 'Banner: Custom branded asset with proof metrics and partner badges.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Hakkında: Karar vericinin acil problemini teşhis eden satış mektubu kurgusu.' : 'About: Written as a strategic sales letter explaining the cost of inaction.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'Featured: Vaka analizleri, video demolar ve doğrudan toplantı rezervasyon linki.' : 'Featured: Case studies, video walkthroughs, and calendar booking.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{isTr ? 'CTA: Profilin en üstünde yer alan özel eylem butonuyla doğrudan randevu.' : 'Custom Top CTA button directing prospects into your live calendar.'}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 REFERANS / BENCHMARK PROFİLLER (YÜKSEK DÖNÜŞÜM & ERİŞİM) */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-[11px] font-bold text-overseas uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-overseas" />
              <span>{isTr ? 'ROL MODEL PROFİLLER' : 'HIGH-CONVERTING BENCHMARK PROFILES'}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy mb-4">
              {isTr ? 'Yüksek Dönüşüm ve Ret Edilemeyen Bağlantı Teklifleri' : 'Unignorable Profiles with High Connection Acceptance'}
            </h2>
            <p className="text-sm text-content-secondary leading-relaxed">
              {isTr 
                ? 'Göz önünde olan, çok yüksek takipçi kitlesine sahip ve bağlantı teklifleri neredeyse hiç reddedilmeyen sektör liderlerinin profil mimarisini referans alarak optimize ediyoruz.' 
                : 'We reverse-engineer the profile architecture of top-tier authorities with massive organic reach and virtually irrefutable connection acceptance rates.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Profil 1: Kaan Karakaş */}
            <div className="glass-card rounded-3xl p-6 border border-white/80 hover:border-overseas/40 transition-all duration-300 shadow-clean hover:shadow-elevated flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0A66C2] to-[#446CB5] text-white flex items-center justify-center font-heading font-black text-xl shadow-md border-2 border-white">
                    KK
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{isTr ? 'Yüksek Dönüşüm' : 'High Conversion'}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="font-heading font-extrabold text-lg text-navy group-hover:text-overseas transition-colors flex items-center gap-2">
                    <span>Kaan Karakaş</span>
                    <LinkedInIcon className="w-4 h-4 fill-linkedin shrink-0" />
                  </h3>
                  <p className="text-xs font-semibold text-overseas mt-0.5">
                    {isTr ? 'B2B Büyüme & Ekosistem Lideri' : 'B2B Growth & Ecosystem Leader'}
                  </p>
                </div>

                <p className="text-xs text-content-secondary leading-relaxed mb-4">
                  {isTr
                    ? 'Geniş profesyonel kitleye hitap eden, yüksek organik etkileşim ve güven üreten, bağlantı davetleri anında kabul edilen referans profil yapısı.'
                    : 'A benchmark personal brand architecture creating immense organic authority, executive trust, and near 100% acceptance rates.'}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>{isTr ? 'Erişim Gücü:' : 'Reach Power:'}</span>
                    <span className="font-bold text-navy">{isTr ? 'Çok Yüksek Takipçi' : 'Elite Following'}</span>
                  </div>
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>{isTr ? 'Bağlantı Yanıtı:' : 'Invite Response:'}</span>
                    <span className="font-bold text-emerald-600">{isTr ? 'Reddedilemez Otorite' : 'Irrefutable Authority'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-2">
                <a
                  href="https://www.linkedin.com/in/kaan-karakas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl glass-card border border-slate-200/80 hover:border-linkedin/50 text-xs font-bold text-navy hover:text-linkedin flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                  <span>{isTr ? 'Profili İncele' : 'Inspect Profile'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Profil 2: Deniz Tören */}
            <div className="glass-card rounded-3xl p-6 border border-white/80 hover:border-overseas/40 transition-all duration-300 shadow-clean hover:shadow-elevated flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#16202E] to-[#0A66C2] text-white flex items-center justify-center font-heading font-black text-xl shadow-md border-2 border-white">
                    DT
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{isTr ? 'C-Level Görünürlük' : 'C-Level Visibility'}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="font-heading font-extrabold text-lg text-navy group-hover:text-overseas transition-colors flex items-center gap-2">
                    <span>Deniz Tören</span>
                    <LinkedInIcon className="w-4 h-4 fill-linkedin shrink-0" />
                  </h3>
                  <p className="text-xs font-semibold text-overseas mt-0.5">
                    {isTr ? 'Girişimcilik & Teknoloji Otoritesi' : 'Entrepreneurship & Tech Authority'}
                  </p>
                </div>

                <p className="text-xs text-content-secondary leading-relaxed mb-4">
                  {isTr
                    ? 'Yüksek kitle erişimi ve güçlü sektör ağırlığı ile ağ genişletmede en yüksek dönüşüm çarpanlarını yakalayan öncü profil örneği.'
                    : 'A commanding C-level profile model yielding exceptional visibility, massive audience pull, and frictionless B2B networking velocity.'}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>{isTr ? 'Kitle Etkileşimi:' : 'Audience Engagement:'}</span>
                    <span className="font-bold text-navy">{isTr ? 'Sürekli Göz Önünde' : 'High Visibility'}</span>
                  </div>
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>{isTr ? 'Ağ Genişleme:' : 'Network Growth:'}</span>
                    <span className="font-bold text-emerald-600">{isTr ? 'Organik Mıknatıs' : 'Organic Magnet'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-2">
                <a
                  href="https://www.linkedin.com/in/deniztoren/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl glass-card border border-slate-200/80 hover:border-linkedin/50 text-xs font-bold text-navy hover:text-linkedin flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                  <span>{isTr ? 'Profili İncele' : 'Inspect Profile'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Profil 3: Mücahit Berber */}
            <div className="glass-card rounded-3xl p-6 border border-white/80 hover:border-overseas/40 transition-all duration-300 shadow-clean hover:shadow-elevated flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#446CB5] to-[#16202E] text-white flex items-center justify-center font-heading font-black text-xl shadow-md border-2 border-white">
                    MB
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{isTr ? 'Kişisel Marka Gücü' : 'Personal Brand Power'}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="font-heading font-extrabold text-lg text-navy group-hover:text-overseas transition-colors flex items-center gap-2">
                    <span>Mücahit Berber</span>
                    <LinkedInIcon className="w-4 h-4 fill-linkedin shrink-0" />
                  </h3>
                  <p className="text-xs font-semibold text-overseas mt-0.5">
                    {isTr ? 'Büyüme & Dijital Strateji Lideri' : 'Growth & Digital Strategy Leader'}
                  </p>
                </div>

                <p className="text-xs text-content-secondary leading-relaxed mb-4">
                  {isTr
                    ? 'Çok yüksek takipçi tabanı, düzenli etkileşim ve ilk bakışta güven uyandıran, bağlantı davetleri anında kabul gören etkili profil modeli.'
                    : 'A high-impact profile layout that instantly commands respect, unlocks warm conversations, and eliminates outreach resistance.'}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>{isTr ? 'Takipçi Tabanı:' : 'Follower Base:'}</span>
                    <span className="font-bold text-navy">{isTr ? 'Yüksek Kitle' : 'High Volume'}</span>
                  </div>
                  <div className="flex items-center justify-between text-content-secondary">
                    <span>{isTr ? 'Dönüşüm Oranı:' : 'Conversion Rate:'}</span>
                    <span className="font-bold text-emerald-600">{isTr ? 'Maksimum Kabul' : 'Max Acceptance'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-2">
                <a
                  href="https://www.linkedin.com/in/mucahitberber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl glass-card border border-slate-200/80 hover:border-linkedin/50 text-xs font-bold text-navy hover:text-linkedin flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                  <span>{isTr ? 'Profili İncele' : 'Inspect Profile'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Destekleyici Not */}
          <div className="mt-8 glass-card p-4 rounded-2xl border border-white/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-content-secondary">
              <span className="w-8 h-8 rounded-xl bg-blue-100/80 text-overseas flex items-center justify-center font-bold text-sm shrink-0">💡</span>
              <span>
                {isTr
                  ? 'Kendi profilinizi bu seviyede bir otoriteye dönüştürdüğünüzde gönderdiğiniz mesaj ve bağlantı taleplerinin yanıt alma oranı %65\'in üzerine çıkar.'
                  : 'Elevating your profile to this authority benchmark pushes cold outreach acceptance and reply rates well past 65%.'}
              </span>
            </div>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-4 py-2 rounded-xl font-bold whitespace-nowrap text-xs shrink-0"
            >
              {isTr ? 'Profilimi Böyle Yapın' : 'Transform My Profile'}
            </button>
          </div>
        </div>
      </section>

      {/* 3. 10 NOKTALI OPTİMİZASYON KILAVUZU */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-navy mb-4">
              {isTr ? '10 Noktalı B2B Profil Optimizasyon Kılavuzu' : 'Our 10-Point Conversion Transformation Framework'}
            </h2>
            <p className="text-sm text-content-secondary">
              {isTr ? 'Profilinizin her pikseli ve her kelimesi karar vericide güven uyandırmak ve randevu almak için tasarlanır.' : 'Every asset engineered to project unshakeable category authority.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">01. BANNER</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Dönüşüm Odaklı Kapak' : 'Sales Banner'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Değer önerinizi, çözülen problemleri ve sosyal kanıt logolarını içeren özel kurumsal banner tasarımı.' : 'High-impact banner displaying value proposition, verified credentials, and client logos.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">02. HEADLINE</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Değer Odaklı Başlık' : 'Positioning Headline'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Sadece unvan değil; kime nasıl bir sonuç vaat ettiğinizi anlatan keskin konumlandırma cümlesi.' : 'Replacing dry titles with outcome-oriented formulas highlighting ICP results.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">03. ABOUT</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Müşteri Hikayesi' : 'Customer-Led About'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Sizi değil; müşterinizin karşılaştığı pazar zorluklarını ve metodolojinizi açıklayan satış mektubu.' : 'Written as an executive sales letter diagnosing market friction and your methodology.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">04. FEATURED</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Öne Çıkan Varlıklar' : 'Featured Funnel'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Vaka çalışmaları, demo videoları ve doğrudan randevu takviminize yönlendiren interaktif alan.' : 'Showcasing client ROI whitepapers, video walkthroughs, and calendar booking links.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">05. EXPERIENCE</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Sonuç Odaklı Deneyim' : 'Outcome Experience'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Görev listesi yerine kurumsal başarıları ve çözülen müşteri problemlerini listeleyen kurgu.' : 'Transforming duties into concrete business accomplishments and deliverables.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">06. SERVICES</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Hizmet Vitrini' : 'Services Showcase'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'LinkedIn Services modülünü yapılandırarak organik aramalarda görünürlük sağlama.' : 'Optimizing native LinkedIn Services module for higher client search rankings.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">07. CTA ENTEGRASYONU</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Stratejik Randevu Butonu' : 'Custom Top CTA'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Profil başlığının hemen altına toplantı planlama veya demo linki yerleştirme.' : 'Positioning a high-intent custom URL button directly under your headline.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">08. SOCIAL PROOF</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Tavsiye & Onaylar' : 'Recommendations'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Sektör liderlerinden gelen doğrulanmış referans ve tavsiye metinlerinin yapılandırılması.' : 'Structuring executive testimonials and verified endorsements for authority.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">09. SEO & KEYWORDS</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'LinkedIn Arama SEO’su' : 'Native LinkedIn SEO'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Karar vericilerin arama yaptığı sektörel B2B anahtar kelimelerin profile entegrasyonu.' : 'Embedding high-intent buyer keywords across sections for in-platform discovery.'}
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/80">
              <span className="font-mono text-xs font-bold text-overseas block mb-2">10. GÖRSEL DİL</span>
              <h4 className="font-heading font-bold text-sm text-navy mb-1.5">{isTr ? 'Fotoğraf & Kimlik' : 'Visual Hierarchy'}</h4>
              <p className="text-xs text-content-secondary leading-relaxed">
                {isTr ? 'Yüksek kaliteli arka plan, kurumsal renk paleti ve güven veren yönetici portresi.' : 'Professional executive portrait guidelines and cohesive corporate brand framing.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HİZMETE ÖZEL SSS */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              {isTr ? 'Profil Optimizasyonu Hakkında Sıkça Sorulan Sorular' : 'Frequently Asked Questions on Profile Optimization'}
            </h3>
          </div>

          <div className="space-y-3">
            {profileFaqs.map((faq, idx) => {
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

      {/* 5. BOTTOM CTA */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl text-center border border-white/90 shadow-elevated bg-gradient-to-br from-white/90 to-blue-50/50">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-3">
              {isTr ? 'Profilinizi Birlikte Satış Landing Page’ine Dönüştürelim' : 'Transform Your Profile Into a Sales Landing Page'}
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary max-w-xl mx-auto mb-6">
              {isTr ? 'Outreach başlamadan önce profilinizi optimize edin, randevu dönüşüm oranınızı anında 2 katına çıkarın.' : 'Optimize your executive profile before launching outreach to immediately double reply velocity.'}
            </p>
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <span>{isTr ? 'Ücretsiz Profil Denetimi İsteyin' : 'Request Free Profile Audit'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
