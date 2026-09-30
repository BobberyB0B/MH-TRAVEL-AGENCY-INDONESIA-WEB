import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { MHLogo } from './MHLogo';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-12 pb-24 lg:pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand Column with Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <MHLogo size="md" variant="full" theme="dark" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Layanan jasa pendampingan visa, konsultasi berkas perjalanan, itinerary resmi, dan bantuan legalitas dokumen untuk keperluan wisata, bisnis, maupun studi.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Rekening Resmi: BCA 2941084780 (MUHAMMAD HIDAYAT)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Layanan Kami', href: '#layanan' },
                { label: 'Visa Negara Tujuan', href: '#negara' },
                { label: 'Tahapan Proses', href: '#proses' },
                { label: 'Pembayaran Resmi', href: '#pembayaran' },
                { label: 'Dokumen Penting', href: '#dokumen' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Kontak WhatsApp', href: '#kontak' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Bank Account Summary in Footer */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Rekening Resmi Pembayaran
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>Bank Penerima:</span>
                <span className="font-bold text-white">BCA</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>No. Rekening:</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{BUSINESS_CONFIG.BANK_ACCOUNT_NUMBER}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Atas Nama:</span>
                <span className="font-bold text-white uppercase">{BUSINESS_CONFIG.BANK_ACCOUNT_NAME}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
                )
              }
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp: {BUSINESS_CONFIG.WHATSAPP_DISPLAY}</span>
            </button>
          </div>
        </div>

        {/* Legal Disclaimer Box (Strictly per Section 28 & Guidelines) */}
        <div className="border-t border-slate-850 pt-6 pb-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Disclaimer Resmi: </strong>
            MH Travel Agency Indonesia bukan merupakan kedutaan, konsulat, atau instansi pemerintah. Keputusan penerbitan visa sepenuhnya berada pada otoritas yang berwenang. Layanan kami adalah pendampingan konsultasi dan persiapan dokumen perjalanan resmi.
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 {BUSINESS_CONFIG.BUSINESS_NAME}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Dibuat profesional dengan optimasi mobile-first untuk kenyamanan penjelajahan Anda.
          </p>
        </div>
      </div>
    </footer>
  );
};
