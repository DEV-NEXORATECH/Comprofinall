import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const NetworkOrb = lazy(() => import('./components/NetworkOrb.jsx'));
const CoverageMap3D = lazy(() => import('./components/CoverageMap3D.jsx'));
const TeamNetwork3D = lazy(() => import('./components/TeamNetwork3D.jsx'));
const IndustryEcosystem3D = lazy(() => import('./components/IndustryEcosystem3D.jsx'));

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
    consultNow: 'Konsultasi Sekarang',
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
    productsPageCopy: 'Daftar produk dan solusi yang dapat diterapkan untuk UMKM, retail, operasional internal, hingga perusahaan yang membutuhkan sistem terpusat.',
    productsCtaTitle: 'Butuh Produk yang Disesuaikan?',
    productsCtaCopy: 'Pilih solusi dasar yang paling dekat dengan kebutuhan Anda, lalu kami bantu sesuaikan flow, role, dan laporan sesuai proses bisnis.',
    portfolioPageTitle: 'Karya Unggulan Kami',
    portfolioPageCopy: 'Transformasi digital nyata untuk berbagai industri. Jelajahi studi kasus bagaimana kami membantu perusahaan mencapai efisiensi dan skalabilitas.',
    portfolioCtaTitle: 'Siap Mewujudkan Inovasi Teknologi Anda?',
    portfolioCtaCopy: 'Konsultasikan kebutuhan proyek Anda dengan tim ahli kami sekarang.',
    visionTitle: 'Menjadi Extended IT Partner strategis utama di Indonesia yang membantu pelaku bisnis mencapai keunggulan operasional, pengendalian risiko yang kuat, dan pertumbuhan bisnis berkelanjutan melalui transformasi digital yang berdampak nyata.',
    missionTitle: 'Misi Nexora',
    missionCopy: 'Lima komitmen utama dalam membangun solusi teknologi yang berdampak nyata untuk bisnis.',
    leadershipTitle: 'Strategi, teknologi, operasional, dan growth dalam satu koordinasi.',
    leadershipCopy: 'Visual ini menggambarkan tim manajemen Nexora sebagai pusat koordinasi antara keputusan bisnis, arsitektur teknologi, delivery proyek, dan pengembangan pasar.',
    industryPageTitle: 'Solusi untuk Berbagai Industri',
    industryPageCopy: 'Setiap industri punya proses berbeda. Kami merancang sistem yang mengikuti alur kerja nyata, bukan memaksa bisnis mengikuti software.',
    industryPanelTitle: 'One platform mindset untuk banyak proses bisnis.',
    industryPanelCopy: 'Nexora memetakan kebutuhan tiap industri menjadi sistem, integrasi, dashboard, workflow, dan data layer yang saling terhubung.',
    industryCtaTitle: 'Butuh Solusi untuk Industri Anda?',
    industryCtaCopy: 'Ceritakan proses bisnis Anda, kami bantu petakan kebutuhan sistem dan roadmap implementasinya.',
    contactPageTitle: 'Kontak Nexora Technology',
    contactPageCopy: 'Diskusikan kebutuhan website, sistem internal, integrasi API, atau automasi digital perusahaan Anda.',
    contactTitle: 'Hubungi Kami',
    contactCopy: 'Isi form atau kontak langsung melalui email, telepon, dan alamat kantor berikut.',
    formName: 'Nama',
    formNamePlaceholder: 'Nama Anda',
    formCompany: 'Perusahaan',
    formCompanyPlaceholder: 'Nama perusahaan',
    formService: 'Layanan',
    formUnknown: 'Belum tahu',
    formMessage: 'Pesan',
    formMessagePlaceholder: 'Ceritakan kebutuhan proyek Anda',
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
    consultNow: 'Consult Now',
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
    productsPageCopy: 'Products and solutions for MSMEs, retail, internal operations, and companies that need centralized systems.',
    productsCtaTitle: 'Need a Customized Product?',
    productsCtaCopy: 'Choose the closest base solution, then we help adjust the flow, roles, and reports to your business process.',
    portfolioPageTitle: 'Featured Work',
    portfolioPageCopy: 'Real digital transformation across industries. Explore case studies on how we help companies achieve efficiency and scalability.',
    portfolioCtaTitle: 'Ready to Build Your Technology Innovation?',
    portfolioCtaCopy: 'Consult your project needs with our expert team today.',
    visionTitle: 'To become Indonesia’s leading strategic Extended IT Partner that helps businesses achieve operational excellence, strong risk control, and sustainable growth through digital transformation with real impact.',
    missionTitle: 'Nexora Mission',
    missionCopy: 'Five core commitments in building technology solutions that create real business impact.',
    leadershipTitle: 'Strategy, technology, operations, and growth in one coordination flow.',
    leadershipCopy: 'This visual represents Nexora management as a coordination center between business decisions, technology architecture, project delivery, and market development.',
    industryPageTitle: 'Solutions for Multiple Industries',
    industryPageCopy: 'Every industry has different processes. We design systems that follow real workflows instead of forcing businesses to follow software.',
    industryPanelTitle: 'One platform mindset for many business processes.',
    industryPanelCopy: 'Nexora maps each industry need into connected systems, integrations, dashboards, workflows, and data layers.',
    industryCtaTitle: 'Need a Solution for Your Industry?',
    industryCtaCopy: 'Tell us your business process, and we will help map the system requirements and implementation roadmap.',
    contactPageTitle: 'Contact Nexora Technology',
    contactPageCopy: 'Discuss your website, internal system, API integration, or digital automation needs.',
    contactTitle: 'Contact Us',
    contactCopy: 'Fill out the form or contact us directly through email, phone, and office address below.',
    formName: 'Name',
    formNamePlaceholder: 'Your name',
    formCompany: 'Company',
    formCompanyPlaceholder: 'Company name',
    formService: 'Service',
    formUnknown: 'Not sure yet',
    formMessage: 'Message',
    formMessagePlaceholder: 'Tell us about your project needs',
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
    category: 'Fintech',
    image: '/moneyku.png',
    tags: ['Fintech', 'API Integration'],
    title: 'Modernisasi Core Banking System',
    copy: 'Membangun ulang arsitektur monolitik menjadi microservices untuk meningkatkan throughput transaksi dan menekan downtime.',
  },
  {
    category: 'Healthcare',
    image: '/hris.png',
    tags: ['Healthcare', 'Mobile App'],
    title: 'Telemedicine App Skala Nasional',
    copy: 'Aplikasi telekonsultasi dengan integrasi rekam medis elektronik yang aman, cepat, dan mudah digunakan.',
  },
  {
    category: 'Logistics',
    image: '/all role ai.png',
    tags: ['Logistics', 'Custom Software'],
    title: 'Sistem Manajemen Armada Berbasis AI',
    copy: 'Optimasi rute dan tracking real-time untuk perusahaan logistik dengan kebutuhan operasional kompleks.',
  },
  {
    category: 'Retail',
    image: '/bisa-platform.png',
    tags: ['Retail', 'E-Commerce Platform'],
    title: 'Platform E-Commerce Enterprise',
    copy: 'Platform headless e-commerce yang mampu menangani trafik tinggi dan terintegrasi dengan ERP/POS.',
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
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    expertise: {
      id: 'Berpengalaman di bidang financial management, organizational governance, dan strategic partnership development. Memimpin arah strategis, pertumbuhan bisnis, visi komersial, dan pengambilan keputusan perusahaan.',
      en: 'Experienced in financial management, organizational governance, and strategic partnership development. Leads the company strategy, business growth, commercial vision, and executive decision-making.',
    },
  },
  {
    name: 'Raul Mahya Komaran',
    role: 'Chief Technology Officer / CTO',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    expertise: {
      id: 'Background di Informatics Engineering dan sedang menempuh Master of Computer Science. Berpengalaman sebagai Backend Developer, Full-Stack Developer, Software Engineer, Project Manager, R&D Specialist, dan IT Specialist. Menguasai Laravel, .NET, Golang, Node.js, Python, SQL Server, PostgreSQL, MongoDB, Power BI, ETL, dan Odoo ERP.',
      en: 'Background in Informatics Engineering and currently pursuing a Master of Computer Science. Experienced as a Backend Developer, Full-Stack Developer, Software Engineer, Project Manager, R&D Specialist, and IT Specialist. Skilled in Laravel, .NET, Golang, Node.js, Python, SQL Server, PostgreSQL, MongoDB, Power BI, ETL, and Odoo ERP.',
    },
  },
  {
    name: 'Rinaldy Gunawan',
    role: 'Chief Operating Officer / COO',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    expertise: {
      id: 'Memiliki keahlian di bidang technology engineering dan user-centric digital design. Bertanggung jawab mengatur operasional perusahaan, workflow proyek, koordinasi tim IT dan kreatif, kualitas delivery, serta ketepatan implementasi proyek.',
      en: 'Skilled in technology engineering and user-centric digital design. Responsible for company operations, project workflows, IT and creative team coordination, delivery quality, and implementation accuracy.',
    },
  },
  {
    name: 'M. Giffari Havid',
    role: 'Head of Sales & Business Development',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('nexora-language') || 'id');
  const location = useLocation();
  const text = copy[language];

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
        title={language === 'en' ? 'Transform Your Business Now' : 'Transformasikan Bisnis Anda Sekarang'}
        copy={language === 'en' ? 'Discuss your system, workflow, data, integration, or digital transformation needs with Nexora.' : 'Diskusikan kebutuhan sistem, workflow, data, integrasi, atau transformasi digital bisnis Anda bersama Nexora.'}
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
          <div className="coverage-map coverage-map-3d reveal is-visible">
            <Suspense fallback={<div className="coverage-map-fallback" aria-hidden="true" />}>
              <CoverageMap3D />
            </Suspense>
            <div className="map-label coverage-map-label">
              <span>Bandung-based</span>
              <strong>Indonesia-wide</strong>
            </div>
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
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}

