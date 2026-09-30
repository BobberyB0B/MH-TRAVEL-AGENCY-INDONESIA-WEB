import React, { useState } from 'react';
import {
  Plane,
  Briefcase,
  Users,
  GraduationCap,
  Navigation,
  MessageSquareText,
  MailCheck,
  CalendarDays,
  Languages,
  CalendarCheck2,
  FileCheck,
  Files,
  ArrowRight,
  Check,
  MessageCircle,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/services';
import { openWhatsApp } from '../utils/whatsapp';
import { AnimatedSection } from './AnimatedSection';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'visa' | 'dokumen' | 'asistensi'>('all');

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-amber-500' };
    switch (iconName) {
      case 'Plane':
        return <Plane {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'Navigation':
        return <Navigation {...props} />;
      case 'MessageSquareText':
        return <MessageSquareText {...props} />;
      case 'MailCheck':
        return <MailCheck {...props} />;
      case 'CalendarDays':
        return <CalendarDays {...props} />;
      case 'Languages':
        return <Languages {...props} />;
      case 'CalendarCheck2':
        return <CalendarCheck2 {...props} />;
      case 'FileCheck':
        return <FileCheck {...props} />;
      case 'Files':
      default:
        return <Files {...props} />;
    }
  };

  const filteredServices = SERVICES_LIST.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleOrderService = (item: ServiceItem) => {
    const message = `Halo MH Travel Agency Indonesia, saya ingin berkonsultasi mengenai layanan ${item.title}. Mohon informasi mengenai persyaratan, estimasi biaya, proses, dan dokumen yang diperlukan.`;
    openWhatsApp(message);
  };

  return (
    <section id="layanan" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-left max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <span>Daftar Layanan Profesional</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 font-normal">12 Solusi Lengkap</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Layanan Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              MH TRAVEL AGENCY INDONESIA menyediakan layanan komprehensif mulai dari pengurusan visa berbagai negara, pendampingan janji temu (appointment), hingga legalisasi dokumen resmi.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter Tabs (Single-line interactive segmented control) */}
        <AnimatedSection delayMs={100}>
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/80 border border-slate-800 rounded-xl overflow-x-auto mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[40px] cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Semua Layanan (12)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('visa')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[40px] cursor-pointer ${
              activeTab === 'visa'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Pengurusan Visa (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('dokumen')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[40px] cursor-pointer ${
              activeTab === 'dokumen'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Dokumen Perjalanan (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('asistensi')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[40px] cursor-pointer ${
              activeTab === 'asistensi'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Konsultasi & Asistensi (3)
          </button>
        </div>
        </AnimatedSection>

        {/* 12 Services Grid */}
        <AnimatedSection delayMs={150}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 transition-all duration-200 group text-left"
            >
              <div>
                {/* Header Card: Icon and Service Title */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-amber-500/50 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold tabular-nums pt-1">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-6 border-t border-slate-850 pt-4">
                  {service.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-850/60">
                <button
                  type="button"
                  onClick={() => handleOrderService(service)}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 active:scale-[0.98] text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border border-slate-700 hover:border-emerald-500 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Pesan via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        </AnimatedSection>

        {/* Pricing Transparency Note */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">Transparansi Biaya & Estimasi</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Biaya resmi ditentukan secara transparan berdasarkan negara tujuan, jenis visa, dan kebutuhan dokumen pemohon setelah konsultasi.
            </p>
          </div>
          <a
            href="#estimasi"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
          >
            <span>Hitung Estimasi Kebutuhan</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
