import React from 'react';

interface MHLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'compact';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MHLogo: React.FC<MHLogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'dark',
  size = 'md',
}) => {
  // Dimension scales
  const dimensions = {
    sm: { mark: 36, textTitle: 'text-sm', textSub: 'text-[9px]', textTag: 'text-[8px]' },
    md: { mark: 48, textTitle: 'text-base sm:text-lg', textSub: 'text-[10px] sm:text-[11px]', textTag: 'text-[9px] sm:text-[10px]' },
    lg: { mark: 64, textTitle: 'text-xl sm:text-2xl', textSub: 'text-xs sm:text-sm', textTag: 'text-xs' },
    xl: { mark: 80, textTitle: 'text-2xl sm:text-3xl', textSub: 'text-sm sm:text-base', textTag: 'text-xs sm:text-sm' },
  }[size];

  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Emblem matching the user reference */}
      <svg
        width={dimensions.mark}
        height={dimensions.mark}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md"
      >
        <defs>
          {/* Blue Gradients */}
          <linearGradient id="mh-blue-grad" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="45%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0b2046" />
          </linearGradient>
          <linearGradient id="mh-blue-light" x1="40" y1="20" x2="100" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          {/* Gold Orbit Gradient */}
          <linearGradient id="mh-gold-grad" x1="10" y1="120" x2="150" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Globe Gradient */}
          <radialGradient id="globe-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        {/* Circular Globe in Center Background */}
        <circle cx="80" cy="80" r="46" fill="url(#globe-radial)" />
        
        {/* Globe Grid lines & continents silhouette */}
        <g stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" fill="none">
          <circle cx="80" cy="80" r="46" />
          <ellipse cx="80" cy="80" rx="46" ry="18" />
          <ellipse cx="80" cy="80" rx="20" ry="46" />
          <line x1="80" y1="34" x2="80" y2="126" />
          <line x1="34" y1="80" x2="126" y2="80" />
        </g>
        
        {/* Simplified Continents Shape */}
        <path
          d="M62 60c3-5 12-4 15 2 4 8-1 14 5 18 5 3 14 1 18 6 3 4 1 9-3 11-6 3-12-2-16-6-3-4-8-1-11-5-4-5-8-6-8-12 0-7-2-10 0-14z"
          fill="#ffffff"
          fillOpacity="0.35"
        />

        {/* 3D Stylized "M" Structure in Royal Blue */}
        {/* Left Leg of M */}
        <path
          d="M32 124V50l26 36 22-30v68H66V88L48 112h-6l-10-14v26H32z"
          fill="url(#mh-blue-grad)"
        />
        {/* Highlight facet on M */}
        <path
          d="M32 50l26 36 22-30v12l-22 30-26-36v-12z"
          fill="url(#mh-blue-light)"
          opacity="0.75"
        />

        {/* Right "H" Structure integrated with M */}
        <path
          d="M96 50v74h14V94h18v30h14V50h-14v30h-18V50H96z"
          fill="url(#mh-blue-grad)"
        />
        <path
          d="M128 50v30h14V50h-14z M96 50v30h14V50H96z"
          fill="url(#mh-blue-light)"
          opacity="0.6"
        />

        {/* Dynamic Swooshing Golden Orbit Arc */}
        <path
          d="M14 112 C 12 128, 40 144, 76 142 C 114 140, 146 118, 148 94 C 149 76, 134 60, 118 48 C 108 40, 96 34, 88 32 C 84 31, 80 32, 82 36 C 85 41, 98 46, 110 56 C 126 70, 134 84, 126 98 C 116 114, 84 126, 52 122 C 34 120, 20 114, 14 112 Z"
          fill="url(#mh-gold-grad)"
          filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.25))"
        />

        {/* Jet Airplane Soaring along Orbit into the Sky */}
        <g transform="translate(112, 28) rotate(32) scale(0.95)">
          <path
            d="M20 0 L15 14 L0 18 L15 22 L17 32 L22 23 L32 24 L24 16 L36 10 Z"
            fill="#0284c7"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Engine & wing detail */}
          <path d="M16 14 L24 16" stroke="#fbbf24" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Brand Text Lockup */}
      {variant !== 'mark' && (
        <div className="flex flex-col text-left">
          {/* Main Title */}
          <span
            className={`font-black tracking-tight leading-none ${dimensions.textTitle} ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            MH TRAVEL AGENCY
          </span>

          {/* Golden Subtitle with flanked rules */}
          <div className="flex items-center gap-1.5 my-1">
            <span className="w-5 sm:w-7 h-[1.5px] bg-gradient-to-r from-transparent to-amber-500" />
            <span
              className={`font-extrabold tracking-[0.25em] text-amber-500 uppercase ${dimensions.textSub}`}
            >
              INDONESIA
            </span>
            <span className="w-5 sm:w-7 h-[1.5px] bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          {/* Sub-tagline */}
          {variant === 'full' && (
            <span
              className={`font-medium tracking-tight leading-tight ${dimensions.textTag} ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Solusi Visa & Dokumen Perjalanan Anda
            </span>
          )}
        </div>
      )}
    </div>
  );
};