function ServicesPreview({ language, text }) {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title={text.servicesPreviewTitle} copy={text.servicesPreviewCopy} />
        <div className="grid three">{services.slice(0, 3).map((item, index) => <ServiceCard key={item.title} item={item} index={index} language={language} />)}</div>
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
      <div className="portfolio-image"><img src={item.image} alt={translated?.title || item.title} loading="lazy" /></div>
      <div className="portfolio-content">
        <Tags items={item.tags} />
        <h3>{translated?.title || item.title}</h3>
        <p>{translated?.copy || item.copy}</p>
        <Link className="link-arrow" to="/portfolio">{text.caseStudy} <span className="material-symbols-outlined">arrow_forward</span></Link>
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
        <div className="container"><div className="grid two">{services.map((item, index) => <ServiceCard item={item} index={index} language={language} key={item.title} />)}</div></div>
      </section>
      <Cta buttonLabel={text.cta} title={language === 'en' ? 'Ready for Digital Transformation?' : 'Siap untuk Transformasi Digital?'} copy={language === 'en' ? 'Discuss your project needs with our expert team and find the best IT solution for your company.' : 'Diskusikan kebutuhan proyek Anda dengan tim ahli kami dan temukan solusi IT terbaik untuk perusahaan Anda.'} />
    </>
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
  const filtered = useMemo(() => (filter === 'All' ? portfolios : portfolios.filter((item) => item.category === filter)), [filter]);

  return (
    <>
      <PageHero title={text.portfolioPageTitle} copy={text.portfolioPageCopy} />
      <section className="section page-section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container">
          <div className="filter-row">
            {['All', 'Fintech', 'Healthcare', 'Logistics', 'Retail'].map((item) => (
              <button className={`filter-button ${filter === item ? 'is-active' : ''}`} type="button" onClick={() => setFilter(item)} key={item}>{item}</button>
            ))}
          </div>
          <div className="grid two">{filtered.map((item) => <PortfolioCard item={item} index={portfolios.indexOf(item)} language={language} text={text} key={item.title} />)}</div>
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
            <div>
              <span className="eyebrow">Visi Nexora</span>
              <h2>{text.visionTitle}</h2>
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
                <div className="mission-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="icon-box"><span className="material-symbols-outlined">{mission.icon}</span></div>
                <h3>{language === 'en' ? missionEnglish[index].title : mission.title}</h3>
                <p>{language === 'en' ? missionEnglish[index].copy : mission.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TeamSection({ language, text }) {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title={text.managementTitle} copy={text.managementCopy} />
        <div className="team-network-panel reveal is-visible">
          <Suspense fallback={<div className="team-network-fallback" aria-hidden="true" />}>
            <TeamNetwork3D />
          </Suspense>
          <div className="team-network-copy">
            <span className="eyebrow">Leadership System</span>
            <h3>{text.leadershipTitle}</h3>
            <p>{text.leadershipCopy}</p>
          </div>
        </div>
        <div className="grid two management-grid">
          {teamMembers.map((member) => (
            <article className="card team-card management-card reveal is-visible" key={member.name}>
              <img className="team-photo" src={member.photo} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-expertise">{member.expertise[language]}</div>
            </article>
          ))}
        </div>
        <div className="functional-team-block">
          <SectionHead title={text.functionalTitle} copy={text.functionalCopy} />
          <div className="grid five">
            {functionalTeams.map((team) => (
              <article className="card functional-card reveal is-visible" key={team.name}>
                <div className="icon-box"><span className="material-symbols-outlined">{team.icon}</span></div>
                <h3>{team.name}</h3>
                <p>{team.role[language]}</p>
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
          <div className="industry-ecosystem-panel reveal is-visible">
            <Suspense fallback={<div className="industry-ecosystem-fallback" aria-hidden="true" />}>
              <IndustryEcosystem3D />
            </Suspense>
            <div className="industry-ecosystem-copy">
              <span className="eyebrow">Industry Ecosystem</span>
              <h2>{text.industryPanelTitle}</h2>
              <p>{text.industryPanelCopy}</p>
            </div>
          </div>
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

function Cta({ title = 'Siap untuk Transformasi Digital?', copy = 'Diskusikan kebutuhan proyek Anda dengan tim ahli kami dan temukan solusi IT terbaik untuk perusahaan Anda.', buttonLabel = 'Konsultasi Gratis' }) {
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
