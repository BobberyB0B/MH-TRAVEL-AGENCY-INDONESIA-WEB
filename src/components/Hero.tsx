import React from 'react';
import {
  MessageCircle,
  ChevronRight,
  FileCheck2,
  FileText,
  Mail,
  Plane,
  Languages,
  UserCheck,
  ShieldCheck,
  MoreHorizontal,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { MHLogo } from './MHLogo';

export const Hero: React.FC = () => {
  const bannerBgImage = '/src/assets/images/hero_banner_skyline_1790758869896.jpg';

  const scrollToServices = () => {
    const el = document.getElementById('layanan');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsappClick = () => {
    openWhatsApp(
      'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
    );
  };

  // 8 Services on the bottom curved ribbon matching the user's banner
  const ribbonServices = [
    {
      label: 'Pengurusan Visa',
      icon: FileCheck2,
      msg: 'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai Pengurusan Visa.',
    },
    {
      label: 'Dokumen Perjalanan',
      icon: FileText,
      msg: 'Halo MH Travel Agency Indonesia, saya ingin bertanya mengenai pengurusan Dokumen Perjalanan.',
    },
    {
      label: 'Invitation Letter',
      icon: Mail,
      msg: 'Halo MH Travel Agency Indonesia, saya membutuhkan bantuan pembuatan Invitation Letter resmi.',
    },
    {
      label: 'Itinerary Perjalanan',
      icon: Plane,
      msg: 'Halo MH Travel Agency Indonesia, saya ingin memesan pembuatan Itinerary Perjalanan.',
    },
    {
      label: 'Penerjemahan Dokumen',
      icon: Languages,
      msg: 'Halo MH Travel Agency Indonesia, saya memerlukan jasa Penerjemahan Dokumen resmi/tersumpah.',
    },
    {
      label: 'Appointment Assistance',
      icon: UserCheck,
      msg: 'Halo MH Travel Agency Indonesia, saya butuh asistensi jadwal temu Appointment kedutaan/VFS.',
    },
    {
      label: 'Legal Document Assistance',
      icon: ShieldCheck,
      msg: 'Halo MH Travel Agency Indonesia, saya butuh bantuan Legal Document Assistance (Apostille/Kemenkumham).',
    },
    {
      label: 'Dan Layanan Lainnya',
      icon: MoreHorizontal,
      msg: 'Halo MH Travel Agency Indonesia, saya ingin menanyakan layanan dokumen perjalanan lainnya.',
    },
  ];

  return (
    <section id="home" className="relative w-full bg-slate-950 overflow-hidden">
      {/* 
        ========================================================================
        MAIN BANNER CONTAINER
        Responsively tuned for mobile viewports (320px-430px) as well as widescreen
        desktop displays, preserving natural aspect ratios without text distortion.
        ========================================================================
      */}
      <div className="relative w-full min-h-0 lg:min-h-[620px] flex flex-col justify-between">
        {/* Desktop Widescreen Photographic Backdrop (Hidden on mobile to avoid tall cropping) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <img
            src={bannerBgImage}
            alt="MH Travel Agency Banner - Urus Visa & Dokumen Perjalanan Lebih Mudah"
            className="w-full h-full object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Light gradient scrim on the left for crisp typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Top Header Row Inside Banner */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-8 flex items-center justify-between gap-3 animate-heroSlideDown">
          {/* Official MH Logo Lockup (with Globe, Flight Orbit, Indonesia, Tagline) */}
          <div className="p-2 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 max-w-[70%] sm:max-w-none">
            {/* Small size on narrow mobile (<390px) to prevent overflow */}
            <div className="block sm:hidden">
              <MHLogo size="sm" variant="full" theme="light" />
            </div>
            {/* Medium size on tablet and desktop */}
            <div className="hidden sm:block">
              <MHLogo size="md" variant="full" theme="light" />
            </div>
          </div>

          {/* Top Right Cursive Script Tagline: "Your Journey Our Priority" */}
          <div className="text-right shrink-0">
            <span
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold italic text-amber-400 lg:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] tracking-wide leading-tight block"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              Your Journey
              <br />
              <span className="text-amber-300">Our Priority</span>
            </span>
          </div>
        </div>

        {/* 
          ======================================================================
          MOBILE BANNER VISUAL (Visible on screens < 1024px, 320px - 430px)
          Maintains proper 16:9 aspect ratio of the photographic composition
          (airliner soaring in sky, Eiffel Tower, Sydney Opera, gold passport & luggage)
          without squishing or cropping!
          ======================================================================
        */}
        <div className="block lg:hidden relative z-10 max-w-7xl mx-auto w-full px-3.5 sm:px-6 mt-4 mb-2 animate-heroFadeUp">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-900 group">
            <img
              src={bannerBgImage}
              alt="Urus Visa & Dokumen Perjalanan - MH Travel Agency"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
              <span className="font-semibold text-amber-300 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-amber-400/30">
                Solusi Visa & Dokumen
              </span>
              <span className="font-mono text-[10px] text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded-lg">
                BCA: 2941084780
              </span>
            </div>
          </div>
        </div>

        {/* Center Content Row: Headlines & CTA Buttons */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 my-auto animate-heroFadeUp">
          {/* Card container on mobile prevents text distortion against complex photo backgrounds */}
          <div className="max-w-xl lg:max-w-2xl text-left space-y-3.5 sm:space-y-5 p-4 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none bg-slate-900/95 lg:bg-transparent border border-slate-800 lg:border-none shadow-xl lg:shadow-none backdrop-blur-sm lg:backdrop-blur-none">
            {/* Headline with balanced wrapping */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white lg:text-slate-900 leading-[1.2]">
              Urus Visa & Dokumen Perjalanan{' '}
              <span className="text-amber-400 lg:text-amber-500 block sm:inline">Lebih Mudah</span>
            </h1>

            {/* Subheadline with readable measure */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 lg:text-slate-700 font-medium leading-relaxed max-w-xl">
              <strong className="text-white lg:text-slate-900 font-bold">{BUSINESS_CONFIG.BUSINESS_NAME}</strong> membantu Anda mempersiapkan kebutuhan visa dan dokumen perjalanan dengan proses yang lebih praktis, jelas, dan terarah.
            </p>

            {/* Action Buttons matching the user graphic */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              {/* Primary Navy Pill Button */}
              <button
                type="button"
                onClick={handleWhatsappClick}
                className="w-full sm:w-auto min-h-[46px] px-5 sm:px-6 py-3 rounded-full bg-[#0a1f44] hover:bg-[#06142e] active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-slate-900/30 border border-slate-700/60 lg:border-none transition-all cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="whitespace-nowrap">Chat WhatsApp Sekarang</span>
                <ChevronRight className="w-4 h-4 opacity-80" />
              </button>

              {/* Secondary White Pill Button */}
              <button
                type="button"
                onClick={scrollToServices}
                className="w-full sm:w-auto min-h-[46px] px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-slate-100 active:scale-[0.98] text-slate-900 font-bold text-xs sm:text-sm border-2 border-slate-900 flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span className="whitespace-nowrap">Lihat Layanan</span>
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>
        </div>

        {/* 
          ======================================================================
          BOTTOM CURVED NAVY & GOLD RIBBON
          Signature curved wave from user's banner with 8 services and WhatsApp badge
          Optimized for 320px–430px mobile widths without horizontal clipping
          ======================================================================
        */}
        <div className="relative z-10 w-full mt-2 sm:mt-6 animate-ribbonEntrance">
          {/* Top Golden Wave Separator */}
          <div className="w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-6 sm:h-10 lg:h-12 text-[#051329]"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              {/* Golden Highlight Stroke along the curve */}
              <path
                d="M0,0 C300,90 800,10 1200,60 L1200,120 L0,120 Z"
                fill="#051329"
              />
              <path
                d="M0,0 C300,90 800,10 1200,60"
                fill="none"
                stroke="url(#ribbon-gold)"
                strokeWidth="4"
              />
              <defs>
                <linearGradient id="ribbon-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="40%" stopColor="#fde047" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ribbon Body (Deep Navy Background) */}
          <div className="bg-[#051329] border-b border-slate-800 px-3 sm:px-6 lg:px-8 py-3.5 sm:py-5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5">
              {/* 8 Service Icons with Gold Outline & Labels (4 cols on mobile, 8 cols on desktop) */}
              <div className="w-full lg:flex-1 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-1.5 sm:gap-3 text-center">
                {ribbonServices.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => openWhatsApp(srv.msg)}
                      className="group flex flex-col items-center justify-start p-1.5 sm:p-2 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer text-center"
                    >
                      {/* Golden Icon Container */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-300 transition-all mb-1 shadow-sm">
                        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400" />
                      </div>
                      {/* Service Label */}
                      <span className="text-[9px] sm:text-[11px] font-semibold text-slate-200 group-hover:text-amber-300 leading-tight transition-colors line-clamp-2">
                        {srv.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Right Golden CTA Badge (Hubungi Kami 087899804147) */}
              <button
                type="button"
                onClick={handleWhatsappClick}
                className="w-full sm:w-auto shrink-0 min-h-[48px] sm:min-h-[52px] px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-95 text-slate-950 font-bold shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2.5 sm:gap-3 transition-all cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-800 block leading-tight">
                    Hubungi Kami
                  </span>
                  <span className="text-xs sm:text-base font-black tracking-tight text-slate-950 tabular-nums">
                    {BUSINESS_CONFIG.WHATSAPP_DISPLAY}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
