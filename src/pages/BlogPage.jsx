import React, { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import { BookOpen, Clock, ArrowRight, X, Calendar, Share2, Check, Tag } from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';

export const BlogPage = ({ lang, t, onOpenModal, onNavigate }) => {
  const isTr = lang === 'tr';
  const [selectedPost, setSelectedPost] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = isTr 
    ? ['TÜMÜ', 'Outreach & AI', 'Profil Optimizasyonu', 'LinkedIn Ads & ABM', 'Company Page']
    : ['ALL', 'Outreach & AI', 'Profile Optimization', 'LinkedIn Ads & ABM', 'Company Page'];

  const filteredPosts = activeCategory === 'ALL' || activeCategory === 'TÜMÜ'
    ? blogPosts
    : blogPosts.filter(p => {
        const cat = isTr ? p.categoryTr : p.categoryEn;
        return cat.toLowerCase().includes(activeCategory.toLowerCase());
      });

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getImageSrc = (imageKey) => {
    switch (imageKey) {
      case 'linkedin_ai_outreach': return '/images/linkedin_ai_outreach.jpg';
      case 'linkedin_profile_landing': return '/images/linkedin_profile_abm.jpg';
      case 'linkedin_abm_ads': return '/images/linkedin_b2b_hero.jpg';
      case 'linkedin_company_trust':
      default: return '/images/linkedin_profile_abm.jpg';
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
          <span className="text-navy font-bold">{isTr ? 'Blog & Rehberler' : 'Blog & Guides'}</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-8 text-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-linkedin text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5 text-linkedin" />
          <span>{isTr ? 'B2B LINKEDIN BİLGİ MERKEZİ' : 'B2B LINKEDIN KNOWLEDGE BASE'}</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-tight mb-4">
          {isTr ? 'LinkedIn B2B Stratejileri & Alan Rehberleri' : 'LinkedIn B2B Strategies & Field Guides'}
        </h1>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
          {isTr 
            ? 'Yalnızca LinkedIn odaklı, karar verici psikolojisi, yapay zeka otomasyonları ve ABM taktiklerini içeren güncel B2B vaka analizleri.'
            : 'Exclusive, actionable B2B guides covering executive buyer psychology, AI workflows, and high-yield ABM frameworks.'}
        </p>
      </section>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-navy text-white shadow-md' 
                  : 'glass-card text-navy/70 hover:text-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredPosts.map((post) => {
            const title = isTr ? post.titleTr : post.titleEn;
            const summary = isTr ? post.summaryTr : post.summaryEn;
            const category = isTr ? post.categoryTr : post.categoryEn;
            const readTime = isTr ? post.readTimeTr : post.readTimeEn;
            const imgSrc = getImageSrc(post.image);

            return (
              <article 
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="glass-card rounded-3xl border border-white/80 shadow-clean overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-overseas/40 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                    <img 
                      src={imgSrc} 
                      alt={title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 glass-card-dark px-3 py-1 rounded-xl text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                      <LinkedInIcon className="w-3.5 h-3.5 fill-sky-400" />
                      <span>{category}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 glass-card px-2.5 py-1 rounded-lg text-[10px] font-semibold text-navy flex items-center gap-1 shadow-sm">
                      <Clock className="w-3 h-3 text-content-secondary" />
                      <span>{readTime}</span>
                    </div>
                  </div>

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
                    {isTr ? 'Rehberi Oku' : 'Read Full Guide'}
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
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card bg-white max-w-3xl w-full max-h-[90vh] rounded-3xl shadow-elevated border border-white/80 overflow-y-auto p-6 sm:p-10 relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-xl glass-card text-navy/70 hover:text-navy transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-lg bg-overseas/10 text-overseas text-xs font-bold flex items-center gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 fill-overseas" />
                {isTr ? selectedPost.categoryTr : selectedPost.categoryEn}
              </span>
              <span className="text-xs text-content-secondary">{selectedPost.date}</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-6 leading-tight">
              {isTr ? selectedPost.titleTr : selectedPost.titleEn}
            </h2>

            <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9] shadow-md">
              <img 
                src={getImageSrc(selectedPost.image)} 
                alt="B2B LinkedIn" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-sm sm:prose max-w-none text-navy/90 leading-relaxed space-y-4 mb-8">
              <div className="whitespace-pre-line">
                {isTr ? selectedPost.contentTr : selectedPost.contentEn}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-xs font-semibold text-content-secondary hover:text-navy transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? (isTr ? 'Link Kopyalandı!' : 'Link Copied!') : (isTr ? 'Yazıyı Paylaş' : 'Share Article')}</span>
              </button>

              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenModal();
                }}
                className="btn-glass-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <span>{isTr ? 'Bu Stratejiyi Şirketinizde Uygulayın' : 'Implement This Strategy'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
