import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const NetworkOrb = lazy(() => import('./components/NetworkOrb.jsx'));

const navLinks = [
  { label: { id: 'Beranda', en: 'Home' }, path: '/' },
  { label: { id: 'Tentang Kami', en: 'About Us' }, path: '/about' },
  { label: { id: 'Services', en: 'Services' }, path: '/services' },
  { label: { id: 'Portfolio', en: 'Portfolio' }, path: '/portfolio' },
  { label: { id: 'Industri', en: 'Industries' }, path: '/industry' },
  { label: { id: 'Kontak', en: 'Contact' }, path: '/contact' },
];

const copy = {
  id: {
    cta: 'Konsultasi Gratis',
    openMenu: 'Buka menu',
    aboutHeroTitle: 'Tentang Nexora Technology',
    aboutHeroCopy: 'Kami menggabungkan strategi, desain, dan engineering untuk membantu perusahaan membangun sistem digital yang lebih efisien.',
    aboutTitle: 'Mitra Teknologi untuk Bisnis yang Bertumbuh',
    aboutCopyOne: 'Nexora Technology hadir untuk perusahaan yang membutuhkan partner teknis jangka panjang. Kami membangun fondasi digital yang dapat diukur, dirawat, dan ditingkatkan.',
    aboutCopyTwo: 'Pendekatan kami berpusat pada kebutuhan bisnis, keamanan, performa, dan pengalaman pengguna yang sederhana.',
    managementTitle: 'Tim Manajemen Nexora',
    managementCopy: 'Struktur manajemen yang memimpin strategi, teknologi, operasional, dan pengembangan bisnis Nexora.',
    functionalTitle: 'Tim Pendukung / Fungsional',
    functionalCopy: 'Unit pendukung yang memastikan delivery, administrasi, keuangan, marketing, dan pertumbuhan bisnis berjalan rapi.',
    aboutCtaTitle: 'Bangun Sistem yang Lebih Rapi',
    aboutCtaCopy: 'Kami siap membantu merapikan proses bisnis Anda menjadi solusi digital yang praktis dan scalable.',
    footerCopy: 'Mitra teknologi andal untuk transformasi digital perusahaan. Kami menghadirkan sistem yang rapi, aman, dan siap berkembang.',
    footerCompany: 'Perusahaan',
    footerServices: 'Layanan',
    footerContact: 'Kontak & Alamat',
    footerMaps: 'Lihat di Google Maps',
    notFoundTitle: 'Halaman tidak ditemukan',
    notFoundCopy: 'Alamat yang Anda buka belum tersedia atau sudah dipindahkan.',
    notFoundButton: 'Kembali ke Beranda',
    homeHeroKicker: 'Solusi IT Enterprise',
    homeHeroTitle: 'Bangun Sistem. Percepat Bisnis.',
    homeHeroCopy: 'Nexora Technology adalah extended IT partner yang membantu bisnis membangun sistem digital, meningkatkan efisiensi operasional, memperkuat tata kelola, dan mempercepat transformasi digital secara aman, terukur, dan berkelanjutan.',
    consultNow: 'Ceritakan Kebutuhan Anda',
    viewServices: 'Lihat Layanan',
    ideologyTitle: 'Ideologi Nexora',
    ideologyCopy: 'Kami percaya teknologi bukan hanya alat operasional, tetapi fondasi untuk pertumbuhan bisnis yang aman, scalable, dan berdampak nyata.',
    playgroundTitle: 'Ruang Main Nexora',
    playgroundCopy: 'Area bisnis Nexora dirancang untuk membantu perusahaan dari tahap digitalisasi awal sampai kebutuhan sistem enterprise.',
    experienceTitle: 'Kapabilitas Tim Nexora',
    experienceCopy: 'Nexora didukung oleh tim lintas fungsi yang memahami engineering, operasional, desain digital, governance, sales, dan proses bisnis.',
    techHighlight: 'Technology Highlight',
    coverageTitle: 'Cakupan Wilayah Layanan',
    coverageCopyOne: 'Kantor Nexora berada di Bandung, Jawa Barat, dan layanan kami dapat menjangkau UMKM, perusahaan menengah, enterprise, institusi pendidikan, dan organisasi di berbagai wilayah Indonesia.',
    coverageCopyTwo: 'Model kerja fleksibel: onsite, remote, hybrid, dan project-based. Nexora dapat mendampingi klien dari konsultasi, analisis kebutuhan, desain sistem, development, testing, deployment, hingga support pasca-rilis.',
    whyTitle: 'Mengapa Nexora?',
    whyCopy: 'Kami memandang teknologi sebagai bagian dari strategi bisnis, bukan sekadar pekerjaan coding.',
    servicesPreviewTitle: 'Layanan Unggulan Kami',
    servicesPreviewCopy: 'Keahlian mendalam dalam berbagai domain teknologi untuk mendukung kebutuhan spesifik industri Anda.',
    productsPreviewCopy: 'Pilihan sistem siap-kembang untuk UMKM sampai perusahaan, dari operasional harian sampai dashboard manajemen.',
    viewAllProducts: 'Lihat Semua Products',
    portfolioPreviewTitle: 'Karya Kami',
    portfolioPreviewCopy: 'Beberapa contoh proyek sukses yang telah kami selesaikan.',
    caseStudy: 'Lihat Studi Kasus',
    servicesPageTitle: 'Layanan Unggulan Kami',
    servicesPageCopy: 'Solusi IT komprehensif yang dirancang untuk mendukung transformasi digital dan pertumbuhan bisnis Anda di era modern.',
    serviceMenuLabel: 'Applications',
    servicePricingTitle: 'Pricing Plans',
    servicePricingCopy: 'Pilih paket awal yang paling sesuai. Kalau belum yakin, tim Nexora bisa bantu arahkan dari kebutuhan bisnis Anda.',
    otherServicesTitle: 'Layanan Lainnya yang Bisa Digabungkan',
    otherServicesCopy: 'Selain aplikasi siap pakai, Nexora juga bisa membantu dari konsultasi, integrasi sistem, digitalisasi proses kerja, sampai maintenance setelah sistem berjalan.',
    otherServicesCtaTitle: 'Belum yakin mulai dari mana?',
    otherServicesCtaCopy: 'Ceritakan dulu masalah bisnis Anda. Tim Nexora akan bantu arahkan layanan mana yang paling pas dan mudah dimulai.',
    pricingBasic: 'Basic',
    pricingProfessional: 'Professional',
    pricingEnterprise: 'Enterprise',
    pricingCustom: 'Custom',
    pricingMonthly: '/bulan',
    discussPlan: 'Tanya Paket Ini',
    contactUs: 'Minta Penawaran',
    discussProductScope: 'Ceritakan Kebutuhan Anda',
    customizeWorkflow: 'Lihat Contoh Solusi',
    talkConsultant: 'Chat dengan Tim Nexora',
    productsPageCopy: 'Daftar produk dan solusi yang dapat diterapkan untuk UMKM, retail, operasional internal, hingga perusahaan yang membutuhkan sistem terpusat.',
    productsCtaTitle: 'Belum Tahu Sistem yang Cocok?',
    productsCtaCopy: 'Ceritakan proses kerja bisnis Anda. Kami bantu pilih solusi yang paling pas dan mudah dijalankan.',
    portfolioPageTitle: 'Karya Unggulan Kami',
    portfolioPageCopy: 'Transformasi digital nyata untuk berbagai industri. Jelajahi studi kasus bagaimana kami membantu perusahaan mencapai efisiensi dan skalabilitas.',
    portfolioCtaTitle: 'Ingin Dibantu Buat Sistem Seperti Ini?',
    portfolioCtaCopy: 'Kami bisa bantu mulai dari memahami masalah, menyusun alur kerja, sampai sistem siap digunakan.',
    visionTitle: 'Menjadi Extended IT Partner strategis utama di Indonesia yang membantu pelaku bisnis mencapai keunggulan operasional, pengendalian risiko yang kuat, dan pertumbuhan bisnis berkelanjutan melalui transformasi digital yang berdampak nyata.',
    missionTitle: 'Misi Nexora',
    missionCopy: 'Lima komitmen utama dalam membangun solusi teknologi yang berdampak nyata untuk bisnis.',
    leadershipTitle: 'Strategi, teknologi, operasional, dan growth dalam satu koordinasi.',
    leadershipCopy: 'Visual ini menggambarkan tim manajemen Nexora sebagai pusat koordinasi antara keputusan bisnis, arsitektur teknologi, delivery proyek, dan pengembangan pasar.',
    industryPageTitle: 'Solusi untuk Berbagai Industri',
    industryPageCopy: 'Setiap industri punya proses berbeda. Kami merancang sistem yang mengikuti alur kerja nyata, bukan memaksa bisnis mengikuti software.',
    industryPanelTitle: 'One platform mindset untuk banyak proses bisnis.',
    industryPanelCopy: 'Nexora memetakan kebutuhan tiap industri menjadi sistem, integrasi, dashboard, workflow, dan data layer yang saling terhubung.',
    industryCtaTitle: 'Bisnis Anda Punya Alur Kerja Sendiri?',
    industryCtaCopy: 'Kami bantu ubah proses yang masih manual menjadi sistem yang lebih rapi, mudah dipantau, dan siap berkembang.',
    contactPageTitle: 'Kontak Nexora Technology',
    contactPageCopy: 'Ceritakan masalah atau kebutuhan bisnis Anda. Tim Nexora akan bantu arahkan langkah yang paling mudah dimulai.',
    contactTitle: 'Hubungi Kami',
    contactCopy: 'Isi form singkat, atau hubungi kami langsung. Tidak perlu menyiapkan dokumen teknis dulu.',
    formName: 'Nama',
    formNamePlaceholder: 'Nama Anda',
    formCompany: 'Perusahaan',
    formCompanyPlaceholder: 'Nama perusahaan',
    formService: 'Layanan',
    formUnknown: 'Belum tahu',
    formMessage: 'Pesan',
    formMessagePlaceholder: 'Contoh: Saya ingin stok toko lebih rapi, laporan penjualan otomatis, atau absensi karyawan lebih mudah.',
    formSubmit: 'Kirim Pesan',
    formThanks: 'Terima kasih',
    formFallbackName: 'Kak',
    formThanksCopy: 'Tim Nexora akan segera menghubungi Anda.',
    contactPhone: 'Telepon',
    contactAddress: 'Alamat Kantor',
    contactHours: 'Jam Operasional',
    openMaps: 'Buka Lokasi di Google Maps',
  },
  en: {
    cta: 'Free Consultation',
    openMenu: 'Open menu',
    aboutHeroTitle: 'About Nexora Technology',
    aboutHeroCopy: 'We combine strategy, design, and engineering to help companies build more efficient digital systems.',
    aboutTitle: 'Technology Partner for Growing Businesses',
    aboutCopyOne: 'Nexora Technology supports companies that need a long-term technical partner. We build digital foundations that can be measured, maintained, and improved.',
    aboutCopyTwo: 'Our approach centers on business needs, security, performance, and simple user experiences.',
    managementTitle: 'Nexora Management Team',
    managementCopy: 'The leadership structure that guides Nexora strategy, technology, operations, and business development.',
    functionalTitle: 'Supporting / Functional Team',
    functionalCopy: 'Supporting units that keep delivery, administration, finance, marketing, and business growth running smoothly.',
    aboutCtaTitle: 'Build a Cleaner System',
    aboutCtaCopy: 'We are ready to help turn your business processes into practical and scalable digital solutions.',
    footerCopy: 'A reliable technology partner for enterprise digital transformation. We deliver systems that are structured, secure, and ready to scale.',
    footerCompany: 'Company',
    footerServices: 'Services',
    footerContact: 'Contact & Address',
    footerMaps: 'View on Google Maps',
    notFoundTitle: 'Page not found',
    notFoundCopy: 'The address you opened is not available yet or has been moved.',
    notFoundButton: 'Back to Home',
    homeHeroKicker: 'Enterprise IT Solutions',
    homeHeroTitle: 'Build Systems. Accelerate Business.',
    homeHeroCopy: 'Nexora Technology is an extended IT partner that helps businesses build digital systems, improve operational efficiency, strengthen governance, and accelerate secure, measurable, and sustainable digital transformation.',
    consultNow: 'Tell Us Your Needs',
    viewServices: 'View Services',
    ideologyTitle: 'Nexora Ideology',
    ideologyCopy: 'We believe technology is not only an operational tool, but a foundation for secure, scalable, and meaningful business growth.',
    playgroundTitle: 'Nexora Business Scope',
    playgroundCopy: 'Nexora helps companies from early digitalization needs to enterprise system requirements.',
    experienceTitle: 'Nexora Team Capability',
    experienceCopy: 'Nexora is supported by a cross-functional team with experience in engineering, operations, digital design, governance, sales, and business processes.',
    techHighlight: 'Technology Highlight',
    coverageTitle: 'Service Coverage Area',
    coverageCopyOne: 'Nexora is based in Bandung, West Java, and our services can reach MSMEs, mid-sized companies, enterprises, educational institutions, and organizations across Indonesia.',
    coverageCopyTwo: 'Flexible work models: onsite, remote, hybrid, and project-based. Nexora can support clients from consultation, requirement analysis, system design, development, testing, deployment, to post-launch support.',
    whyTitle: 'Why Nexora?',
    whyCopy: 'We see technology as part of business strategy, not merely coding work.',
    servicesPreviewTitle: 'Featured Services',
    servicesPreviewCopy: 'Deep expertise across technology domains to support your industry-specific needs.',
    productsPreviewCopy: 'Ready-to-evolve systems for MSMEs to enterprises, from daily operations to management dashboards.',
    viewAllProducts: 'View All Products',
    portfolioPreviewTitle: 'Our Work',
    portfolioPreviewCopy: 'A few examples of successful projects we have delivered.',
    caseStudy: 'View Case Study',
    servicesPageTitle: 'Featured Services',
    servicesPageCopy: 'Comprehensive IT solutions designed to support digital transformation and business growth in the modern era.',
    serviceMenuLabel: 'Applications',
    servicePricingTitle: 'Pricing Plans',
    servicePricingCopy: 'Choose a starting package that fits best. If you are not sure yet, Nexora can help guide you from your business needs.',
    otherServicesTitle: 'Other Services You Can Combine',
    otherServicesCopy: 'Beyond ready-to-use applications, Nexora can support consulting, system integration, workflow digitalization, and post-launch maintenance.',
    otherServicesCtaTitle: 'Not sure where to start?',
    otherServicesCtaCopy: 'Tell us your business problem first. The Nexora team will help suggest the most suitable and practical service to begin with.',
    pricingBasic: 'Basic',
    pricingProfessional: 'Professional',
    pricingEnterprise: 'Enterprise',
    pricingCustom: 'Custom',
    pricingMonthly: '/month',
    discussPlan: 'Ask About This Plan',
    contactUs: 'Request a Quote',
    discussProductScope: 'Tell Us Your Needs',
    customizeWorkflow: 'See Solution Examples',
    talkConsultant: 'Chat with Nexora Team',
    productsPageCopy: 'Products and solutions for MSMEs, retail, internal operations, and companies that need centralized systems.',
    productsCtaTitle: 'Not Sure Which System Fits?',
    productsCtaCopy: 'Tell us how your business works. We will help choose the most suitable and practical solution.',
    portfolioPageTitle: 'Featured Work',
    portfolioPageCopy: 'Real digital transformation across industries. Explore case studies on how we help companies achieve efficiency and scalability.',
    portfolioCtaTitle: 'Want Help Building a System Like This?',
    portfolioCtaCopy: 'We can help from understanding the problem, designing the workflow, to preparing the system for use.',
    visionTitle: 'To become Indonesia’s leading strategic Extended IT Partner that helps businesses achieve operational excellence, strong risk control, and sustainable growth through digital transformation with real impact.',
    missionTitle: 'Nexora Mission',
    missionCopy: 'Five core commitments in building technology solutions that create real business impact.',
    leadershipTitle: 'Strategy, technology, operations, and growth in one coordination flow.',
    leadershipCopy: 'This visual represents Nexora management as a coordination center between business decisions, technology architecture, project delivery, and market development.',
    industryPageTitle: 'Solutions for Multiple Industries',
    industryPageCopy: 'Every industry has different processes. We design systems that follow real workflows instead of forcing businesses to follow software.',
    industryPanelTitle: 'One platform mindset for many business processes.',
    industryPanelCopy: 'Nexora maps each industry need into connected systems, integrations, dashboards, workflows, and data layers.',
    industryCtaTitle: 'Does Your Business Have Its Own Workflow?',
    industryCtaCopy: 'We help turn manual processes into a cleaner system that is easier to monitor and ready to grow.',
    contactPageTitle: 'Contact Nexora Technology',
    contactPageCopy: 'Tell us your business problem or need. Nexora will help suggest the easiest next step.',
    contactTitle: 'Contact Us',
    contactCopy: 'Fill out the short form or contact us directly. You do not need to prepare technical documents first.',
    formName: 'Name',
    formNamePlaceholder: 'Your name',
    formCompany: 'Company',
    formCompanyPlaceholder: 'Company name',
    formService: 'Service',
    formUnknown: 'Not sure yet',
    formMessage: 'Message',
    formMessagePlaceholder: 'Example: I want cleaner stock tracking, automatic sales reports, or easier employee attendance.',
    formSubmit: 'Send Message',
    formThanks: 'Thank you',
    formFallbackName: 'there',
    formThanksCopy: 'The Nexora team will contact you soon.',
    contactPhone: 'Phone',
    contactAddress: 'Office Address',
    contactHours: 'Business Hours',
    openMaps: 'Open Location in Google Maps',
  },
};

