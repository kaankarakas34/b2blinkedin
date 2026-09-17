import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { LinkedInIcon } from '../components/LinkedInIcons';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { seoArticles } from '../data/seoArticlesData';
import { blogPosts } from '../data/blogPosts';
import { getRouteUrl, CANONICAL_HOST } from '../utils/routes';

export const BlogDetailPage = ({ slug, lang, t, onOpenModal, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const isTr = lang === 'tr';
  const allArticles = [...seoArticles, ...blogPosts];
  const article = allArticles.find(a => a.slug === slug || a.id === slug) || allArticles[0];

  const title = isTr ? (article.titleTr || article.title) : (article.titleEn || article.title);
  const summary = isTr ? (article.summaryTr || article.summary) : (article.summaryEn || article.summary);
  const content = isTr ? (article.contentTr || article.content) : (article.contentEn || article.content);
  const category = isTr ? (article.categoryTr || article.category) : (article.categoryEn || article.category);
  const readTime = isTr ? (article.readTimeTr || article.readTime) : (article.readTimeEn || article.readTime);
  const faqs = isTr ? article.geoFaqTr : article.geoFaqEn;

  // Sync Document Title, Meta Description, and Canonical URL
  useEffect(() => {
    document.title = `${title} | B2B LinkedIn Marketing`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', summary || '');

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const canonicalPath = isTr ? `/blog/${article.slug}/` : `/en/blog/${article.slug}/`;
      canonical.setAttribute('href', `${CANONICAL_HOST}${canonicalPath}`);
    }

    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article, isTr, title, summary]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getImageSrc = (imageKey) => {
    switch (imageKey) {
      case 'linkedin_ai_outreach': return '/images/linkedin_ai_outreach.webp';
      case 'linkedin_profile_landing': return '/images/linkedin_profile_abm.webp';
      case 'linkedin_abm_ads': return '/images/linkedin_b2b_hero.webp';
      default: return '/images/linkedin_profile_abm.webp';
    }
  };

  // Related articles
  const relatedArticles = allArticles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      
      {/* Breadcrumbs with Semantic Anchor Tags */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ol className="flex items-center flex-wrap gap-2 text-xs font-medium text-content-secondary">
          <li>
            <a 
              href={isTr ? "/" : "/en/"}
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className="hover:text-overseas transition-colors"
            >
              {isTr ? 'Ana Sayfa' : 'Home'}
            </a>
          </li>
          <li className="text-slate-400">/</li>
          <li>
            <a 
              href={isTr ? "/blog/" : "/en/blog/"}
              onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
              className="hover:text-overseas transition-colors"
            >
              {isTr ? 'Blog & Bilgi Merkezi' : 'Knowledge Hub'}
            </a>
          </li>
          <li className="text-slate-400">/</li>
          <li className="text-navy font-semibold truncate max-w-[240px] sm:max-w-md" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-xl bg-overseas/10 text-overseas text-xs font-bold flex items-center gap-1.5">
              <LinkedInIcon className="w-3.5 h-3.5 fill-overseas" />
              {category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-content-secondary">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime="2026-09-16">{article.date}</time>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-content-secondary">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-content-secondary">
              <User className="w-3.5 h-3.5" />
              <span>{article.author}</span>
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight mb-6">
            {title}
          </h1>

          <p className="text-base sm:text-xl text-content-secondary font-medium leading-relaxed mb-6 border-l-4 border-overseas pl-4 py-1">
            {summary}
          </p>

          <div className="flex items-center justify-between py-3 border-y border-slate-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold text-navy">{isTr ? 'Doğrulanmış B2B Metodolojisi & Editoryal Standart' : 'Verified B2B Methodology & Editorial Standard'}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill text-xs font-bold text-navy hover:text-overseas transition-colors"
              aria-label="Share article"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? (isTr ? 'Kopyalandı!' : 'Copied!') : (isTr ? 'Paylaş' : 'Share')}</span>
            </button>
          </div>
        </header>

        {/* Featured Visual */}
        <div className="relative rounded-3xl overflow-hidden mb-10 aspect-[16/9] shadow-elevated border border-slate-200/80 bg-slate-900">
          <img 
            src={getImageSrc(article.image)} 
            alt={title} 
            width="1200"
            height="675"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body: Rendered with Semantic HTML Parser */}
        <div className="glass-card bg-white p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated mb-12">
          <MarkdownRenderer content={content} />
        </div>

        {/* GEO Structured Answers (AI Search & Executive FAQs) */}
        {faqs && faqs.length > 0 && (
          <section className="mb-12 glass-card bg-white/90 p-6 sm:p-8 rounded-3xl border border-slate-200/80">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-overseas/10 text-overseas flex items-center justify-center font-bold">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-lg sm:text-xl text-navy">
                  {isTr ? 'Sıkça Sorulan Sorular & B2B Karar Verici Özeti' : 'Frequently Asked Questions & Executive Summary'}
                </h2>
                <p className="text-xs text-content-secondary mt-0.5">
                  {isTr ? 'Bu konu hakkında sektör liderlerinin en sık sorduğu kritik sorular.' : 'Key questions enterprise leaders ask about this topic.'}
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div key={fIdx} className="glass-card rounded-2xl border border-slate-200/80 overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading font-bold text-xs sm:text-sm text-navy hover:text-overseas transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-overseas shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-content-secondary leading-relaxed border-t border-slate-100 pt-2.5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* High-Ticket Conversion CTA Banner */}
        <div className="glass-card bg-gradient-to-r from-navy to-navy-light text-white p-8 sm:p-10 rounded-3xl shadow-elevated border border-white/20 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-sky-300 text-xs font-bold mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isTr ? 'Özel B2B Danışmanlığı' : 'Enterprise Consultation'}</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3 text-white">
              {isTr ? 'Bu Stratejiyi Şirketinizin Satış Boru Hattına Entegre Edelim' : 'Integrate This Strategy into Your Enterprise Sales Pipeline'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              {isTr 
                ? 'Hedef hesap listenizi analiz edelim, karar vericilere doğrudan ulaşan AI outreach ve ABM reklam altyapısını 24 saat içinde projelendirelim.' 
                : 'Request an audit of your named accounts and discover how our multi-threaded LinkedIn outbound system scales qualified enterprise demos.'}
            </p>
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-2xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-overseas/30 transition-all"
            >
              <span>{isTr ? 'Ücretsiz B2B Strateji Görüşmesi Başlatın' : 'Book a Strategy Consultation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Related Articles Grid with Real <a href> Links */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h3 className="font-heading font-extrabold text-xl text-navy">
              {isTr ? 'İlgili B2B Rehberleri & Vaka Analizleri' : 'Related B2B Guides & Case Studies'}
            </h3>
            <a 
              href={isTr ? "/blog/" : "/en/blog/"}
              onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
              className="text-xs font-bold text-overseas hover:underline flex items-center gap-1"
            >
              <span>{isTr ? 'Tüm Yazılar' : 'All Articles'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => {
              const relTitle = isTr ? (rel.titleTr || rel.title) : (rel.titleEn || rel.title);
              const relUrl = isTr ? `/blog/${rel.slug}/` : `/en/blog/${rel.slug}/`;
              return (
                <a
                  key={rel.slug}
                  href={relUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog-detail', rel.slug);
                  }}
                  className="glass-card rounded-2xl p-4 border border-white/80 hover:border-overseas/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-overseas uppercase tracking-wider block mb-1">
                      {isTr ? rel.categoryTr : rel.categoryEn}
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-navy group-hover:text-overseas transition-colors leading-snug mb-2 line-clamp-2">
                      {relTitle}
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-navy flex items-center gap-1 mt-3">
                    <span>{isTr ? 'Rehberi Oku' : 'Read Guide'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-overseas" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

      </article>

    </div>
  );
};
