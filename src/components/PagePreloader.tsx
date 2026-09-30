import React, { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';
import { MHLogo } from './MHLogo';
import { BUSINESS_CONFIG } from '../config';

interface PagePreloaderProps {
  onComplete?: () => void;
}

export const PagePreloader: React.FC<PagePreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Respect user's accessibility preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsUnmounted(true);
      if (onComplete) onComplete();
      return;
    }

    // Disable body scroll while loading
    document.body.style.overflow = 'hidden';

    // Smooth simulated progress from 0% to 100%
    const startTime = Date.now();
    const duration = 950; // ~1 second snappy intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);
        // Start smooth fade out
        setTimeout(() => {
          setIsFadingOut(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();

          // Complete unmount after transition
          setTimeout(() => {
            setIsUnmounted(true);
          }, 700);
        }, 150);
      }
    }, 25);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (isUnmounted) return null;

  return (
    <div
      aria-hidden={isFadingOut}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020b18] text-white px-6 select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFadingOut
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100 pointer-events-auto'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-500/15 via-blue-600/15 to-transparent blur-3xl pointer-events-none" />

      {/* Center Branding Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">
        {/* Pulsing Logo Container */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-500/20 to-blue-500/20 blur-lg animate-pulse" />
          <div className="relative p-4 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
            <MHLogo size="lg" variant="mark" />
          </div>
        </div>

        {/* Text Lockup with Smooth Entrance */}
        <div className="space-y-1 mb-8 animate-fadeIn">
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
            {BUSINESS_CONFIG.BUSINESS_NAME}
          </h1>

          <div className="flex items-center justify-center gap-2 my-1.5">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-amber-400 uppercase">
              INDONESIA
            </span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <p className="text-xs text-slate-400 font-medium tracking-tight">
            Solusi Visa & Dokumen Perjalanan Anda
          </p>
        </div>

        {/* Elegant Flight Line Progress Bar */}
        <div className="w-full max-w-xs space-y-2">
          {/* Track */}
          <div className="relative w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
            {/* Active Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-400 rounded-full transition-all duration-75 ease-out shadow-[0_0_8px_rgba(245,158,11,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status & Mini Airplane Indicator */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              <span className="text-slate-300">Menyiapkan Layanan</span>
            </span>
            <span className="font-bold text-amber-400 tabular-nums">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Skip Button in Bottom Right */}
      <button
        type="button"
        onClick={() => {
          setIsFadingOut(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
          setTimeout(() => setIsUnmounted(true), 400);
        }}
        className="absolute bottom-6 right-6 text-xs text-slate-500 hover:text-amber-400 transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-slate-900/60"
      >
        Lewati
      </button>
    </div>
  );
};