const services = [
  {
    icon: 'code',
    title: 'Custom Software Development',
    copy: 'Jasa pembuatan aplikasi sesuai kebutuhan bisnis, mulai dari website company profile, web application, mobile application, dashboard internal, sistem operasional, portal customer/vendor/employee, sistem approval internal, hingga aplikasi custom sesuai flow bisnis client.',
    tags: ['Web App', 'Mobile App', 'Dashboard Internal'],
  },
  {
    icon: 'strategy',
    title: 'Strategic IT Consulting',
    copy: 'Jasa konsultasi untuk membantu perusahaan menentukan arah teknologi, termasuk IT roadmap, analisis kebutuhan sistem, digital transformation plan, business process improvement, technology architecture planning, pemilihan software, dan assessment sistem existing.',
    tags: ['IT Roadmap', 'Architecture', 'Assessment'],
  },
  {
    icon: 'api',
    title: 'Enterprise System Integration',
    copy: 'Jasa integrasi antar sistem supaya data tidak terpisah-pisah, seperti integrasi API, ERP, HRIS, Finance, CRM, middleware integration, single source of truth data, integrasi sistem lama dan baru, serta otomatisasi pertukaran data antar divisi.',
    tags: ['API Integration', 'ERP/HRIS/CRM', 'Middleware'],
  },
  {
    icon: 'sync_alt',
    title: 'Digital Transformation Services',
    copy: 'Jasa membantu bisnis yang masih manual agar berubah menjadi digital, termasuk digitalisasi proses kerja dari Excel, WhatsApp, atau proses manual, workflow approval digital, dashboard monitoring real-time, automasi laporan, tracking pekerjaan, notifikasi, dan reminder.',
    tags: ['Workflow Digital', 'Real-Time Dashboard', 'Automation'],
  },
  {
    icon: 'support_agent',
    title: 'Post-Launch Support / Managed Service',
    copy: 'Jasa maintenance setelah sistem selesai dibuat, mencakup maintenance aplikasi, bug fixing, monitoring server atau sistem, backup database, update fitur minor, support operasional, serta SLA support bulanan atau tahunan.',
    tags: ['Maintenance', 'Bug Fixing', 'SLA Support'],
  },
  {
    icon: 'security',
    title: 'IT Governance & Security',
    copy: 'Layanan tata kelola dan keamanan teknologi untuk transformasi yang aman dan terukur, termasuk security assessment, hardening aplikasi, role based access control, audit log system, data protection, SOP IT governance, dan risk mitigation system.',
    tags: ['Security Assessment', 'RBAC', 'Risk Mitigation'],
  },
];

const products = [
  {
    icon: 'hub',
    title: 'ERP / Business Management System',
    summary: 'Sistem untuk mengelola operasional bisnis secara terpusat.',
    features: ['Master data', 'Sales', 'Purchase', 'Inventory', 'Finance', 'Report', 'Approval', 'Dashboard owner'],
  },
  {
    icon: 'point_of_sale',
    title: 'POS System',
    summary: 'Aplikasi kasir untuk UMKM, toko, retail, cafe, dan bisnis penjualan.',
    features: ['Kasir', 'Produk', 'Stok', 'Cabang', 'Supplier', 'Customer', 'Laporan penjualan', 'Pembayaran', 'Diskon', 'Pajak'],
  },
  {
    icon: 'badge',
    title: 'HRIS / Employee Management',
    summary: 'Sistem untuk kebutuhan HR perusahaan.',
    features: ['Data karyawan', 'Absensi', 'Cuti', 'Payroll', 'Approval', 'Struktur organisasi', 'Kontrak kerja', 'Report HR'],
  },
  {
    icon: 'groups',
    title: 'CRM / Customer Management',
    summary: 'Sistem untuk mengelola customer dan sales pipeline.',
    features: ['Data customer', 'Lead management', 'Follow up sales', 'Pipeline deal', 'Reminder follow up', 'Riwayat komunikasi', 'Report sales'],
  },
  {
    icon: 'confirmation_number',
    title: 'Ticketing / Request Management System',
    summary: 'Sistem untuk pengajuan internal, keluhan, request, approval, dan tracking pekerjaan.',
    features: ['Buat ticket', 'Approval berjenjang', 'PIC pengerjaan', 'SLA', 'Komentar', 'Timeline progress', 'Notifikasi', 'Dashboard status'],
  },
  {
    icon: 'inventory',
    title: 'Procurement / Vendor Management',
    summary: 'Sistem untuk pengadaan barang dan pengelolaan vendor.',
    features: ['Purchase request', 'Approval pembelian', 'Vendor database', 'Quotation', 'Purchase order', 'Tracking pengadaan', 'Report procurement'],
  },
  {
    icon: 'qr_code_2',
    title: 'Asset Management System',
    summary: 'Sistem untuk tracking aset perusahaan.',
    features: ['Data aset', 'QR/barcode asset', 'Assignment ke user', 'Lokasi aset', 'Maintenance aset', 'Mutasi aset', 'Audit aset', 'Disposal aset'],
  },
  {
    icon: 'monitoring',
    title: 'Business Intelligence Dashboard',
    summary: 'Dashboard untuk monitoring data bisnis secara real-time.',
    features: ['Dashboard management', 'KPI monitoring', 'Grafik penjualan', 'Grafik operasional', 'Export report', 'Data analytics', 'Executive summary'],
  },
  {
    icon: 'language',
    title: 'Company Profile Website',
    summary: 'Website profesional untuk branding perusahaan.',
    features: ['Home', 'About', 'Services', 'Portfolio', 'Leadership', 'Contact', 'Maps', 'Form konsultasi', 'WhatsApp CTA'],
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Solution',
    summary: 'Aplikasi mobile untuk kebutuhan customer, employee, driver, sales, atau operasional lapangan.',
    features: ['Login user', 'Upload dokumen/foto', 'Tracking status', 'Notifikasi', 'Approval mobile', 'Form digital', 'Dashboard ringkas'],
  },
];

