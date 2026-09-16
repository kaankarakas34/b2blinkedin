import React, { useState } from 'react';
import { MapPin, Mail, Globe, Phone, Shield, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const ContactPage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';

  const [pageFormData, setPageFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    dealSize: '25.000$ - 100.000$',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...pageFormData,
          source: 'İletişim Sayfası Doğrudan Formu'
        })
      });
      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        alert(data.error || 'Form iletilemedi, lütfen tekrar deneyin.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback display
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-content-secondary">
          <button onClick={() => onNavigate('home')} className="hover:text-navy transition-colors">
            {isTr ? 'Ana Sayfa' : 'Home'}
          </button>
          <span>/</span>
          <span className="text-navy font-bold">{isTr ? 'İletişim' : 'Contact'}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5 text-overseas" />
              <span>{isTr ? 'B2B STRATEJİ DANIŞMANLIĞI' : 'B2B STRATEGY BRIEFING'}</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight mb-4">
              {isTr ? 'Bir Sonraki Müşteriniz LinkedIn’de.' : 'Your Next Enterprise Client Is on LinkedIn.'}
            </h1>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
              {isTr 
                ? 'Hedef şirketlerinizi, karar verici profillerinizi ve LinkedIn B2B müşteri edinimi yol haritanızı birlikte oluşturalım.'
                : 'Let us engineer your target-account list, decision-maker personas, and high-converting acquisition workflows.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
            
            {/* Contact Details Card */}
            <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-white/80 space-y-6">
              <h3 className="font-heading font-bold text-xl text-navy">
                {isTr ? 'İletişim Bilgileri' : 'Office Information'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-navy/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-overseas shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-navy">İstanbul Merkez:</span>
                    <span>Levent, Büyükdere Cad. No:199, Şişli / İstanbul</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-overseas shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-navy">E-posta:</span>
                    <a href="mailto:hello@overseas.marketing" className="text-overseas hover:underline">hello@overseas.marketing</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-overseas shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-navy">Global Operasyon:</span>
                    <span>İstanbul • London • Berlin</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E151F] text-white flex items-center gap-3">
                <img src="/linkedin_ads_partner.png" alt="Partner" className="h-7 w-auto block" />
                <div className="text-xs">
                  <span className="font-bold block text-sky-400">Resmi LinkedIn Ads Partneri</span>
                  <span className="text-[10px] text-slate-300">Overseas Marketing</span>
                </div>
              </div>
            </div>

            {/* Direct Interactive Strategy Briefing Form */}
            <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated">
              <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{isTr ? 'ÜCRETSİZ STRATEJİ VE HEDEF KİTLE ANALİZİ' : 'FREE STRATEGY & ICP AUDIT'}</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-navy mb-2">
                {isTr ? 'B2B Strateji Görüşmesi Talep Edin' : 'Request B2B Strategy Briefing'}
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed mb-6">
                {isTr 
                  ? 'Formu doldurun, şirketinizin sektörüne özel karar verici havuzu ve LinkedIn B2B müşteri kazanım planınızı 24 saat içinde iletelim.'
                  : 'Submit the form to receive your custom decision-maker pool audit and B2B LinkedIn pipeline architecture within 24 hours.'}
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50/80 border border-emerald-300 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-emerald-900">
                    {isTr ? 'Talebiniz Başarıyla Alındı!' : 'Request Received Successfully!'}
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                    {isTr 
                      ? 'Uzman B2B stratejistimiz başvurunuzu inceleyerek belirttiğiniz e-posta ve telefon üzerinden sizinle iletişime geçecektir.'
                      : 'Our senior B2B strategist will review your profile and reach out via your provided email and direct contact.'}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                  >
                    {isTr ? 'Yeni Form Gönder' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Full Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                        {isTr ? 'Adınız ve Soyadınız *' : 'Full Name *'}
                      </label>
                      <input
                        required
                        id="contact-name"
                        name="name"
                        type="text"
                        value={pageFormData.name}
                        onChange={(e) => setPageFormData({...pageFormData, name: e.target.value})}
                        placeholder={isTr ? 'Örn: Mehmet Yılmaz' : 'e.g. John Doe'}
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                        {isTr ? 'Kurumsal E-posta *' : 'Work Email *'}
                      </label>
                      <input
                        required
                        id="contact-email"
                        name="email"
                        type="email"
                        value={pageFormData.email}
                        onChange={(e) => setPageFormData({...pageFormData, email: e.target.value})}
                        placeholder={isTr ? 'ad@sirketiniz.com' : 'name@company.com'}
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                        {isTr ? 'Telefon Numarası' : 'Phone Number'}
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={pageFormData.phone}
                        onChange={(e) => setPageFormData({...pageFormData, phone: e.target.value})}
                        placeholder="+90 (5XX) XXX XX XX"
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                        {isTr ? 'Şirket Adı & Web Sitesi' : 'Company Name & Web'}
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={pageFormData.company}
                        onChange={(e) => setPageFormData({...pageFormData, company: e.target.value})}
                        placeholder="Örn: ABC Teknoloji"
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                      />
                    </div>
                  </div>

                  {/* Sector & Deal Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-sector" className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                        {isTr ? 'Faaliyet / Hedef Sektör' : 'Target Industry'}
                      </label>
                      <input
                        id="contact-sector"
                        name="sector"
                        type="text"
                        value={pageFormData.sector}
                        onChange={(e) => setPageFormData({...pageFormData, sector: e.target.value})}
                        placeholder={isTr ? 'B2B SaaS, Üretim, Lojistik vb.' : 'B2B SaaS, Manufacturing etc.'}
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-dealsize" className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                        {isTr ? 'Hedef Müşteri Büyüklüğü' : 'Deal Magnitude'}
                      </label>
                      <select
                        id="contact-dealsize"
                        name="dealSize"
                        value={pageFormData.dealSize}
                        onChange={(e) => setPageFormData({...pageFormData, dealSize: e.target.value})}
                        className="w-full px-3 py-2.5 rounded-xl glass-input text-xs text-navy"
                      >
                        <option value="5.000$ - 25.000$">$5.000 - $25.000</option>
                        <option value="25.000$ - 100.000$">$25.000 - $100.000</option>
                        <option value="100.000$+ Enterprise">$100.000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                      {isTr ? 'Görüşmek İstediğiniz Konu veya İhtiyacınız' : 'Your Specific Objectives / Project Scope'}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="3"
                      value={pageFormData.message}
                      onChange={(e) => setPageFormData({...pageFormData, message: e.target.value})}
                      placeholder={isTr ? 'LinkedIn outreach, reklam yönetimi veya profil analizi ihtiyacınızdan kısaca bahsedin...' : 'Describe your B2B targets or campaign requirements...'}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-navy resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glass-primary w-full py-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-overseas/30 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? (isTr ? 'Gönderiliyor...' : 'Transmitting...') : (isTr ? 'Strateji Talebini İlet' : 'Submit Strategy Request')}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-content-secondary pt-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isTr ? 'Verileriniz KVKK/GDPR kapsamında güvenle korunur.' : 'Protected under strict enterprise privacy & compliance standards.'}</span>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
