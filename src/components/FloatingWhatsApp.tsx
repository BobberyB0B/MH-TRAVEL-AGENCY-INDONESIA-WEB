import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { openWhatsApp } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    openWhatsApp(
      'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
    );
  };

  return (
    <div
      className="fixed right-4 bottom-20 sm:bottom-6 z-40 hidden sm:flex items-center"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Hubungi WhatsApp MH Travel Agency Indonesia"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-xl shadow-emerald-950/40 border border-emerald-400/30 transition-all duration-200 cursor-pointer min-h-[48px]"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          Chat WhatsApp
        </span>
      </button>
    </div>
  );
};
