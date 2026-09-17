/**
 * Comparative Strategy Analyses for b2blinkedin.marketing
 * Follows Section 12 requirements: strengths, weaknesses, costs, velocity, scale, risk, decision table, and verdict.
 */

export const comparisonsData = {
  'linkedin-ads-vs-google-ads': {
    slug: 'linkedin-ads-vs-google-ads',
    enSlug: 'comparisons/linkedin-ads-vs-google-ads',
    titleTr: 'LinkedIn Ads mi Google Ads mi? B2B Müşteri Kazanım Karar Rehberi',
    titleEn: 'LinkedIn Ads vs Google Ads for B2B: The Definitive Comparison Matrix',
    descTr: 'B2B şirketler için LinkedIn Ads mi Google Ads mi? Maliyet kıyaslaması, karar verici hedefleme, niyet yakalama ve hibrit model analizi.',
    descEn: 'Compare LinkedIn Ads vs Google Ads for enterprise B2B. Cost per acquisition, intent capture, buying committee coverage, and hybrid models.',
    h1Tr: 'LinkedIn Ads mi Google Ads mi? B2B Şirketler İçin Kapsamlı Karar Matrisi',
    h1En: 'LinkedIn Ads vs Google Ads for B2B: Strategic Decision Matrix',
    badgeTr: 'B2B KANAL KARŞILAŞTIRMASI',
    badgeEn: 'B2B CHANNEL MATRIX',
    directAnswerTr: 'Google Ads, arama anındaki aktif satın alma niyetini (intent) yakalamada rakipsizdir; ancak arayan kişinin 10 kişilik bir işletme mi yoksa 5.000 kişilik bir holdingin Satın Alma Direktörü mü olduğunu filtreleyemez. LinkedIn Ads ise unvan, şirket büyüklüğü ve kıdem düzeyine göre %100 nokta atışı hedefleme sağlar. B2B satışta en yüksek getiri; Google Ads ile arama niyetini toplarken, LinkedIn Ads ve ABM ile hedef şirketlerin satın alma komitelerini kuşatan hibrit modelden elde edilir.',
    directAnswerEn: 'Google Search Ads captures immediate active buyer intent, but cannot differentiate whether the searcher is an intern, an SMB, or a Fortune 500 Procurement Director. LinkedIn Ads provides zero-waste demographic precision, surrounding verified buying committees by job title and named account lists. For high-ticket B2B enterprises, the highest pipeline velocity is achieved via a hybrid model: harvesting high-intent searches on Google while account-based retargeting and executive thought leadership run on LinkedIn.',
    author: 'Overseas Performance Team',
    updatedDateTr: '16 Eylül 2026',
    updatedDateEn: 'September 16, 2026',
    criteriaComparison: [
      { criterionTr: 'Hedefleme Hassasiyeti', criterionEn: 'Targeting Precision', linkedinTr: 'Unvan, şirket büyüklüğü, kıdem, sektör bazında %100 kesin', googleTr: 'Arama terimi ve anahtar kelime bazlı niyet' },
      { criterionTr: 'Tıklama Başı Maliyet (CPC)', criterionEn: 'Cost Per Click (CPC)', linkedinTr: '$5.00 - $14.00 (Daha Yüksek)', googleTr: '$2.00 - $8.00 (Daha Düşük)' },
      { criterionTr: 'Lead Kalitesi (SQL Oranı)', criterionEn: 'Lead Quality (SQL Rate)', linkedinTr: '%35 - %50 (Doğrulanmış Karar Verici)', googleTr: '%15 - %25 (Karmaşık Kitle)' },
      { criterionTr: 'Satın Alma Komitesi Kapsamı', criterionEn: 'Buying Committee Coverage', linkedinTr: 'CFO, CTO, Satın Alma aynı anda hedeflenir', googleTr: 'Yalnızca arama yapan birey hedeflenir' },
      { criterionTr: 'En Uygun Olduğu Senaryo', criterionEn: 'Best Fit Scenario', linkedinTr: 'Sözleşme değeri 20.000$+ olan yüksek biletli B2B satışlar', googleTr: 'Acil problem arayan ve doğrudan tedarikçi arayanlar' }
    ],
    verdictTr: 'Yıllık müşteri yaşam boyu değeriniz (LTV) 15.000$ ve üzerindeyse LinkedIn Ads, bütçe israfını sıfırlayarak karar vericilere ulaşmada kesin galip gelir. Ancak iki kanal birbirinin alternatifi değil, satış hunisinin farklı aşamalarını besleyen müttefikleridir.',
    verdictEn: 'For contracts exceeding $15,000 in ACV, LinkedIn Ads eliminates vanity spend and guarantees access to genuine economic buyers. The optimal enterprise strategy leverages Google for inbound search capture while dominating buying committees via LinkedIn Ads.',
    relatedLinksTr: [
      { url: '/linkedin-ads-yonetimi', label: 'LinkedIn Ads Yönetimi' },
      { url: '/b2b-lead-generation', label: 'B2B Lead Generation' }
    ],
    relatedLinksEn: [
      { url: '/en/linkedin-ads-agency', label: 'LinkedIn Ads Agency' },
      { url: '/en/b2b-lead-generation-services', label: 'B2B Lead Generation' }
    ]
  },

  'linkedin-outreach-vs-cold-email': {
    slug: 'linkedin-outreach-vs-cold-email',
    enSlug: 'comparisons/linkedin-outreach-vs-cold-email',
    titleTr: 'LinkedIn Outreach mi Cold Email mi? B2B Satışta Hangisi Daha Etkili?',
    titleEn: 'LinkedIn Outreach vs Cold Email: Which Generates Higher B2B ROI?',
    descTr: 'B2B müşteri bulmada LinkedIn outreach mi cold email mi? Yanıt oranları, teslim edilebilirlik, spam riskleri ve hibrit sekans analizi.',
    descEn: 'Compare LinkedIn outreach vs cold email for outbound prospecting. Deliverability, reply rates, spam filters, and omnichannel workflows.',
    h1Tr: 'LinkedIn Outreach mi Cold Email mi? B2B Soğuk Temasta Kazanan Kanal',
    h1En: 'LinkedIn Outreach vs Cold Email: The B2B Outbound Showdown',
    badgeTr: 'OUTBOUND STRATEJİSİ',
    badgeEn: 'OUTBOUND STRATEGY',
    directAnswerTr: 'Cold email, geniş kitlelere düşük maliyetle ulaşmada ölçeklenebilirlik sağlar; ancak yeni Google/Yahoo spam filtreleri, kurumsal güvenlik duvarları ve açılma oranlarının %20’nin altına düşmesi nedeniyle kurumsal karar vericilere ulaşmak giderek zorlaşmaktadır. LinkedIn Outreach ise kişisel profil güveni, %100 teslim edilebilirlik ve karar vericinin kimliğinizi anında inceleyebilmesi sayesinde %25-40 arasında yanıt oranı üretir. Kurumsal B2B satışta LinkedIn Outreach güven ve randevu üretiminde kesin liderdir.',
    directAnswerEn: 'Cold email offers raw mechanical scale, but strict deliverability safeguards (DMARC, DKIM, Spamhaus) and enterprise corporate firewalls have driven true executive open rates into the ground. LinkedIn Outreach delivers verified 100% inbox placement, authenticated professional identity, and direct profile credibility, yielding reply rates 3 to 4 times higher than cold email. In high-ticket enterprise prospecting, LinkedIn is the premier channel for appointment velocity.',
    author: 'Overseas Outbound Lab',
    updatedDateTr: '16 Eylül 2026',
    updatedDateEn: 'September 16, 2026',
    criteriaComparison: [
      { criterionTr: 'Teslim Edilebilirlik', criterionEn: 'Deliverability', linkedinTr: '%100 (Doğrudan LinkedIn gelen kutusu)', googleTr: '%60 - %80 (Spam kutusu ve güvenlik riski)' },
      { criterionTr: 'Ortalama Yanıt Oranı', criterionEn: 'Reply Velocity', val: '%24 - %38', linkedinTr: '%24 - %38 (Kişiselleştirilmiş)', googleTr: '%2 - %6 (Giderek düşüşte)' },
      { criterionTr: 'Güven ve Sosyal Kanıt', criterionEn: 'Social Proof & Trust', linkedinTr: 'Profil, ortak bağlantılar ve referanslar görünür', googleTr: 'Yalnızca gönderen adı ve e-posta adresi görünür' },
      { criterionTr: 'Hacim / Ölçeklenebilirlik', criterionEn: 'Volume & Scale', linkedinTr: 'Haftalık 100-150 davet (Sıkı platform sınırı)', googleTr: 'Binlerce e-posta (Domain ısıtma ile)' },
      { criterionTr: 'En Uygun Olduğu Alan', criterionEn: 'Best Fit Context', linkedinTr: 'Orta ve büyük ölçekli şirketlerdeki karar vericiler', googleTr: 'KOBİ ve mikro işletmelere yönelik geniş taramalar' }
    ],
    verdictTr: 'Yüksek biletli kurumsal müşterilere ulaşmak istiyorsanız LinkedIn Outreach birincil kanalınız olmalıdır. E-posta ise LinkedIn’de bağlantı kurulamayan veya takip gerektiren durumlarda destekleyici ikinci adım olarak kullanılmalıdır.',
    verdictEn: 'For enterprise contracts and high-ticket B2B offerings, LinkedIn Outreach is your primary revenue spear. Cold email serves as a secondary follow-up channel within a synchronized omnichannel sequence.',
    relatedLinksTr: [
      { url: '/linkedin-outreach-hizmeti', label: 'LinkedIn Outreach Hizmeti' },
      { url: '/b2b-randevu-ayarlama', label: 'B2B Randevu Ayarlama' }
    ],
    relatedLinksEn: [
      { url: '/en/linkedin-outreach-services', label: 'LinkedIn Outreach Services' },
      { url: '/en/b2b-appointment-setting', label: 'B2B Appointment Setting' }
    ]
  }
};
