import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { MHLogo } from './MHLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Negara', href: '#negara' },
    { label: 'Proses', href: '#proses' },
    { label: 'Pembayaran', href: '#pembayaran' },
    { label: 'Dokumen', href: '#dokumen' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800/80'
            : 'bg-slate-950 border-b border-slate-800'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Official Brand Logo with Globe & Aircraft */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center focus:outline-none"
            >
              <MHLogo size="sm" variant="compact" theme="dark" />
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-amber-400 transition-colors py-2 focus-visible:outline-none focus-visible:text-amber-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
                  )
                }
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm shrink-0 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 active:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-950/98 backdrop-blur-xl animate-fadeIn"
          style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          {/* Header Mobile Drawer */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
            <MHLogo size="sm" variant="compact" theme="dark" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Tutup menu navigasi"
              className="w-11 h-11 flex items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white active:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-slate-800/60">
            <div className="space-y-1 pb-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-left text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 active:bg-slate-850 transition-colors min-h-[48px]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-4 space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span>Rekening Resmi: BCA 2941084780</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  a/n MUHAMMAD HIDAYAT. Pastikan transfer hanya ke rekening resmi ini.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp(
                    'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
                  );
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat WhatsApp ({BUSINESS_CONFIG.WHATSAPP_DISPLAY})</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#pembayaran')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-750 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors min-h-[48px]"
              >
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Cek Pembayaran Resmi</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
