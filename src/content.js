export const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontak', href: '/contact' },
];

export const stats = [
  { value: 3, suffix: '', label: 'Jalur Layanan Utama' },
  { value: 4, suffix: '', label: 'Pilar Kepemimpinan Inti' },
  { value: 5, suffix: '', label: 'Nilai & Keunggulan Transformasi' },
  { value: 100, suffix: '%', label: 'Pendampingan One-Stop Partner' },
];

export const serviceCards = [
  {
    title: 'SaaS untuk Skala UMKM',
    description: 'Produk perangkat lunak siap pakai berbasis Software-as-a-Service untuk membantu UMKM mengelola operasional harian secara lebih efisien.',
    isPillar: true,
    detail: 'Ekosistem aplikasi SaaS yang dirancang khusus untuk pelaku UMKM — kasir digital, manajemen inventaris, pencatatan keuangan sederhana, CRM ringan, absensi, hingga dashboard laporan bisnis. Semua dapat diakses dengan model berlangganan terjangkau tanpa biaya infrastruktur besar.',
    relatedServices: ['Aplikasi Kasir & POS', 'Manajemen Inventaris & Stok'],
    tone: 'light',
    icon: 'storefront',
    tag: 'Subscription',
  },
  {
    title: 'Aplikasi Kasir & POS',
    description: 'Solusi kasir dan point of sales yang dapat dikembangkan sebagai bagian dari ekosistem SaaS UMKM.',
    tone: 'primary',
    icon: 'point_of_sale',
    bullets: ['Transaksi harian', 'Laporan sederhana', 'Manajemen penjualan'],
    tag: 'UMKM tools',
  },
  {
    title: 'Manajemen Inventaris & Stok',
    description: 'Sistem pencatatan stok dan inventaris untuk membantu bisnis kecil memantau barang, pergerakan, dan kebutuhan operasional.',
    tone: 'surface',
    icon: 'inventory_2',
    tag: 'Operational',
  },
  {
    title: 'Produk Kustom',
    description: 'Pengembangan sistem tailor-made berbasis proposal dan penawaran resmi, disesuaikan dengan kebutuhan spesifik klien.',
    isPillar: true,
    detail: 'Untuk kebutuhan yang lebih kompleks dan spesifik, kami mengembangkan sistem tailor-made berdasarkan proposal dan penawaran resmi. Lingkup pengerjaan mencakup enterprise & business applications (web, mobile, cloud-based), business process automation, workflow system, integrasi sistem, dashboard BI, reporting, API, backend, dan system foundation.',
    relatedServices: ['Enterprise & Business Applications', 'Business Process Automation'],
    tone: 'secondary',
    icon: 'terminal',
    tag: 'Quotation based',
  },
  {
    title: 'Enterprise & Business Applications',
    description: 'Aplikasi bisnis skala perusahaan, web, mobile, cloud-based application, dan sistem internal yang siap diperluas.',
    tone: 'light',
    icon: 'business_center',
    tag: 'Enterprise',
  },
  {
    title: 'Business Process Automation',
    description: 'Otomasi proses bisnis, workflow system, sistem integrasi, dashboard BI, reporting, API, backend, dan system foundation.',
    tone: 'primary',
    icon: 'account_tree',
    tag: 'Automation',
  },
  {
    title: 'IT Consulting, Training & Diskusi',
    description: 'Konsultasi, pelatihan, pendampingan, dan sesi diskusi untuk strategi transformasi digital, optimasi sistem, data analytics, dan keamanan dasar.',
    isPillar: true,
    detail: 'Kami membantu bisnis menyusun strategi transformasi digital yang terarah melalui sesi konsultasi, pelatihan, dan pendampingan. Topik mencakup roadmap transformasi digital, optimasi sistem yang sudah berjalan, data analytics, adopsi teknologi baru, serta diskusi teknis seputar arsitektur sistem dan dasar keamanan siber.',
    relatedServices: [],
    tone: 'surface',
    icon: 'school',
    tag: 'Session based',
  },
  {
    title: 'Cyber Security & Data Awareness',
    description: 'Topik konsultasi dan pelatihan terbatas seputar tata kelola data, kesadaran keamanan data dasar, dan keamanan siber.',
    isPillar: true,
    detail: 'Kami menyediakan konsultasi dan pelatihan terbatas seputar tata kelola data (data governance), kesadaran keamanan data dasar (data security awareness), dan keamanan siber fundamental. Layanan ini membantu bisnis memahami risiko keamanan digital dan membangun fondasi perlindungan data yang baik sejak awal.',
    relatedServices: [],
    tone: 'secondary',
    icon: 'shield_lock',
    tag: 'Governance',
  },
];

