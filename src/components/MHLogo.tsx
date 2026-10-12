import React, { useState } from 'react';

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
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  // Dimension scales
  const dimensions = {
    sm: { mark: 36, textTitle: 'text-sm', textSub: 'text-[9px]', textTag: 'text-[8px]' },
    md: { mark: 48, textTitle: 'text-base sm:text-lg', textSub: 'text-[10px] sm:text-[11px]', textTag: 'text-[9px] sm:text-[10px]' },
    lg: { mark: 64, textTitle: 'text-xl sm:text-2xl', textSub: 'text-xs sm:text-sm', textTag: 'text-xs' },
    xl: { mark: 80, textTitle: 'text-2xl sm:text-3xl', textSub: 'text-sm sm:text-base', textTag: 'text-xs sm:text-sm' },
  }[size];

  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* 
        Gambar logo mengarah ke path relatif "./logo.png" sesuai struktur direktori utama GitHub
        Dilengkapi fallback styling responsif dan SVG cadangan jika berkas belum diunggah.
      */}
      {!useFallbackSvg ? (
        <img
          src="./logo.png"
          alt="MH Travel Agency Logo"
          width={dimensions.mark}
          height={dimensions.mark}
          className="shrink-0 object-contain drop-shadow-md rounded-xl transition-all"
          style={{ width: `${dimensions.mark}px`, height: `${dimensions.mark}px` }}
          loading="eager"
          onError={(e) => {
            // Coba fallback ke /logo.png jika relative path gagal, atau gunakan SVG
            if (e.currentTarget.src !== window.location.origin + '/logo.png') {
              e.currentTarget.src = '/logo.png';
            } else {
              setUseFallbackSvg(true);
            }
          }}
        />
      ) : (
        /* Fallback SVG Emblem */
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
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.95" />
            </radialGradient>
          </defs>

          {/* Central Blue Globe */}
          <circle cx="80" cy="80" r="32" fill="url(#globe-radial)" />
          <ellipse cx="80" cy="80" rx="32" ry="12" stroke="#bae6fd" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          <ellipse cx="80" cy="80" rx="14" ry="32" stroke="#bae6fd" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          <line x1="48" y1="80" x2="112" y2="80" stroke="#bae6fd" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="80" y1="48" x2="80" y2="112" stroke="#bae6fd" strokeWidth="1.2" strokeOpacity="0.8" />

          {/* Bold Stylized "M" & "H" Letterforms */}
          <path
            d="M32 120 L32 46 L54 84 L72 46 L72 120 L58 120 L58 74 L46 96 L38 96 L38 120 Z"
            fill="url(#mh-blue-grad)"
          />
          <path
            d="M32 46 L40 46 L54 74 L68 46 L76 46 L58 84 Z"
            fill="url(#mh-blue-light)"
            opacity="0.9"
          />
          <path
            d="M88 46 L102 46 L102 74 L122 74 L122 46 L136 46 L136 120 L122 120 L122 88 L102 88 L102 120 L88 120 Z"
            fill="url(#mh-blue-grad)"
          />

          {/* Dynamic Golden Orbit Swoosh Loop */}
          <path
            d="M18 116 C28 140 70 146 102 128 C136 108 148 64 126 36 C116 24 100 20 86 24 C70 28 62 44 68 56 C74 68 92 72 104 64 C120 54 136 34 148 24"
            fill="none"
            stroke="url(#mh-gold-grad)"
            strokeWidth="5"
            strokeLinecap="round"
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
      )}

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