const ideologyValues = [
  {
    icon: 'verified_user',
    title: 'Integrity & Governance',
    copy: 'Solusi digital harus dibangun dengan tata kelola yang jelas, transparan, aman, dan dapat dipertanggungjawabkan.',
  },
  {
    icon: 'engineering',
    title: 'Engineering Excellence',
    copy: 'Kami mengutamakan arsitektur sistem yang rapi, scalable, mudah dirawat, dan siap berkembang mengikuti kebutuhan bisnis.',
  },
  {
    icon: 'tips_and_updates',
    title: 'Business-Driven Innovation',
    copy: 'Inovasi teknologi harus menjawab masalah bisnis nyata: efisiensi, kontrol, akurasi data, keamanan, dan pertumbuhan.',
  },
  {
    icon: 'task_alt',
    title: 'Operational Ownership',
    copy: 'Nexora hadir sebagai partner jangka panjang yang ikut memahami proses, risiko, dan kebutuhan operasional klien.',
  },
];

const playgroundPillars = [
  {
    icon: 'storefront',
    title: 'SaaS untuk UMKM',
    copy: 'POS, inventory, akuntansi sederhana, CRM ringan, absensi, dan dashboard bisnis untuk membantu operasional harian lebih tertata.',
  },
  {
    icon: 'developer_board',
    title: 'Produk Kustom',
    copy: 'Aplikasi web, mobile, ERP, workflow system, dashboard BI, API, backend, dan sistem enterprise yang dibangun sesuai flow bisnis.',
  },
  {
    icon: 'forum',
    title: 'IT Consulting, Training & Discussion',
    copy: 'Roadmap transformasi digital, onboarding sistem, data analytics, automation, governance, dan cyber security dasar.',
  },
];

const capabilities = [
  'Software Engineering',
  'Backend Development',
  'Full-Stack Development',
  'Project Management',
  'R&D Technology',
  'IT Specialist',
  'Sales & Business Development',
  'Financial Management',
  'Organizational Governance',
  'Digital Design',
  'Business Process',
];

const techStack = [
  'Laravel',
  '.NET',
  'Golang',
  'Node.js',
  'Python',
  'SQL Server',
  'PostgreSQL',
  'MongoDB',
  'Power BI',
  'ETL',
  'API Integration',
  'Odoo ERP',
];

const coverageModels = ['Onsite', 'Remote', 'Hybrid', 'Project-Based'];

const whyNexora = [
  { icon: 'business_center', text: 'Business-driven, bukan hanya coding.' },
  { icon: 'security', text: 'Sistem aman, scalable, dan mudah dikembangkan.' },
  { icon: 'route', text: 'Pendekatan end-to-end dari analisis sampai support.' },
  { icon: 'storefront', text: 'Cocok untuk UMKM sampai enterprise.' },
  { icon: 'visibility', text: 'Transparan dalam progress, scope, dan delivery.' },
];

const serviceEnglish = [
  {
    copy: 'Custom application development based on business needs, from company profile websites, web applications, mobile apps, internal dashboards, operational systems, customer/vendor/employee portals, internal approval systems, to custom apps that follow client business flows.',
  },
  {
    copy: 'Technology consulting to help companies define direction, including IT roadmaps, system requirement analysis, digital transformation planning, business process improvement, technology architecture planning, software selection, and existing system assessment.',
  },
  {
    copy: 'System integration services so data is no longer scattered, including API integration, ERP, HRIS, Finance, CRM, middleware, single source of truth data, legacy-to-new system integration, and automated data exchange across divisions.',
  },
  {
    copy: 'Helping manual businesses become digital through Excel, WhatsApp, or manual process digitalization, digital approval workflows, real-time monitoring dashboards, report automation, job tracking, notifications, and reminders.',
  },
  {
    copy: 'Post-launch maintenance services, including application maintenance, bug fixing, server or system monitoring, database backup, minor feature updates, operational support, and monthly or annual SLA support.',
  },
  {
    copy: 'Technology governance and security services for safe and measurable transformation, including security assessment, application hardening, role-based access control, audit logs, data protection, IT governance SOPs, and risk mitigation systems.',
  },
];

const productEnglish = [
  { summary: 'A centralized system to manage business operations.', features: ['Master data', 'Sales', 'Purchase', 'Inventory', 'Finance', 'Report', 'Approval', 'Owner dashboard'] },
  { summary: 'Cashier application for MSMEs, stores, retail, cafes, and sales-based businesses.', features: ['Cashier', 'Products', 'Stock', 'Branches', 'Suppliers', 'Customers', 'Sales reports', 'Payments', 'Discounts', 'Tax'] },
  { summary: 'A system for company HR needs.', features: ['Employee data', 'Attendance', 'Leave', 'Payroll', 'Approval', 'Organization structure', 'Employment contracts', 'HR reports'] },
  { summary: 'A system to manage customers and sales pipelines.', features: ['Customer data', 'Lead management', 'Sales follow-up', 'Deal pipeline', 'Follow-up reminders', 'Communication history', 'Sales reports'] },
  { summary: 'A system for internal requests, complaints, approvals, and work tracking.', features: ['Create tickets', 'Multi-level approval', 'PIC assignment', 'SLA', 'Comments', 'Progress timeline', 'Notifications', 'Status dashboard'] },
  { summary: 'A system for procurement and vendor management.', features: ['Purchase request', 'Purchase approval', 'Vendor database', 'Quotation', 'Purchase order', 'Procurement tracking', 'Procurement report'] },
  { summary: 'A system for tracking company assets.', features: ['Asset data', 'QR/barcode asset', 'User assignment', 'Asset location', 'Asset maintenance', 'Asset transfer', 'Asset audit', 'Asset disposal'] },
  { summary: 'A dashboard for real-time business data monitoring.', features: ['Management dashboard', 'KPI monitoring', 'Sales charts', 'Operational charts', 'Export reports', 'Data analytics', 'Executive summary'] },
  { summary: 'A professional website for company branding.', features: ['Home', 'About', 'Services', 'Portfolio', 'Leadership', 'Contact', 'Maps', 'Consultation form', 'WhatsApp CTA'] },
  { summary: 'Mobile applications for customers, employees, drivers, sales teams, or field operations.', features: ['User login', 'Document/photo upload', 'Status tracking', 'Notifications', 'Mobile approval', 'Digital forms', 'Compact dashboard'] },
];

const serviceApplications = [
  {
    title: 'HRIS',
    subtitle: 'Human Resources Information System',
    image: '/hris.png',
    copy: {
      id: 'Sistem HR untuk mengelola data karyawan, absensi, cuti, approval, payroll, kontrak kerja, dan laporan HR dalam satu dashboard.',
      en: 'An HR system for managing employee data, attendance, leave, approvals, payroll, employment contracts, and HR reports in one dashboard.',
    },
    tags: ['Employee Data', 'Attendance', 'Payroll'],
  },
  {
    title: 'Accounting',
    subtitle: 'Finance & Accounting System',
    image: '/moneyku.png',
    copy: {
      id: 'Solusi pembukuan, pencatatan transaksi, invoice, laporan keuangan, dan monitoring cashflow untuk operasional bisnis yang lebih rapi.',
      en: 'A solution for bookkeeping, transaction records, invoices, financial reports, and cashflow monitoring for cleaner business operations.',
    },
    tags: ['Invoice', 'Cashflow', 'Report'],
  },
  {
    title: 'CRM',
    subtitle: 'Customer Relationship Management',
    image: '/bisa-platform.png',
    copy: {
      id: 'Sistem untuk mengelola data customer, lead pipeline, follow-up sales, reminder, histori komunikasi, dan laporan performa sales.',
      en: 'A system to manage customer data, lead pipelines, sales follow-ups, reminders, communication history, and sales performance reports.',
    },
    tags: ['Lead Pipeline', 'Follow Up', 'Sales Report'],
  },
  {
    title: 'Project Management',
    subtitle: 'Task, Workflow & Team Tracking',
    image: '/sop.png',
    copy: {
      id: 'Platform untuk mengatur task, timeline, PIC, approval, progress pekerjaan, dokumentasi, dan monitoring delivery proyek.',
      en: 'A platform for managing tasks, timelines, PIC assignments, approvals, work progress, documentation, and project delivery monitoring.',
    },
    tags: ['Task', 'Timeline', 'Approval'],
  },
  {
    title: 'POS',
    subtitle: 'Point of Sales System',
    image: '/pasabar.png',
    copy: {
      id: 'Aplikasi kasir untuk toko, retail, cafe, dan UMKM dengan fitur produk, stok, cabang, pembayaran, diskon, pajak, dan laporan penjualan.',
      en: 'A cashier app for stores, retail, cafes, and MSMEs with product, stock, branch, payment, discount, tax, and sales report features.',
    },
    tags: ['Kasir', 'Stock', 'Sales'],
  },
  {
    title: 'Mobile App (OCR)',
    subtitle: 'Mobile Capture & Document Automation',
    image: '/all role ai.png',
    copy: {
      id: 'Aplikasi mobile untuk upload foto/dokumen, ekstraksi data OCR, validasi dokumen, tracking status, dan approval mobile.',
      en: 'A mobile app for photo/document upload, OCR data extraction, document validation, status tracking, and mobile approval.',
    },
    tags: ['OCR', 'Upload', 'Approval'],
  },
  {
    title: 'Aplikasi Kasir',
    subtitle: 'Retail Cashier Application',
    image: '/gmm.png',
    copy: {
      id: 'Sistem kasir praktis untuk operasional penjualan harian, manajemen produk, pembayaran, stok, dan laporan sederhana.',
      en: 'A practical cashier system for daily sales operations, product management, payments, stock, and simple reports.',
    },
    tags: ['Retail', 'Payment', 'Stock'],
  },
];

const ideologyEnglish = [
  'Digital solutions must be built with clear, transparent, secure, and accountable governance.',
  'We prioritize clean, scalable, maintainable system architecture that is ready to evolve with business needs.',
  'Technology innovation must solve real business problems: efficiency, control, data accuracy, security, and growth.',
  'Nexora acts as a long-term partner that understands client processes, risks, and operational needs.',
];

const playgroundEnglish = [
  'POS, inventory, simple accounting, lightweight CRM, attendance, and business dashboards to make daily operations more organized.',
  'Web apps, mobile apps, ERP, workflow systems, BI dashboards, APIs, backend, and enterprise systems built around real business flows.',
  'Digital transformation roadmaps, system onboarding, data analytics, automation, governance, and basic cyber security.',
];

const whyNexoraEnglish = [
  'Business-driven, not only coding.',
  'Secure, scalable, and easy-to-evolve systems.',
  'End-to-end approach from analysis to support.',
  'Suitable for MSMEs to enterprises.',
  'Transparent progress, scope, and delivery.',
];