export const portfolio = [
  {
    title: 'SaaS untuk Skala UMKM',
    description: 'Kategori produk siap pakai untuk kasir, inventaris, pencatatan keuangan sederhana, CRM ringan, absensi, dan dashboard laporan bisnis.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['SaaS', 'UMKM', 'Subscription'],
    cta: 'View Case Study',
  },
  {
    title: 'Produk Kustom Berbasis Proposal',
    description: 'Ruang lingkup pengembangan sistem tailor-made, mulai dari aplikasi enterprise, web/mobile/cloud app, sampai workflow system.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Custom System', 'Enterprise', 'Workflow'],
    cta: 'View Case Study',
  },
  {
    title: 'IT Consulting, Training & Diskusi',
    description: 'Pendampingan dan sesi strategis untuk roadmap transformasi digital, optimasi sistem, data analytics, dan adopsi teknologi baru.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    tags: ['Consulting', 'Training', 'Roadmap'],
    cta: 'View Case Study',
  },
];

export const faqs = [
  {
    question: 'Apa posisi Nexora sebagai partner teknologi?',
    answer: 'Nexora hadir sebagai Extended IT Partner atau one-stop partner yang membantu menerjemahkan tantangan bisnis menjadi solusi digital yang berdampak nyata.',
  },
  {
    question: 'Apa saja jalur layanan utama Nexora?',
    answer: 'Ada tiga jalur utama: SaaS untuk skala UMKM, produk kustom berbasis proposal dan penawaran, serta IT consulting, training, dan diskusi dengan cakupan terbatas.',
  },
  {
    question: 'Bagaimana model harga layanan Nexora?',
    answer: 'SaaS berbasis langganan, produk kustom berbasis proposal resmi sesuai kompleksitas fitur, dan konsultasi berbasis sesi atau paket diskusi.',
  },
  {
    question: 'Apakah Nexora melayani UMKM dan enterprise?',
    answer: 'Ya. Struktur layanan dibuat fleksibel agar dapat disesuaikan dengan skala, anggaran, dan kompleksitas kebutuhan setiap segmen usaha.',
  },
  {
    question: 'Apa fokus konsultasi dan training Nexora?',
    answer: 'Topiknya mencakup roadmap transformasi digital, onboarding dan optimasi sistem, dasar data analytics, tata kelola data, adopsi teknologi baru, dan keamanan siber dasar.',
  },
  {
    question: 'Apakah portfolio di website sudah final?',
    answer: 'PDF company profile menyebut studi kasus dan contoh proyek akan ditambahkan sesuai portfolio terbaru Nexora.',
  },
];

export const contactDetails = [
  { icon: 'location_on', title: 'Alamat Kantor', value: 'Jl. Depok 17, Antapani, Bandung - Jawa Barat' },
  { icon: 'mail', title: 'Email', value: 'admin@nexora-technology.id | sales@nexora-technology.id' },
  { icon: 'language', title: 'Website', value: 'www.nexora-technology.id' },
  { icon: 'call', title: 'Telepon', value: '[Nomor Kontak Kantor / Sales]' },
];

export const testimonials = [
  {
    name: 'Alya Putri',
    role: 'Head of Operations',
    company: 'Retail Distribution',
    quote: 'Nexora membantu kami merapikan approval dan dashboard operasional. Tim jadi lebih cepat mengambil keputusan tanpa bolak-balik cek file manual.',
  },
  {
    name: 'Raka Pratama',
    role: 'Founder',
    company: 'Logistics Platform',
    quote: 'Prosesnya jelas dari awal. Mereka tidak cuma bicara tampilan, tapi benar-benar memahami flow bisnis dan integrasi yang kami butuhkan.',
  },
  {
    name: 'Dewi Laras',
    role: 'Business Director',
    company: 'Professional Services',
    quote: 'Website dan sistem internalnya terasa premium, ringan, dan mudah dipakai oleh tim non-teknis.',
  },
];
