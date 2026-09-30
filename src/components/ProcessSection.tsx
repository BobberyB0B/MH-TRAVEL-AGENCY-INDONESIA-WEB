import React from 'react';
import {
  MessageSquare,
  FileSearch,
  FileCheck2,
  Send,
  Eye,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Konsultasi',
      desc: 'Diskusikan rencana perjalanan, negara tujuan, jenis visa, dan timeline keberangkatan Anda melalui WhatsApp.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Pemeriksaan Dokumen',
      desc: 'Tim kami menganalisa kelengkapan berkas identitas, pekerjaan, dan profil finansial untuk memastikan kesiapan.',
      icon: FileSearch,
    },
    {
      step: '03',
      title: 'Persiapan Dokumen',
      desc: 'Penyusunan berkas resmi: formulir, itinerary harian, surat sponsor/undangan, dan penerjemahan jika dibutuhkan.',
      icon: FileCheck2,
    },
    {
      step: '04',
      title: 'Pengajuan',
      desc: 'Penyerahan aplikasi ke pusat visa/kedutaan (VFS, TLS, Kedubes) atau submit portal e-visa resmi sesuai prosedur.',
      icon: Send,
    },
    {
      step: '05',
      title: 'Monitoring Proses',
      desc: 'Pemantauan status perkembangan aplikasi visa secara berkala hingga keputusan diterbitkan pihak instansi.',
      icon: Eye,
    },
    {
      step: '06',
      title: 'Dokumen / Hasil Diterima',
      desc: 'Paspor berstempel visa atau e-visa resmi siap diserahkan kepada pemohon untuk keberangkatan.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="proses" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-left max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <Clock className="w-4 h-4" />
              <span>Alur Kerja Terstandarisasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Tahapan & Alur Proses
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Setiap proses didampingi secara terstruktur demi kenyamanan dan ketelitian dokumen Anda dari awal hingga visa selesai.
            </p>
          </div>
        </AnimatedSection>

        {/* 6 Steps Grid */}
        <AnimatedSection delayMs={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-amber-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Mandatory Policy Statement */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left flex items-start gap-3">
          <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Pemberitahuan Waktu Proses: </strong>
            Durasi proses dapat berbeda tergantung jenis layanan, negara tujuan, dan kebijakan instansi terkait. Kami merekomendasikan untuk memulai persiapan minimal 1 - 2 bulan sebelum target jadwal keberangkatan Anda.
          </p>
        </div>
      </div>
    </section>
  );
};
