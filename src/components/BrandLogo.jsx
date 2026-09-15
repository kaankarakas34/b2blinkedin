import React from 'react';

export const BrandLogo = ({ 
  variant = "light", // "light" (for light backgrounds) | "dark" (for navy backgrounds)
  size = "md",      // "sm" | "md" | "lg"
  className = "" 
}) => {
  const isDark = variant === "dark";

  // Sizing definitions
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-2xl"
  };

  const subSizes = {
    sm: "text-[8px] tracking-[0.2em]",
    md: "text-[9px] sm:text-[10px] tracking-[0.22em]",
    lg: "text-[11px] tracking-[0.25em]"
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group ${className}`}>
      
      {/* Brand Icon Mark: High-Tech B2B + LinkedIn Fusion */}
      <div className={`relative ${iconSizes[size]} rounded-xl sm:rounded-2xl p-0.5 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${
        isDark 
          ? 'bg-gradient-to-br from-[#446CB5] via-[#0A66C2] to-[#16202E] shadow-linkedin/20' 
          : 'bg-gradient-to-br from-[#16202E] via-[#0A66C2] to-[#446CB5] shadow-navy/25'
      }`}>
        
        {/* Inner container */}
        <div className={`w-full h-full rounded-[10px] sm:rounded-[14px] flex items-center justify-center relative overflow-hidden ${
          isDark ? 'bg-[#0E151F]' : 'bg-[#16202E]'
        }`}>
          
          {/* Subtle gradient glow behind the icon */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A66C2]/30 via-transparent to-[#446CB5]/20" />

          {/* SVG Vector Monogram: 'in' + 'B2B' geometric network nodes */}
          <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* LinkedIn 'in' silhouette with custom B2B accent */}
            <path 
              d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" 
              fill="#0A66C2" 
            />
            {/* White 'in' letters */}
            <path 
              d="M8.5 17.5V10.8H6.2V17.5H8.5ZM7.35 9.85C8.08 9.85 8.65 9.28 8.65 8.55C8.65 7.82 8.08 7.25 7.35 7.25C6.62 7.25 6.05 7.82 6.05 8.55C6.05 9.28 6.62 9.85 7.35 9.85Z" 
              fill="white" 
            />
            <path 
              d="M17.8 17.5V13.8C17.8 11.9 16.8 10.7 15.1 10.7C13.8 10.7 13.1 11.4 12.7 12V10.8H10.5V17.5H12.8V13.9C12.8 12.9 13.4 12.4 14.1 12.4C14.8 12.4 15.4 12.9 15.4 13.9V17.5H17.8Z" 
              fill="white" 
            />
            {/* Upward B2B growth arrow badge in top-right */}
            <circle cx="18" cy="6" r="3.2" fill="#446CB5" />
            <path d="M16.8 6.5L19 4.3M19 4.3H17.4M19 4.3V5.9" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Brand Typography Stack */}
      <div className="flex flex-col text-left justify-center">
        
        {/* Main Logo Text */}
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-heading font-extrabold tracking-tight ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-[#16202E]'
          }`}>
            <span className="text-[#446CB5]">B2B</span> LINKEDIN
          </span>
          <span className="font-heading font-bold text-[10px] sm:text-xs text-[#0A66C2] px-1.5 py-0.5 rounded-md bg-[#0A66C2]/10 leading-none">
            MARKETING
          </span>
        </div>

        {/* Sub-label: 'by overseas marketing' (MANDATORY: directly under the logo, very small) */}
        <div className="flex items-center gap-1 mt-1">
          <span className={`font-semibold uppercase leading-none font-sans ${subSizes[size]} ${
            isDark ? 'text-slate-400' : 'text-[#595F69]'
          }`}>
            by overseas marketing
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>

      </div>

    </div>
  );
};