const missionEnglish = [
  {
    title: 'Custom Solutions Aligned With Business',
    copy: 'Building adaptive custom technology solutions aligned with business objectives and client internal governance.',
  },
  {
    title: 'Business Process Digitalization',
    copy: 'Optimizing business processes through effective digitalization to minimize financial leakage risk and improve daily productivity.',
  },
  {
    title: 'Secure and Scalable Architecture',
    copy: 'Providing secure, reliable, scalable information system architecture ready to grow with long-term business needs.',
  },
  {
    title: 'Consulting and Accurate Data',
    copy: 'Providing strategic consulting, continuous technical assistance, and accurate data to help management make faster and better decisions.',
  },
  {
    title: 'Digital Ecosystem Catalyst',
    copy: 'Becoming a catalyst in creating a more transparent, innovative, competitive, and high-value Indonesian digital industry ecosystem.',
  },
];

const portfolioEnglish = [
  { title: 'Core Banking System Modernization', copy: 'Rebuilding monolithic architecture into microservices to improve transaction throughput and reduce downtime.' },
  { title: 'National-Scale Telemedicine App', copy: 'A teleconsultation application with secure, fast, and easy-to-use electronic medical record integration.' },
  { title: 'AI-Based Fleet Management System', copy: 'Route optimization and real-time tracking for logistics companies with complex operational needs.' },
  { title: 'Enterprise E-Commerce Platform', copy: 'A headless e-commerce platform capable of handling high traffic and integrated with ERP/POS.' },
];

const industryEnglish = [
  ['account_balance', 'Fintech & Banking', 'Payment integration, risk dashboards, core system modernization, and secure financial APIs.'],
  ['local_hospital', 'Healthcare', 'Clinic systems, telemedicine, EMR, and data-driven healthcare service integration.'],
  ['local_shipping', 'Logistics', 'Fleet tracking, route optimization, warehouse management, and operational automation.'],
  ['storefront', 'Retail & E-Commerce', 'Online store platforms, inventory, loyalty, and ERP/POS integration.'],
  ['factory', 'Manufacturing', 'Production monitoring, quality control, maintenance, and operational dashboards.'],
  ['school', 'Education', 'Learning management systems, academic portals, and learning performance dashboards.'],
];

function localText(value, language) {
  return typeof value === 'object' && value !== null ? value[language] || value.id : value;
}

const missions = [
  {
    icon: 'target',
    title: 'Solusi Kustom yang Selaras Bisnis',
    copy: 'Membangun solusi teknologi kustom yang adaptif dan selaras dengan tujuan bisnis serta tata kelola internal klien.',
  },
  {
    icon: 'account_tree',
    title: 'Digitalisasi Proses Bisnis',
    copy: 'Mengoptimalkan proses bisnis melalui digitalisasi yang efektif untuk meminimalkan risiko kebocoran finansial dan meningkatkan produktivitas harian.',
  },
  {
    icon: 'shield_lock',
    title: 'Arsitektur Aman dan Scalable',
    copy: 'Menyediakan arsitektur sistem informasi yang aman, andal, scalable, dan siap dikembangkan mengikuti pertumbuhan bisnis jangka panjang.',
  },
  {
    icon: 'query_stats',
    title: 'Konsultasi dan Data Akurat',
    copy: 'Memberikan konsultasi strategis, pendampingan teknis berkelanjutan, serta data akurat untuk membantu manajemen mengambil keputusan secara cepat dan tepat.',
  },
  {
    icon: 'trending_up',
    title: 'Katalis Ekosistem Digital',
    copy: 'Menjadi katalisator dalam menciptakan ekosistem industri digital Indonesia yang lebih transparan, inovatif, kompetitif, dan bernilai tinggi.',
  },
];

const portfolios = [
  {
    category: 'Project yang Pernah Dikerjakan',
    icon: 'precision_manufacturing',
    result: 'Operasional mining lebih terintegrasi',
    image: '/bisa-platform.png',
    tags: ['ERP Mining', 'End-to-End System'],
    title: 'ERP Mining End-to-End',
    copy: 'Sistem ERP untuk kebutuhan operasional mining dari proses bisnis, data, approval, reporting, hingga monitoring end-to-end.',
  },
  {
    category: 'Project yang Pernah Dikerjakan',
    icon: 'school',
    result: 'Belajar coding lebih terstruktur',
    image: '/foto-berkemah.png',
    tags: ['LMS', 'Coding Platform'],
    title: 'LMS Coding Learning Platform',
    copy: 'Platform pembelajaran coding dengan materi, kelas, progress belajar, dan pengalaman belajar digital yang lebih rapi.',
  },
  {
    category: 'Project yang Pernah Dikerjakan',
    icon: 'local_hospital',
    result: 'Layanan hospital lebih mudah dikelola',
    image: '/gmm.png',
    tags: ['Hospital Web', 'Healthcare'],
    title: 'Hospital Web Application',
    copy: 'Aplikasi web untuk kebutuhan hospital dengan tampilan informatif, proses layanan yang lebih mudah, dan pengelolaan data yang tertata.',
  },
  {
    category: 'Project yang Pernah Dikerjakan',
    icon: 'work',
    result: 'Rekrutmen lebih mudah dipantau',
    image: '/andalan-karir.jpg',
    tags: ['Career Site', 'Recruitment'],
    title: 'Andalan Career Website',
    copy: 'Website karir untuk Andalan yang membantu publikasi lowongan, employer branding, dan proses rekrutmen berjalan lebih profesional.',
  },
  {
    category: 'Project yang Pernah Dikerjakan',
    icon: 'dynamic_form',
    result: 'Form internal lebih fleksibel',
    image: '/ticketing-andalan.png',
    tags: ['Form Builder', 'Ticketing'],
    title: 'Andalan Form Builder & Ticketing',
    copy: 'Sistem form builder dan ticketing untuk mendukung pengajuan, tracking, dan pengelolaan request internal secara digital.',
  },
  {
    category: 'Project yang Pernah Dikerjakan',
    icon: 'local_shipping',
    result: 'Proses shipping cargo lebih terpantau',
    image: '/cargo-gate.png',
    tags: ['Shipping Cargo', 'Logistics System'],
    title: 'Cargo Gate Shipping Application',
    copy: 'Aplikasi shipping cargo untuk membantu pencatatan pengiriman, tracking status, dan pengelolaan proses cargo secara lebih rapi.',
  },
  {
    category: 'Product',
    icon: 'badge',
    result: 'Data HR lebih terpusat',
    image: '/hris.png',
    tags: ['HRIS', 'Employee Management'],
    title: 'HRIS Product',
    copy: 'Produk HRIS untuk mengelola data karyawan, absensi, cuti, payroll, approval, kontrak kerja, dan laporan HR dalam satu sistem.',
  },
  {
    category: 'Product',
    icon: 'account_balance_wallet',
    result: 'Keuangan lebih mudah dipantau',
    image: '/moneyku.png',
    tags: ['Finance App', 'Reporting'],
    title: 'Moneyku Finance Application',
    copy: 'Aplikasi keuangan untuk membantu pencatatan, monitoring, dan pelaporan finansial agar lebih praktis dan mudah dibaca.',
  },
  {
    category: 'Product',
    icon: 'receipt_long',
    result: 'Perhitungan pajak lebih praktis',
    image: '/hitung-pajak.png',
    tags: ['Tax Calculator', 'Finance Tools'],
    title: 'Hitung Pajak Application',
    copy: 'Aplikasi untuk menghitung berbagai jenis pajak sehingga proses estimasi, simulasi, dan rekap pajak lebih mudah dilakukan.',
  },
  {
    category: 'Product',
    icon: 'point_of_sale',
    result: 'Penjualan toko lebih rapi',
    image: '/POS.png',
    tags: ['Point of Sale', 'Retail'],
    title: 'Point of Sale Application',
    copy: 'Aplikasi POS untuk transaksi kasir, produk, stok, pembayaran, diskon, pajak, dan laporan penjualan harian.',
  },
  {
    category: 'Product',
    icon: 'account_tree',
    result: 'SOP lebih mudah diikuti',
    image: '/sop.png',
    tags: ['SOP App', 'Workflow'],
    title: 'SOP Management Application',
    copy: 'Aplikasi SOP untuk membantu perusahaan menyusun, mengelola, dan mendistribusikan prosedur kerja secara digital.',
  },
  {
    category: 'Company Profile',
    icon: 'travel_explore',
    result: 'Brand wisata lebih mudah ditemukan',
    image: '/pasabar.png',
    tags: ['Company Profile', 'Tourism'],
    title: 'Pasabar Tourism Company Profile',
    copy: 'Website company profile untuk kebutuhan wisata dengan tampilan informatif, visual destination, dan jalur kontak yang jelas.',
  },
];

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan proyek?',
    answer: 'Waktu pengerjaan bergantung pada kompleksitas. Website standar biasanya 2-4 minggu, sedangkan sistem kustom kompleks bisa 2-6 bulan.',
  },
  {
    question: 'Apakah ada layanan maintenance setelah proyek selesai?',
    answer: 'Ada. Kami menyediakan pemeliharaan, monitoring, update keamanan, backup, dan pengembangan fitur lanjutan.',
  },
  {
    question: 'Teknologi apa saja yang digunakan Nexora?',
    answer: 'Kami memakai teknologi modern seperti React, Node.js, Go, Python, PostgreSQL, cloud infrastructure, Docker, dan CI/CD.',
  },
  {
    question: 'Apakah bisa integrasi dengan sistem lama?',
    answer: 'Bisa. Kami bisa membuat API bridge, migrasi data bertahap, dan integrasi tanpa mengganggu operasional utama.',
  },
];

const teamMembers = [
  {
    name: 'Fannii Aulia Havid',
    role: 'Chief Executive Officer / CEO',
    photo: '/fanni-nexora.jpg',
    expertise: {
      id: 'Berpengalaman di bidang financial management, organizational governance, dan strategic partnership development. Memimpin arah strategis, pertumbuhan bisnis, visi komersial, dan pengambilan keputusan perusahaan.',
      en: 'Experienced in financial management, organizational governance, and strategic partnership development. Leads the company strategy, business growth, commercial vision, and executive decision-making.',
    },
  },
  {
    name: 'Raul Mahya Komaran',
    role: 'Chief Technology Officer / CTO',
    photo: '/raul-nexora.jpg',
    expertise: {
      id: 'Background di Informatics Engineering dan sedang menempuh Master of Computer Science. Berpengalaman sebagai Backend Developer, Full-Stack Developer, Software Engineer, Project Manager, R&D Specialist, dan IT Specialist. Menguasai Laravel, .NET, Golang, Node.js, Python, SQL Server, PostgreSQL, MongoDB, Power BI, ETL, dan Odoo ERP.',
      en: 'Background in Informatics Engineering and currently pursuing a Master of Computer Science. Experienced as a Backend Developer, Full-Stack Developer, Software Engineer, Project Manager, R&D Specialist, and IT Specialist. Skilled in Laravel, .NET, Golang, Node.js, Python, SQL Server, PostgreSQL, MongoDB, Power BI, ETL, and Odoo ERP.',
    },
  },
  {
    name: 'Rinaldy Gunawan',
    role: 'Chief Operating Officer / COO',
    photo: '/rei-nexora.jpg',
    expertise: {
      id: 'Memiliki keahlian di bidang technology engineering dan user-centric digital design. Bertanggung jawab mengatur operasional perusahaan, workflow proyek, koordinasi tim IT dan kreatif, kualitas delivery, serta ketepatan implementasi proyek.',
      en: 'Skilled in technology engineering and user-centric digital design. Responsible for company operations, project workflows, IT and creative team coordination, delivery quality, and implementation accuracy.',
    },
  },
  {
    name: 'M. Giffari Havid',
    role: 'Head of Sales & Business Development',
    photo: '/ghifari-nexora.jpg',
    expertise: {
      id: 'Background Sarjana Ekonomi dengan pengalaman lebih dari 12 tahun di bidang sales dan business development. Fokus pada strategi penetrasi pasar, komersialisasi produk, hubungan kemitraan jangka panjang, dan analisis kelayakan investasi teknologi.',
      en: 'Economics background with more than 12 years of experience in sales and business development. Focuses on market penetration strategy, product commercialization, long-term partnerships, and technology investment feasibility analysis.',
    },
  },
];

