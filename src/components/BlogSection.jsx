import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import { BookOpen, Clock, ArrowRight, X, User, Tag, Calendar, Share2, Check } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const BlogSection = ({ lang, t, onOpenModal }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getImageSrc = (imageKey) => {
    switch (imageKey) {
      case 'linkedin_ai_outreach':
        return '/images/linkedin_ai_outreach.jpg';
      case 'linkedin_profile_landing':
        return '/images/linkedin_profile_abm.jpg';
      case 'linkedin_abm_ads':
        return '/images/linkedin_b2b_hero.jpg';
      case 'linkedin_company_trust':
      default:
        return '/images/linkedin_profile_abm.jpg';
    }
  };

  return (
    <section id="blog" className="relative py-24 bg-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-1 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-linkedin" />
            <span>{lang === 'tr' ? 'B2B LINKEDIN BİLGİ MERKEZİ' : 'B2B LINKEDIN KNOWLEDGE BASE'}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {lang === 'tr' ? 'LinkedIn B2B Stratejileri & Rehberler' : 'LinkedIn B2B Strategies & Field Guides'}
          </h2>

          <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
            {lang === 'tr' 
              ? 'Yalnızca LinkedIn odaklı, karar verici psikolojisi, yapay zeka otomasyonları ve ABM taktiklerini içeren güncel içerikler.'
              : 'Exclusive, actionable B2B guides covering executive buyer psychology, AI workflows, and high-yield ABM frameworks.'}
          </p>
        </div>

        {/* 4 Featured Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => {
            const title = lang === 'tr' ? post.titleTr : post.titleEn;
            const summary = lang === 'tr' ? post.summaryTr : post.summaryEn;
            const category = lang === 'tr' ? post.categoryTr : post.categoryEn;
            const readTime = lang === 'tr' ? post.readTimeTr : post.readTimeEn;
            const imgSrc = getImageSrc(post.image);

            return (
              <article 
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="glass-card rounded-3xl border border-white/80 shadow-clean overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-overseas/40 transition-all duration-300"
              >
                <div>
                  {/* Article Visual with LinkedIn Branding */}
                  <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                    <img 
                      src={imgSrc} 
                      alt={title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    {/* LinkedIn Watermark & Category Tag */}
                    <div className="absolute top-3 left-3 glass-card-dark px-3 py-1 rounded-xl text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                      <LinkedInIcon className="w-3.5 h-3.5 fill-sky-400" />
                      <span>{category}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 glass-card px-2.5 py-1 rounded-lg text-[10px] font-semibold text-navy flex items-center gap-1 shadow-sm">
                      <Clock className="w-3 h-3 text-content-secondary" />
                      <span>{readTime}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-content-secondary mb-2">
                      <Calendar className="w-3.5 h-3.5 text-overseas" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="text-overseas font-semibold">{post.author}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-navy group-hover:text-overseas transition-colors mb-2.5 line-clamp-2">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed line-clamp-3">
                      {summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs font-bold text-overseas flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {lang === 'tr' ? 'Rehberi Oku' : 'Read Full Guide'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy/60 group-hover:bg-overseas group-hover:text-white transition-colors">
                    <LinkedInIcon className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Turnkey CTA Callout */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left">
            <span className="font-heading font-bold text-sm text-navy block mb-0.5">
              {lang === 'tr' ? 'B2B LinkedIn Bültenimize Katılın' : 'Subscribe to Overseas B2B Intelligence'}
            </span>
            <span className="text-xs text-content-secondary">
              {lang === 'tr' ? 'Her 2 haftada bir en son LinkedIn algoritma ve B2B outreach analizleri e-postanızda.' : 'Bi-weekly executive breakdown on LinkedIn algorithm changes and B2B acquisition playbooks.'}
            </span>
          </div>

          <button
            onClick={onOpenModal}
            className="btn-glass-primary px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap"
          >
            {lang === 'tr' ? 'Görüşme Talep Edin' : 'Book a Briefing'}
          </button>
        </div>

      </div>

      {/* =========================================================
          FULL ARTICLE READER MODAL
         ========================================================= */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card bg-white max-w-3xl w-full max-h-[90vh] rounded-3xl shadow-elevated border border-white/80 overflow-y-auto p-6 sm:p-10 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-xl glass-card text-navy/70 hover:text-navy transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-lg bg-overseas/10 text-overseas text-xs font-bold flex items-center gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 fill-overseas" />
                {lang === 'tr' ? selectedPost.categoryTr : selectedPost.categoryEn}
              </span>
              <span className="text-xs text-content-secondary">
                {selectedPost.date}
              </span>
              <span className="text-xs text-content-secondary">
                • {lang === 'tr' ? selectedPost.readTimeTr : selectedPost.readTimeEn}
              </span>
            </div>

            {/* Article Title */}
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-6 leading-tight">
              {lang === 'tr' ? selectedPost.titleTr : selectedPost.titleEn}
            </h2>

            {/* Featured Image inside Modal */}
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9] shadow-md">
              <img 
                src={getImageSrc(selectedPost.image)} 
                alt="B2B LinkedIn Marketing" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Formatted Article Content */}
            <div className="prose prose-sm sm:prose max-w-none text-navy/90 leading-relaxed space-y-4 mb-8">
              <div className="whitespace-pre-line">
                {lang === 'tr' ? selectedPost.contentTr : selectedPost.contentEn}
              </div>
            </div>

            {/* Footer actions inside modal */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-xs font-semibold text-content-secondary hover:text-navy transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? (lang === 'tr' ? 'Link Kopyalandı!' : 'Link Copied!') : (lang === 'tr' ? 'Yazıyı Paylaş' : 'Share Article')}</span>
              </button>

              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenModal();
                }}
                className="btn-glass-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <span>{lang === 'tr' ? 'Bu Stratejiyi Şirketinizde Uygulayın' : 'Implement This Strategy'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
