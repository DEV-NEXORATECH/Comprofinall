import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Industri', path: '/industry' },
  { label: 'Kontak', path: '/contact' },
];

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
  'Business-driven, bukan hanya coding.',
  'Sistem aman, scalable, dan mudah dikembangkan.',
  'Pendekatan end-to-end dari analisis sampai support.',
  'Cocok untuk UMKM sampai enterprise.',
  'Transparan dalam progress, scope, dan delivery.',
];

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
    name: 'Syaifani Auliana Havid',
    role: 'Chief Executive Officer / CEO',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    expertise:
      'Berpengalaman di bidang financial management, organizational governance, dan strategic partnership development. Memimpin arah strategis, pertumbuhan bisnis, visi komersial, dan pengambilan keputusan perusahaan.',
  },
  {
    name: 'Raul Mahya Komaran',
    role: 'Chief Technology Officer / CTO',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    expertise:
      'Background di Informatics Engineering dan sedang menempuh Master of Computer Science. Berpengalaman sebagai Backend Developer, Full-Stack Developer, Software Engineer, Project Manager, R&D Specialist, dan IT Specialist. Menguasai Laravel, .NET, Golang, Node.js, Python, SQL Server, PostgreSQL, MongoDB, Power BI, ETL, dan Odoo ERP.',
  },
  {
    name: 'Rinaldy Gunawan',
    role: 'Chief Operating Officer / COO',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    expertise:
      'Memiliki keahlian di bidang technology engineering dan user-centric digital design. Bertanggung jawab mengatur operasional perusahaan, workflow proyek, koordinasi tim IT dan kreatif, kualitas delivery, serta ketepatan implementasi proyek.',
  },
  {
    name: 'Muhammad Giffari Havid',
    role: 'Head of Sales & Business Development',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    expertise:
      'Background Sarjana Ekonomi dengan pengalaman lebih dari 12 tahun di bidang sales dan business development. Fokus pada strategi penetrasi pasar, komersialisasi produk, hubungan kemitraan jangka panjang, dan analisis kelayakan investasi teknologi.',
  },
];

const functionalTeams = [
  {
    name: 'Dev Team',
    role: 'Tim pengembangan sistem, aplikasi, backend, frontend, integrasi, dan maintenance teknis. Di struktur tertulis 5 freelance.',
  },
  {
    name: 'Finance',
    role: 'Mengelola kebutuhan keuangan, pembayaran, budgeting, invoice, dan administrasi finansial.',
  },
  {
    name: 'HR & Admin',
    role: 'Mengelola administrasi internal, data tim, kebutuhan SDM, dan support operasional.',
  },
  {
    name: 'Sales Reps',
    role: 'Tim sales lapangan/representatif untuk mencari peluang, pendekatan klien, follow-up, dan membantu proses deal. Di struktur tertulis 6 freelance.',
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
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <Navbar menuOpen={menuOpen} onToggle={() => setMenuOpen((value) => !value)} />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/industry" element={<IndustryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Navbar({ menuOpen, onToggle }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <img className="brand-logo" src="/logonexora-navbar.png" alt="Nexora Technology" />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((item) => (
            <NavLink key={item.path} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Konsultasi Gratis</a>
          <button className="menu-toggle" type="button" aria-label="Buka menu" onClick={onToggle}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <AbstractPattern className="hero-line-pattern" />
        <div className="container hero-grid">
          <div className="reveal is-visible">
            <span className="eyebrow">Solusi IT Enterprise</span>
            <h1 className="hero-title">Bangun Sistem. Percepat Bisnis.</h1>
            <p className="hero-copy">
              Nexora Technology adalah extended IT partner yang membantu bisnis membangun sistem digital,
              meningkatkan efisiensi operasional, memperkuat tata kelola, dan mempercepat transformasi digital
              secara aman, terukur, dan berkelanjutan.
            </p>
            <div className="hero-actions">
              <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Konsultasi Sekarang</a>
              <Link className="button secondary" to="/services">Lihat Layanan</Link>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <IdeologySection />
      <PlaygroundSection />
      <ExperienceSection />
      <CoverageSection />
      <WhyNexoraSection />
      <Cta title="Transformasikan Bisnis Anda Sekarang" copy="Diskusikan kebutuhan sistem, workflow, data, integrasi, atau transformasi digital bisnis Anda bersama Nexora." />
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
      <path d="M32 334C83 266 143 269 190 210C239 149 225 72 296 50C374 25 453 80 485 148C523 230 463 310 394 337C320 366 269 316 205 336C139 357 108 407 32 334Z" />
      <path d="M70 314C112 259 162 258 201 208C241 157 232 94 292 75C355 55 420 101 448 157C479 224 431 289 374 313C313 339 270 296 216 314C163 332 134 370 70 314Z" />
      <path d="M108 293C142 251 181 247 211 206C243 163 238 115 287 99C337 83 389 120 412 165C436 218 399 269 354 289C305 310 271 276 226 291C185 305 161 333 108 293Z" />
      <path d="M147 270C172 241 198 234 222 204C246 174 243 136 282 123C320 110 359 139 376 173C394 212 368 248 334 264C298 281 273 256 237 267C207 276 187 295 147 270Z" />
      <path d="M186 246C204 229 215 220 232 202C249 184 250 157 276 148C302 140 329 157 342 181C355 208 338 230 314 241C288 253 273 238 248 244C226 250 210 260 186 246Z" />
    </svg>
  );
}

