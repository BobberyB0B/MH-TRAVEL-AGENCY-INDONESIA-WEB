import React from 'react';
import {
  FileText,
  CreditCard,
  Building,
  Image as ImageIcon,
  DollarSign,
  Briefcase,
  Mail,
  Map,
  Hotel,
  Paperclip,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { COMMON_DOCUMENTS } from '../data/faqAndDocs';
import { openWhatsApp } from '../utils/whatsapp';
import { AnimatedSection } from './AnimatedSection';

export const DocumentsSection: React.FC = () => {
  const deskImage = '/src/assets/images/visa_consultation_desk_1790756616969.jpg';

  const getDocIcon = (category: string) => {
    switch (category) {
      case 'Identitas Pokok':
        return <FileText className="w-5 h-5 text-amber-400" />;
      case 'Identitas Diri':
      case 'Hubungan Keluarga':
        return <CreditCard className="w-5 h-5 text-amber-400" />;
      case 'Foto Biometrik':
        return <ImageIcon className="w-5 h-5 text-amber-400" />;
      case 'Finansial':
        return <DollarSign className="w-5 h-5 text-amber-400" />;
      case 'Pekerjaan':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 'Khusus Kunjungan / Bisnis':
        return <Mail className="w-5 h-5 text-amber-400" />;
      case 'Rencana Perjalanan':
        return <Map className="w-5 h-5 text-amber-400" />;
      case 'Akomodasi & Tiket':
        return <Hotel className="w-5 h-5 text-amber-400" />;
      default:
        return <Paperclip className="w-5 h-5 text-amber-400" />;
    }
  };

  const handleConsultDoc = (docName: string) => {
    openWhatsApp(
      `Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai kelengkapan dokumen ${docName} untuk pengajuan visa saya.`
    );
  };

  return (
    <section id="dokumen" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-left max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <FileText className="w-4 h-4" />
              <span>Checklist & Panduan Administrasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Dokumen yang Sering Dibutuhkan
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Menyiapkan berkas secara tepat dan rapi sejak awal adalah kunci utama kelancaran evaluasi berkas oleh petugas imigrasi. Berikut acuan umum dokumen yang sering dipersyaratkan.
            </p>
          </div>
        </AnimatedSection>

        {/* Highlight Image & Info Bento */}
        <AnimatedSection delayMs={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
              <img
                src={deskImage}
                alt="Pemeriksaan berkas dan checklist visa travel agency"
                className="w-full h-60 sm:h-72 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-sm border border-slate-800 text-left">
                <p className="text-xs font-semibold text-white">Pemeriksaan Ketat & Terstandar</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Memastikan tidak ada berkas kadaluarsa atau format yang salah.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-left space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Punya Kendala Dokumen atau Belum Pernah Keluar Negeri?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Tidak perlu cemas jika Anda belum memiliki riwayat perjalanan (paspor masih kosong) atau bingung mengenai format bukti keuangan yang valid. Konsultan MH Travel Agency siap memberikan arahan legal dan solusi berkas yang paling aman.
              </p>
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai persiapan dokumen visa saya yang belum lengkap.'
                  )
                }
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasikan Berkas via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
        </AnimatedSection>

        {/* 10 Documents Grid */}
        <AnimatedSection delayMs={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {COMMON_DOCUMENTS.map((doc, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      {getDocIcon(doc.category)}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">{doc.name}</h4>
                      <span className="text-[11px] text-amber-400 font-medium">{doc.category}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 tabular-nums">#{idx + 1}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-2.5">{doc.description}</p>

                <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-850">
                  <span className="text-slate-300 font-medium">Tips: </span>
                  {doc.note}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-850">
                <button
                  type="button"
                  onClick={() => handleConsultDoc(doc.name)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Tanyakan Syarat Dokumen Ini</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        </AnimatedSection>

        {/* Mandatory Requirement Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-left flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Disclaimer Persyaratan Dokumen: </strong>
            Persyaratan dapat berbeda berdasarkan negara tujuan, jenis visa, dan kondisi pemohon. Tim kami akan memberikan checklist spesifik setelah melakukan evaluasi profil Anda.
          </p>
        </div>
      </div>
    </section>
  );
};
