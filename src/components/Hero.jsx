import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Target, ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const Hero = ({ t, onOpenModal }) => {
  const [activeTab, setActiveTab] = useState('tech');

  const icpSamples = {
    tech: {
      sector: "SaaS & Enterprise Software (100-1000 Empl.)",
      role: "Chief Information Officer (CIO) / CFO",
      geo: "Germany, UK, USA, Netherlands",
      matches: "2,840 Verified Decision-Makers",
      velocity: "18-24 Qualified Demos / mo"
    },
    manufacturing: {
      sector: "Industrial Manufacturing (250+ Empl.)",
      role: "Procurement Director / Supply Chain VP",
      geo: "Germany (DACH), France, Türkiye",
      matches: "1,920 Procurement Heads",
      velocity: "32% Meeting Conversion Rate"
    },
    healthcare: {
      sector: "Hospital Networks & Health Tech",
      role: "Managing Director / Chief Medical Officer",
      geo: "United Kingdom, EU & Middle East",
      matches: "860 C-Level Health Executives",
      velocity: "High-Ticket Enterprise Deals"
    }
  };

  const currentIcp = icpSamples[activeTab];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Ambient background glow orbs */}
      <div className="bg-glow-orb-1" />
      <div className="bg-glow-orb-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge Row: LinkedIn Ads Partner + Core Positioning */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          
          {/* Official LinkedIn Ads Partner Badge (MANDATORY in Hero - High Contrast Frame) */}
          <div className="glass-card px-3.5 py-2 rounded-2xl flex items-center gap-3 border border-white/80 shadow-clean bg-white/90">
            <div className="bg-[#0E151F] px-2.5 py-1.5 rounded-xl flex items-center shadow-inner border border-white/15 shrink-0">
              <img 
                src="/linkedin_ads_partner.png" 
                alt="LinkedIn Ads Partner - Overseas Marketing" 
                className="h-6 sm:h-7 w-auto object-contain block"
              />
            </div>
            <div className="h-7 w-px bg-slate-200"></div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] sm:text-xs font-bold text-navy flex items-center gap-1.5 leading-tight">
                {t.hero.partnerBadgeText}
                <ShieldCheck className="w-3.5 h-3.5 text-overseas inline" />
              </span>
              <span className="text-[10px] text-content-secondary font-medium leading-tight mt-0.5">
                {t.hero.partnerSub}
              </span>
            </div>
          </div>

          {/* Core Positioning Pill */}
          <div className="glass-badge-linkedin px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold">
            <LinkedInIcon className="w-4 h-4 fill-linkedin" />
            <span>{t.hero.positioningBadge}</span>
          </div>

        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.15] mb-6">
            {t.hero.headline}
          </h1>

          <p className="text-base sm:text-xl text-content-secondary font-normal leading-relaxed mb-6 max-w-3xl mx-auto">
            {t.hero.subheadline}
          </p>

          <p className="text-xs sm:text-sm text-navy/75 font-medium max-w-2xl mx-auto mb-10 pb-2">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenModal}
              className="btn-glass-primary w-full sm:w-auto px-7 py-4 rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center gap-3 group"
            >
              <LinkedInIcon className="w-5 h-5 fill-white" />
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#how-it-works"
              className="btn-glass-secondary w-full sm:w-auto px-7 py-4 rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-navy/80 text-navy/80" />
              <span>{t.hero.secondaryCta}</span>
            </a>
          </div>

          {/* Quick 3-Metric Glass Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
            <div className="glass-card p-4 rounded-2xl text-center">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-overseas mb-1">
                {t.hero.stats.meetings}
              </div>
              <div className="text-xs font-semibold text-content-secondary">
                {t.hero.stats.meetingsLabel}
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl text-center">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-navy mb-1">
                {t.hero.stats.targetAcc}
              </div>
              <div className="text-xs font-semibold text-content-secondary">
                {t.hero.stats.targetAccLabel}
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl text-center">
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-linkedin mb-1">
                {t.hero.stats.abmEfficiency}
              </div>
              <div className="text-xs font-semibold text-content-secondary">
                {t.hero.stats.abmEfficiencyLabel}
              </div>
            </div>
          </div>

        </div>

        {/* Hero Visual: Glassmorphic B2B Dashboard + Live Targeting Simulator */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Visual Container */}
          <div className="glass-card p-3 sm:p-5 rounded-3xl shadow-elevated border border-white/80 overflow-hidden relative group">
            
            {/* Main Generated High-Resolution LinkedIn Hero Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 shadow-inner">
              <img 
                src="/images/linkedin_b2b_hero.jpg" 
                alt="B2B LinkedIn Marketing by Overseas Marketing Architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Glass overlay badge on image */}
              <div className="absolute top-4 left-4 glass-card-dark px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2 border border-white/20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active ICP Pipeline Engine</span>
              </div>

              {/* Verified partner watermark */}
              <div className="absolute bottom-4 right-4 glass-card px-3 py-1.5 rounded-xl text-[11px] font-bold text-navy flex items-center gap-2 shadow-lg">
                <div className="bg-[#0E151F] px-1.5 py-1 rounded-md flex items-center">
                  <img src="/linkedin_ads_partner.png" alt="LinkedIn Ads Partner" className="h-4 sm:h-5 w-auto block" />
                </div>
                <span>Certified B2B Partner</span>
              </div>
            </div>

            {/* Interactive Live ICP Targeting Simulator Bar under Image */}
            <div className="mt-4 p-4 sm:p-5 rounded-2xl glass-card bg-white/90 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-linkedin/10 text-linkedin flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-navy">
                    {t.hero.liveSimulator.badge}
                  </span>
                </div>

                {/* Industry Selector Tabs */}
                <div className="flex items-center gap-1.5 glass-pill p-1 rounded-xl text-xs">
                  <button 
                    onClick={() => setActiveTab('tech')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${activeTab === 'tech' ? 'bg-navy text-white' : 'text-navy/70 hover:text-navy'}`}
                  >
                    Tech & SaaS
                  </button>
                  <button 
                    onClick={() => setActiveTab('manufacturing')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${activeTab === 'manufacturing' ? 'bg-navy text-white' : 'text-navy/70 hover:text-navy'}`}
                  >
                    Manufacturing
                  </button>
                  <button 
                    onClick={() => setActiveTab('healthcare')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${activeTab === 'healthcare' ? 'bg-navy text-white' : 'text-navy/70 hover:text-navy'}`}
                  >
                    Healthcare
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-[10px] text-content-secondary font-medium mb-0.5">{t.hero.liveSimulator.sectorLabel}</span>
                  <span className="font-bold text-navy">{currentIcp.sector}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-[10px] text-content-secondary font-medium mb-0.5">{t.hero.liveSimulator.roleLabel}</span>
                  <span className="font-bold text-navy">{currentIcp.role}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-[10px] text-content-secondary font-medium mb-0.5">{t.hero.liveSimulator.geoLabel}</span>
                  <span className="font-bold text-navy">{currentIcp.geo}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-overseas/10 border border-overseas/20 flex flex-col justify-center">
                  <span className="block text-[10px] text-overseas font-bold mb-0.5">SİNYAL & HAVUZ</span>
                  <span className="font-bold text-navy">{currentIcp.matches}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
