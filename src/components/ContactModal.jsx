import React, { useState } from 'react';
import { X, CheckCircle2, Send, Shield, Sparkles, Building2, User, Mail, Phone, Target, DollarSign } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const ContactModal = ({ isOpen, onClose, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    sector: '',
    dealSize: t.modal.dealSizeOptions[1]
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card bg-white max-w-lg w-full rounded-3xl shadow-elevated border border-white/90 p-6 sm:p-8 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-xl glass-card text-navy/70 hover:text-navy transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs font-bold text-overseas uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>B2B Strateji Briefing</span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-navy mb-1.5">
              {t.modal.title}
            </h3>

            <p className="text-xs text-content-secondary mb-6 leading-relaxed">
              {t.modal.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                  {t.modal.nameLabel}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t.modal.namePlaceholder}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                  />
                </div>
              </div>

              {/* Work Email & Phone (2 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    {t.modal.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder={t.modal.emailPlaceholder}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-xs text-navy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    {t.modal.phoneLabel}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder={t.modal.phonePlaceholder}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-xs text-navy"
                    />
                  </div>
                </div>
              </div>

              {/* Company & Website */}
              <div>
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                  {t.modal.companyLabel}
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder={t.modal.companyPlaceholder}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                  />
                </div>
              </div>

              {/* Target Sector */}
              <div>
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                  {t.modal.targetSectorLabel}
                </label>
                <div className="relative">
                  <Target className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    placeholder={t.modal.targetSectorPlaceholder}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                  />
                </div>
              </div>

              {/* Deal Size */}
              <div>
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                  {t.modal.dealSizeLabel}
                </label>
                <select
                  value={formData.dealSize}
                  onChange={(e) => setFormData({...formData, dealSize: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-navy"
                >
                  {t.modal.dealSizeOptions.map((opt, oIdx) => (
                    <option key={oIdx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-overseas/30 transition-all mt-4"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? t.modal.submitting : t.modal.submitBtn}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-content-secondary pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bilgileriniz KVKK ve GDPR kapsamında gizli tutulur.</span>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-navy">
              {t.modal.successTitle}
            </h3>

            <p className="text-xs sm:text-sm text-content-secondary max-w-sm mx-auto leading-relaxed">
              {t.modal.successDesc}
            </p>

            <button
              onClick={handleReset}
              className="btn-glass-primary px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              {t.modal.closeBtn}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
