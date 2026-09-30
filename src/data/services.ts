export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'visa' | 'dokumen' | 'asistensi';
  icon: string;
  badge?: string;
  points: string[];
  popular?: boolean;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'visa-turis',
    title: 'Visa Turis',
    shortDesc: 'Pengurusan visa untuk liburan dan rekreasi ke berbagai negara tujuan favorit di seluruh dunia.',
    fullDesc: 'Layanan lengkap persiapan dan pendampingan visa wisata untuk individu, pasangan, atau grup perjalanan wisata.',
    category: 'visa',
    icon: 'Plane',
    popular: true,
    points: ['Pemeriksaan checklist kedutaan', 'Asistensi pengisian formulir resmi', 'Bantuan booking tiket & akomodasi sementara'],
  },
  {
    id: 'visa-bisnis',
    title: 'Visa Bisnis',
    shortDesc: 'Visa perjalanan bisnis, konferensi internasional, pameran dagang, dan pertemuan klien global.',
    fullDesc: 'Pendampingan khusus pengurusan visa bisnis dengan persiapan berkas sponsor, surat tugas kerja, dan undangan korporat.',
    category: 'visa',
    icon: 'Briefcase',
    popular: true,
    points: ['Review surat undangan sponsor/mitra', 'Format surat keterangan kerja & rekomendasi', 'Penjadwalan biometrik prioritas'],
  },
  {
    id: 'visa-kunjungan',
    title: 'Visa Kunjungan',
    shortDesc: 'Kunjungan keluarga, silaturahmi kerabat, menghadiri wisuda anak, atau event sosial di luar negeri.',
    fullDesc: 'Bantuan menyusun dokumen hubungan kekeluargaan, surat jaminan (sponsorship letter), dan bukti ikatan di tanah air.',
    category: 'visa',
    icon: 'Users',
    popular: false,
    points: ['Format surat sponsor keluarga/kerabat', 'Pemeriksaan bukti relasi keluarga', 'Bimbingan kelengkapan dokumen pendukung'],
  },
  {
    id: 'visa-pelajar',
    title: 'Visa Pelajar',
    shortDesc: 'Pengurusan visa studi (student visa), short course, exchange program, dan pelatihan luar negeri.',
    fullDesc: 'Membantu persiapan dokumen Letter of Acceptance (LoA), bukti kecukupan dana finansial, dan wawancara visa studi.',
    category: 'visa',
    icon: 'GraduationCap',
    popular: true,
    points: ['Review Letter of Acceptance (LoA)', 'Perapian dokumen sponsor pendidikan', 'Konsultasi persiapan wawancara'],
  },
  {
    id: 'visa-transit',
    title: 'Visa Transit',
    shortDesc: 'Asistensi permohonan visa singgah/transit bandara sebelum melanjutkan penerbangan ke negara tujuan akhir.',
    fullDesc: 'Pastikan waktu layover Anda aman tanpa kendala keimigrasian dengan dokumen visa transit yang sesuai aturan negara bandara.',
    category: 'visa',
    icon: 'Navigation',
    popular: false,
    points: ['Cek ketentuan stopover & layover', 'Penyesuaian tiket lanjutan terkoneksi', 'Panduan keluar bandara saat transit'],
  },
  {
    id: 'konsultasi-visa',
    title: 'Konsultasi Visa',
    shortDesc: 'Sesi konsultasi mendalam untuk analisa profil, track record perjalanan, dan strategi pengajuan.',
    fullDesc: 'Konsultasi objektif untuk meminimalkan potensi kesalahan administratif dan memperkuat berkas sebelum submit ke kedutaan.',
    category: 'asistensi',
    icon: 'MessageSquareText',
    popular: true,
    points: ['Analisa profil finansial & pekerjaan', 'Solusi riwayat penolakan sebelumnya', 'Rekomendasi jenis visa yang tepat'],
  },
  {
    id: 'invitation-letter',
    title: 'Invitation Letter',
    shortDesc: 'Penyusunan format resmi surat undangan dari pihak pengundang luar negeri sesuai standar kedutaan.',
    fullDesc: 'Struktur bahasa resmi dan klausul penjaminan yang disyaratkan pihak kedutaan untuk kunjungan pribadi maupun bisnis.',
    category: 'dokumen',
    icon: 'MailCheck',
    popular: false,
    points: ['Draft surat formal standar kedutaan', 'Klausul jaminan finansial & akomodasi', 'Dua versi bahasa (Inggris / bilingual)'],
  },
  {
    id: 'itinerary-perjalanan',
    title: 'Itinerary Perjalanan',
    shortDesc: 'Pembuatan rencana rute perjalanan terperinci (day-by-day travel plan) yang masuk akal dan meyakinkan.',
    fullDesc: 'Itinerary perjalanan logis yang memetakan aktivitas harian, transportasi, dan hotel untuk memenuhi syarat mutlak aplikasi visa.',
    category: 'dokumen',
    icon: 'CalendarDays',
    popular: true,
    points: ['Rute harian realistis & masuk akal', 'Sinkronisasi kota & tanggal perjalanan', 'Format rapi siap lampir kedutaan'],
  },
  {
    id: 'penerjemahan-dokumen',
    title: 'Penerjemahan Dokumen',
    shortDesc: 'Bantuan penerjemahan dokumen resmi perjalanan ke Bahasa Inggris atau bahasa target lainnya.',
    fullDesc: 'Penerjemahan dokumen esensial seperti Akta Lahir, Kartu Keluarga, Buku Nikah, Rekening Koran, atau SKCK.',
    category: 'dokumen',
    icon: 'Languages',
    popular: false,
    points: ['Terjemahan akurat dan presisi terminologi', 'Pilihan tersumpah (Sworn Translator)', 'Format tata letak menyerupai aslinya'],
  },
  {
    id: 'appointment-assistance',
    title: 'Appointment Assistance',
    shortDesc: 'Bantuan pemesanan slot jadwal temu (appointment slot) untuk biometrik & penyerahan berkas fisik.',
    fullDesc: 'Membantu navigasi portal resmi VFS Global, TLScontact, BLS, kedutaan, atau imigrasi untuk mendapatkan slot jadwal temu.',
    category: 'asistensi',
    icon: 'CalendarCheck2',
    popular: true,
    points: ['Monitoring ketersediaan slot resmi', 'Pendaftaran akun portal biometrik', 'Konfirmasi appointment letter resmi'],
  },
  {
    id: 'legal-document-assistance',
    title: 'Legal Document Assistance',
    shortDesc: 'Bantuan legalisasi dokumen di Kemenkumham, Kemenlu, dan Kedutaan Besar negara terkait.',
    fullDesc: 'Pengurusan apostille dan legalisasi dokumen kenegaraan untuk kebutuhan studi, bekerja, pernikahan internasional, atau bisnis.',
    category: 'dokumen',
    icon: 'FileCheck',
    popular: false,
    points: ['Layanan Apostille Kemenkumham RI', 'Legalisasi Kemenlu & Kedutaan Asing', 'Verifikasi keabsahan dokumen'],
  },
  {
    id: 'dokumen-perjalanan-lainnya',
    title: 'Dokumen Perjalanan Lainnya',
    shortDesc: 'Asistensi berbagai kebutuhan dokumen pendukung perjalanan internasional lainnya sesuai permintaan.',
    fullDesc: 'Membantu persiapan dokumen travel insurance, cover letter pemohon, formulir khusus, dan kelengkapan imigrasi non-standar.',
    category: 'dokumen',
    icon: 'Files',
    popular: false,
    points: ['Pembuatan Cover Letter / Motivation Letter', 'Penyusunan Financial Sponsorship Letter', 'Asistensi dokumen pelengkap khusus'],
  },
];