const functionalTeams = [
  {
    name: 'Dev Team',
    icon: 'terminal',
    role: {
      id: 'Tim pengembangan sistem, aplikasi, backend, frontend, integrasi, dan maintenance teknis. Di struktur tertulis 5 freelance.',
      en: 'System, application, backend, frontend, integration, and technical maintenance team. The structure includes 5 freelance members.',
    },
  },
  {
    name: 'Finance',
    icon: 'payments',
    role: {
      id: 'Mengelola kebutuhan keuangan, pembayaran, budgeting, invoice, dan administrasi finansial.',
      en: 'Manages finance needs, payments, budgeting, invoices, and financial administration.',
    },
  },
  {
    name: 'HR & Admin',
    icon: 'badge',
    role: {
      id: 'Mengelola administrasi internal, data tim, kebutuhan SDM, dan support operasional.',
      en: 'Manages internal administration, team data, HR needs, and operational support.',
    },
  },
  {
    name: 'Sales Reps',
    icon: 'handshake',
    role: {
      id: 'Tim sales lapangan/representatif untuk mencari peluang, pendekatan klien, follow-up, dan membantu proses deal. Di struktur tertulis 6 freelance.',
      en: 'Field sales representatives who find opportunities, approach clients, follow up, and support deal processes. The structure includes 6 freelance members.',
    },
  },
  {
    name: 'Marketing',
    icon: 'campaign',
    role: {
      id: 'Mengelola strategi pemasaran, konten brand, campaign digital, materi promosi, dan awareness Nexora di berbagai kanal.',
      en: 'Manages marketing strategy, brand content, digital campaigns, promotional materials, and Nexora awareness across channels.',
    },
  },
];

const contact = {
  company: 'Nexora Teknologi',
  email: 'ITConsultant@nexora-technology.id',
  phone: '+62 21 1234 5678',
  whatsapp: '+62 851-7700-0356',
  address: 'Jl. Depok 7 No. 16, Bandung, Jawa Barat',
  hours: 'Senin - Jumat, 09.00 - 18.00 WIB',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nexora%20Teknologi%20Jl.%20Depok%207%20No.%2016%20Bandung',
};

const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0);
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return progress;
}

function useScrollReveal(pathname) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal'));

    items.forEach((item, index) => {
      item.classList.remove('is-visible');
      item.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 55}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);
}

function useInteractiveCards(pathname) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.card, .interactive-card, .button, .btn'));

    function handleMove(event) {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty('--mx', `${x.toFixed(2)}%`);
      target.style.setProperty('--my', `${y.toFixed(2)}%`);
    }

    targets.forEach((target) => target.addEventListener('pointermove', handleMove));
    return () => targets.forEach((target) => target.removeEventListener('pointermove', handleMove));
  }, [pathname]);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('nexora-language') || 'id');
  const location = useLocation();
  const text = copy[language];
  const scrollProgress = useScrollProgress();

  useScrollReveal(location.pathname);
  useInteractiveCards(location.pathname);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('nexora-language', language);
  }, [language]);

  return (
    <div className="site-shell">
      <Navbar
        language={language}
        menuOpen={menuOpen}
        onLanguageChange={setLanguage}
        onToggle={() => setMenuOpen((value) => !value)}
        text={text}
      />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage language={language} text={text} />} />
          <Route path="/about" element={<AboutPage language={language} text={text} />} />
          <Route path="/services" element={<ServicesPage language={language} text={text} />} />
          <Route path="/products" element={<ProductsPage language={language} text={text} />} />
          <Route path="/portfolio" element={<PortfolioPage language={language} text={text} />} />
          <Route path="/industry" element={<IndustryPage language={language} text={text} />} />
          <Route path="/contact" element={<ContactPage language={language} text={text} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage text={text} />} />
        </Routes>
      </main>
      <Footer language={language} text={text} />
    </div>
  );
}

