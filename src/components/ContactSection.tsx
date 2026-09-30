import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Share2,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';
import { AnimatedSection } from './AnimatedSection';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontak" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-left max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <Phone className="w-4 h-4" />
              <span>Saluran Komunikasi Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Hubungi MH Travel Agency Indonesia
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Konsultasikan permohonan visa dan dokumen Anda bersama kami. Semua respon diberikan langsung melalui nomor WhatsApp resmi tunggal kami.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main WhatsApp Card (Primary) */}
          <div className="lg:col-span-7">
            <AnimatedSection delayMs={100}>
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Official WhatsApp
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {BUSINESS_CONFIG.WHATSAPP_DISPLAY}
                  </h3>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                <span>+62 878-9980-4147</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Silakan kirimkan pertanyaan, konsultasi dokumen, atau konfirmasi pembayaran Anda. Konsultan kami akan melayani Anda dengan ramah dan solutif.
            </p>

            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
                )
              }
              className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Chat WhatsApp Sekarang</span>
            </button>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] sm:text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Demi keamanan bersama, jangan pernah merespon pihak yang mengaku sebagai {BUSINESS_CONFIG.BUSINESS_NAME} dari nomor telepon atau nomor rekening lain selain yang tertera di website ini.
              </span>
            </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Details & Social Channels */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <AnimatedSection delayMs={150}>
            {/* Operational Info */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Jam Layanan Konsultasi
                  </h4>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {BUSINESS_CONFIG.OPERATIONAL_HOURS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-800 pt-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Email Korespondensi
                  </h4>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.EMAIL}`}
                    className="text-xs sm:text-sm text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {BUSINESS_CONFIG.EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-800 pt-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Domisili & Wilayah Layanan
                  </h4>
                  <p className="text-xs sm:text-sm text-white">
                    {BUSINESS_CONFIG.ADDRESS} (Melayani Pemohon dari Seluruh Indonesia)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <Share2 className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Media Sosial Resmi
                </h4>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={BUSINESS_CONFIG.INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-850 text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 mb-1 text-pink-400" />
                  <span className="text-[10px] font-medium">Instagram</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-850 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="text-sm font-black mb-0.5 text-cyan-400">TT</span>
                  <span className="text-[10px] font-medium">TikTok</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-850 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="text-sm font-black mb-0.5 text-blue-400">FB</span>
                  <span className="text-[10px] font-medium">Facebook</span>
                </a>
              </div>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
