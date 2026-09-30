import React, { useState } from 'react';
import { Calculator, Send, AlertCircle, Info, Calendar, Users, MapPin, Layers } from 'lucide-react';
import { SERVICES_LIST } from '../data/services';
import { COUNTRIES_LIST } from '../data/countries';
import { openWhatsApp } from '../utils/whatsapp';
import { AnimatedSection } from './AnimatedSection';

export const EstimasiSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Visa Turis');
  const [targetCountry, setTargetCountry] = useState('Jepang (Japan)');
  const [customCountry, setCustomCountry] = useState('');
  const [applicantCount, setApplicantCount] = useState('1');
  const [targetDeparture, setTargetDeparture] = useState('1-2 Bulan ke Depan');

  const departureOptions = [
    'Segera (Dalam 2 Minggu)',
    '1 Bulan ke Depan',
    '1-2 Bulan ke Depan',
    '3-6 Bulan ke Depan',
    'Di atas 6 Bulan',
  ];

  const handleRequestEstimate = (e: React.FormEvent) => {
    e.preventDefault();

    const finalCountry = targetCountry === 'Lainnya' ? customCountry || 'Belum Ditentukan' : targetCountry;

    const message = `Halo MH Travel Agency Indonesia,

Saya ingin meminta estimasi biaya dan panduan dokumen untuk kebutuhan berikut:

• Jenis Layanan: ${selectedService}
• Negara Tujuan: ${finalCountry}
• Jumlah Pemohon: ${applicantCount} orang
• Target Keberangkatan: ${targetDeparture}

Mohon dibantu informasi estimasi biaya, kelengkapan berkas, dan estimasi waktu prosesnya.

Terima kasih.`;

    openWhatsApp(message);
  };

  return (
    <section id="estimasi" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl text-left">
            {/* Header */}
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
                <Calculator className="w-4 h-4" />
                <span>Simulasi Kebutuhan & Biaya</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                Request Estimasi Biaya
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tentukan rencana perjalanan Anda untuk mendapatkan informasi estimasi biaya jasa dan visa yang akurat tanpa biaya tersembunyi.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleRequestEstimate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Jenis Layanan */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Jenis Layanan</span>
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Negara Tujuan */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Negara Tujuan</span>
                </label>
                <select
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  {COUNTRIES_LIST.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                  <option value="Lainnya">🌍 Negara Lainnya...</option>
                </select>
                {targetCountry === 'Lainnya' && (
                  <input
                    type="text"
                    value={customCountry}
                    onChange={(e) => setCustomCountry(e.target.value)}
                    placeholder="Tuliskan nama negara tujuan..."
                    className="mt-2.5 w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                )}
              </div>

              {/* Jumlah Pemohon */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Jumlah Pemohon</span>
                </label>
                <select
                  value={applicantCount}
                  onChange={(e) => setApplicantCount(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="1">1 Orang (Individu)</option>
                  <option value="2">2 Orang (Pasangan / Teman)</option>
                  <option value="3">3 - 4 Orang (Keluarga Kecil)</option>
                  <option value="5+">5 Orang atau Lebih (Rombongan)</option>
                </select>
              </div>

              {/* Target Keberangkatan */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Target Keberangkatan</span>
                </label>
                <select
                  value={targetDeparture}
                  onChange={(e) => setTargetDeparture(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  {departureOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Policy Notice (strictly following prompt 11) */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Transparansi Estimasi: </span>
                Estimasi biaya akan diberikan setelah pemeriksaan jenis layanan, negara tujuan, dan kebutuhan dokumen. MH Travel Agency Indonesia tidak menampilkan angka tebakan sebelum memeriksa profil spesifik pemohon.
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Request Estimasi via WhatsApp</span>
            </button>
          </form>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
