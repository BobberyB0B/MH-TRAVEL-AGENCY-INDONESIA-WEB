import React from 'react';
import {
  MessageCircle,
  FileCheck,
  Compass,
  Headphones,
  FileSearch,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const WhyChooseUsSection: React.FC = () => {
  const points = [
    {
      title: 'Konsultasi Langsung',
      desc: 'Berdiskusi langsung dengan tim konsultan berpengalaman tanpa bot penjawab yang kaku.',
      icon: MessageCircle,
    },
    {
      title: 'Informasi Proses yang Jelas',
      desc: 'Penjelasan tahapan, estimasi waktu, dan persyaratan disampaikan secara transparan sejak awal.',
      icon: FileSearch,
    },
    {
      title: 'Bantuan Persiapan Dokumen',
      desc: 'Pendampingan pembuatan itinerary, surat penjamin, translasi berkas, dan review kelayakan.',
      icon: FileCheck,
    },
    {
      title: 'Komunikasi melalui WhatsApp',
      desc: 'Kemudahan komunikasi satu pintu yang responsif, cepat, dan mudah diakses dari perangkat HP Anda.',
      icon: Headphones,
    },
    {
      title: 'Proses Terarah',
      desc: 'Setiap langkah pengajuan visa dilakukan mengikuti standar operasional resmi perwakilan kedutaan.',
      icon: Compass,
    },
    {
      title: 'Dukungan Selama Proses',
      desc: 'Kami memonitor progres berkas dan siap membantu asistensi janji temu biometrik hingga selesai.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Integritas & Kualitas Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
            Kenapa MH Travel Agency?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Kami mengutamakan kejujuran, ketelitian berkas, dan kepatuhan terhadap regulasi keimigrasian untuk mempermudah perjalanan luar negeri Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-base font-bold text-white mb-1">Siap Merencanakan Perjalanan Anda?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Diskusikan kebutuhan visa dan dokumen Anda sekarang juga bersama konsultan kami.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                'Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai pengurusan visa dan dokumen perjalanan.'
              )
            }
            className="min-h-[46px] px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Mulai Konsultasi WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
