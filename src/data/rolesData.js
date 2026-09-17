/**
 * Target Decision-Maker Roles Data for b2blinkedin.marketing
 * Follows Section 7 requirements: buying power, targeting formula, connection approach, timing, and metrics.
 */

export const rolesData = {
  'satinalma-mudurlerine-ulasma': {
    slug: 'satinalma-mudurlerine-ulasma',
    enSlug: 'reach-procurement-managers-on-linkedin',
    roleTitleTr: 'Satın Alma Müdürleri ve Direktörlerine Ulaşma',
    roleTitleEn: 'How to Reach Procurement & Sourcing Managers on LinkedIn',
    titleTr: 'Satın Alma Müdürlerine Ulaşma: LinkedIn B2B Karar Verici İletişim Rehberi',
    titleEn: 'How to Reach Procurement Managers on LinkedIn: B2B Sourcing Strategy',
    descTr: 'LinkedIn’de satın alma müdürlerine, direktörlerine ve tedarik liderlerine nasıl ulaşılır? İkna edici mesaj açıları, RFP öncesi temas ve vaka analizi.',
    descEn: 'Connect with Procurement Managers and Sourcing Directors on LinkedIn. Value-driven messaging cadences that secure vendor RFP discovery calls.',
    h1Tr: 'LinkedIn’de Satın Alma Müdürlerine Ulaşma ve Tedarikçi Toplantısı Alma Stratejisi',
    h1En: 'How to Reach Procurement Managers on LinkedIn & Secure Supplier Briefings',
    badgeTr: 'HEDEF KARAR VERİCİ: SATIN ALMA',
    badgeEn: 'TARGET DECISION-MAKER: PROCUREMENT',
    directAnswerTr: 'Satın alma müdürleri (Procurement & Sourcing Managers), şirketlerin maliyetlerini düşürmek, tedarik risklerini minimize etmek ve sözleşme şartlarını garantiye almakla yükümlü en rasyonel karar vericilerdir. Onlara doğrudan "ürünümüzü alın" veya "fiyat teklifi verelim" yaklaşımıyla gitmek %98 ihtimalle yanıtsız kalır. Satın alma liderlerine ulaşmanın yolu; tedarik zincirlerindeki spesifik darboğazları teşhis etmek, birim maliyet veya termin süresi avantajını somut verilerle sunmak ve resmi ihale / RFP döneminden önce güvene dayalı profesyonel bir diyalog başlatmaktır.',
    directAnswerEn: 'Procurement managers and supply chain directors evaluate enterprise offerings strictly through the lens of unit cost predictability, contractual stability, and vendor operational risk. Hard sales pitches are ignored by 98% of procurement leaders. Converting procurement executives requires diagnosing acute supply chain vulnerabilities, demonstrating verifiable cost or delivery SLA advantages, and establishing credibility well before formal RFP bidding cycles begin.',
    author: 'Overseas B2B Strategy Team',
    updatedDateTr: '16 Eylül 2026',
    updatedDateEn: 'September 16, 2026',
    tableOfContents: [
      { id: 'rol-etkisi', labelTr: 'Satın Alma Rolünün Karar Gücü', labelEn: 'Procurement Authority Scope' },
      { id: 'sirket-turleri', labelTr: 'Hangi Şirketlerde Bulunur?', labelEn: 'Target Company Archetypes' },
      { id: 'hedefleme', labelTr: 'Doğru Hedefleme Yaklaşımı', labelEn: 'Targeting & Boolean Formula' },
      { id: 'mesaj-akisi', labelTr: 'İlk Mesaj ve Takip Protokolü', labelEn: 'Messaging Sequence & Timing' },
      { id: 'reklam-icerik', labelTr: 'Reklam ve İçerik Desteği', labelEn: 'Content & Sponsored Ads Lift' },
      { id: 'olcum', labelTr: 'Ölçüm ve KPI’lar', labelEn: 'Conversion Benchmarks' },
      { id: 'faq', labelTr: 'Sık Sorulan Sorular', labelEn: 'Frequently Asked Questions' }
    ],
    roleOverviewTr: {
      roleTitle: 'Satın Alma Müdürü / Direktörü (Procurement / Purchasing / Sourcing)',
      buyingInfluence: 'Doğrudan bütçe onaylama, tedarikçi listesine (vendor list) alma, fiyat pazarlığı yürütme ve sözleşme şartlarını belirleme yetkisi.',
      targetCompanies: '50+ çalışanı olan üretim tesisleri, perakende zincirleri, lojistik şirketleri, inşaat taahhüt firmaları ve kurumsal holdingler.'
    },
    roleOverviewEn: {
      roleTitle: 'Head of Procurement / Sourcing Director / Purchasing VP',
      buyingInfluence: 'Direct signoff on vendor accreditation, pricing negotiations, SLA terms, and contract awards.',
      targetCompanies: 'Mid-market to enterprise manufacturers, retail supply chains, commercial contractors, and healthcare systems.'
    },
    targetingFormulaTr: 'Sales Navigator Filtresi: Title = ("Procurement Director" OR "Head of Purchasing" OR "Satın Alma Müdürü" OR "Sourcing Lead") AND Company Headcount = 50-5000+ AND Seniority = Director / Manager.',
    targetingFormulaEn: 'Sales Navigator Formula: Title = ("Procurement Director" OR "Head of Purchasing" OR "VP Sourcing" OR "Supply Chain Lead") AND Headcount = 50-5,000+ AND Seniority = Director+.',
    connectionApproachTr: 'Satış cümlesi içermeyen, şirketin faaliyet gösterdiği sektördeki hammadde/termin darboğazlarına atıfta bulunan sade bir not iletilir.',
    connectionApproachEn: 'A respectful, zero-pitch connection request noting industry-wide supply lead time shifts or regulatory packaging updates.',
    firstMessageGoalTr: 'Doğrudan satış yapmadan, benzer ölçekteki firmalarda sağlanan ortalama %12-18 maliyet tasarrufu veya teslimat hızı vakasını tek cümleyle paylaşmak.',
    firstMessageGoalEn: 'Share an empirical benchmark demonstrating 12-18% unit cost optimization or lead time reduction achieved with peer enterprises.',
    timingOfOfferTr: 'Bağlantı kabulünden 3-4 gün sonra değer odaklı kaynak sunulur; problem teyit edildikten sonra 15 dakikalık keşif görüşmesi istenir.',
    timingOfOfferEn: 'Intellectual asset shared on day 3 post-connection; discovery call requested only once current supply friction is acknowledged.',
    adContentSupportTr: 'Satın alma müdürleri Thought Leader Ads formatında paylaşılan ISO/DIN sertifikalarını, fabrika kapasite videolarını ve vaka carousellerini incelediğinde güven eşiği aşılır.',
    adContentSupportEn: 'Procurement executives respond favorably when seeing sponsored Thought Leader posts highlighting third-party audit reports and capacity metrics.',
    kpis: [
      { labelTr: 'Bağlantı Kabulü', labelEn: 'Acceptance Rate', val: '%28 - %38' },
      { labelTr: 'Yanıt Oranı', labelEn: 'Reply Velocity', val: '%20 - %30' },
      { labelTr: 'RFP / Toplantı Dönüşümü', labelEn: 'Meeting / RFP Rate', val: '%12 - %18' }
    ],
    faqsTr: [
      { q: 'Satın alma müdürleri fiyat listesi istemeden toplantı yapar mı?', a: 'Evet. Eğer sunduğunuz çözüm mevcut tedarikçideki kritik bir termin/kalite riskini çözüyorsa, fiyat öncesinde teknik yeterliliği ve kapasiteyi konuşmak için masaya otururlar.' },
      { q: 'İhale dönemi dışında temas kurmak mantıklı mı?', a: 'En verimli zaman ihale öncesi dönemdir. Resmi ihale açıldığında şartname genellikle önceden ilişki kurulan tedarikçilere göre şekillenir.' }
    ],
    faqsEn: [
      { q: 'Will procurement managers meet without receiving a price sheet first?', a: 'Yes. If your proposition resolves a critical supply vulnerability or delivery bottleneck, they prioritize operational capability discussions.' },
      { q: 'Is it effective to outreach outside formal RFP windows?', a: 'It is the most effective window. By the time formal RFPs are published, specifications are frequently molded around pre-established vendor relationships.' }
    ],
    relatedServicesTr: [
      { url: '/linkedin-outreach-hizmeti', label: 'LinkedIn Outreach Yönetimi' },
      { url: '/linkedin-musteri-bulma', label: 'LinkedIn Müşteri Bulma' },
      { url: '/sektorler/uretim-firmalari-linkedin-pazarlama', label: 'Üretim Firmaları Çözümleri' }
    ],
    relatedServicesEn: [
      { url: '/en/linkedin-outreach-services', label: 'LinkedIn Outreach Services' },
      { url: '/en/linkedin-lead-generation-agency', label: 'LinkedIn Lead Generation' },
      { url: '/en/industries/linkedin-lead-generation-for-manufacturers', label: 'Manufacturing Solutions' }
    ]
  },

  'ceolara-ulasma': {
    slug: 'ceolara-ulasma',
    enSlug: 'reach-ceos-on-linkedin',
    roleTitleTr: 'CEO ve Şirket Sahiplerine Ulaşma',
    roleTitleEn: 'How to Reach CEOs & Business Owners on LinkedIn',
    titleTr: 'CEO’lara ve Şirket Sahiplerine LinkedIn’den Ulaşma Stratejisi',
    titleEn: 'How to Reach CEOs on LinkedIn: High-Ticket C-Level Prospecting',
    descTr: 'LinkedIn’de CEO’lara, genel müdürlere ve kuruculara nasıl ulaşılır? 3 cümlelik değer önerisi formülü, zaman tasarrufu ve C-Level toplantı alma rehberi.',
    descEn: 'Proven frameworks to initiate meaningful dialogue with CEOs and corporate founders on LinkedIn without being dismissed as sales spam.',
    h1Tr: 'LinkedIn’de CEO’lara ve Şirket Sahiplerine Ulaşma: C-Level Satış Toplantısı Alma Rehberi',
    h1En: 'How to Reach CEOs & Founders on LinkedIn: Executive Prospecting Playbook',
    badgeTr: 'HEDEF KARAR VERİCİ: CEO & KURUCULAR',
    badgeEn: 'TARGET DECISION-MAKER: C-SUITE',
    directAnswerTr: 'CEO’lar ve şirket sahipleri gün içinde onlarca satış mesajına maruz kalan, zamanı en kısıtlı ve detaylı teknik açıklamaları okumaya vakti olmayan tepe yöneticilerdir. Bir CEO’ya uzun paragraflarla ürün anlatmak ilgiyi anında kaybettirir. CEO’lara ulaşmanın kanıtlanmış kuralı; şirketin temel büyüme hedeflerine (EBITDA, pazar payı, maliyet düşürme, operasyonel hız) doğrudan dokunan maksimum 3-4 cümlelik net bir değer önerisi sunmak ve görüşmeyi düşük sürtünmeli 15 dakikalık stratejik fikir alışverişi olarak konumlandırmaktır.',
    directAnswerEn: 'CEOs and corporate founders operate under severe time constraints, receiving dozens of unsolicited pitches every week. Lengthy technical feature descriptions are immediately discarded. Engaging enterprise CEOs requires brevity, strategic altitude, and an immediate connection to top-line enterprise value (EBITDA expansion, risk mitigation, or market share). Frame outreach as a 15-minute peer-level strategic exchange rather than an aggressive sales pitch.',
    author: 'Overseas Leadership Practice',
    updatedDateTr: '16 Eylül 2026',
    updatedDateEn: 'September 16, 2026',
    tableOfContents: [
      { id: 'rol-etkisi', labelTr: 'CEO’ların Karar Alma Psikolojisi', labelEn: 'CEO Decision-Making Psychology' },
      { id: 'hedefleme', labelTr: 'C-Level Hedefleme Formülü', labelEn: 'Targeting Matrix' },
      { id: 'mesaj-akisi', labelTr: '3 Cümlelik C-Level Mesaj Formülü', labelEn: 'The 3-Sentence Executive Script' },
      { id: 'zamanlama', labelTr: 'Toplantı Talebi Zamanlaması', labelEn: 'Briefing Request Timing' },
      { id: 'faq', labelTr: 'Sık Sorulan Sorular', labelEn: 'Frequently Asked Questions' }
    ],
    roleOverviewTr: {
      roleTitle: 'CEO, Genel Müdür, Kurucu Ortak (Managing Director / Founder)',
      buyingInfluence: 'Nihai imza yetkisi, stratejik yön tayini ve büyük bütçeli yatırımların onaylayıcısı.',
      targetCompanies: 'KOBİ’lerden büyük holdinglere kadar tüm ticari işletmeler.'
    },
    roleOverviewEn: {
      roleTitle: 'Chief Executive Officer / Managing Director / Founder',
      buyingInfluence: 'Ultimate budget signatory, strategic direction, and final project approval.',
      targetCompanies: 'Mid-market scaleups to multinational enterprise groups.'
    },
    targetingFormulaTr: 'Sales Navigator: Title = ("Chief Executive Officer" OR "CEO" OR "Genel Müdür" OR "Founder" OR "Managing Director") AND Headcount = 20-500+.',
    targetingFormulaEn: 'Sales Navigator: Title = ("CEO" OR "Chief Executive Officer" OR "Managing Director" OR "Founder") AND Headcount = 20-1,000+.',
    connectionApproachTr: 'CEO’nun son röportajına, şirket büyüme hamlesine veya sektördeki stratejik bir gelişmeye atıf yapan kişisel not.',
    connectionApproachEn: 'Personalized reference to recent company capital expansion, leadership hire, or industry thought piece.',
    firstMessageGoalTr: 'Maksimum 50-70 kelimede: Problem tespiti + Benzer şirketteki somut sonuç + 15 dakikalık bağlayıcı olmayan görüşme teklifi.',
    firstMessageGoalEn: 'Within 50-70 words: diagnose high-level friction, cite a peer metric, propose a low-friction 15-minute briefing.',
    timingOfOfferTr: 'CEO’lar uzun sekanslarla vakit kaybetmek istemez; 2. veya 3. temasta doğrudan değer önerisi ve takvim sunulmalıdır.',
    timingOfOfferEn: 'CEOs favor directness; introduce the strategic value proposition and calendar link by touch 2 or 3.',
    adContentSupportTr: 'CEO’nun akışına kendi profilinizden kurucu perspektifli Thought Leader Ads düşürülmesi güveni katlar.',
    adContentSupportEn: 'Deploying founder-led Thought Leader Ads establishes instant peer-to-peer category authority.',
    kpis: [
      { labelTr: 'Kabul Oranı', labelEn: 'Acceptance Rate', val: '%26 - %35' },
      { labelTr: 'Doğrudan Yanıt', labelEn: 'Direct Reply Rate', val: '%18 - %26' },
      { labelTr: 'İlgili Yöneticiye Yönlendirme', labelEn: 'Executive Delegation Rate', val: '%24+' }
    ],
    faqsTr: [
      { q: 'CEO mesajımı okur mu yoksa asistanı mı yönetiyor?', a: '100-500 çalışanlı şirketlerde CEO’ların %70’i kendi LinkedIn hesabını doğrudan mobil cihazından bizzat kontrol etmektedir.' },
      { q: 'CEO mesajı alt ekibine yönlendirirse ne yapmalıyız?', a: 'Bu en değerli dönüşlerden biridir. "CEO’nuz X Bey’in yönlendirmesiyle iletişime geçiyorum" cümlesi alt departmanla randevu alma oranını %80’in üzerine çıkarır.' }
    ],
    faqsEn: [
      { q: 'Do CEOs read their own LinkedIn messages or use assistants?', a: 'In mid-market firms (50-500 headcount), over 70% of CEOs check their LinkedIn inbox personally on mobile devices.' },
      { q: 'What if the CEO delegates the message to a VP?', a: 'This is the ideal outcome. Citing CEO endorsement when reaching the assigned director accelerates meeting conversion past 80%.' }
    ],
    relatedServicesTr: [
      { url: '/b2b-randevu-ayarlama', label: 'B2B Randevu Ayarlama' },
      { url: '/linkedin-musteri-bulma', label: 'LinkedIn Müşteri Bulma' },
      { url: '/b2b-lead-generation', label: 'B2B Lead Generation' }
    ],
    relatedServicesEn: [
      { url: '/en/b2b-appointment-setting', label: 'B2B Appointment Setting' },
      { url: '/en/linkedin-lead-generation-agency', label: 'LinkedIn Lead Generation' },
      { url: '/en/b2b-lead-generation-services', label: 'B2B Lead Generation Services' }
    ]
  }
};
