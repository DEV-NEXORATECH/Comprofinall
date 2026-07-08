export const id = {
  nav: {
    links: [
      { label: 'Beranda', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Kontak', href: '/contact' },
    ],
    cta: 'Konsultasi Gratis',
    menuLabel: 'Buka menu navigasi',
    navLabel: 'Navigasi utama',
    routeLabels: {
      '/': 'Beranda',
      '/about': 'About',
      '/services': 'Services',
      '/portfolio': 'Portfolio',
      '/faq': 'FAQ',
      '/contact': 'Kontak',
    },
  },

  footer: {
    ctaEyebrow: 'Hubungi Kami',
    ctaTitle: 'Empowering Growth Through Technology.',
    ctaButton: 'Kontak Nexora',
    aboutText: 'Extended IT Partner untuk konsultasi IT strategis, sistem kustom, integrasi aplikasi enterprise, dan transformasi digital menyeluruh.',
    menuTitle: 'Menu',
    servicesTitle: 'Layanan',
    servicesLinks: [
      { label: 'SaaS untuk UMKM', pillar: 'SaaS untuk Skala UMKM' },
      { label: 'Produk Kustom', pillar: 'Produk Kustom' },
      { label: 'IT Consulting', pillar: 'IT Consulting, Training & Diskusi' },
      { label: 'Cyber Security', pillar: 'Cyber Security & Data Awareness' },
    ],
    contactTitle: 'Kontak',
    copyright: '© 2026 Nexora Technology. All rights reserved.',
    tagline: 'Elevating Businesses, Empowering Innovation.',
    socialLinkedin: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialEmail: 'Email',
  },

  hero: {
    eyebrow: 'Company Profile',
    title: 'Elevating Businesses, Empowering Innovation.',
    subtitle: 'PT. Nexora Teknologi Nusantara hadir sebagai Extended IT Partner yang membantu organisasi menerjemahkan tantangan bisnis menjadi solusi digital yang bernilai tinggi dan berdampak nyata.',
    primaryCta: 'Konsultasi Gratis',
    secondaryCta: 'Lihat Struktur Layanan',
    trustedLabel: 'Trusted IT Partner',
    trustedDesc: 'Konsultasi IT strategis, sistem kustom, integrasi, dan transformasi digital.',
    ownershipLabel: 'Operational Ownership',
    ownershipDesc: 'Pendampingan menyeluruh dari perencanaan sampai pasca-rilis.',
    floatingCards: [
      { label: 'Automation', icon: 'autorenew', className: 'float-a' },
      { label: 'Dashboard', icon: 'dashboard', className: 'float-b' },
      { label: 'Security', icon: 'shield_lock', className: 'float-c' },
      { label: 'API Integration', icon: 'api', className: 'float-d' },
      { label: 'Custom System', icon: 'terminal', className: 'float-e' },
    ],
  },

  homeOverview: {
    eyebrow: 'Nexora Company Profile',
    title: 'Konten dipisahkan sesuai bagian company profile.',
    subtitle: 'Beranda menjadi pintu masuk ringkas. Detail tentang perusahaan, struktur layanan, portfolio, FAQ, dan kontak resmi tersedia di halaman terpisah.',
    cards: [
      { icon: 'groups', title: 'Tentang Kami', desc: 'Profil PT. Nexora Teknologi Nusantara sebagai Extended IT Partner.', href: '/about' },
      { icon: 'design_services', title: 'Struktur Layanan', desc: 'SaaS UMKM, produk kustom berbasis proposal, dan IT consulting.', href: '/services' },
      { icon: 'workspaces', title: 'Portfolio', desc: 'Kategori portfolio dan studi kasus sesuai struktur layanan Nexora.', href: '/portfolio' },
      { icon: 'forum', title: 'Hubungi Kami', desc: 'Alamat, email, website, dan kanal kontak resmi Nexora.', href: '/contact' },
    ],
  },

  proof: {
    eyebrow: 'Kenapa Nexora',
    title: 'Mengapa Nexora terasa beda?',
    stats: [
      { value: 3, suffix: '', label: 'Jalur Layanan Utama' },
      { value: 4, suffix: '', label: 'Pilar Kepemimpinan Inti' },
      { value: 5, suffix: '', label: 'Nilai & Keunggulan Transformasi' },
      { value: 100, suffix: '%', label: 'Pendampingan One-Stop Partner' },
    ],
    differences: [
      { icon: 'analytics', title: 'Data-driven execution', desc: 'Setiap keputusan dibuat berdasarkan kebutuhan nyata, bukan sekadar tampilan visual.' },
      { icon: 'speed', title: 'Speed with structure', desc: 'Desain dan flow dibuat supaya cepat, tapi tetap enak dipakai tim internal maupun stakeholder.' },
      { icon: 'groups', title: 'End-to-end delivery', desc: 'Mulai dari discovery sampai support, semua dirapikan supaya hasilnya terasa matang.' },
    ],
  },

  testimonials: {
    eyebrow: 'Testimonial',
    title: 'Dipercaya Tim yang Butuh Hasil Nyata',
    subtitle: 'Feedback singkat dari klien yang butuh sistem rapi, responsif, dan terasa premium saat dipakai sehari-hari.',
    items: [
      { name: 'Alya Putri', role: 'Head of Operations', company: 'Retail Distribution', quote: 'Nexora membantu kami merapikan approval dan dashboard operasional. Tim jadi lebih cepat mengambil keputusan tanpa bolak-balik cek file manual.' },
      { name: 'Raka Pratama', role: 'Founder', company: 'Logistics Platform', quote: 'Prosesnya jelas dari awal. Mereka tidak cuma bicara tampilan, tapi benar-benar memahami flow bisnis dan integrasi yang kami butuhkan.' },
      { name: 'Dewi Laras', role: 'Business Director', company: 'Professional Services', quote: 'Website dan sistem internalnya terasa premium, ringan, dan mudah dipakai oleh tim non-teknis.' },
    ],
  },

  pricing: {
    eyebrow: 'Paket',
    title: 'Pilih paket yang paling pas untuk kebutuhan Anda.',
    subtitle: 'Strukturnya dibuat tetap clean dan mudah dibaca, tapi cukup fleksibel untuk presentasi project based maupun support bulanan.',
    toggleProject: 'Project Based',
    toggleMonthly: 'Monthly Support',
    badge: 'Paling Populer',
    button: 'Minta Penawaran',
    note: 'Mode aktif: {{mode}}. Anda bisa pindah mode kapan saja tanpa mengubah struktur paket.',
    plans: [
      {
        name: 'Basic',
        projectPrice: 'Rp 18jt',
        monthlyPrice: 'Rp 3,5jt',
        period: '/proyek',
        monthlyPeriod: '/bulan',
        description: 'Untuk company profile, landing page, atau kebutuhan digital yang ingin dirapikan cepat.',
        features: ['Landing Page Modern', 'Responsif Mobile', 'SEO-ready structure', 'Support awal'],
      },
      {
        name: 'Professional',
        projectPrice: 'Rp 45jt',
        monthlyPrice: 'Rp 6,5jt',
        period: '/proyek',
        monthlyPeriod: '/bulan',
        description: 'Untuk bisnis yang butuh custom system, dashboard, dan integrasi yang lebih serius.',
        features: ['Custom Web Application', 'API Integration', 'Dashboard & Analytics', 'Priority Support', 'Admin Training'],
        featured: true,
      },
      {
        name: 'Enterprise',
        projectPrice: 'Custom',
        monthlyPrice: 'Custom',
        period: '/kebutuhan',
        monthlyPeriod: '/support',
        description: 'Untuk implementasi skala besar, multi-tim, dan kebutuhan delivery end-to-end.',
        features: ['Full-stack Ecosystem', 'Security Assessment', 'Dedicated DevOps Team', '24/7 Maintenance', 'Source Code Ownership'],
      },
    ],
  },

  aboutPage: {
    hero: {
      eyebrow: 'Tentang Kami',
      title: 'PT. Nexora Teknologi Nusantara',
      subtitle: 'Di era digital yang terus berkembang, perusahaan membutuhkan lebih dari sekadar teknologi. Nexora hadir sebagai one-stop partner yang menerjemahkan tantangan bisnis menjadi solusi berdampak nyata.',
      primaryCta: 'Lihat Layanan',
      secondaryCta: 'Hubungi Kami',
      imageAlt: 'Tim teknologi sedang berdiskusi strategi produk digital',
    },
    detail: {
      eyebrow: 'Cara Kerja',
      title: 'Nilai utama yang menjadi fondasi kerja Nexora.',
      subtitle: 'Kami menggabungkan tata kelola, keunggulan engineering, inovasi bisnis, dan rasa memiliki terhadap keberhasilan transformasi digital klien.',
      items: [
        { icon: 'gavel', title: 'Integrity & Governance', desc: 'Menjunjung integritas, transparansi, akuntabilitas, serta tata kelola internal yang aman dan terpercaya.' },
        { icon: 'engineering', title: 'Engineering Excellence', desc: 'Menghadirkan solusi teknologi berstandar kualitas tinggi, aman, dan siap mendukung pertumbuhan jangka panjang.' },
        { icon: 'lightbulb', title: 'Business-Driven Innovation', desc: 'Setiap solusi dirancang untuk meningkatkan efisiensi operasional, keputusan, dan dampak bisnis terukur.' },
        { icon: 'support_agent', title: 'Operational Ownership', desc: 'Nexora mendampingi setiap langkah perjalanan teknologi dengan dukungan responsif dan berkelanjutan.' },
      ],
      imageAlt: 'Meeting profesional membahas roadmap digital',
    },
  },

  about: {
    eyebrow: 'Tentang Kami',
    title: 'Extended IT Partner untuk transformasi digital yang berdampak.',
    subtitle: 'Nexora menggabungkan inovasi modern, analisis bisnis mendalam, dan tata kelola matang untuk menciptakan efisiensi operasional yang maksimal, aman, dan berkelanjutan.',
    visi: { title: 'Visi', desc: 'Menjadi Extended IT Partner strategis utama di Indonesia yang mengawal pelaku bisnis mencapai keunggulan operasional dan pertumbuhan berkelanjutan melalui transformasi digital.' },
    misi: { title: 'Misi', desc: 'Membangun solusi teknologi kustom yang adaptif, mengoptimalkan proses bisnis, menyediakan arsitektur aman, dan menjadi katalis dalam ekosistem digital Indonesia.' },
  },

  servicesPage: {
    hero: {
      eyebrow: 'Layanan',
      title: 'Struktur Layanan Kami',
      subtitle: 'Nexora memahami bahwa setiap bisnis memiliki tahap pertumbuhan dan kebutuhan teknologi yang berbeda. Karena itu, kami merancang tiga jalur layanan utama yang fleksibel.',
      primaryCta: 'Minta Penawaran',
      secondaryCta: 'Lihat Portfolio',
      imageAlt: 'Tim digital bekerja di ruang meeting modern',
    },
    detail: {
      eyebrow: 'Area Solusi',
      title: 'Tiga jalur layanan sesuai skala dan kompleksitas bisnis.',
      subtitle: 'Mulai dari produk SaaS terjangkau, pengembangan sistem kustom berbasis penawaran, hingga konsultasi dan pelatihan IT yang terarah.',
      items: [
        { icon: 'storefront', title: 'SaaS untuk UMKM', desc: 'Produk siap pakai berbasis langganan — kasir digital, inventaris, pencatatan keuangan, CRM ringan, absensi, dan dashboard laporan. Terjangkau, scalable, tanpa biaya infrastruktur besar.' },
        { icon: 'terminal', title: 'Produk Kustom', desc: 'Pengembangan sistem tailor-made berbasis proposal resmi — enterprise apps, web/mobile/cloud, workflow automation, dashboard BI, integrasi API, backend, dan system foundation sesuai kebutuhan spesifik klien.' },
        { icon: 'school', title: 'Consulting & Training', desc: 'Konsultasi, pelatihan, dan pendampingan strategis untuk transformasi digital, optimasi sistem, data analytics, adopsi teknologi baru, hingga arsitektur sistem dan dasar keamanan siber.' },
      ],
      imageAlt: 'Developer bekerja membangun aplikasi web',
    },
  },

  services: {
    eyebrow: 'Layanan',
    title: 'Solusi teknologi yang terasa modern dan siap pakai.',
    subtitle: 'Setiap layanan disusun supaya mudah dipahami, cepat dieksekusi, dan tetap terlihat premium untuk presentasi ke klien maupun stakeholder.',
    relatedLabel: 'Layanan terkait:',
    cards: [
      {
        title: 'SaaS untuk Skala UMKM',
        desc: 'Produk perangkat lunak siap pakai berbasis Software-as-a-Service untuk membantu UMKM mengelola operasional harian secara lebih efisien.',
        isPillar: true,
        detail: 'Ekosistem aplikasi SaaS yang dirancang khusus untuk pelaku UMKM — kasir digital, manajemen inventaris, pencatatan keuangan sederhana, CRM ringan, absensi, hingga dashboard laporan bisnis. Semua dapat diakses dengan model berlangganan terjangkau tanpa biaya infrastruktur besar.',
        related: ['Aplikasi Kasir & POS', 'Manajemen Inventaris & Stok'],
        tone: 'light', icon: 'storefront', tag: 'Subscription',
      },
      {
        title: 'Aplikasi Kasir & POS',
        desc: 'Solusi kasir dan point of sales yang dapat dikembangkan sebagai bagian dari ekosistem SaaS UMKM.',
        tone: 'primary', icon: 'point_of_sale', tag: 'UMKM tools',
        bullets: ['Transaksi harian', 'Laporan sederhana', 'Manajemen penjualan'],
      },
      {
        title: 'Manajemen Inventaris & Stok',
        desc: 'Sistem pencatatan stok dan inventaris untuk membantu bisnis kecil memantau barang, pergerakan, dan kebutuhan operasional.',
        tone: 'surface', icon: 'inventory_2', tag: 'Operational',
      },
      {
        title: 'Produk Kustom',
        desc: 'Pengembangan sistem tailor-made berbasis proposal dan penawaran resmi, disesuaikan dengan kebutuhan spesifik klien.',
        isPillar: true,
        detail: 'Untuk kebutuhan yang lebih kompleks dan spesifik, kami mengembangkan sistem tailor-made berdasarkan proposal dan penawaran resmi. Lingkup pengerjaan mencakup enterprise & business applications (web, mobile, cloud-based), business process automation, workflow system, integrasi sistem, dashboard BI, reporting, API, backend, dan system foundation.',
        related: ['Enterprise & Business Applications', 'Business Process Automation'],
        tone: 'secondary', icon: 'terminal', tag: 'Quotation based',
      },
      {
        title: 'Enterprise & Business Applications',
        desc: 'Aplikasi bisnis skala perusahaan, web, mobile, cloud-based application, dan sistem internal yang siap diperluas.',
        tone: 'light', icon: 'business_center', tag: 'Enterprise',
      },
      {
        title: 'Business Process Automation',
        desc: 'Otomasi proses bisnis, workflow system, sistem integrasi, dashboard BI, reporting, API, backend, dan system foundation.',
        tone: 'primary', icon: 'account_tree', tag: 'Automation',
      },
      {
        title: 'IT Consulting, Training & Diskusi',
        desc: 'Konsultasi, pelatihan, pendampingan, dan sesi diskusi untuk strategi transformasi digital, optimasi sistem, data analytics, dan keamanan dasar.',
        isPillar: true,
        detail: 'Kami membantu bisnis menyusun strategi transformasi digital yang terarah melalui sesi konsultasi, pelatihan, dan pendampingan. Topik mencakup roadmap transformasi digital, optimasi sistem yang sudah berjalan, data analytics, adopsi teknologi baru, serta diskusi teknis seputar arsitektur sistem dan dasar keamanan siber.',
        related: [],
        tone: 'surface', icon: 'school', tag: 'Session based',
      },
      {
        title: 'Cyber Security & Data Awareness',
        desc: 'Topik konsultasi dan pelatihan terbatas seputar tata kelola data, kesadaran keamanan data dasar, dan keamanan siber.',
        isPillar: true,
        detail: 'Kami menyediakan konsultasi dan pelatihan terbatas seputar tata kelola data (data governance), kesadaran keamanan data dasar (data security awareness), dan keamanan siber fundamental. Layanan ini membantu bisnis memahami risiko keamanan digital dan membangun fondasi perlindungan data yang baik sejak awal.',
        related: [],
        tone: 'secondary', icon: 'shield_lock', tag: 'Governance',
      },
    ],
  },

  portfolioPage: {
    hero: {
      eyebrow: 'Portfolio',
      title: 'Portfolio & Studi Kasus',
      subtitle: 'Nexora merancang dan mengintegrasikan sistem teknologi untuk memperkuat tata kelola, meminimalkan risiko operasional, dan mendorong efisiensi terukur.',
      primaryCta: 'Konsultasi Gratis',
      secondaryCta: 'FAQ',
      imageAlt: 'Dashboard analytics pada layar laptop',
    },
    detail: {
      eyebrow: 'Impact',
      title: 'Kategori portfolio mengikuti struktur layanan Nexora.',
      subtitle: 'Studi kasus dan contoh proyek akan diperbarui sesuai portfolio terbaru Nexora, sebagaimana arahan company profile.',
      items: [
        { icon: 'storefront', title: 'SaaS untuk Skala UMKM', desc: 'Produk siap pakai berbasis Software-as-a-Service yang membantu UMKM mengelola kasir, inventaris, pencatatan keuangan, CRM ringan, dan dashboard laporan bisnis — semua dengan model langganan terjangkau tanpa biaya infrastruktur besar.' },
        { icon: 'terminal', title: 'Produk Kustom', desc: 'Pengembangan sistem tailor-made berdasarkan proposal dan penawaran resmi — mencakup aplikasi enterprise, web/mobile/cloud, workflow automation, dashboard BI, integrasi API, dan system foundation yang disesuaikan dengan kebutuhan spesifik klien.' },
        { icon: 'forum', title: 'IT Consulting & Diskusi', desc: 'Sesi konsultasi, pelatihan, dan pendampingan strategis untuk roadmap transformasi digital, optimasi sistem yang sudah berjalan, data analytics, adopsi teknologi baru, hingga diskusi teknis arsitektur sistem dan dasar keamanan siber.' },
      ],
      imageAlt: 'Profesional melihat laporan performa bisnis',
    },
  },

  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Jejak karya yang terasa nyata.',
    subtitle: 'Kami menjaga tampilan tetap clean, tapi tetap memberi ruang untuk bukti hasil, konteks bisnis, dan storytelling yang meyakinkan.',
    cta: 'Lihat Studi Kasus',
    prevPage: 'Sebelumnya',
    nextPage: 'Selanjutnya',
    pageOf: 'Halaman {{current}} dari {{total}}',
    items: [
      {
        title: 'BISA Platform Operasional',
        desc: 'Platform approval, KPI, dan SSO terintegrasi untuk efisiensi operasional bisnis.',
        image: '/bisa-platform.png',
        tags: ['Platform', 'Approval', 'KPI'],
      },
      {
        title: 'Website Klinik Gading Mitra Medika',
        desc: 'Landing page profesional untuk klinik dengan informasi layanan, kontak, dan profil dokter.',
        image: '/gmm.png',
        tags: ['Klinik', 'Landing Page', 'Health'],
      },
      {
        title: 'Website Wisata Pasabar',
        desc: 'Platform promosi destinasi wisata Jawa Barat dengan galeri interaktif dan informasi lengkap.',
        image: '/pasabar.png',
        tags: ['Wisata', 'Destinasi', 'Jabar'],
      },
      {
        title: 'Landing Page All Role AI',
        desc: 'Halaman promosi produk AI dengan desain modern dan conversion-focused layout.',
        image: '/pasabar.png',
        tags: ['AI', 'Landing Page', 'Product'],
      },
      {
        title: 'Dashboard HRIS Perusahaan',
        desc: 'Admin dashboard HRIS untuk manajemen karyawan, absensi, penggajian, dan laporan SDM.',
        image: '/hris.png',
        tags: ['HRIS', 'Dashboard', 'Enterprise'],
      },
      {
        title: 'Dashboard SOP & CheckFlow',
        desc: 'Sistem manajemen SOP digital dengan alur approval dan monitoring kepatuhan terintegrasi.',
        image: '/sop.png',
        tags: ['SOP', 'Workflow', 'Approval'],
      },
      {
        title: 'Aplikasi Keuangan Moneyku',
        desc: 'Aplikasi manajemen keuangan untuk pencatatan transaksi, anggaran, dan laporan keuangan.',
        image: '/moneyku.png',
        tags: ['Finance', 'App', 'Management'],
      },
    ],
  },

  faqPage: {
    hero: {
      eyebrow: 'Pusat Bantuan',
      title: 'Pertanyaan Populer',
      subtitle: 'Ringkasan pertanyaan yang disusun dari company profile Nexora agar calon klien memahami posisi, struktur layanan, dan model kerja kami.',
      primaryCta: 'Chat WhatsApp',
      secondaryCta: 'Lihat Layanan',
      imageAlt: 'Diskusi konsultasi antara tim dan klien',
    },
    detail: {
      eyebrow: 'Sebelum Mulai',
      title: 'Pahami dulu struktur layanan Nexora.',
      subtitle: 'FAQ ini membantu Anda memilih jalur layanan yang sesuai dengan skala, anggaran, dan kompleksitas kebutuhan bisnis.',
      items: [
        { icon: 'fact_check', title: 'Jalur layanan', desc: 'Pahami perbedaan SaaS UMKM, produk kustom, serta consulting dan training.' },
        { icon: 'payments', title: 'Model harga', desc: 'SaaS berbasis langganan, custom berbasis proposal, konsultasi berbasis sesi atau paket.' },
        { icon: 'support', title: 'Pendampingan', desc: 'Nexora menekankan dukungan teknis responsif dan berkelanjutan sebagai Extended IT Partner.' },
      ],
      imageAlt: 'Tim sedang menjelaskan rencana project',
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan umum yang paling sering muncul.',
    subtitle: 'Ringkas, to the point, dan tetap membantu Anda memahami alur kerja Nexora sebelum ngobrol lebih jauh.',
    items: [
      {
        q: 'Apa posisi Nexora sebagai partner teknologi?',
        a: 'Nexora hadir sebagai Extended IT Partner atau one-stop partner yang membantu menerjemahkan tantangan bisnis menjadi solusi digital yang berdampak nyata.',
      },
      {
        q: 'Apa saja jalur layanan utama Nexora?',
        a: 'Ada tiga jalur utama: SaaS untuk skala UMKM, produk kustom berbasis proposal dan penawaran, serta IT consulting, training, dan diskusi dengan cakupan terbatas.',
      },
      {
        q: 'Bagaimana model harga layanan Nexora?',
        a: 'SaaS berbasis langganan, produk kustom berbasis proposal resmi sesuai kompleksitas fitur, dan konsultasi berbasis sesi atau paket diskusi.',
      },
      {
        q: 'Apakah Nexora melayani UMKM dan enterprise?',
        a: 'Ya. Struktur layanan dibuat fleksibel agar dapat disesuaikan dengan skala, anggaran, dan kompleksitas kebutuhan setiap segmen usaha.',
      },
      {
        q: 'Apa fokus konsultasi dan training Nexora?',
        a: 'Topiknya mencakup roadmap transformasi digital, onboarding dan optimasi sistem, dasar data analytics, tata kelola data, adopsi teknologi baru, dan keamanan siber dasar.',
      },
      {
        q: 'Apakah portfolio di website sudah final?',
        a: 'PDF company profile menyebut studi kasus dan contoh proyek akan ditambahkan sesuai portfolio terbaru Nexora.',
      },
    ],
  },

  contactPage: {
    hero: {
      eyebrow: 'Kontak',
      title: 'Kontak & Penutup',
      subtitle: 'Teknologi bukan lagi sekadar instrumen operasional, melainkan fondasi untuk memperkuat tata kelola, mengoptimalkan efisiensi, dan mendorong pertumbuhan berkelanjutan.',
      primaryCta: 'Kirim Email',
      secondaryCta: 'Website',
      imageAlt: 'Konsultasi bisnis digital bersama klien',
    },
    detail: {
      eyebrow: 'Alur Kontak',
      title: 'Hubungi Nexora melalui kanal resmi.',
      subtitle: 'Sebagai Extended IT Partner, Nexora siap mendampingi organisasi untuk menerjemahkan tantangan bisnis menjadi solusi digital bernilai tinggi.',
      items: [
        { icon: 'edit_note', title: 'Tentukan jalur layanan', desc: 'Pilih apakah kebutuhan Anda lebih cocok ke SaaS UMKM, produk kustom, atau sesi consulting.' },
        { icon: 'calendar_month', title: 'Sampaikan tantangan bisnis', desc: 'Nexora membantu menerjemahkan tantangan manajemen, arsitektur, dan operasional menjadi solusi digital.' },
        { icon: 'request_quote', title: 'Lanjut ke proposal', desc: 'Untuk produk kustom, harga dan durasi ditentukan melalui proses konsultasi awal dan proposal resmi.' },
      ],
      imageAlt: 'Tim profesional sedang berdiskusi',
    },
  },

  contact: {
    eyebrow: 'Kontak',
    title: 'Hubungi Nexora dan mulai percakapan yang jelas.',
    subtitle: 'Tinggalkan kebutuhan Anda, pilih kanal kirim, lalu kami bantu lanjutkan ke arah yang paling relevan.',
    form: {
      feedback: 'Isi form ini, pilih WhatsApp atau Email, lalu kirim.',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@company.com',
      phoneLabel: 'Nomor Telepon',
      phonePlaceholder: 'Nomor kontak Anda',
      subjectLabel: 'Subjek',
      subjectOptions: ['SaaS untuk UMKM', 'Produk Kustom', 'IT Consulting & Training', 'Cyber Security / Data Awareness'],
      channelLabel: 'Kirim ke',
      channelSales: 'Sales Email',
      channelAdmin: 'Admin Email',
      messageLabel: 'Pesan Anda',
      messagePlaceholder: 'Ceritakan kebutuhan teknologi Anda...',
      sending: 'Menyiapkan...',
      sendSales: 'Kirim Sales Email',
      sendAdmin: 'Kirim Admin Email',
      errors: {
        name: 'Nama wajib diisi.',
        email: 'Email wajib diisi.',
        message: 'Pesan wajib diisi.',
        general: 'Periksa lagi input yang masih kosong atau belum valid.',
      },
      messages: {
        sending: 'Menyiapkan pesan Anda...',
        emailReady: 'Draft email admin sudah disiapkan. Cek aplikasi email Anda.',
        salesReady: 'Draft email sales sudah disiapkan. Nomor kantor/sales dapat ditambahkan setelah final.',
      },
    },
    panel: {
      title: 'Informasi Kontak',
      website: 'Website',
      sendEmail: 'Kirim Email',
      mapLink: 'Buka di Google Maps',
    },
    details: [
      { icon: 'location_on', title: 'Alamat Kantor', value: 'Jl. Depok 17, Antapani, Bandung - Jawa Barat' },
      { icon: 'mail', title: 'Email', value: 'admin@nexora-technology.id | sales@nexora-technology.id' },
      { icon: 'language', title: 'Website', value: 'www.nexora-technology.id' },
      { icon: 'call', title: 'Telepon', value: '[Nomor Kontak Kantor / Sales]' },
    ],
  },

  notFound: {
    code: '404',
    title: 'Halaman tidak ditemukan.',
    subtitle: 'Halaman yang Anda buka tidak tersedia. Gunakan navigasi di atas untuk kembali ke bagian utama situs.',
    primaryCta: 'Kembali ke Beranda',
    secondaryCta: 'Hubungi Kami',
  },
};