function Navbar({ language, menuOpen, onLanguageChange, onToggle, text }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <img className="brand-logo" src="/logonexora-navbar.png" alt="Nexora Technology" />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((item) => (
            <NavLink key={item.path} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} to={item.path}>
              {item.label[language]}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="language-toggle" aria-label="Pilih bahasa">
            {['id', 'en'].map((item) => (
              <button
                className={language === item ? 'is-active' : ''}
                key={item}
                type="button"
                onClick={() => onLanguageChange(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">{text.cta}</a>
          <button className="menu-toggle" type="button" aria-label={text.openMenu} onClick={onToggle}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage({ language, text }) {
  const [patternStyle, setPatternStyle] = useState({});

  function onHeroMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    setPatternStyle({
      '--hero-pattern-x': `${x.toFixed(2)}px`,
      '--hero-pattern-y': `${y.toFixed(2)}px`,
    });
  }

  return (
    <>
      <section
        className="hero"
        style={patternStyle}
        onPointerMove={onHeroMove}
        onPointerLeave={() => setPatternStyle({})}
      >
        <AbstractPattern className="hero-line-pattern" />
        <div className="container hero-grid">
          <div className="reveal is-visible">
            <span className="eyebrow">{text.homeHeroKicker}</span>
            <h1 className="hero-title">{text.homeHeroTitle}</h1>
            <p className="hero-copy">{text.homeHeroCopy}</p>
            <div className="hero-actions">
              <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">{text.consultNow}</a>
              <Link className="button secondary" to="/services">{text.viewServices}</Link>
            </div>
          </div>
          <div className="hero-visual reveal is-visible">
            <Suspense fallback={<div className="network-orb network-orb-fallback" aria-hidden="true" />}>
              <NetworkOrb />
            </Suspense>
            <DashboardMockup />
          </div>
        </div>
      </section>

      <IdeologySection language={language} text={text} />
      <PlaygroundSection language={language} text={text} />
      <ExperienceSection text={text} />
      <CoverageSection text={text} />
      <WhyNexoraSection language={language} text={text} />
      <ServicesPreview language={language} text={text} />
      <ProductsPreview language={language} text={text} />
      <PortfolioPreview language={language} text={text} />
      <Cta
        title={language === 'en' ? 'Ready to Make Your Work Easier?' : 'Siap Bikin Kerja Bisnis Lebih Mudah?'}
        copy={language === 'en' ? 'Tell us what still feels manual or messy. Nexora will help map the simplest next step.' : 'Ceritakan bagian kerja yang masih manual atau berantakan. Nexora bantu petakan langkah paling mudah untuk mulai.'}
        buttonLabel={text.cta}
      />
    </>
  );
}

function DashboardMockup() {
  const [style, setStyle] = useState({});

  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `rotateX(${y * -7}deg) rotateY(${x * 7}deg)` });
  }

  return (
    <div className="dashboard-card reveal is-visible" style={style} onPointerMove={onMove} onPointerLeave={() => setStyle({})}>
      <div className="mock-window">
        <div className="mock-bar"><span /><span /><span /></div>
        <div className="mock-body">
          <div className="mock-sidebar"><i /><i /><i /><i /></div>
          <div className="mock-panel">
            <div className="chart">
              <svg viewBox="0 0 420 160" aria-hidden="true">
                <polyline fill="none" stroke="#0067bd" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" points="8,126 72,98 132,112 190,64 252,84 320,38 410,58" />
                <polyline fill="none" stroke="#a6c8ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" points="8,142 78,130 140,136 210,105 280,116 350,86 410,94" />
              </svg>
            </div>
            <div className="metric-grid">
              <Metric value="400%" label="Throughput" />
              <Metric value="99%" label="Uptime" />
              <Metric value="24/7" label="Support" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AbstractPattern({ className = '' }) {
  return (
    <svg className={`line-pattern ${className}`} viewBox="0 0 520 420" fill="none" aria-hidden="true">
      <g className="pattern-layer pattern-layer-back">
        <PatternPaths />
      </g>
      <g className="pattern-layer pattern-layer-front">
        <PatternPaths />
      </g>
    </svg>
  );
}

function PatternPaths() {
  return (
    <>
      <path d="M32 334C83 266 143 269 190 210C239 149 225 72 296 50C374 25 453 80 485 148C523 230 463 310 394 337C320 366 269 316 205 336C139 357 108 407 32 334Z" />
      <path d="M70 314C112 259 162 258 201 208C241 157 232 94 292 75C355 55 420 101 448 157C479 224 431 289 374 313C313 339 270 296 216 314C163 332 134 370 70 314Z" />
      <path d="M108 293C142 251 181 247 211 206C243 163 238 115 287 99C337 83 389 120 412 165C436 218 399 269 354 289C305 310 271 276 226 291C185 305 161 333 108 293Z" />
      <path d="M147 270C172 241 198 234 222 204C246 174 243 136 282 123C320 110 359 139 376 173C394 212 368 248 334 264C298 281 273 256 237 267C207 276 187 295 147 270Z" />
      <path d="M186 246C204 229 215 220 232 202C249 184 250 157 276 148C302 140 329 157 342 181C355 208 338 230 314 241C288 253 273 238 248 244C226 250 210 260 186 246Z" />
    </>
  );
}

function Metric({ value, label }) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span></div>;
}

function IdeologySection({ language, text }) {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <div className="section-head reveal is-visible">
          <span className="eyebrow">Nexora Mindset</span>
          <h2 className="section-title">{text.ideologyTitle}</h2>
          <p className="section-copy">{text.ideologyCopy}</p>
        </div>
        <div className="grid four">
          {ideologyValues.map((item, index) => (
            <article className="card value-card reveal is-visible" key={item.title}>
              <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
              <h3>{item.title}</h3>
              <p>{language === 'en' ? ideologyEnglish[index] : item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaygroundSection({ language, text }) {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title={text.playgroundTitle} copy={text.playgroundCopy} />
        <div className="grid three">
          {playgroundPillars.map((item, index) => (
            <article className="card pillar-card reveal is-visible" key={item.title}>
              <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
              <h3>{item.title}</h3>
              <p>{language === 'en' ? playgroundEnglish[index] : item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ text }) {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <div className="experience-grid">
          <div className="section-head left reveal is-visible">
            <span className="eyebrow">Experience & Capability</span>
            <h2 className="section-title">{text.experienceTitle}</h2>
            <p className="section-copy">{text.experienceCopy}</p>
          </div>
          <div className="tech-panel reveal is-visible">
            <h3>{text.techHighlight}</h3>
            <div className="tech-tags">{techStack.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card reveal is-visible" key={item}>
              <span className="material-symbols-outlined">check_circle</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverageSection({ text }) {
  return (
      <section className="section alt pattern-section">
        <AbstractPattern className="services-line-pattern" />
        <div className="container coverage-grid">
          <div className="coverage-map reveal is-visible" aria-hidden="true">
            <iframe
              title="Cakupan layanan Nexora di Indonesia"
              src="https://www.google.com/maps?q=Indonesia&z=5&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="map-label google-map-link" href="https://www.google.com/maps/place/Indonesia" target="_blank" rel="noreferrer">
              {text.openMaps}
            </a>
          </div>
        <div className="reveal is-visible">
          <span className="eyebrow">Coverage</span>
          <h2 className="section-title">{text.coverageTitle}</h2>
          <p className="section-copy">{text.coverageCopyOne}</p>
          <p className="section-copy">{text.coverageCopyTwo}</p>
          <div className="coverage-models">{coverageModels.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function WhyNexoraSection({ language, text }) {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <SectionHead title={text.whyTitle} copy={text.whyCopy} />
        <div className="grid five why-nexora-grid">
          {whyNexora.map((item, index) => (
            <article className="card why-nexora-card reveal is-visible" key={item.text}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <p>{language === 'en' ? whyNexoraEnglish[index] : item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsCard() {
  return (
    <div className="stats-card reveal is-visible">
      <Stat value="50+" label="Proyek Selesai" />
      <Stat value="99%" label="Klien Puas" />
      <Stat value="24/7" label="Dukungan" />
      <Stat value="5+" label="Tahun Pengalaman" />
    </div>
  );
}

function Stat({ value, label }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const match = String(value).match(/^(\d+)(.*)$/);
    if (!match || value.includes('/')) {
      setDisplayValue(value);
      return undefined;
    }

    const target = Number(match[1]);
    const suffix = match[2] || '';
    const node = ref.current;
    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const duration = 1100;

      function tick(now) {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(`${Math.round(target * eased)}${suffix}`);
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      }

      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.4 });

    if (node) observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <div className="stat" ref={ref}><strong>{displayValue}</strong><span>{label}</span></div>;
}

function ServicesPreview({ language, text }) {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title={text.servicesPreviewTitle} copy={text.servicesPreviewCopy} />
        <div className="services-showcase compact">
          <ServiceApplicationShowcase language={language} text={text} />
          <div className="grid three service-mini-grid">
            {services.slice(0, 3).map((item, index) => <ServiceCard key={item.title} item={item} index={index} language={language} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview({ language, text }) {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <SectionHead title="Products / Solutions" copy={text.productsPreviewCopy} />
        <div className="grid three">{products.slice(0, 6).map((item, index) => <ProductCard item={item} index={index} language={language} compact key={item.title} />)}</div>
        <div className="section-action">
          <Link className="button secondary" to="/products">{text.viewAllProducts}</Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, index = 0, language = 'id', compact = false }) {
  const translated = language === 'en' ? productEnglish[index] : null;
  const features = translated?.features || item.features;
  const shownFeatures = compact ? features.slice(0, 4) : features;

  return (
    <article className="card product-card reveal is-visible">
      <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
      <h3>{item.title}</h3>
      <p>{translated?.summary || item.summary}</p>
      <ul className="feature-list">
        {shownFeatures.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
    </article>
  );
}

function ServiceCard({ item, index = 0, language = 'id' }) {
  const translated = language === 'en' ? serviceEnglish[index] : null;
  return (
    <article className="card reveal is-visible">
      <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
      <h3>{item.title}</h3>
      <p>{translated?.copy || item.copy}</p>
      <Tags items={item.tags} />
    </article>
  );
}

function Tags({ items }) {
  return <div className="tags">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>;
}

function WhySection() {
  const values = [
    ['rocket_launch', 'Cepat & Tanggap', 'Pengembangan gesit tanpa mengorbankan kualitas.'],
    ['verified_user', 'Aman & Andal', 'Keamanan data dan stabilitas sistem menjadi prioritas.'],
    ['groups', 'Tim Ahli', 'Didukung profesional IT berpengalaman.'],
    ['trending_up', 'Scalable', 'Sistem tumbuh mengikuti skala bisnis Anda.'],
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHead title="Mengapa Memilih Kami?" />
        <div className="grid four">
          {values.map(([icon, title, copy]) => (
            <article className="why-card reveal is-visible" key={title}>
              <div className="icon-box"><span className="material-symbols-outlined">{icon}</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview({ language, text }) {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title={text.portfolioPreviewTitle} copy={text.portfolioPreviewCopy} />
        <div className="grid three">{portfolios.slice(0, 3).map((item, index) => <PortfolioCard item={item} index={index} language={language} text={text} key={item.title} />)}</div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index = 0, language = 'id', text = copy.id }) {
  const translated = language === 'en' ? portfolioEnglish[index] : null;
  return (
    <article className="card portfolio-card reveal is-visible">
      <div className="portfolio-image">
        <img src={item.image} alt={translated?.title || item.title} loading="lazy" />
        <span className="portfolio-category"><span className="material-symbols-outlined">{item.icon || 'work'}</span>{item.category}</span>
      </div>
      <div className="portfolio-content">
        <Tags items={item.tags} />
        <h3>{translated?.title || item.title}</h3>
        <p>{translated?.copy || item.copy}</p>
        <div className="portfolio-result">
          <span className="material-symbols-outlined">trending_up</span>
          <strong>{language === 'en' ? 'Impact' : 'Dampak'}</strong>
          <span>{item.result}</span>
        </div>
        <Link className="link-arrow" to="/portfolio">{text.caseStudy} <span className="material-symbols-outlined">arrow_forward</span></Link>
      </div>
    </article>
  );
}

function FeaturedPortfolioCard({ item, index = 0, language = 'id', text = copy.id }) {
  const translated = language === 'en' ? portfolioEnglish[index] : null;

  return (
    <article className="portfolio-featured interactive-card reveal is-visible">
      <div className="portfolio-featured-copy">
        <span className="portfolio-kicker"><span className="material-symbols-outlined">{item.icon}</span>{item.category}</span>
        <h2>{translated?.title || item.title}</h2>
        <p>{translated?.copy || item.copy}</p>
        <div className="portfolio-featured-tags">
          {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="portfolio-featured-actions">
          <Link className="button" to="/contact">{text.discussProductScope}<span className="material-symbols-outlined">arrow_forward</span></Link>
          <Link className="button secondary" to="/services">{text.viewServices}</Link>
        </div>
      </div>
      <div className="portfolio-featured-visual">
        <img src={item.image} alt={translated?.title || item.title} loading="lazy" />
        <div className="portfolio-floating-metric metric-a"><strong>99%</strong><span>Uptime</span></div>
        <div className="portfolio-floating-metric metric-b"><strong>API</strong><span>Integrated</span></div>
      </div>
    </article>
  );
}

function PricingSection() {
  const plans = [
    ['Startup', 'Mulai Rp 5JT', ['Website Company Profile', 'Basic SEO', '1 Bulan Support']],
    ['Business', 'Mulai Rp 15JT', ['Custom Web App', 'Integrasi API Dasar', 'Dashboard Admin', '3 Bulan Support']],
    ['Enterprise', 'Custom', ['Full Custom Architecture', 'Advanced Security', 'High Availability Setup', '24/7 Priority Support']],
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHead title="Pilihan Harga yang Fleksibel" copy="Paket yang disesuaikan dengan skala bisnis Anda." />
        <div className="grid three">
          {plans.map(([name, price, items]) => (
            <article className={`card pricing-card reveal is-visible ${name === 'Business' ? 'featured' : ''}`} key={name}>
              {name === 'Business' && <span className="badge">Populer</span>}
              <h3>{name}</h3>
              <p>{name === 'Startup' ? 'Ideal untuk bisnis yang baru memulai.' : name === 'Business' ? 'Untuk bisnis yang sedang berkembang.' : 'Solusi kompleks untuk skala besar.'}</p>
              <div className="price">{price}</div>
              <ul>{items.map((item) => <li key={item}><span className="material-symbols-outlined">check</span>{item}</li>)}</ul>
              <Link className={name === 'Business' ? 'button' : 'button ghost'} to="/contact">{name === 'Enterprise' ? 'Hubungi Kami' : 'Pilih Paket'}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    ['Nexora sangat profesional dalam menangani kebutuhan IT perusahaan kami. Sistem yang dibangun stabil dan mudah digunakan.', 'Budi Santoso', 'CTO, PT Maju Bersama'],
    ['Migrasi cloud berjalan lancar tanpa mengganggu operasional. Tim dukungan juga sangat responsif.', 'Siti Rahmawati', 'IT Manager, Tech Indonusa'],
  ];

  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <SectionHead title="Apa Kata Klien Kami" />
        <div className="grid two">
          {items.map(([quote, name, role]) => (
            <article className="card testimonial reveal is-visible" key={name}>
              <span className="material-symbols-outlined quote-mark">format_quote</span>
              <p><em>"{quote}"</em></p>
              <div className="client"><span className="avatar" /><div><strong>{name}</strong><br /><span>{role}</span></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ compact = false }) {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        {compact && <SectionHead title="Pertanyaan yang Sering Diajukan" />}
        <FaqList />
      </div>
    </section>
  );
}

function FaqList() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <article className={`faq-item reveal is-visible ${open === index ? 'is-open' : ''}`} key={item.question}>
          <button className="faq-question" type="button" onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{item.question}</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <div className="faq-answer">{item.answer}</div>
        </article>
      ))}
    </div>
  );
}

function ServicesPage({ language, text }) {
  return (
    <>
      <PageHero title={text.servicesPageTitle} copy={text.servicesPageCopy} primary />
      <section className="section page-section pattern-section">
        <AbstractPattern className="services-line-pattern" />
        <div className="container">
          <ServiceApplicationShowcase language={language} showDetails text={text} />
          <ServicePricingPlans language={language} text={text} />
          <div className="service-other-head">
            <SectionHead title={text.otherServicesTitle} copy={text.otherServicesCopy} />
            <div className="card service-other-cta">
              <div>
                <h3>{text.otherServicesCtaTitle}</h3>
                <p>{text.otherServicesCtaCopy}</p>
              </div>
              <div className="service-other-actions">
                <Link className="btn primary" to="/contact">{text.discussProductScope}<span className="material-symbols-outlined">arrow_forward</span></Link>
                <Link className="btn ghost" to="/portfolio">{text.customizeWorkflow}<span className="material-symbols-outlined">auto_awesome</span></Link>
              </div>
            </div>
          </div>
          <div className="grid three service-mini-grid">
            {services.map((item, index) => <ServiceCard item={item} index={index} language={language} key={item.title} />)}
          </div>
          <ServiceActionBar text={text} />
        </div>
      </section>
    </>
  );
}

function ServiceApplicationShowcase({ language, showDetails = false, text }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = serviceApplications[selectedIndex];
  const details = getApplicationDetails(selected, language);

  return (
    <>
      <article className="card service-feature-card reveal is-visible">
        <div className="service-feature-menu">
          <strong>{text.serviceMenuLabel}</strong>
          {serviceApplications.map((item, index) => (
            <button
              className={selectedIndex === index ? 'is-active' : ''}
              key={item.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
            >
              <span>{item.title}</span>
              {selectedIndex === index && <span className="material-symbols-outlined">arrow_forward</span>}
            </button>
          ))}
        </div>
        <div className="service-feature-copy">
          <div className="icon-box"><span className="material-symbols-outlined">apps</span></div>
          <h3>{selected.title}</h3>
          <h4>{selected.subtitle}</h4>
          <p>{localText(selected.copy, language)}</p>
          <Tags items={selected.tags} />
        </div>
        <div className="service-feature-visual with-image">
          <img src={selected.image} alt={`${selected.title} preview`} loading="lazy" />
        </div>
      </article>
      {showDetails && (
        <div className="service-app-details reveal is-visible">
          {details.map((detail, index) => (
            <article className="card service-app-detail-card" key={detail.title}>
              <div className="service-detail-image">
                <img src={selected.image} alt={`${selected.title} ${detail.title}`} loading="lazy" />
              </div>
              <span className="service-detail-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{detail.title}</h3>
              <p>{detail.copy}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

function getApplicationDetails(application, language) {
  const fallback = {
    id: [
      ['Dashboard Utama', `Pantau ringkasan ${application.title}, status terbaru, dan data penting dari satu tampilan.`],
      ['Alur Kerja Harian', `Bantu tim menjalankan proses ${application.title} dengan langkah yang lebih rapi dan mudah diikuti.`],
      ['Laporan & Monitoring', `Lihat laporan penting agar keputusan bisnis bisa dibuat lebih cepat dan berdasarkan data.`],
    ],
    en: [
      ['Main Dashboard', `Monitor ${application.title} summaries, latest status, and important data from one view.`],
      ['Daily Workflow', `Help teams run ${application.title} processes with cleaner and easier-to-follow steps.`],
      ['Reports & Monitoring', `View important reports so business decisions can be made faster and based on data.`],
    ],
  };

  const hris = {
    id: [
      ['Dashboard HR', 'Pantau jumlah karyawan, status absensi, cuti, payroll, dan approval HR dalam satu layar yang mudah dibaca.'],
      ['Absensi & Cuti', 'Karyawan bisa mengajukan cuti, melihat status approval, dan tim HR dapat memantau kehadiran dengan lebih rapi.'],
      ['Payroll & Laporan', 'Bantu proses payroll, rekap data karyawan, dan laporan HR agar tidak lagi tercecer di banyak file.'],
    ],
    en: [
      ['HR Dashboard', 'Monitor employee count, attendance status, leave, payroll, and HR approvals in one easy-to-read view.'],
      ['Attendance & Leave', 'Employees can request leave, view approval status, and HR can monitor attendance more neatly.'],
      ['Payroll & Reports', 'Support payroll processing, employee data recap, and HR reports so data is no longer scattered across files.'],
    ],
  };

  const source = application.title === 'HRIS' ? hris : fallback;
  return source[language].map(([title, copy]) => ({ title, copy }));
}

function ServicePricingPlans({ language, text }) {
  const plans = [
    {
      name: text.pricingBasic,
      price: 'Rp 800.000',
      copy: language === 'en' ? 'Best for starting with one simple process.' : 'Cocok untuk mulai merapikan satu proses sederhana.',
      items: language === 'en' ? ['Initial setup', 'Core features', 'Email support'] : ['Setup awal', 'Fitur inti', 'Bantuan via email'],
    },
    {
      name: text.pricingProfessional,
      price: 'Rp 1.500.000',
      copy: language === 'en' ? 'Best for teams that need a more complete workflow.' : 'Cocok untuk tim yang butuh alur kerja lebih lengkap.',
      items: language === 'en' ? ['Everything in Basic', 'Advanced dashboard', 'Priority support'] : ['Semua di Basic', 'Dashboard lanjutan', 'Prioritas bantuan'],
      featured: true,
    },
    {
      name: text.pricingEnterprise,
      price: text.pricingCustom,
      copy: language === 'en' ? 'Best for custom needs, multiple branches, or integrations.' : 'Cocok untuk kebutuhan khusus, banyak cabang, atau integrasi.',
      items: language === 'en' ? ['Custom integration', 'Multi-branch/team', 'Dedicated support'] : ['Integrasi khusus', 'Multi cabang/tim', 'Pendampingan khusus'],
    },
  ];

  return (
    <div className="service-pricing-block reveal is-visible">
      <SectionHead title={text.servicePricingTitle} copy={text.servicePricingCopy} />
      <div className="grid three service-pricing-grid">
        {plans.map((plan) => (
          <article className={`card service-pricing-card ${plan.featured ? 'is-featured' : ''}`} key={plan.name}>
            {plan.featured && <span className="pricing-badge">Most Popular</span>}
            <h3>{plan.name}</h3>
            <div className="service-price">
              <strong>{plan.price}</strong>
              {plan.price !== text.pricingCustom && <span>{text.pricingMonthly}</span>}
            </div>
            <p>{plan.copy}</p>
            <ul>
              {plan.items.map((item) => <li key={item}><span className="material-symbols-outlined">check</span>{item}</li>)}
            </ul>
            <a className={plan.featured ? 'button' : 'button secondary'} href={whatsappUrl} target="_blank" rel="noreferrer">
              {plan.price === text.pricingCustom ? text.contactUs : text.discussPlan}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function ServiceActionBar({ text }) {
  return (
    <div className="service-action-bar reveal is-visible">
      <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
        {text.discussProductScope}
        <span className="material-symbols-outlined">arrow_forward</span>
      </a>
      <Link className="button secondary" to="/contact">
        {text.customizeWorkflow}
        <span className="material-symbols-outlined">progress_activity</span>
      </Link>
      <a className="button dark" href={whatsappUrl} target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined">shield</span>
        {text.talkConsultant}
      </a>
    </div>
  );
}

function ProductsPage({ language, text }) {
  return (
    <>
      <PageHero title="Products / Solutions Nexora" copy={text.productsPageCopy} primary />
      <section className="section page-section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container">
          <div className="grid two">{products.map((item, index) => <ProductCard item={item} index={index} language={language} key={item.title} />)}</div>
        </div>
      </section>
      <Cta title={text.productsCtaTitle} copy={text.productsCtaCopy} buttonLabel={text.cta} />
    </>
  );
}

function PortfolioPage({ language, text }) {
  const [filter, setFilter] = useState('All');
  const filters = useMemo(() => ['All', ...Array.from(new Set(portfolios.map((item) => item.category)))], []);
  const filtered = useMemo(() => (filter === 'All' ? portfolios : portfolios.filter((item) => item.category === filter)), [filter]);
  const featured = filter === 'All' ? filtered[0] : null;
  const gridItems = featured ? filtered.slice(1) : filtered;

  return (
    <>
      <PageHero title={text.portfolioPageTitle} copy={text.portfolioPageCopy} />
      <section className="section page-section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container">
          <div className="filter-row">
            {filters.map((item) => (
              <button className={`filter-button ${filter === item ? 'is-active' : ''}`} type="button" onClick={() => setFilter(item)} key={item}>
                <span>{item}</span>
                <small>{item === 'All' ? portfolios.length : portfolios.filter((portfolio) => portfolio.category === item).length}</small>
              </button>
            ))}
          </div>
          {featured && <FeaturedPortfolioCard item={featured} index={0} language={language} text={text} />}
          <div className="portfolio-page-grid">
            {gridItems.map((item) => <PortfolioCard item={item} index={portfolios.indexOf(item)} language={language} text={text} key={item.title} />)}
          </div>
        </div>
      </section>
      <Cta title={text.portfolioCtaTitle} copy={text.portfolioCtaCopy} buttonLabel={text.cta} />
    </>
  );
}

function AboutPage({ language, text }) {
  return (
    <>
      <PageHero title={text.aboutHeroTitle} copy={text.aboutHeroCopy} primary />
      <section className="section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container about-grid">
          <div className="reveal is-visible">
            <h2 className="section-title">{text.aboutTitle}</h2>
            <p className="section-copy">{text.aboutCopyOne}</p>
            <p className="section-copy">{text.aboutCopyTwo}</p>
          </div>
          <StatsCard />
        </div>
      </section>
      <VisionMissionSection language={language} text={text} />
      <TeamSection language={language} text={text} />
      <Cta title={text.aboutCtaTitle} copy={text.aboutCtaCopy} buttonLabel={text.cta} />
    </>
  );
}

function VisionMissionSection({ language, text }) {
  return (
    <>
      <section className="section page-section vision-section">
        <AbstractPattern className="page-hero-line-pattern" />
        <div className="container">
          <div className="vision-highlight reveal is-visible">
            <div className="vision-copy">
              <span className="vision-label">{language === 'en' ? 'Nexora Vision' : 'Visi Nexora'}</span>
              <h2>{language === 'en' ? 'Extended IT Partner for Sustainable Business Growth.' : 'Extended IT Partner untuk Pertumbuhan Bisnis Berkelanjutan.'}</h2>
              <p>{text.visionTitle}</p>
              <div className="vision-points">
                <span>{language === 'en' ? 'Operational Excellence' : 'Keunggulan Operasional'}</span>
                <span>{language === 'en' ? 'Risk Control' : 'Kontrol Risiko'}</span>
                <span>{language === 'en' ? 'Real Impact' : 'Dampak Nyata'}</span>
              </div>
            </div>
            <div className="vision-visual" aria-hidden="true">
              <div className="system-node system-node-main">
                <span className="material-symbols-outlined">hub</span>
                <strong>Nexora</strong>
              </div>
              <div className="system-node system-node-top">
                <span className="material-symbols-outlined">verified_user</span>
                <span>Tata Kelola</span>
              </div>
              <div className="system-node system-node-right">
                <span className="material-symbols-outlined">trending_up</span>
                <span>Pertumbuhan</span>
              </div>
              <div className="system-node system-node-bottom">
                <span className="material-symbols-outlined">monitoring</span>
                <span>Kontrol</span>
              </div>
              <div className="system-node system-node-left">
                <span className="material-symbols-outlined">automation</span>
                <span>Efisiensi</span>
              </div>
              <span className="system-flow flow-a" />
              <span className="system-flow flow-b" />
              <span className="system-flow flow-c" />
              <span className="system-flow flow-d" />
            </div>
          </div>
        </div>
      </section>
      <section className="section alt pattern-section">
        <AbstractPattern className="services-line-pattern" />
        <div className="container">
          <SectionHead title={text.missionTitle} copy={text.missionCopy} />
          <div className="grid mission-grid">
            {missions.map((mission, index) => (
              <article className="card mission-card reveal is-visible" key={mission.title}>
                <div className="mission-topline">
                  <div className="mission-icon"><span className="material-symbols-outlined">{mission.icon}</span></div>
                  <span className="mission-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="mission-body">
                  <h3>{language === 'en' ? missionEnglish[index].title : mission.title}</h3>
                  <p>{language === 'en' ? missionEnglish[index].copy : mission.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function getManagementTags(name, language) {
  const tags = {
    'Fannii Aulia Havid': {
      id: ['Strategi Bisnis', 'Governance', 'Partnership'],
      en: ['Business Strategy', 'Governance', 'Partnership'],
    },
    'Raul Mahya Komaran': {
      id: ['Software Engineering', 'Backend', 'ERP & Data'],
      en: ['Software Engineering', 'Backend', 'ERP & Data'],
    },
    'Rinaldy Gunawan': {
      id: ['Operasional', 'Digital Design', 'Delivery'],
      en: ['Operations', 'Digital Design', 'Delivery'],
    },
    'M. Giffari Havid': {
      id: ['Sales Strategy', 'Business Development', 'Partnership'],
      en: ['Sales Strategy', 'Business Development', 'Partnership'],
    },
  };

  return tags[name]?.[language] || [];
}

function TeamSection({ language, text }) {
  const [activeMember, setActiveMember] = useState(0);
  const member = teamMembers[activeMember];

  function moveMember(direction) {
    setActiveMember((current) => (current + direction + teamMembers.length) % teamMembers.length);
  }

  return (
    <section className="relative overflow-hidden bg-[#eef5fb] py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-28 top-10 h-[360px] w-[360px] rounded-full border border-[#cfe0f5] opacity-50" />
      <div className="pointer-events-none absolute -left-28 bottom-10 h-[300px] w-[300px] rounded-full border border-[#cfe0f5] opacity-40" />
      <div className="relative z-[1] mx-auto w-[min(100%-40px,1280px)]">
        <div className="mx-auto mb-12 max-w-[780px] text-center">
          <h2 className="m-0 text-[32px] font-extrabold leading-tight text-nexora-navy sm:text-[44px]">{text.managementTitle}</h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-7 text-nexora-muted sm:text-[18px]">{text.managementCopy}</p>
        </div>

        <div className="mx-auto max-w-[1180px]">
          <article className="interactive-card group grid overflow-hidden rounded-[24px] border border-nexora-line bg-white shadow-[0_28px_68px_rgba(0,66,126,0.14)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="team-carousel-photo relative min-h-[520px] overflow-hidden bg-[#eaf4ff]">
              <img
                className="h-full min-h-[520px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.025]"
                src={member.photo}
                alt={member.name}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003966]/70 via-[#003966]/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-white/70 bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-nexora-blue shadow-[0_12px_24px_rgba(0,66,126,0.12)]">
                  {member.role.split('/').pop().trim()}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-nexora-navy text-lg font-extrabold text-white shadow-[0_12px_24px_rgba(0,47,89,0.22)]">
                  {member.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.16em] text-nexora-blue">{member.role}</p>
              <h3 className="mb-5 text-[34px] font-extrabold leading-tight text-nexora-navy sm:text-[48px]">{member.name}</h3>
              <p className="mb-8 max-w-[640px] text-[16px] leading-8 text-[#344054] sm:text-[17px]">{member.expertise[language]}</p>
              <div className="mb-10 flex flex-wrap gap-2.5">
                {getManagementTags(member.name, language).map((tag) => (
                  <span className="rounded-lg bg-nexora-soft px-4 py-2 text-xs font-extrabold text-nexora-blue" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5 border-t border-nexora-line pt-6">
                <div className="flex gap-2">
                  {teamMembers.map((item, index) => (
                    <button
                      aria-label={`Lihat ${item.name}`}
                      className={`h-2.5 rounded-full transition-all ${activeMember === index ? 'w-10 bg-nexora-blue' : 'w-2.5 bg-[#cfe0f5]'}`}
                      key={item.name}
                      onClick={() => setActiveMember(index)}
                      type="button"
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="grid h-12 w-12 place-items-center rounded-full border border-nexora-line bg-white text-nexora-blue shadow-[0_10px_22px_rgba(0,66,126,0.08)]" type="button" onClick={() => moveMember(-1)} aria-label="Sebelumnya">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <button className="grid h-12 w-12 place-items-center rounded-full bg-nexora-blue text-white shadow-[0_12px_24px_rgba(0,66,126,0.18)]" type="button" onClick={() => moveMember(1)} aria-label="Berikutnya">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-20">
          <div className="mx-auto mb-10 max-w-[780px] text-center">
            <h2 className="m-0 text-[30px] font-extrabold leading-tight text-nexora-navy sm:text-[40px]">{text.functionalTitle}</h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-7 text-nexora-muted sm:text-[18px]">{text.functionalCopy}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {functionalTeams.map((team) => (
              <article
                className="interactive-card rounded-[16px] border border-nexora-line bg-white p-7 shadow-[0_18px_38px_rgba(0,66,126,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,66,126,0.14)]"
                key={team.name}
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-[14px] bg-nexora-soft text-nexora-action">
                  <span className="material-symbols-outlined text-[30px]">{team.icon}</span>
                </div>
                <h3 className="m-0 text-[22px] font-extrabold leading-tight text-nexora-navy">{team.name}</h3>
                <p className="mt-4 text-[15px] leading-7 text-nexora-muted">{team.role[language]}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryPage({ language, text }) {
  const industries = language === 'en' ? industryEnglish : [
    ['account_balance', 'Fintech & Banking', 'Integrasi pembayaran, dashboard risiko, core system modernization, dan API finansial aman.'],
    ['local_hospital', 'Healthcare', 'Sistem klinik, telemedicine, EMR, dan integrasi layanan kesehatan berbasis data.'],
    ['local_shipping', 'Logistics', 'Tracking armada, optimasi rute, warehouse management, dan automasi operasional.'],
    ['storefront', 'Retail & E-Commerce', 'Platform toko online, inventory, loyalty, dan integrasi ERP/POS.'],
    ['factory', 'Manufacturing', 'Monitoring produksi, quality control, maintenance, dan dashboard operasional.'],
    ['school', 'Education', 'Learning management system, portal akademik, dan dashboard performa pembelajaran.'],
  ];

  return (
    <>
      <PageHero title={text.industryPageTitle} copy={text.industryPageCopy} primary />
      <section className="section page-section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container">
          <div className="grid three industry-grid">
            {industries.map(([icon, title, copy]) => (
              <article className="card reveal is-visible" key={title}>
                <div className="icon-box"><span className="material-symbols-outlined">{icon}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta title={text.industryCtaTitle} copy={text.industryCtaCopy} buttonLabel={text.cta} />
    </>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero title="FAQ Nexora Technology" copy="Jawaban singkat untuk pertanyaan yang paling sering muncul sebelum memulai proyek teknologi." primary />
      <FaqSection />
      <Cta title="Masih Ada Pertanyaan?" copy="Tim kami siap bantu jelaskan opsi teknologi yang paling sesuai untuk kebutuhan bisnis Anda." />
    </>
  );
}

function ContactPage({ language, text }) {
  const [note, setNote] = useState('');

  return (
    <>
      <PageHero title={text.contactPageTitle} copy={text.contactPageCopy} primary />
      <section className="section page-section contact-pattern-section">
        <AbstractPattern className="contact-line-pattern" />
        <div className="container contact-grid">
          <aside className="card contact-card reveal is-visible">
            <h2>{text.contactTitle}</h2>
            <p>{text.contactCopy}</p>
            <ContactList text={text} />
          </aside>
          <form className="card form reveal is-visible" onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            setNote(`${text.formThanks}, ${data.get('name') || text.formFallbackName}. ${text.formThanksCopy}`);
            event.currentTarget.reset();
          }}>
            <Field id="name" label={text.formName} placeholder={text.formNamePlaceholder} required />
            <Field id="email" label="Email" type="email" placeholder="email@perusahaan.com" required />
            <Field id="company" label={text.formCompany} placeholder={text.formCompanyPlaceholder} />
            <div className="field">
              <label htmlFor="service">{text.formService}</label>
              <select id="service" name="service">
                {services.map((item, index) => <option key={item.title}>{item.title}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="budget">Budget</label>
              <select id="budget" name="budget">
                <option>Rp 5JT - 15JT</option>
                <option>Rp 15JT - 50JT</option>
                <option>Rp 50JT+</option>
                <option>{text.formUnknown}</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">{text.formMessage}</label>
              <textarea id="message" name="message" placeholder={text.formMessagePlaceholder} required />
            </div>
            <div className="form-note">{note}</div>
            <button className="button" type="submit">{text.formSubmit}</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = 'text', ...props }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} {...props} />
    </div>
  );
}

function ContactList({ text }) {
  const items = [
    ['mail', 'Email', <a href={`mailto:${contact.email}`}>{contact.email}</a>],
    ['phone', text.contactPhone, <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>],
    ['chat', 'WhatsApp', <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{contact.whatsapp}</a>],
    ['location_on', text.contactAddress, <><strong className="contact-company">{contact.company}</strong>{contact.address}</>],
    ['schedule', text.contactHours, contact.hours],
  ];

  return (
    <div className="contact-list">
      {items.map(([icon, title, value]) => (
        <div className="contact-item" key={title}>
          <span className="icon-box"><span className="material-symbols-outlined">{icon}</span></span>
          <div><strong>{title}</strong><br /><span>{value}</span></div>
        </div>
      ))}
      <a className="button secondary maps-button" href={contact.mapsUrl} target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined">map</span>
        {text.openMaps}
      </a>
    </div>
  );
}

function PageHero({ title, copy, primary = false }) {
  return (
    <section className="page-hero">
      <AbstractPattern className="page-hero-line-pattern" />
      <div className="container reveal is-visible">
        <h1 className={`section-title ${primary ? 'primary' : ''}`}>{title}</h1>
        <p className="section-copy">{copy}</p>
      </div>
    </section>
  );
}

function SectionHead({ title, copy = '' }) {
  return (
    <div className="section-head reveal is-visible">
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function Cta({ title = 'Siap Bikin Sistem Lebih Rapi?', copy = 'Ceritakan kebutuhan bisnis Anda. Kami bantu arahkan solusi yang paling mudah dimulai.', buttonLabel = 'Konsultasi Gratis' }) {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="global-line-pattern" />
      <div className="container">
        <div className="cta reveal is-visible">
          <AbstractPattern className="cta-line-pattern" />
          <h2>{title}</h2>
          <p>{copy}</p>
          <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">{buttonLabel}</a>
        </div>
      </div>
    </section>
  );
}

function Footer({ language, text }) {
  return (
    <footer className="footer">
      <AbstractPattern className="footer-line-pattern" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand footer-logo" to="/">
              <img className="brand-logo footer-brand-logo" src="/logonexora-navbar.png" alt="Nexora Technology" />
            </Link>
            <p>{text.footerCopy}</p>
            <div className="footer-socials">
              <a href="mailto:ITConsultant@nexora-technology.id" aria-label="Email Nexora"><span className="material-symbols-outlined">mail</span></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Nexora"><span className="material-symbols-outlined">chat</span></a>
              <a href="/contact" aria-label="Lokasi Nexora"><span className="material-symbols-outlined">location_on</span></a>
            </div>
          </div>

          <div className="footer-card">
            <h4>{text.footerCompany}</h4>
            <div className="footer-links">
              <Link to="/about">{navLinks[1].label[language]}</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/industry">{navLinks[4].label[language]}</Link>
            </div>
          </div>

          <div className="footer-card">
            <h4>{text.footerServices}</h4>
            <div className="footer-links">
              {services.map((item) => <Link to="/services" key={item.title}>{item.title}</Link>)}
            </div>
          </div>

          <div className="footer-card footer-products">
            <h4>Products / Solutions</h4>
            <div className="footer-links">
              {products.slice(0, 6).map((item) => <Link to="/products" key={item.title}>{item.title.replace(' / Business Management System', '').replace(' / Employee Management', '').replace(' / Customer Management', '')}</Link>)}
            </div>
          </div>

          <div className="footer-card footer-contact">
            <h4>{text.footerContact}</h4>
            <p><span className="material-symbols-outlined">location_on</span><span><strong>{contact.company}</strong><br />{contact.address}</span></p>
            <p><span className="material-symbols-outlined">mail</span><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p><span className="material-symbols-outlined">phone</span><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></p>
            <p><span className="material-symbols-outlined">schedule</span>{contact.hours}</p>
            <a className="button footer-map-button" href={contact.mapsUrl} target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">map</span>
              {text.footerMaps}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nexora Technology. All rights reserved.</span>
          <span>Jakarta, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}

function NotFoundPage({ text }) {
  return (
    <section className="not-found pattern-section">
      <AbstractPattern className="global-line-pattern" />
      <div className="container reveal is-visible">
        <strong>404</strong>
        <h1 className="section-title">{text.notFoundTitle}</h1>
        <p className="section-copy">{text.notFoundCopy}</p>
        <Link className="button" to="/">{text.notFoundButton}</Link>
      </div>
    </section>
  );
}

export default App;
