export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah MH Travel Agency adalah kedutaan?',
    answer: 'Tidak. MH Travel Agency Indonesia merupakan penyedia jasa bantuan dan konsultasi dokumen perjalanan dan bukan kedutaan atau instansi pemerintah.',
  },
  {
    id: 'faq-2',
    question: 'Apakah visa pasti disetujui?',
    answer: 'Tidak ada pihak yang dapat menjamin persetujuan visa. Keputusan visa berada pada otoritas/instansi terkait.',
  },
  {
    id: 'faq-3',
    question: 'Berapa lama proses visa?',
    answer: 'Durasi berbeda tergantung negara, jenis visa, dan kebijakan instansi terkait.',
  },
  {
    id: 'faq-4',
    question: 'Apakah bisa konsultasi melalui WhatsApp?',
    answer: 'Ya, Anda dapat berkonsultasi langsung secara responsif melalui WhatsApp resmi kami di 087899804147.',
  },
  {
    id: 'faq-5',
    question: 'Bagaimana cara melakukan pembayaran?',
    answer: 'Setelah mendapatkan informasi biaya dari MH Travel Agency Indonesia, pembayaran hanya dilakukan melalui rekening BCA resmi yang tercantum di website.',
  },
  {
    id: 'faq-6',
    question: 'Apa rekening resmi MH Travel Agency?',
    answer: 'BCA 2941084780 atas nama MUHAMMAD HIDAYAT.',
  },
  {
    id: 'faq-7',
    question: 'Apakah ada rekening lain?',
    answer: 'Untuk keamanan pelanggan, gunakan hanya rekening resmi yang tercantum pada website dan lakukan konfirmasi melalui WhatsApp resmi apabila ragu.',
  },
  {
    id: 'faq-8',
    question: 'Bagaimana jika berkas dokumen saya belum lengkap?',
    answer: 'Tim kami akan melakukan pengecekan awal (pre-screening) dan memberikan daftar perbaikan dokumen yang perlu dilengkapi agar sesuai dengan ketentuan kedutaan.',
  },
];

export interface DocumentItem {
  name: string;
  category: string;
  description: string;
  note: string;
}

export const COMMON_DOCUMENTS: DocumentItem[] = [
  {
    name: 'Paspor Asli & Salinan',
    category: 'Identitas Pokok',
    description: 'Paspor dengan masa berlaku minimal 6 bulan sebelum tanggal kepulangan dan memiliki minimal 2 halaman kosong.',
    note: 'Sertakan paspor lama jika memiliki riwayat cap perjalanan internasional.',
  },
  {
    name: 'KTP (Kartu Tanda Penduduk)',
    category: 'Identitas Diri',
    description: 'Salinan e-KTP pemohon yang masih berlaku secara jelas dan tidak buram.',
    note: 'Diperlukan untuk verifikasi domisili resmi.',
  },
  {
    name: 'Kartu Keluarga (KK)',
    category: 'Hubungan Keluarga',
    description: 'Salinan Kartu Keluarga terbaru yang mencantumkan nama pemohon secara lengkap.',
    note: 'Wajib untuk permohonan visa keluarga atau pemohon di bawah umur.',
  },
  {
    name: 'Pasfoto Sesuai Standar',
    category: 'Foto Biometrik',
    description: 'Pasfoto terbaru (maksimal 3-6 bulan terakhir) dengan latar belakang putih/abu-abu sesuai standar kedutaan negara tujuan.',
    note: 'Ukuran foto berbeda-beda (misal Schengen 3.5x4.5 cm, USA 5x5 cm).',
  },
  {
    name: 'Bukti Keuangan',
    category: 'Finansial',
    description: 'Rekening koran tabungan 3 bulan terakhir yang dilegalisir/cap basah bank serta surat referensi bank.',
    note: 'Menunjukkan arus kas yang wajar, konsisten, dan mencukupi estimasi biaya tinggal.',
  },
  {
    name: 'Surat Keterangan Kerja / Usaha',
    category: 'Pekerjaan',
    description: 'Surat keterangan kerja berbahasa Inggris dari perusahaan, atau SIUP/NIB bagi pemilik usaha/wiraswasta.',
    note: 'Menjelaskan jabatan, masa kerja, gaji, dan keterangan izin cuti.',
  },
  {
    name: 'Surat Undangan (Invitation Letter)',
    category: 'Khusus Kunjungan / Bisnis',
    description: 'Surat resmi dari pihak pengundang luar negeri (perusahaan mitra, universitas, atau anggota keluarga).',
    note: 'Mencantumkan rincian agenda, relasi, durasi kunjungan, dan penjamin akomodasi.',
  },
  {
    name: 'Itinerary Perjalanan Terinci',
    category: 'Rencana Perjalanan',
    description: 'Rincian jadwal aktivitas hari demi hari di negara tujuan beserta moda transportasi.',
    note: 'Harus logis dan sesuai dengan tiket penerbangan serta durasi izin tinggal.',
  },
  {
    name: 'Bukti Booking / Reservasi Akomodasi',
    category: 'Akomodasi & Tiket',
    description: 'Bukti reservasi penerbangan pulang-pergi (dummy flight) dan voucher hotel yang valid.',
    note: 'Sebaiknya tidak membeli tiket non-refundable sebelum visa terbit.',
  },
  {
    name: 'Dokumen Pendukung Tambahan',
    category: 'Pelengkap',
    description: 'Asuransi perjalanan (Travel Insurance minimal coverage €30.000 untuk Schengen), SPT PPh 21, Akta Lahir/Nikah.',
    note: 'Disesuaikan dengan status pemohon (pelajar, karyawan, pensiunan, atau pengusaha).',
  },
];
