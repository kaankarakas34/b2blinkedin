import React, { useState } from 'react';
import { Calculator as CalcIcon, TrendingUp, DollarSign, Users, CalendarCheck, ArrowRight } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcons';

export const Calculator = ({ t, onOpenModal }) => {
  const [prospects, setProspects] = useState(800);
  const [dealSize, setDealSize] = useState(25000);
  const [connectionRate, setConnectionRate] = useState(35);
  const [replyRate, setReplyRate] = useState(22);
  const [closeRate, setCloseRate] = useState(20);

  // Math Calculations
  const estConnections = Math.round((prospects * connectionRate) / 100);
  const estMeetings = Math.max(1, Math.round((estConnections * replyRate) / 100));
  const estPipeline = Math.round(estMeetings * dealSize);
  const estClosedRevenue = Math.round((estPipeline * closeRate) / 100);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculator" className="relative py-24 bg-surface overflow-hidden">
      
      {/* Ambient glow */}
      <div className="bg-glow-orb-1 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-badge-blue text-xs font-bold uppercase tracking-wider mb-4">
            <CalcIcon className="w-3.5 h-3.5 text-overseas" />
            <span>{t.calculator.tag}</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
            {t.calculator.title}
          </h2>

          <p className="text-sm sm:text-base text-content-secondary max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/90 shadow-elevated max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sliders & Parameter Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Target Prospects */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-navy mb-2">
                  <span>{t.calculator.targetAccounts}</span>
                  <span className="font-mono text-overseas text-sm px-2.5 py-1 rounded-lg bg-overseas/10">
                    {prospects} Karar Verici
                  </span>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="3000" 
                  step="50" 
                  value={prospects} 
                  onChange={(e) => setProspects(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-overseas"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>200</span>
                  <span>1,500</span>
                  <span>3,000</span>
                </div>
              </div>

              {/* Slider 2: Average Customer Deal Size */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-navy mb-2">
                  <span>{t.calculator.avgDealSize}</span>
                  <span className="font-mono text-navy text-sm px-2.5 py-1 rounded-lg bg-slate-100">
                    {formatCurrency(dealSize)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="150000" 
                  step="5000" 
                  value={dealSize} 
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>$5,000</span>
                  <span>$75,000</span>
                  <span>$150,000+</span>
                </div>
              </div>

              {/* Advanced Fine Tuning Controls (Rates) */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="block text-[11px] font-semibold text-content-secondary mb-1">
                    {t.calculator.connectionRate}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-base text-overseas">%{connectionRate}</span>
                    <input 
                      type="range" 
                      min="20" 
                      max="50" 
                      value={connectionRate} 
                      onChange={(e) => setConnectionRate(Number(e.target.value))}
                      className="w-20 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-overseas"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="block text-[11px] font-semibold text-content-secondary mb-1">
                    {t.calculator.responseRate}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-base text-linkedin">%{replyRate}</span>
                    <input 
                      type="range" 
                      min="10" 
                      max="40" 
                      value={replyRate} 
                      onChange={(e) => setReplyRate(Number(e.target.value))}
                      className="w-20 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-linkedin"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Real-time Calculations Card */}
            <div className="lg:col-span-5">
              <div className="glass-card-dark p-6 sm:p-7 rounded-3xl border border-white/15 shadow-elevated flex flex-col justify-between">
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-slate-300 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-sky-400" />
                      {t.calculator.estConnections}
                    </span>
                    <span className="font-mono font-bold text-base text-white">
                      ~{estConnections}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-slate-300 flex items-center gap-1.5">
                      <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {t.calculator.estMeetings}
                    </span>
                    <span className="font-mono font-extrabold text-lg text-emerald-400">
                      {estMeetings} Görüşme
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] text-sky-300 font-semibold block uppercase tracking-wider mb-1">
                      {t.calculator.estPipeline}
                    </span>
                    <div className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {formatCurrency(estPipeline)}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Tahmini Kazanılacak Ciro (%20 kapanış): <strong className="text-white">{formatCurrency(estClosedRevenue)}</strong>
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full py-3.5 rounded-xl bg-overseas hover:bg-overseas-hover text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-overseas/40 transition-colors"
                >
                  <span>{t.calculator.ctaBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