function Metric({ value, label }) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span></div>;
}

function IdeologySection() {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <div className="section-head reveal is-visible">
          <span className="eyebrow">Nexora Mindset</span>
          <h2 className="section-title">Ideologi Nexora</h2>
          <p className="section-copy">
            Nexora percaya bahwa teknologi bukan hanya alat operasional, tetapi fondasi untuk pertumbuhan bisnis.
            Setiap solusi digital harus memberikan dampak nyata: efisiensi, kontrol, akurasi data, keamanan, dan pertumbuhan.
          </p>
          <p className="section-copy">
            Kami hadir sebagai partner teknologi jangka panjang, bukan sekadar vendor pembuat aplikasi. Fokus kami adalah
            menyelesaikan masalah bisnis melalui sistem yang aman, scalable, dan sesuai kebutuhan klien.
          </p>
        </div>
        <div className="grid four">
          {ideologyValues.map((item) => (
            <article className="card value-card reveal is-visible" key={item.title}>
              <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaygroundSection() {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title="Ruang Main Nexora" copy="Area bisnis Nexora dirancang untuk membantu perusahaan dari tahap digitalisasi awal sampai kebutuhan sistem enterprise." />
        <div className="grid three">
          {playgroundPillars.map((item) => (
            <article className="card pillar-card reveal is-visible" key={item.title}>
              <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <div className="experience-grid">
          <div className="section-head left reveal is-visible">
            <span className="eyebrow">Experience & Capability</span>
            <h2 className="section-title">Kapabilitas Tim Nexora</h2>
            <p className="section-copy">
              Nexora didukung oleh tim lintas fungsi yang memahami engineering, operasional, desain digital,
              governance, sales, dan proses bisnis.
            </p>
          </div>
          <div className="tech-panel reveal is-visible">
            <h3>Technology Highlight</h3>
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

function CoverageSection() {
  return (
      <section className="section alt pattern-section">
        <AbstractPattern className="services-line-pattern" />
        <div className="container coverage-grid">
          <div className="coverage-map reveal is-visible" aria-hidden="true">
          <svg className="indonesia-map" viewBox="0 0 720 360" fill="none">
            <path d="M55 132C93 105 145 107 181 129C147 150 101 153 55 132Z" />
            <path d="M176 178C227 150 296 151 351 178C299 205 232 206 176 178Z" />
            <path d="M318 123C360 101 414 103 451 126C411 146 359 146 318 123Z" />
            <path d="M386 202C427 177 488 178 532 203C487 231 428 229 386 202Z" />
            <path d="M520 146C572 112 652 116 690 154C637 187 572 181 520 146Z" />
            <path d="M590 228C620 213 662 216 688 236C659 254 620 252 590 228Z" />
            <path d="M265 250C314 235 376 241 420 265C370 286 305 279 265 250Z" />
          </svg>
          <span className="map-dot dot-bandung" />
          <span className="map-dot dot-jakarta" />
          <span className="map-dot dot-surabaya" />
          <span className="map-dot dot-medan" />
          <span className="map-line line-a" />
          <span className="map-line line-b" />
          <span className="map-line line-c" />
          <div className="map-label">Bandung-based, Indonesia-wide</div>
        </div>
        <div className="reveal is-visible">
          <span className="eyebrow">Coverage</span>
          <h2 className="section-title">Cakupan Wilayah Layanan</h2>
          <p className="section-copy">
            Kantor Nexora berada di Bandung, Jawa Barat, dan layanan kami dapat menjangkau UMKM,
            perusahaan menengah, enterprise, institusi pendidikan, dan organisasi di berbagai wilayah Indonesia.
          </p>
          <p className="section-copy">
            Model kerja fleksibel: onsite, remote, hybrid, dan project-based. Nexora dapat mendampingi klien dari
            konsultasi, analisis kebutuhan, desain sistem, development, testing, deployment, hingga support pasca-rilis.
          </p>
          <div className="coverage-models">{coverageModels.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function WhyNexoraSection() {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <SectionHead title="Mengapa Nexora?" copy="Kami memandang teknologi sebagai bagian dari strategi bisnis, bukan sekadar pekerjaan coding." />
        <div className="grid five why-nexora-grid">
          {whyNexora.map((item) => (
            <article className="card why-nexora-card reveal is-visible" key={item}>
              <span className="material-symbols-outlined">task_alt</span>
              <p>{item}</p>
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

function ServicesPreview() {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title="Layanan Unggulan Kami" copy="Keahlian mendalam dalam berbagai domain teknologi untuk mendukung kebutuhan spesifik industri Anda." />
        <div className="grid three">{services.slice(0, 3).map((item) => <ServiceCard key={item.title} item={item} />)}</div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section className="section pattern-section">
      <AbstractPattern className="section-line-pattern" />
      <div className="container">
        <SectionHead title="Products / Solutions" copy="Pilihan sistem siap-kembang untuk UMKM sampai perusahaan, dari operasional harian sampai dashboard manajemen." />
        <div className="grid three">{products.slice(0, 6).map((item) => <ProductCard item={item} compact key={item.title} />)}</div>
        <div className="section-action">
          <Link className="button secondary" to="/products">Lihat Semua Products</Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, compact = false }) {
  const shownFeatures = compact ? item.features.slice(0, 4) : item.features;

  return (
    <article className="card product-card reveal is-visible">
      <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <ul className="feature-list">
        {shownFeatures.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
    </article>
  );
}

function ServiceCard({ item }) {
  return (
    <article className="card reveal is-visible">
      <div className="icon-box"><span className="material-symbols-outlined">{item.icon}</span></div>
      <h3>{item.title}</h3>
      <p>{item.copy}</p>
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

function PortfolioPreview() {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title="Karya Kami" copy="Beberapa contoh proyek sukses yang telah kami selesaikan." />
        <div className="grid three">{portfolios.slice(0, 3).map((item) => <PortfolioCard item={item} key={item.title} />)}</div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }) {
  return (
    <article className="card portfolio-card reveal is-visible">
      <div className="portfolio-image"><img src={item.image} alt={item.title} loading="lazy" /></div>
      <div className="portfolio-content">
        <Tags items={item.tags} />
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
        <Link className="link-arrow" to="/portfolio">Lihat Studi Kasus <span className="material-symbols-outlined">arrow_forward</span></Link>
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

function ServicesPage() {
  return (
    <>
      <PageHero title="Layanan Unggulan Kami" copy="Solusi IT komprehensif yang dirancang untuk mendukung transformasi digital dan pertumbuhan bisnis Anda di era modern." primary />
      <section className="section page-section pattern-section">
        <AbstractPattern className="services-line-pattern" />
        <div className="container"><div className="grid two">{services.map((item) => <ServiceCard item={item} key={item.title} />)}</div></div>
      </section>
      <Cta />
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHero title="Products / Solutions Nexora" copy="Daftar produk dan solusi yang dapat diterapkan untuk UMKM, retail, operasional internal, hingga perusahaan yang membutuhkan sistem terpusat." primary />
      <section className="section page-section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container">
          <div className="grid two">{products.map((item) => <ProductCard item={item} key={item.title} />)}</div>
        </div>
      </section>
      <Cta title="Butuh Produk yang Disesuaikan?" copy="Pilih solusi dasar yang paling dekat dengan kebutuhan Anda, lalu kami bantu sesuaikan flow, role, dan laporan sesuai proses bisnis." />
    </>
  );
}

function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => (filter === 'All' ? portfolios : portfolios.filter((item) => item.category === filter)), [filter]);

  return (
    <>
      <PageHero title="Karya Unggulan Kami" copy="Transformasi digital nyata untuk berbagai industri. Jelajahi studi kasus bagaimana kami membantu perusahaan mencapai efisiensi dan skalabilitas." />
      <section className="section page-section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container">
          <div className="filter-row">
            {['All', 'Fintech', 'Healthcare', 'Logistics', 'Retail'].map((item) => (
              <button className={`filter-button ${filter === item ? 'is-active' : ''}`} type="button" onClick={() => setFilter(item)} key={item}>{item}</button>
            ))}
          </div>
          <div className="grid two">{filtered.map((item) => <PortfolioCard item={item} key={item.title} />)}</div>
        </div>
      </section>
      <Cta title="Siap Mewujudkan Inovasi Teknologi Anda?" copy="Konsultasikan kebutuhan proyek Anda dengan tim ahli kami sekarang." />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero title="Tentang Nexora Technology" copy="Kami menggabungkan strategi, desain, dan engineering untuk membantu perusahaan membangun sistem digital yang lebih efisien." primary />
      <section className="section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container about-grid">
          <div className="reveal is-visible">
            <h2 className="section-title">Mitra Teknologi untuk Bisnis yang Bertumbuh</h2>
            <p className="section-copy">Nexora Technology hadir untuk perusahaan yang membutuhkan partner teknis jangka panjang. Kami membangun fondasi digital yang dapat diukur, dirawat, dan ditingkatkan.</p>
            <p className="section-copy">Pendekatan kami berpusat pada kebutuhan bisnis, keamanan, performa, dan pengalaman pengguna yang sederhana.</p>
          </div>
          <StatsCard />
        </div>
      </section>
      <VisionMissionSection />
      <TeamSection />
      <Cta title="Bangun Sistem yang Lebih Rapi" copy="Kami siap membantu merapikan proses bisnis Anda menjadi solusi digital yang praktis dan scalable." />
    </>
  );
}

function VisionMissionSection() {
  return (
    <>
      <section className="section page-section vision-section">
        <AbstractPattern className="page-hero-line-pattern" />
        <div className="container">
          <div className="vision-highlight reveal is-visible">
            <div>
              <span className="eyebrow">Visi Nexora</span>
              <h2>
                Menjadi Extended IT Partner strategis utama di Indonesia yang membantu pelaku bisnis mencapai
                keunggulan operasional, pengendalian risiko yang kuat, dan pertumbuhan bisnis berkelanjutan melalui
                transformasi digital yang berdampak nyata.
              </h2>
            </div>
            <div className="vision-visual" aria-hidden="true">
              <span className="vision-node node-a" />
              <span className="vision-node node-b" />
              <span className="vision-node node-c" />
              <span className="vision-node node-d" />
              <span className="vision-line vision-line-a" />
              <span className="vision-line vision-line-b" />
              <span className="vision-line vision-line-c" />
              <span className="material-symbols-outlined">hub</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt pattern-section">
        <AbstractPattern className="services-line-pattern" />
        <div className="container">
          <SectionHead title="Misi Nexora" copy="Lima komitmen utama dalam membangun solusi teknologi yang berdampak nyata untuk bisnis." />
          <div className="grid mission-grid">
            {missions.map((mission, index) => (
              <article className="card mission-card reveal is-visible" key={mission.title}>
                <div className="mission-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="icon-box"><span className="material-symbols-outlined">{mission.icon}</span></div>
                <h3>{mission.title}</h3>
                <p>{mission.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TeamSection() {
  return (
    <section className="section alt pattern-section">
      <AbstractPattern className="services-line-pattern" />
      <div className="container">
        <SectionHead title="Tim Manajemen Nexora" copy="Struktur manajemen yang memimpin strategi, teknologi, operasional, dan pengembangan bisnis Nexora." />
        <div className="grid two management-grid">
          {teamMembers.map((member) => (
            <article className="card team-card management-card reveal is-visible" key={member.name}>
              <img className="team-photo" src={member.photo} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-expertise">{member.expertise}</div>
            </article>
          ))}
        </div>
        <div className="functional-team-block">
          <SectionHead title="Tim Pendukung / Fungsional" copy="Unit pendukung yang memastikan delivery, administrasi, keuangan, dan pertumbuhan bisnis berjalan rapi." />
          <div className="grid four">
            {functionalTeams.map((team) => (
              <article className="card functional-card reveal is-visible" key={team.name}>
                <div className="icon-box"><span className="material-symbols-outlined">groups</span></div>
                <h3>{team.name}</h3>
                <p>{team.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryPage() {
  const industries = [
    ['account_balance', 'Fintech & Banking', 'Integrasi pembayaran, dashboard risiko, core system modernization, dan API finansial aman.'],
    ['local_hospital', 'Healthcare', 'Sistem klinik, telemedicine, EMR, dan integrasi layanan kesehatan berbasis data.'],
    ['local_shipping', 'Logistics', 'Tracking armada, optimasi rute, warehouse management, dan automasi operasional.'],
    ['storefront', 'Retail & E-Commerce', 'Platform toko online, inventory, loyalty, dan integrasi ERP/POS.'],
    ['factory', 'Manufacturing', 'Monitoring produksi, quality control, maintenance, dan dashboard operasional.'],
    ['school', 'Education', 'Learning management system, portal akademik, dan dashboard performa pembelajaran.'],
  ];

  return (
    <>
      <PageHero title="Solusi untuk Berbagai Industri" copy="Setiap industri punya proses berbeda. Kami merancang sistem yang mengikuti alur kerja nyata, bukan memaksa bisnis mengikuti software." primary />
      <section className="section page-section pattern-section">
        <AbstractPattern className="section-line-pattern" />
        <div className="container">
          <div className="grid three">
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
      <Cta title="Butuh Solusi untuk Industri Anda?" copy="Ceritakan proses bisnis Anda, kami bantu petakan kebutuhan sistem dan roadmap implementasinya." />
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

function ContactPage() {
  const [note, setNote] = useState('');

  return (
    <>
      <PageHero title="Kontak Nexora Technology" copy="Diskusikan kebutuhan website, sistem internal, integrasi API, atau automasi digital perusahaan Anda." primary />
      <section className="section page-section contact-pattern-section">
        <AbstractPattern className="contact-line-pattern" />
        <div className="container contact-grid">
          <aside className="card contact-card reveal is-visible">
            <h2>Hubungi Kami</h2>
            <p>Isi form atau kontak langsung melalui email, telepon, dan alamat kantor berikut.</p>
            <ContactList />
          </aside>
          <form className="card form reveal is-visible" onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            setNote(`Terima kasih, ${data.get('name') || 'Kak'}. Tim Nexora akan segera menghubungi Anda.`);
            event.currentTarget.reset();
          }}>
            <Field id="name" label="Nama" placeholder="Nama Anda" required />
            <Field id="email" label="Email" type="email" placeholder="email@perusahaan.com" required />
            <Field id="company" label="Perusahaan" placeholder="Nama perusahaan" />
            <div className="field">
              <label htmlFor="service">Layanan</label>
              <select id="service" name="service">
                {services.map((item) => <option key={item.title}>{item.title}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="budget">Budget</label>
              <select id="budget" name="budget">
                <option>Rp 5JT - 15JT</option>
                <option>Rp 15JT - 50JT</option>
                <option>Rp 50JT+</option>
                <option>Belum tahu</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" placeholder="Ceritakan kebutuhan proyek Anda" required />
            </div>
            <div className="form-note">{note}</div>
            <button className="button" type="submit">Kirim Pesan</button>
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

function ContactList() {
  const items = [
    ['mail', 'Email', <a href={`mailto:${contact.email}`}>{contact.email}</a>],
    ['phone', 'Telepon', <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>],
    ['chat', 'WhatsApp', <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">{contact.whatsapp}</a>],
    ['location_on', 'Alamat Kantor', <><strong className="contact-company">{contact.company}</strong>{contact.address}</>],
    ['schedule', 'Jam Operasional', contact.hours],
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
        Buka Lokasi di Google Maps
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

function Cta({ title = 'Siap untuk Transformasi Digital?', copy = 'Diskusikan kebutuhan proyek Anda dengan tim ahli kami dan temukan solusi IT terbaik untuk perusahaan Anda.' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta reveal is-visible">
          <h2>{title}</h2>
          <p>{copy}</p>
          <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Konsultasi Gratis</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand footer-logo" to="/">
              <img className="brand-logo footer-brand-logo" src="/logonexora-navbar.png" alt="Nexora Technology" />
            </Link>
            <p>Mitra teknologi andal untuk transformasi digital perusahaan. Kami menghadirkan sistem yang rapi, aman, dan siap berkembang.</p>
            <div className="footer-socials">
              <a href="mailto:ITConsultant@nexora-technology.id" aria-label="Email Nexora"><span className="material-symbols-outlined">mail</span></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Nexora"><span className="material-symbols-outlined">chat</span></a>
              <a href="/contact" aria-label="Lokasi Nexora"><span className="material-symbols-outlined">location_on</span></a>
            </div>
          </div>

          <div className="footer-card">
            <h4>Perusahaan</h4>
            <div className="footer-links">
              <Link to="/about">Tentang Kami</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/industry">Industri</Link>
            </div>
          </div>

          <div className="footer-card">
            <h4>Layanan</h4>
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
            <h4>Kontak & Alamat</h4>
            <p><span className="material-symbols-outlined">location_on</span><span><strong>{contact.company}</strong><br />{contact.address}</span></p>
            <p><span className="material-symbols-outlined">mail</span><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p><span className="material-symbols-outlined">phone</span><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></p>
            <p><span className="material-symbols-outlined">schedule</span>{contact.hours}</p>
            <a className="button footer-map-button" href={contact.mapsUrl} target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">map</span>
              Lihat di Google Maps
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

function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container reveal is-visible">
        <strong>404</strong>
        <h1 className="section-title">Halaman tidak ditemukan</h1>
        <p className="section-copy">Alamat yang Anda buka belum tersedia atau sudah dipindahkan.</p>
        <Link className="button" to="/">Kembali ke Beranda</Link>
      </div>
    </section>
  );
}

export default App;
