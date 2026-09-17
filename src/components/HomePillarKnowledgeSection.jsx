import React, { useState } from 'react';
import { 
  BookOpen, Target, Users, Send, BarChart3, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronDown, ArrowRight, Layers,
  Globe2, Building2, UserCheck, HelpCircle, Briefcase, FileText
} from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const HomePillarKnowledgeSection = ({ lang = 'tr', onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = isTr ? [
    { id: 'overview', label: 'Genel Bakış & Metodoloji', icon: BookOpen },
    { id: 'leadgen', label: 'B2B Lead Generation', icon: Target },
    { id: 'outreach', label: 'LinkedIn Outreach', icon: Send },
    { id: 'ads', label: 'LinkedIn Ads & ABM', icon: Layers },
    { id: 'profile', label: 'Profil ve İçerik', icon: UserCheck },
    { id: 'industries', label: 'Sektörel Çözümler', icon: Building2 },
    { id: 'decisionMakers', label: 'Karar Vericiler', icon: Users },
    { id: 'faq', label: 'SSS ve Rehberler', icon: HelpCircle }
  ] : [
    { id: 'overview', label: 'Overview & Methodology', icon: BookOpen },
    { id: 'leadgen', label: 'B2B Lead Generation', icon: Target },
    { id: 'outreach', label: 'LinkedIn Outreach', icon: Send },
    { id: 'ads', label: 'LinkedIn Ads & ABM', icon: Layers },
    { id: 'profile', label: 'Profile & Content', icon: UserCheck },
    { id: 'industries', label: 'Industries', icon: Building2 },
    { id: 'decisionMakers', label: 'Decision Makers', icon: Users },
    { id: 'faq', label: 'FAQ & Guides', icon: HelpCircle }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-t border-slate-200/80" id="bilgi-merkezi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-overseas" />
            <span>{isTr ? 'B2B LİNKEDİN BİLGİ MERKEZİ & REHBER' : 'B2B LINKEDIN KNOWLEDGE HUB & PILLAR'}</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {isTr 
              ? 'B2B LinkedIn Pazarlama ve Müşteri Kazanım Sistemi' 
              : 'B2B LinkedIn Marketing & Client Acquisition Architecture'}
          </h2>
          
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            {isTr
              ? 'Yalnızca içerik paylaşan bir ajans değil; hedef şirketleri belirleyen, doğru karar vericilere ulaşan ve takviminizi nitelikli satış toplantılarıyla dolduran uçtan uca B2B büyüme metodolojisi.'
              : 'Beyond vanity metrics: an integrated outbound engine that maps named accounts, connects directly with enterprise decision-makers, and drives qualified pipeline.'}
          </p>
        </div>

        {/* Tab Navigation Controls (Mobile Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-navy text-white shadow-md shadow-navy/20 scale-[1.02]'
                    : 'bg-white text-content-secondary hover:text-navy hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Container (All Critical Content Always In Semantics For Crawlers & AI Overviews) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-elevated">
          
          {/* TAB 1: OVERVIEW & METHODOLOGY */}
          <div className={activeTab === 'overview' ? 'block' : 'hidden'}>
            <div className="space-y-8">
              <div className="p-5 rounded-2xl bg-sky-50/80 border border-sky-200/70">
                <span className="font-heading font-extrabold text-xs uppercase tracking-wider text-sky-800 block mb-1">
                  {isTr ? 'Kısaca B2B LinkedIn Pazarlama Nedir?' : 'Executive Summary: What is B2B LinkedIn Marketing?'}
                </span>
                <p className="text-sm sm:text-base text-navy leading-relaxed font-medium">
                  {isTr
                    ? 'B2B LinkedIn pazarlama; şirketlerin hedef sektörlerdeki satın alma müdürleri, CEO’lar ve direktörlerle doğrudan iş bağlantısı kurmasını, güven inşa etmesini ve ölçülebilir satış toplantıları (SQL) oluşturmasını sağlayan sistemli müşteri kazanım sürecidir.'
                    : 'B2B LinkedIn marketing is the strategic discipline of targeting verified buying committee members across high-value accounts, engaging them with contextual insight, and generating sales-qualified meetings (SQLs).'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-heading font-extrabold text-xl text-navy">
                    {isTr ? 'LinkedIn’den B2B Müşteri Nasıl Bulunur?' : 'How B2B Customer Acquisition Operates on LinkedIn'}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {isTr
                      ? 'Geleneksel soğuk e-posta filtrelerin arkasında kaybolurken veya genel fuarlar yüksek bütçeler tüketirken; LinkedIn, dünyadaki 1 milyarı aşkın profesyonelin unvan, şirket büyüklüğü, kıdem ve coğrafya bazında doğrulandığı tek canlı B2B veri tabanıdır.'
                      : 'While cold emails struggle against enterprise spam firewalls and trade shows demand exorbitant budgets, LinkedIn represents the only living directory of over 1 billion verified executives indexed by seniority, company size, and specific function.'}
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-navy font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{isTr ? '1. İdeal Müşteri Profili (ICP) ve hedef şirket listesi (Account List) hazırlanır.' : '1. Ideal Customer Profile (ICP) and verified named account lists are engineered.'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{isTr ? '2. Yönetici profili CV mantığından çıkarılıp satış landing page’ine dönüştürülür.' : '2. Leadership profiles are re-engineered from CVs into high-ticket sales landing pages.'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{isTr ? '3. 7 temaslı, spam olmayan, değer ve soru odaklı kişiselleştirilmiş sekans başlatılır.' : '3. A 7-touch contextual sequence initiates diagnostic dialogue without hard pitching.'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{isTr ? '4. Satış ekibinizin takvimine doğrudan nitelikli keşif/demo toplantısı (appointment setting) eklenir.' : '4. Verified discovery meetings are added directly to your sales team’s calendar.'}</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading font-extrabold text-xl text-navy">
                    {isTr ? 'İnsan Kontrollü Yapay Zekâ (Human-in-the-Loop)' : 'AI Precision with Human Strategic Oversight'}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {isTr
                      ? 'Yapay zekâyı kopyala-yapıştır mesajlar için değil; şirket haberlerini, büyüme sinyallerini ve sektörel acı noktalarını analiz etmek için kullanıyoruz. Ancak her mesaj gönderilmeden önce uzman bir B2B stratejistin onayından geçer.'
                      : 'We leverage AI not for robotic spam, but to aggregate firmographic intent signals, leadership movements, and regulatory shifts. Crucially, human strategists approve key enterprise touches.'}
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-navy block mb-1">
                      {isTr ? 'Ölçülebilir Çıktılar:' : 'Measurable Pipeline Benchmarks:'}
                    </span>
                    <p className="text-xs text-content-secondary">
                      {isTr
                        ? 'Aylık ortalama 800–1200 hedeflenen karar vericide %28–42 bağlantı kabul oranı, %22–34 yanıt oranı ve 14–28 nitelikli satış toplantısı.'
                        : 'Covering 800–1,200 verified decision-makers yields 28–42% invite acceptance, 22–34% response velocity, and 14–28 discovery calls.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Internal Links Row */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-navy">{isTr ? 'İlgili Temel Hizmetler:' : 'Related Money Pages:'}</span>
                <button 
                  onClick={() => onNavigate('outreach')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-overseas/10 text-xs font-semibold text-overseas transition-colors"
                >
                  {isTr ? 'LinkedIn Outreach Hizmeti' : 'LinkedIn Outreach Services'}
                </button>
                <button 
                  onClick={() => onNavigate('ads')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-overseas/10 text-xs font-semibold text-overseas transition-colors"
                >
                  {isTr ? 'LinkedIn Reklam Yönetimi' : 'LinkedIn Ads Management'}
                </button>
                <button 
                  onClick={() => onNavigate('profile')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-overseas/10 text-xs font-semibold text-overseas transition-colors"
                >
                  {isTr ? 'Profil Optimizasyonu' : 'Profile Optimization'}
                </button>
              </div>
            </div>
          </div>

          {/* TAB 2: B2B LEAD GENERATION */}
          <div className={activeTab === 'leadgen' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {isTr ? 'B2B Lead Generation Nedir ve Nasıl Nitelendirilir?' : 'Enterprise B2B Lead Generation & Qualification'}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                {isTr
                  ? 'B2B lead generation; yalnızca form toplayarak e-posta listesi şişirmek değildir. Gerçek bir B2B lead; sunduğunuz çözüme bütçe ayırabilecek finansal gücü ve satın alma yetkisi bulunan, güncel olarak bu problemi yaşayan kurumsal karar vericidir.'
                  : 'B2B lead generation is not about collecting generic email lists. A true B2B lead is a verified corporate stakeholder who possesses the budget, authority, need, and timeline (BANT) to resolve an acute business bottleneck.'}
              </p>

              {/* Comparison Box: MQL vs SQL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-heading font-bold text-sm text-navy block mb-2">
                    {isTr ? 'MQL (Marketing Qualified Lead)' : 'MQL (Marketing Qualified Lead)'}
                  </span>
                  <p className="text-xs text-content-secondary leading-relaxed mb-3">
                    {isTr
                      ? 'Bir rehber indirmiş veya reklam formunu doldurmuş kişidir. Satın alma niyeti henüz olgunlaşmamış olabilir.'
                      : 'An account that engaged with content or completed a lead gen form. Purchase intent is exploratory.'}
                  </p>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
                    {isTr ? 'Besleme & Eğitme Aşaması' : 'Nurturing & Education Phase'}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200">
                  <span className="font-heading font-bold text-sm text-navy block mb-2">
                    {isTr ? 'SQL (Sales Qualified Lead)' : 'SQL (Sales Qualified Lead)'}
                  </span>
                  <p className="text-xs text-navy leading-relaxed mb-3">
                    {isTr
                      ? 'Karar verici olduğu doğrulanmış, bütçesi olan ve satış ekibinizle 15-30 dakikalık değerlendirme toplantısı planlamış kurumdur.'
                      : 'A verified decision-maker whose budget and pain have been confirmed, booked directly into your discovery calendar.'}
                  </p>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                    {isTr ? 'Satış Takvimine Hazır Toplantı' : 'Sales Pipeline Ready'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs text-navy space-y-1">
                <span className="font-bold block">{isTr ? 'Randevu Ayarlama (Appointment Setting) Standartlarımız:' : 'Appointment Setting Quality Criteria:'}</span>
                <p className="text-content-secondary">
                  {isTr
                    ? 'Katılımcının unvanı ve şirket büyüklüğü önceden teyit edilir; görüşme öncesi şirketin acı noktalarını özetleyen brief satış ekibinize teslim edilir.'
                    : 'Target attendee title and company scale are pre-verified; discovery calls are delivered with clear ICP dossiers.'}
                </p>
              </div>
            </div>
          </div>

          {/* TAB 3: LINKEDIN OUTREACH */}
          <div className={activeTab === 'outreach' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {isTr ? 'LinkedIn Outreach: Soğuk Mesajdan Güvenli İş Görüşmesine' : 'LinkedIn Outreach: From Cold Touch to Strategic Dialogue'}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                {isTr
                  ? 'Kopyala-yapıştır şablonlarla karar vericilere doğrudan ürün satmaya çalışmak cevap oranını sıfıra indirir. Overseas Marketing 7 temaslı sekans modeli; önce profili ziyaret eder, ortak sektörel dinamiklere atıfta bulunur ve satış konuşmasından önce ortak bir fikir alışverişi başlatır.'
                  : 'Pitching on connection requests immediately degrades reply rates. Our 7-touch framework initiates contextual relationship building before inviting executives to a low-friction diagnostic conversation.'}
              </p>

              {/* 7-Touch Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-navy font-bold">
                    <tr>
                      <th className="p-3">Temas Adımı</th>
                      <th className="p-3">Amaç</th>
                      <th className="p-3">Yaklaşım</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-content-secondary">
                    <tr>
                      <td className="p-3 font-semibold text-navy">1. Profil & İnceleme</td>
                      <td className="p-3">Farkındalık oluşturma</td>
                      <td className="p-3">Karar vericinin profili ve son paylaşımları taranır.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-navy">2. Bağlantı Notu</td>
                      <td className="p-3">Kabul oranını maksimize etme</td>
                      <td className="p-3">Satış yapmadan, sektördeki ortak bir gelişmeye atıf yapılır.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-navy">3. Değer Odaklı Teşekkür</td>
                      <td className="p-3">Güven inşası</td>
                      <td className="p-3">Karar vericinin sektörüne özel ücretsiz vaka/araştırma sunulur.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-navy">4. Problem Teşhisi</td>
                      <td className="p-3">İhtiyaç doğrulaması</td>
                      <td className="p-3">Sektördeki yaygın maliyet/zaman kaybı hakkında soru sorulur.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-navy">5. Benzer Başarı Kanıtı</td>
                      <td className="p-3">Otorite kanıtlama</td>
                      <td className="p-3">Benzer ölçekte bir firmanın elde ettiği somut ROI paylaşılır.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-navy">6. Düşük Sürtünmeli Davet</td>
                      <td className="p-3">Toplantı alma</td>
                      <td className="p-3">15 dakikalık bağlayıcı olmayan fikir alışverişi önerilir.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* TAB 4: LINKEDIN ADS & ABM */}
          <div className={activeTab === 'ads' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {isTr ? 'LinkedIn Ads & Account-Based Marketing (ABM) Stratejisi' : 'LinkedIn Ads & Account-Based Marketing (ABM)'}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                {isTr
                  ? 'B2B sözleşme değerlerinizin 25.000$ ve üzerinde olduğu senaryolarda, genel kitle reklamları bütçenizi yakar. ABM stratejimiz ile CRM’inizdeki veya sektörünüzdeki 100-500 hedef şirketi Matched Audiences olarak Campaign Manager’a aktarırız.'
                  : 'In high-ticket enterprise contracts, broad reach burns ad budgets. Our ABM model injects 100 to 500 hand-picked corporate accounts directly into LinkedIn Matched Audiences.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-xs text-navy block mb-1">Thought Leader Ads</span>
                  <p className="text-xs text-content-secondary">
                    {isTr
                      ? 'Şirket logosu yerine kurucunun uzmanlık yazısını hedef komitenin akışına sponsorlu düşürür.'
                      : 'Sponsors executive founder posts directly into the feeds of target procurement committees.'}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-xs text-navy block mb-1">Lead Gen Forms</span>
                  <p className="text-xs text-content-secondary">
                    {isTr
                      ? 'Dış açılış sayfasına yönlendirmeden, doğrulanmış şirket verileriyle 1-tıkta form tamamlama.'
                      : 'In-app pre-filled forms capturing verified corporate data with 2.5x higher conversion.'}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-xs text-navy block mb-1">Outbound Sinerjisi</span>
                  <p className="text-xs text-content-secondary">
                    {isTr
                      ? 'Reklamı gören yöneticiye outreach yapıldığında bağlantı kabul hızı %60 artar.'
                      : 'Connecting with accounts actively exposed to sponsored proof surges reply rates by 60%.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 5: PROFILE & CONTENT */}
          <div className={activeTab === 'profile' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {isTr ? 'Satış Yapan Profil & B2B LinkedIn İçerik Mimarisi' : 'Sales Landing Page Profiles & Executive Content'}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                {isTr
                  ? 'Bir karar verici mesajınızı aldığında web sitenizden önce profilinize tıklar. Profiliniz geçmişinizi anlatan bir özgeçmiş değil; ilk 5 saniyede kime ne fayda sağladığınızı ve randevu linkinizi gösteren bir satış sayfası olmalıdır.'
                  : 'Executives inspect your profile before answering any outreach. If your profile reads like an employee résumé, conversion drops. We format profiles as high-converting executive sales letters.'}
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="font-bold text-xs uppercase tracking-wider text-overseas block">
                  {isTr ? 'Dönüşüm Formülü:' : 'The 5-Second Headline Formula:'}
                </span>
                <p className="text-sm font-semibold text-navy">
                  "[Hedef Kitle / Sektör]"e [İstenen Somut Çıktı / Tasarruf]a ulaşmasında [Tescilli Metodoloji] ile yardımcı oluyoruz.
                </p>
                <p className="text-xs text-content-secondary">
                  Örnek: "Üretim ve sanayi şirketlerine, Avrupa ve Körfez pazarındaki satın alma direktörlerine ulaşarak ayda 15+ nitelikli B2B ihracat görüşmesi alma sistemi kuruyoruz."
                </p>
              </div>
            </div>
          </div>

          {/* TAB 6: SECTOR SOLUTIONS */}
          <div className={activeTab === 'industries' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {isTr ? 'Sektörel B2B LinkedIn Müşteri Kazanım Modelleri' : 'Industry-Specific B2B Acquisition Frameworks'}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                {isTr
                  ? 'Her sektörün satın alma döngüsü, karar verici hiyerarşisi ve itirazları farklıdır. Aynı şablonu tüm sektörlerde kullanmak başarısızlığın ana nedenidir.'
                  : 'Every vertical has distinct sales velocity, buying committee size, and friction points. Template recycling fails in enterprise sales.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-overseas/40 transition-colors">
                  <span className="font-bold text-sm text-navy block mb-1">Üretim & Sanayi</span>
                  <p className="text-xs text-content-secondary mb-2">Satın alma müdürleri, fabrika yöneticileri ve OEM tedarik komiteleri.</p>
                  <span className="text-[11px] text-overseas font-semibold">6-12 Ay Satış Döngüsü</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-overseas/40 transition-colors">
                  <span className="font-bold text-sm text-navy block mb-1">B2B SaaS & Yazılım</span>
                  <p className="text-xs text-content-secondary mb-2">CTO, Ürün Direktörleri ve Kurucu Ortaklar için demo randevuları.</p>
                  <span className="text-[11px] text-overseas font-semibold">1-3 Ay Satış Döngüsü</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-overseas/40 transition-colors">
                  <span className="font-bold text-sm text-navy block mb-1">İhracat Firmaları</span>
                  <p className="text-xs text-content-secondary mb-2">Hedef ülkelerdeki ithalatçılar, toptancılar ve distribütör ağları.</p>
                  <span className="text-[11px] text-overseas font-semibold">Küresel Pazar Açılımı</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-overseas/40 transition-colors">
                  <span className="font-bold text-sm text-navy block mb-1">Sağlık & Medikal</span>
                  <p className="text-xs text-content-secondary mb-2">Hastane yöneticileri, klinik sahipleri ve medikal alıcılar.</p>
                  <span className="text-[11px] text-overseas font-semibold">B2B Kurumsal Sağlık</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-overseas/40 transition-colors">
                  <span className="font-bold text-sm text-navy block mb-1">Lojistik & Tedarik</span>
                  <p className="text-xs text-content-secondary mb-2">Tedarik zinciri direktörleri ve dış ticaret operasyon liderleri.</p>
                  <span className="text-[11px] text-overseas font-semibold">Hacim ve Rota Anlaşmaları</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-overseas/40 transition-colors">
                  <span className="font-bold text-sm text-navy block mb-1">Kurumsal Danışmanlık</span>
                  <p className="text-xs text-content-secondary mb-2">CEO, İK Direktörleri ve Yönetim Kurulu üyeleri için strateji toplantıları.</p>
                  <span className="text-[11px] text-overseas font-semibold">Yüksek Ticket Danışmanlık</span>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 7: DECISION MAKERS */}
          <div className={activeTab === 'decisionMakers' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {isTr ? 'Hedef Pozisyon ve Karar Verici Haritalaması' : 'Role-Specific Decision-Maker Architecture'}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                {isTr
                  ? 'B2B satın alma komitelerinde tek bir kişiye mesaj atarak satış beklemek sürecin kilitlenmesine neden olur. Bir şirketteki finansal alıcı (CFO), teknik onaylayıcı (CTO/Mühendis) ve son kullanıcı direktörünü senkronize biçimde yakalamak gerekir.'
                  : 'Multi-threading buying committees is mandatory in enterprise transactions. We isolate economic buyers, technical evaluators, and department heads simultaneously.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-sm text-navy block mb-1">Satın Alma Müdürleri (Procurement)</span>
                  <p className="text-xs text-content-secondary mb-2">
                    {isTr
                      ? 'Odak: Birim maliyet, teslimat güvenilirliği, sözleşme şartları ve SLA garantileri. Fiyat teklifi yerine tedarik darboğazı analiziyle yaklaşılır.'
                      : 'Priority: Unit cost predictability, delivery SLA compliance, and vendor risk mitigation.'}
                  </p>
                  <span className="text-[11px] text-sky-700 font-semibold">RFP / İhale Öncesi İletişim Stratejisi</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-sm text-navy block mb-1">CEO & Şirket Sahipleri</span>
                  <p className="text-xs text-content-secondary mb-2">
                    {isTr
                      ? 'Odak: Gelir artışı, pazar payı, stratejik rekabet avantajı ve operasyonel verimlilik. Uzun metinler yerine 3 cümlelik net değer önerisi sunulur.'
                      : 'Priority: Enterprise EBITDA, top-line revenue, competitive moats, and operational velocity.'}
                  </p>
                  <span className="text-[11px] text-sky-700 font-semibold">Kısa & Sonuç Odaklı C-Level İletişimi</span>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 8: FAQ & GUIDES */}
          <div className={activeTab === 'faq' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {isTr ? 'B2B LinkedIn Pazarlama Hakkında Sıkça Sorulan Sorular' : 'Frequently Asked Questions & Educational Guides'}
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-sm text-navy block mb-1">
                    {isTr ? 'LinkedIn mesajları spam olarak algılanır mı veya hesabım ceza alır mı?' : 'Will outreach messages trigger spam filters or account restrictions?'}
                  </span>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {isTr
                      ? 'Hayır. Haftalık platform limitlerine (100–150 davet) sıkı sıkıya uyulur, üçüncü parti riskli botlar kullanılmaz ve insan onaylı iletişim uygulanır.'
                      : 'No. We strictly adhere to platform rate constraints (100–150 weekly connection requests) and deploy human strategic review.'}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-sm text-navy block mb-1">
                    {isTr ? 'Sales Navigator danışmanlığı satıyor musunuz?' : 'Do you sell standalone Sales Navigator consulting?'}
                  </span>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {isTr
                      ? 'Hayır. Sales Navigator bir amaç değil, doğru karar vericileri tespit etmek için kullandığımız yardımcı bir araştırma aracıdır. Hizmetimiz doğrudan B2B müşteri kazanımı ve randevu oluşturmadır.'
                      : 'No. Sales Navigator is purely an internal investigative tool for Boolean scraping and decision-maker filtering, not a standalone commercial service.'}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-sm text-navy block mb-1">
                    {isTr ? 'İlk sonuçları ne kadar sürede görürüz?' : 'When can we expect measurable discovery meetings?'}
                  </span>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {isTr
                      ? 'İlk 14 gün onboarding, ICP haritalama ve profil revizyonu tamamlanır. 3. haftadan itibaren takviminize nitelikli satış toplantıları düşmeye başlar.'
                      : 'Technical onboarding, account list curation, and profile re-architecture take 14 days. Pipeline briefings begin landing on calendars in week 3.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Persistent Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-content-secondary">
              <span className="font-bold text-navy block sm:inline mr-2">
                {isTr ? 'Strateji İhtiyacınız mı Var?' : 'Ready to Benchmark Your Pipeline?'}
              </span>
              {isTr 
                ? 'Hedef şirket listenizi ve karar verici haritanızı 24 saat içinde çıkaralım.'
                : 'Receive your customized ICP audit and named account roadmap within 24 hours.'}
            </div>
            
            <button
              onClick={onOpenModal}
              className="btn-glass-primary px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>{isTr ? 'Ücretsiz Strateji Görüşmesi Planla' : 'Schedule Strategy Briefing'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
