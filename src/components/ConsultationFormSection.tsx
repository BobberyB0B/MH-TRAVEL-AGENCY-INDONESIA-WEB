import React, { useState } from 'react';
import { Send, FileText, User, Phone, MapPin, Target, Calendar, AlertCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { AnimatedSection } from './AnimatedSection';

export const ConsultationFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    targetCountry: '',
    travelPurpose: 'Liburan / Wisata',
    departureDate: '',
    visaType: 'Visa Turis',
    notes: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Mohon masukkan nama lengkap Anda.');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setErrorMessage('Mohon masukkan nomor WhatsApp Anda.');
      return;
    }
    if (!formData.targetCountry.trim()) {
      setErrorMessage('Mohon masukkan negara tujuan Anda.');
      return;
    }

    const message = `Halo MH Travel Agency Indonesia,

Saya ingin berkonsultasi mengenai visa.

Nama: ${formData.name.trim()}
Nomor WhatsApp: ${formData.whatsappNumber.trim()}
Negara tujuan: ${formData.targetCountry.trim()}
Tujuan perjalanan: ${formData.travelPurpose}
Perkiraan keberangkatan: ${formData.departureDate || 'Belum Ditentukan'}
Jenis visa: ${formData.visaType}
Catatan: ${formData.notes.trim() || '-'}

Mohon dibantu mengenai persyaratan, proses, estimasi biaya, dan informasi lainnya.

Terima kasih.`;

    openWhatsApp(message);
  };

  return (
    <section id="konsultasi" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl text-left">
          {/* Section Header */}
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <FileText className="w-4 h-4" />
              <span>Formulir Pengajuan Terarah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Konsultasi Visa & Dokumen
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Isi data perjalanan Anda di bawah ini. Sistem kami akan merangkumnya secara otomatis ke dalam format pesan resmi WhatsApp untuk direspon oleh konsultan kami.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs sm:text-sm text-rose-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Nama */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <User className="w-4 h-4 text-amber-400" />
                  <span>Nama Lengkap <span className="text-rose-400">*</span></span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Contoh: Budi Pratama"
                  required
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Nomor WhatsApp */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Nomor WhatsApp <span className="text-rose-400">*</span></span>
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="Contoh: 081234567890"
                  required
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Negara Tujuan */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Negara Tujuan <span className="text-rose-400">*</span></span>
                </label>
                <input
                  type="text"
                  name="targetCountry"
                  value={formData.targetCountry}
                  onChange={handleChange}
                  placeholder="Contoh: Jepang, Schengen (Prancis), Australia"
                  required
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Tujuan Perjalanan */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>Tujuan Perjalanan</span>
                </label>
                <select
                  name="travelPurpose"
                  value={formData.travelPurpose}
                  onChange={handleChange}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-base sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="Liburan / Wisata">Liburan / Wisata</option>
                  <option value="Bisnis / Meeting / Konferensi">Bisnis / Meeting / Konferensi</option>
                  <option value="Kunjungan Keluarga / Teman">Kunjungan Keluarga / Teman</option>
                  <option value="Studi / Pertukaran Pelajar">Studi / Pertukaran Pelajar</option>
                  <option value="Transit / Stopover">Transit / Stopover</option>
                  <option value="Pengurusan Dokumen Khusus">Pengurusan Dokumen Khusus</option>
                </select>
              </div>

              {/* Perkiraan Tanggal Berangkat */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Perkiraan Keberangkatan</span>
                </label>
                <input
                  type="text"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  placeholder="Contoh: November 2026 / 2 bulan lagi"
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Jenis Visa */}
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 mb-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Jenis Visa yang Diminta</span>
                </label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-base sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="Visa Turis">Visa Turis</option>
                  <option value="Visa Bisnis">Visa Bisnis</option>
                  <option value="Visa Kunjungan">Visa Kunjungan</option>
                  <option value="Visa Pelajar">Visa Pelajar</option>
                  <option value="Visa Transit">Visa Transit</option>
                  <option value="Asistensi Dokumen / Appointment Saja">Asistensi Dokumen / Appointment Saja</option>
                </select>
              </div>
            </div>

            {/* Catatan */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-2">
                Catatan / Informasi Tambahan (Opsional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Tuliskan jika ada kendala paspor, riwayat penolakan sebelumnya, atau dokumen khusus yang sudah disiapkan..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Kirim Konsultasi ke WhatsApp</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                Pesan akan langsung diarahkan ke nomor resmi WhatsApp 087899804147.
              </p>
            </div>
          </form>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
