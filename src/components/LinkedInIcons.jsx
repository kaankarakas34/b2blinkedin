import React from 'react';

export const LinkedInIcon = ({ className = "w-5 h-5", fill = "#0A66C2" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5V10.13H5.07V18.5h2.79z" />
  </svg>
);

export const LinkedInPartnerBadge = ({ className = "h-8" }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-badge-linkedin shadow-sm ${className}`}>
    <div className="bg-linkedin px-2 py-1 rounded-lg flex items-center text-white">
      <LinkedInIcon className="w-4 h-4 fill-white" />
    </div>
    <div className="flex flex-col text-left">
      <span className="text-[11px] font-bold text-navy leading-tight">B2B LinkedIn Marketing</span>
      <span className="text-[9px] text-navy/70 leading-none">Overseas Marketing</span>
    </div>
  </div>
);
