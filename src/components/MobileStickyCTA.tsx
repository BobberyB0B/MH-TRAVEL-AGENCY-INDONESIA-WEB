import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';

export const MobileStickyCTA: React.FC = () => {
  const handleConsultation = () => {
    openWhatsApp(
      'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
    );
  };

  const scrollToPayment = () => {
    const el = document.getElementById('pembayaran');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl"
      style={{
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)',
      }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          type="button"
          onClick={scrollToPayment}
          aria-label="Cek Rekening Resmi BCA"
          className="min-h-[46px] px-3 rounded-xl bg-slate-900 border border-slate-700/80 text-amber-400 active:bg-slate-800 flex items-center justify-center gap-1.5 text-xs font-semibold shrink-0 cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>BCA</span>
        </button>

        <button
          type="button"
          onClick={handleConsultation}
          className="flex-1 min-h-[46px] px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>Konsultasi WhatsApp ({BUSINESS_CONFIG.WHATSAPP_DISPLAY})</span>
        </button>
      </div>
    </div>
  );
};
