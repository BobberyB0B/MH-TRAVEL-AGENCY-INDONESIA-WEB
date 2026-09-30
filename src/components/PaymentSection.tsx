import React, { useState } from 'react';
import {
  ShieldCheck,
  Copy,
  Check,
  AlertTriangle,
  ArrowRight,
  Lock,
  Building2,
  Calendar,
  DollarSign,
  User,
  Layers,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { openWhatsApp, copyToClipboard } from '../utils/whatsapp';
import { SERVICES_LIST } from '../data/services';
import { AnimatedSection } from './AnimatedSection';

export const PaymentSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    service: 'Visa Turis',
    amount: '',
    senderBank: '',
    paymentDate: new Date().toISOString().split('T')[0],
    notes: '',
  });
  const [formError, setFormError] = useState('');

  const handleCopyAccountNumber = async () => {
    const success = await copyToClipboard(BUSINESS_CONFIG.BANK_ACCOUNT_NUMBER);
    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  const handleDirectConfirmClick = () => {
    const template = `Halo MH Travel Agency Indonesia,

Saya ingin melakukan konfirmasi pembayaran.

Nama:
[isi nama]

Layanan:
[isi layanan]

Nominal pembayaran:
Rp [isi nominal]

Bank pengirim:
[isi bank]

Tanggal pembayaran:
[isi tanggal]

Mohon dibantu untuk konfirmasi pembayaran saya.

Terima kasih.`;
    openWhatsApp(template);
  };

  const handleVerifyAccountClick = () => {
    const template = `Halo MH Travel Agency Indonesia, saya ingin memastikan rekening pembayaran resmi sebelum melakukan transfer. Mohon konfirmasi bahwa rekening BCA ${BUSINESS_CONFIG.BANK_ACCOUNT_NUMBER} atas nama ${BUSINESS_CONFIG.BANK_ACCOUNT_NAME} merupakan rekening pembayaran resmi.`;
    openWhatsApp(template);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formValues.name.trim()) {
      setFormError('Nama wajib diisi.');
      return;
    }
    if (!formValues.service.trim()) {
      setFormError('Layanan wajib dipilih.');
      return;
    }
    if (!formValues.amount.trim()) {
      setFormError('Nominal pembayaran wajib diisi.');
      return;
    }
    if (!formValues.senderBank.trim()) {
      setFormError('Bank pengirim wajib diisi.');
      return;
    }
    if (!formValues.paymentDate.trim()) {
      setFormError('Tanggal pembayaran wajib diisi.');
      return;
    }

    setFormError('');

    const formattedAmount = formValues.amount.replace(/[^0-9]/g, '');
    const displayAmount = formattedAmount
      ? Number(formattedAmount).toLocaleString('id-ID')
      : formValues.amount;

    const message = `Halo MH Travel Agency Indonesia,

Saya ingin melakukan konfirmasi pembayaran.

Nama:
${formValues.name.trim()}

Layanan:
${formValues.service.trim()}

Nominal pembayaran:
Rp ${displayAmount}

Bank pengirim:
${formValues.senderBank.trim()}

Tanggal pembayaran:
${formValues.paymentDate.trim()}${formValues.notes.trim() ? `\n\nCatatan:\n${formValues.notes.trim()}` : ''}

Mohon dibantu untuk konfirmasi pembayaran saya.

Terima kasih.`;

    openWhatsApp(message);
  };

  return (
    <section id="pembayaran" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-20 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-left max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-2">
              <Lock className="w-4 h-4" />
              <span>Sistem Transaksi Resmi & Terverifikasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Pembayaran Resmi
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Untuk menjaga keamanan transaksi dan mencegah penipuan yang mengatasnamakan {BUSINESS_CONFIG.BUSINESS_NAME}, seluruh pembayaran jasa hanya diterima melalui rekening BCA resmi berikut.
            </p>
          </div>
        </AnimatedSection>

        {/* 1. Official Payment Card (Premium Card) */}
        <AnimatedSection delayMs={100}>
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/40 shadow-2xl overflow-hidden text-left">
            {/* Background Decorative Stamp */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-amber-500/5 pointer-events-none blur-xl" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                    REKENING TUNGGAL RESMI
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    PEMBAYARAN RESMI
                  </h3>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Terverifikasi</span>
              </div>
            </div>

            {/* Bank Detail Elements */}
            <div className="space-y-4 my-6">
              <div>
                <span className="text-xs text-slate-400 font-medium block mb-1">Bank Penerima</span>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-md bg-blue-900/60 border border-blue-700/50 text-blue-200 font-black text-sm tracking-wider">
                    {BUSINESS_CONFIG.BANK_NAME}
                  </div>
                  <span className="text-xs text-slate-300">Bank Central Asia</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-medium block mb-1">Nomor Rekening</span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold tracking-wider text-amber-400 tabular-nums">
                    {BUSINESS_CONFIG.BANK_ACCOUNT_NUMBER}
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyAccountNumber}
                    aria-label="Salin nomor rekening BCA"
                    className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-slate-700 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-emerald-400 font-medium">No. rekening berhasil disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Salin No. Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-medium block mb-1">Atas Nama Pemilik Rekening</span>
                <div className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase">
                  {BUSINESS_CONFIG.BANK_ACCOUNT_NAME}
                </div>
              </div>
            </div>

            {/* Safety badge note */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed mb-6">
              <span className="font-semibold text-amber-400">Gunakan hanya rekening resmi yang tercantum di halaman ini.</span> Pastikan nama penerima pembayaran pada aplikasi perbankan Anda muncul tepat sesuai dengan <strong className="text-white">{BUSINESS_CONFIG.BANK_ACCOUNT_NAME}</strong> sebelum melakukan otorisasi transfer.
            </div>

            {/* Card Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyAccountNumber}
                className="w-full sm:flex-1 min-h-[46px] px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>Salin No. Rekening ({BUSINESS_CONFIG.BANK_ACCOUNT_NUMBER})</span>
              </button>

              <button
                type="button"
                onClick={handleDirectConfirmClick}
                className="w-full sm:flex-1 min-h-[46px] px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konfirmasi Pembayaran via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
        </AnimatedSection>

        {/* 2. Payment Warning Box (Section 9 Requirement) */}
        <AnimatedSection delayMs={150}>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-left space-y-3">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>PERHATIAN PEMBAYARAN</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              <strong className="text-white">{BUSINESS_CONFIG.BUSINESS_NAME}</strong> hanya menerima pembayaran melalui rekening BCA:
            </p>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm font-mono text-amber-300">
              <p className="font-bold text-white text-base tracking-wider">{BUSINESS_CONFIG.BANK_ACCOUNT_NUMBER}</p>
              <p className="text-slate-300 uppercase font-sans mt-0.5">{BUSINESS_CONFIG.BANK_ACCOUNT_NAME}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Jangan melakukan pembayaran ke rekening lain yang mengatasnamakan MH TRAVEL AGENCY INDONESIA tanpa melakukan konfirmasi terlebih dahulu. Pastikan nama penerima pembayaran sesuai dengan MUHAMMAD HIDAYAT sebelum melakukan transfer.
            </p>

            <button
              type="button"
              onClick={handleVerifyAccountClick}
              className="mt-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-98 text-amber-400 hover:text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>Konfirmasi Rekening via WhatsApp</span>
            </button>
          </div>
        </div>
        </AnimatedSection>

        {/* 3. Payment Flow Section (01 -> 06) */}
        <AnimatedSection delayMs={150}>
          <div className="mb-14">
          <div className="text-left mb-6">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
              Tata Cara Transaksi
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Alur Pembayaran Jasa
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-left">
            {[
              { step: '01', title: 'Konsultasi Layanan', desc: 'Konsultasi via WhatsApp mengenai tujuan & berkas.' },
              { step: '02', title: 'Pemeriksaan Kebutuhan', desc: 'Analisa kelengkapan berkas & eligibilitas.' },
              { step: '03', title: 'Informasi Biaya', desc: 'Pemberian rincian biaya resmi yang transparan.' },
              { step: '04', title: 'Pembayaran', desc: 'Transfer ke rekening BCA 2941084780.' },
              { step: '05', title: 'Konfirmasi Pembayaran', desc: 'Kirim bukti bayar ke WhatsApp resmi.' },
              { step: '06', title: 'Proses Layanan', desc: 'Pengerjaan & pendampingan dokumen hingga selesai.' },
            ].map((flow, idx) => (
              <div
                key={flow.step}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-amber-400">{flow.step}</span>
                    {idx < 5 && <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5">{flow.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">{flow.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer on Payment vs Approval */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-left text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Catatan Penting: </strong>
            Pembayaran jasa tidak menjamin persetujuan visa. Keputusan penerbitan visa sepenuhnya berada pada otoritas yang berwenang (pihak kedutaan dan kantor imigrasi negara tujuan).
          </div>
        </div>
        </AnimatedSection>

        {/* 4. Payment Confirmation Form (Section 6 Requirement) */}
        <AnimatedSection delayMs={200}>
          <div className="max-w-2xl mx-auto text-left">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                Formulir Verifikasi
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                Konfirmasi Pembayaran
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Sudah melakukan transfer ke rekening BCA resmi? Kirimkan data rincian pembayaran Anda agar dapat segera diverifikasi oleh tim admin kami via WhatsApp.
              </p>
            </div>

            {formError && (
              <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm">
                {formError}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Nama */}
              <div>
                <label className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                  <User className="w-4 h-4 text-amber-400" />
                  <span>Nama Pembayar / Pemohon <span className="text-rose-400">*</span></span>
                </label>
                <input
                  type="text"
                  value={formValues.name}
                  onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                  placeholder="Nama sesuai identitas atau mutasi bank"
                  required
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Layanan */}
              <div>
                <label className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Layanan yang Dibayarkan <span className="text-rose-400">*</span></span>
                </label>
                <select
                  value={formValues.service}
                  onChange={(e) => setFormValues({ ...formValues, service: e.target.value })}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base sm:text-sm focus:border-amber-400 focus:outline-none"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="Paket Visa & Dokumen Lengkap">Paket Visa & Dokumen Lengkap</option>
                  <option value="Layanan Dokumen Lainnya">Layanan Dokumen Lainnya</option>
                </select>
              </div>

              {/* Grid: Nominal & Bank Pengirim */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                    <DollarSign className="w-4 h-4 text-amber-400" />
                    <span>Nominal Pembayaran (Rp) <span className="text-rose-400">*</span></span>
                  </label>
                  <input
                    type="text"
                    value={formValues.amount}
                    onChange={(e) => setFormValues({ ...formValues, amount: e.target.value })}
                    placeholder="Contoh: 1.500.000"
                    required
                    className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>Bank Pengirim <span className="text-rose-400">*</span></span>
                  </label>
                  <input
                    type="text"
                    value={formValues.senderBank}
                    onChange={(e) => setFormValues({ ...formValues, senderBank: e.target.value })}
                    placeholder="Contoh: BCA, Mandiri, BNI, BRI"
                    required
                    className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Tanggal Pembayaran */}
              <div>
                <label className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Tanggal Pembayaran <span className="text-rose-400">*</span></span>
                </label>
                <input
                  type="date"
                  value={formValues.paymentDate}
                  onChange={(e) => setFormValues({ ...formValues, paymentDate: e.target.value })}
                  required
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">
                  Catatan (Opsional)
                </label>
                <input
                  type="text"
                  value={formValues.notes}
                  onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
                  placeholder="Misal: Sudah melampirkan screenshot bukti transfer"
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-base placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Strict Security Policy Notice */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                🛡️ <strong>Keamanan Privasi:</strong> Formulir ini tidak meminta PIN ATM, Password perbankan, kode OTP, ataupun nomor kartu kredit/debit Anda. Data tidak disimpan di server dan hanya diproses untuk merangkum pesan konfirmasi ke WhatsApp resmi.
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Konfirmasi via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
