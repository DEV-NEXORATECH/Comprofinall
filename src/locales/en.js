export const en = {
  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: 'Free Consultation',
    menuLabel: 'Open navigation menu',
    navLabel: 'Main navigation',
    routeLabels: {
      '/': 'Home',
      '/about': 'About',
      '/services': 'Services',
      '/portfolio': 'Portfolio',
      '/faq': 'FAQ',
      '/contact': 'Contact',
    },
  },

  footer: {
    ctaEyebrow: 'Get in Touch',
    ctaTitle: 'Empowering Growth Through Technology.',
    ctaButton: 'Contact Nexora',
    aboutText: 'Extended IT Partner for strategic IT consulting, custom systems, enterprise application integration, and comprehensive digital transformation.',
    menuTitle: 'Menu',
    servicesTitle: 'Services',
    servicesLinks: [
      { label: 'SaaS for SMEs', pillar: 'SaaS untuk Skala UMKM' },
      { label: 'Custom Products', pillar: 'Produk Kustom' },
      { label: 'IT Consulting', pillar: 'IT Consulting, Training & Diskusi' },
      { label: 'Cyber Security', pillar: 'Cyber Security & Data Awareness' },
    ],
    contactTitle: 'Contact',
    copyright: '© 2026 Nexora Technology. All rights reserved.',
    tagline: 'Elevating Businesses, Empowering Innovation.',
    socialLinkedin: 'LinkedIn',
    socialInstagram: 'Instagram',
    socialEmail: 'Email',
  },

  hero: {
    eyebrow: 'Company Profile',
    title: 'Elevating Businesses, Empowering Innovation.',
    subtitle: 'PT. Nexora Teknologi Nusantara comes as an Extended IT Partner that helps organizations translate business challenges into high-value digital solutions with real impact.',
    primaryCta: 'Free Consultation',
    secondaryCta: 'View Service Structure',
    trustedLabel: 'Trusted IT Partner',
    trustedDesc: 'Strategic IT consulting, custom systems, integration, and digital transformation.',
    ownershipLabel: 'Operational Ownership',
    ownershipDesc: 'End-to-end assistance from planning to post-release.',
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
    title: 'Content organized by company profile sections.',
    subtitle: 'The homepage serves as a concise entry point. Details about the company, service structure, portfolio, FAQ, and official contacts are available on separate pages.',
    cards: [
      { icon: 'groups', title: 'About Us', desc: 'Profile of PT. Nexora Teknologi Nusantara as an Extended IT Partner.', href: '/about' },
      { icon: 'design_services', title: 'Service Structure', desc: 'SaaS for SMEs, proposal-based custom products, and IT consulting.', href: '/services' },
      { icon: 'workspaces', title: 'Portfolio', desc: 'Portfolio categories and case studies aligned with Nexora\'s service structure.', href: '/portfolio' },
      { icon: 'forum', title: 'Contact Us', desc: 'Address, email, website, and official Nexora contact channels.', href: '/contact' },
    ],
  },

  proof: {
    eyebrow: 'Why Nexora',
    title: 'What makes Nexora different?',
    stats: [
      { value: 3, suffix: '', label: 'Main Service Lines' },
      { value: 4, suffix: '', label: 'Core Leadership Pillars' },
      { value: 5, suffix: '', label: 'Transformation Values & Strengths' },
      { value: 100, suffix: '%', label: 'One-Stop Partner Assistance' },
    ],
    differences: [
      { icon: 'analytics', title: 'Data-driven execution', desc: 'Every decision is made based on real needs, not just visual appeal.' },
      { icon: 'speed', title: 'Speed with structure', desc: 'Design and flow are built to be fast, yet comfortable for internal teams and stakeholders.' },
      { icon: 'groups', title: 'End-to-end delivery', desc: 'From discovery to support, everything is organized for a polished result.' },
    ],
  },

  testimonials: {
    eyebrow: 'Testimonials',
    title: 'Trusted by Teams Who Need Real Results',
    subtitle: 'Brief feedback from clients who needed clean, responsive systems that feel premium in daily use.',
    items: [
      { name: 'Alya Putri', role: 'Head of Operations', company: 'Retail Distribution', quote: 'Nexora helped us streamline approvals and operational dashboards. Our team makes faster decisions without back-and-forth manual checks.' },
      { name: 'Raka Pratama', role: 'Founder', company: 'Logistics Platform', quote: 'The process was clear from the start. They didn\'t just focus on visuals — they truly understood our business flow and integration needs.' },
      { name: 'Dewi Laras', role: 'Business Director', company: 'Professional Services', quote: 'The website and internal systems feel premium, lightweight, and easy for non-technical teams to use.' },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Choose the plan that fits your needs.',
    subtitle: 'Clean and easy-to-read structure, flexible for project-based presentations or monthly support.',
    toggleProject: 'Project Based',
    toggleMonthly: 'Monthly Support',
    badge: 'Most Popular',
    button: 'Request Quote',
    note: 'Active mode: {{mode}}. You can switch modes anytime without changing the plan structure.',
    plans: [
      {
        name: 'Basic',
        projectPrice: 'Rp 18jt',
        monthlyPrice: 'Rp 3,5jt',
        period: '/project',
        monthlyPeriod: '/month',
        description: 'For company profiles, landing pages, or digital needs that need quick polishing.',
        features: ['Modern Landing Page', 'Mobile Responsive', 'SEO-ready Structure', 'Initial Support'],
      },
      {
        name: 'Professional',
        projectPrice: 'Rp 45jt',
        monthlyPrice: 'Rp 6,5jt',
        period: '/project',
        monthlyPeriod: '/month',
        description: 'For businesses needing custom systems, dashboards, and more serious integrations.',
        features: ['Custom Web Application', 'API Integration', 'Dashboard & Analytics', 'Priority Support', 'Admin Training'],
        featured: true,
      },
      {
        name: 'Enterprise',
        projectPrice: 'Custom',
        monthlyPrice: 'Custom',
        period: '/needs',
        monthlyPeriod: '/support',
        description: 'For large-scale implementation, multi-team, and end-to-end delivery needs.',
        features: ['Full-stack Ecosystem', 'Security Assessment', 'Dedicated DevOps Team', '24/7 Maintenance', 'Source Code Ownership'],
      },
    ],
  },

  aboutPage: {
    hero: {
      eyebrow: 'About Us',
      title: 'PT. Nexora Teknologi Nusantara',
      subtitle: 'In an ever-evolving digital era, businesses need more than just technology. Nexora is here as a one-stop partner translating business challenges into impactful solutions.',
      primaryCta: 'View Services',
      secondaryCta: 'Contact Us',
      imageAlt: 'Tech team discussing digital product strategy',
    },
    detail: {
      eyebrow: 'How We Work',
      title: 'Core values that form the foundation of Nexora\'s work.',
      subtitle: 'We combine governance, engineering excellence, business innovation, and ownership over our clients\' digital transformation success.',
      items: [
        { icon: 'gavel', title: 'Integrity & Governance', desc: 'Upholding integrity, transparency, accountability, and secure internal governance.' },
        { icon: 'engineering', title: 'Engineering Excellence', desc: 'Delivering high-quality, secure technology solutions ready for long-term growth.' },
        { icon: 'lightbulb', title: 'Business-Driven Innovation', desc: 'Every solution is designed to improve operational efficiency, decisions, and measurable business impact.' },
        { icon: 'support_agent', title: 'Operational Ownership', desc: 'Nexora accompanies every step of the technology journey with responsive and sustainable support.' },
      ],
      imageAlt: 'Professional meeting discussing digital roadmap',
    },
  },

  about: {
    eyebrow: 'About Us',
    title: 'Extended IT Partner for impactful digital transformation.',
    subtitle: 'Nexora combines modern innovation, deep business analysis, and mature governance to create maximum, secure, and sustainable operational efficiency.',
    visi: { title: 'Vision', desc: 'To become the leading strategic Extended IT Partner in Indonesia, guiding businesses toward operational excellence and sustainable growth through digital transformation.' },
    misi: { title: 'Mission', desc: 'To build adaptive custom technology solutions, optimize business processes, provide secure architecture, and become a catalyst in Indonesia\'s digital ecosystem.' },
  },

  servicesPage: {
    hero: {
      eyebrow: 'Services',
      title: 'Our Service Structure',
      subtitle: 'Nexora understands that every business has different growth stages and technology needs. That\'s why we designed three flexible main service lines.',
      primaryCta: 'Request Quote',
      secondaryCta: 'View Portfolio',
      imageAlt: 'Digital team working in a modern meeting room',
    },
    detail: {
      eyebrow: 'Solution Areas',
      title: 'Three service lines tailored to business scale and complexity.',
      subtitle: 'From affordable SaaS products, proposal-based custom development, to targeted IT consulting and training.',
      items: [
        { icon: 'storefront', title: 'SaaS for SMEs', desc: 'Ready-to-use subscription-based products — digital cashier, inventory, bookkeeping, lightweight CRM, attendance, and report dashboards. Affordable, scalable, with no large infrastructure costs.' },
        { icon: 'terminal', title: 'Custom Products', desc: 'Tailor-made system development based on official proposals — enterprise apps, web/mobile/cloud, workflow automation, BI dashboards, API integration, backend, and system foundation tailored to specific client needs.' },
        { icon: 'school', title: 'Consulting & Training', desc: 'Strategic consultation, training, and assistance for digital transformation, system optimization, data analytics, new technology adoption, system architecture, and basic cybersecurity.' },
      ],
      imageAlt: 'Developer building a web application',
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Technology solutions that feel modern and ready to use.',
    subtitle: 'Every service is structured to be easy to understand, quick to execute, while remaining premium for client and stakeholder presentations.',
    relatedLabel: 'Related services:',
    cards: [
      {
        title: 'SaaS untuk Skala UMKM',
        desc: 'Ready-to-use Software-as-a-Service products to help SMEs manage daily operations more efficiently.',
        isPillar: true,
        detail: 'A SaaS application ecosystem designed specifically for SMEs — digital cashier, inventory management, simple bookkeeping, lightweight CRM, attendance, and business report dashboards. All accessible with an affordable subscription model without large infrastructure costs.',
        related: ['Aplikasi Kasir & POS', 'Manajemen Inventaris & Stok'],
        tone: 'light', icon: 'storefront', tag: 'Subscription',
      },
      {
        title: 'Aplikasi Kasir & POS',
        desc: 'Cashier and point-of-sales solution that can be developed as part of the SME SaaS ecosystem.',
        tone: 'primary', icon: 'point_of_sale', tag: 'SME tools',
        bullets: ['Daily transactions', 'Simple reports', 'Sales management'],
      },
      {
        title: 'Manajemen Inventaris & Stok',
        desc: 'Stock and inventory recording system to help small businesses track items, movements, and operational needs.',
        tone: 'surface', icon: 'inventory_2', tag: 'Operational',
      },
      {
        title: 'Produk Kustom',
        desc: 'Tailor-made system development based on official proposals and quotations, customized to specific client needs.',
        isPillar: true,
        detail: 'For more complex and specific needs, we develop tailor-made systems based on official proposals and quotations. Scope includes enterprise & business applications (web, mobile, cloud-based), business process automation, workflow systems, system integration, BI dashboards, reporting, APIs, backend, and system foundation.',
        related: ['Enterprise & Business Applications', 'Business Process Automation'],
        tone: 'secondary', icon: 'terminal', tag: 'Quotation based',
      },
      {
        title: 'Enterprise & Business Applications',
        desc: 'Enterprise-scale business applications, web, mobile, cloud-based apps, and expandable internal systems.',
        tone: 'light', icon: 'business_center', tag: 'Enterprise',
      },
      {
        title: 'Business Process Automation',
        desc: 'Business process automation, workflow systems, integration systems, BI dashboards, reporting, APIs, backend, and system foundation.',
        tone: 'primary', icon: 'account_tree', tag: 'Automation',
      },
      {
        title: 'IT Consulting, Training & Diskusi',
        desc: 'Consultation, training, assistance, and discussion sessions for digital transformation strategy, system optimization, data analytics, and basic security.',
        isPillar: true,
        detail: 'We help businesses develop targeted digital transformation strategies through consultation, training, and assistance sessions. Topics include digital transformation roadmaps, existing system optimization, data analytics, new technology adoption, and technical discussions on system architecture and basic cybersecurity.',
        related: [],
        tone: 'surface', icon: 'school', tag: 'Session based',
      },
      {
        title: 'Cyber Security & Data Awareness',
        desc: 'Limited consultation and training topics on data governance, basic data security awareness, and cybersecurity.',
        isPillar: true,
        detail: 'We provide limited consultation and training on data governance, data security awareness, and fundamental cybersecurity. This service helps businesses understand digital security risks and build a strong data protection foundation from the start.',
        related: [],
        tone: 'secondary', icon: 'shield_lock', tag: 'Governance',
      },
    ],
  },

  portfolioPage: {
    hero: {
      eyebrow: 'Portfolio',
      title: 'Portfolio & Case Studies',
      subtitle: 'Nexora designs and integrates technology systems to strengthen governance, minimize operational risks, and drive measurable efficiency.',
      primaryCta: 'Free Consultation',
      secondaryCta: 'FAQ',
      imageAlt: 'Analytics dashboard on a laptop screen',
    },
    detail: {
      eyebrow: 'Impact',
      title: 'Portfolio categories follow Nexora\'s service structure.',
      subtitle: 'Case studies and project examples will be updated according to Nexora\'s latest portfolio, as directed by the company profile.',
      items: [
        { icon: 'storefront', title: 'SaaS for SMEs', desc: 'Ready-to-use Software-as-a-Service products helping SMEs manage cashier, inventory, bookkeeping, lightweight CRM, and business report dashboards — all with an affordable subscription model and no large infrastructure costs.' },
        { icon: 'terminal', title: 'Custom Products', desc: 'Tailor-made system development based on official proposals and quotations — covering enterprise applications, web/mobile/cloud apps, workflow automation, BI dashboards, API integration, and system foundation customized to specific client needs.' },
        { icon: 'forum', title: 'IT Consulting & Discussion', desc: 'Consultation, training, and strategic assistance sessions for digital transformation roadmaps, existing system optimization, data analytics, new technology adoption, and technical discussions on system architecture and basic cybersecurity.' },
      ],
      imageAlt: 'Professional viewing business performance reports',
    },
  },

  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Tangible traces of our work.',
    subtitle: 'We keep the design clean while leaving room for results, business context, and compelling storytelling.',
    cta: 'View Case Study',
    prevPage: 'Previous',
    nextPage: 'Next',
    pageOf: 'Page {{current}} of {{total}}',
    items: [
      {
        title: 'BISA Operational Platform',
        desc: 'Integrated approval, KPI, and SSO platform for business operational efficiency.',
        image: '/bisa-platform.png',
        tags: ['Platform', 'Approval', 'KPI'],
      },
      {
        title: 'Gading Mitra Medika Clinic Website',
        desc: 'Professional landing page for a clinic with service info, contact, and doctor profiles.',
        image: '/gmm.png',
        tags: ['Clinic', 'Landing Page', 'Health'],
      },
      {
        title: 'Pasabar Tourism Website',
        desc: 'West Java tourism promotion platform with interactive gallery and complete information.',
        image: '/pasabar.png',
        tags: ['Tourism', 'Destination', 'West Java'],
      },
      {
        title: 'All Role AI Landing Page',
        desc: 'AI product promotion page with modern design and conversion-focused layout.',
        image: '/pasabar.png',
        tags: ['AI', 'Landing Page', 'Product'],
      },
      {
        title: 'Company HRIS Dashboard',
        desc: 'HRIS admin dashboard for employee management, attendance, payroll, and HR reports.',
        image: '/hris.png',
        tags: ['HRIS', 'Dashboard', 'Enterprise'],
      },
      {
        title: 'SOP & CheckFlow Dashboard',
        desc: 'Digital SOP management system with integrated approval flow and compliance monitoring.',
        image: '/sop.png',
        tags: ['SOP', 'Workflow', 'Approval'],
      },
      {
        title: 'Moneyku Finance App',
        desc: 'Finance management application for transaction recording, budgeting, and financial reports.',
        image: '/moneyku.png',
        tags: ['Finance', 'App', 'Management'],
      },
    ],
  },

  faqPage: {
    hero: {
      eyebrow: 'Help Center',
      title: 'Frequently Asked Questions',
      subtitle: 'Summary of questions compiled from Nexora\'s company profile to help potential clients understand our position, service structure, and working model.',
      primaryCta: 'Chat WhatsApp',
      secondaryCta: 'View Services',
      imageAlt: 'Consultation discussion between team and client',
    },
    detail: {
      eyebrow: 'Before You Start',
      title: 'First, understand Nexora\'s service structure.',
      subtitle: 'This FAQ helps you choose the right service line based on your scale, budget, and business complexity.',
      items: [
        { icon: 'fact_check', title: 'Service Lines', desc: 'Understand the difference between SME SaaS, custom products, and consulting & training.' },
        { icon: 'payments', title: 'Pricing Model', desc: 'SaaS is subscription-based, custom is proposal-based, consulting is session or package-based.' },
        { icon: 'support', title: 'Support', desc: 'Nexora emphasizes responsive and sustainable technical support as an Extended IT Partner.' },
      ],
      imageAlt: 'Team explaining project plan',
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Most frequently asked questions.',
    subtitle: 'Concise and to the point, helping you understand Nexora\'s workflow before we talk further.',
    items: [
      {
        q: 'What is Nexora\'s position as a technology partner?',
        a: 'Nexora comes as an Extended IT Partner or one-stop partner that helps translate business challenges into impactful digital solutions.',
      },
      {
        q: 'What are Nexora\'s main service lines?',
        a: 'There are three main lines: SaaS for SMEs, proposal-based custom products, and IT consulting, training, and discussion with limited scope.',
      },
      {
        q: 'How does Nexora\'s pricing model work?',
        a: 'SaaS is subscription-based, custom products are based on official proposals according to feature complexity, and consulting is session or package-based.',
      },
      {
        q: 'Does Nexora serve both SMEs and enterprises?',
        a: 'Yes. The service structure is flexible to be adjusted to the scale, budget, and complexity of each business segment\'s needs.',
      },
      {
        q: 'What is the focus of Nexora\'s consulting and training?',
        a: 'Topics include digital transformation roadmap, system onboarding and optimization, basic data analytics, data governance, new technology adoption, and basic cybersecurity.',
      },
      {
        q: 'Is the portfolio on the website final?',
        a: 'The PDF company profile states that case studies and project examples will be added according to Nexora\'s latest portfolio.',
      },
    ],
  },

  contactPage: {
    hero: {
      eyebrow: 'Contact',
      title: 'Contact & Closing',
      subtitle: 'Technology is no longer just an operational instrument — it is the foundation for strengthening governance, optimizing efficiency, and driving sustainable growth.',
      primaryCta: 'Send Email',
      secondaryCta: 'Website',
      imageAlt: 'Digital business consultation with client',
    },
    detail: {
      eyebrow: 'Contact Flow',
      title: 'Reach Nexora through official channels.',
      subtitle: 'As an Extended IT Partner, Nexora is ready to accompany organizations in translating business challenges into high-value digital solutions.',
      items: [
        { icon: 'edit_note', title: 'Choose your service line', desc: 'Select whether your needs fit better with SME SaaS, custom products, or consulting sessions.' },
        { icon: 'calendar_month', title: 'Share your business challenges', desc: 'Nexora helps translate management, architecture, and operational challenges into digital solutions.' },
        { icon: 'request_quote', title: 'Proceed to proposal', desc: 'For custom products, pricing and timeline are determined through initial consultation and official proposal.' },
      ],
      imageAlt: 'Professional team discussing',
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact Nexora and start a clear conversation.',
    subtitle: 'Leave your needs, choose your send channel, and we\'ll help direct you to the most relevant path.',
    form: {
      feedback: 'Fill in this form, choose WhatsApp or Email, then send.',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@company.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'Your contact number',
      subjectLabel: 'Subject',
      subjectOptions: ['SaaS for SMEs', 'Custom Products', 'IT Consulting & Training', 'Cyber Security / Data Awareness'],
      channelLabel: 'Send to',
      channelSales: 'Sales Email',
      channelAdmin: 'Admin Email',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Tell us about your technology needs...',
      sending: 'Preparing...',
      sendSales: 'Send Sales Email',
      sendAdmin: 'Send Admin Email',
      errors: {
        name: 'Name is required.',
        email: 'Email is required.',
        message: 'Message is required.',
        general: 'Please check the inputs that are still empty or invalid.',
      },
      messages: {
        sending: 'Preparing your message...',
        emailReady: 'Admin email draft is ready. Check your email app.',
        salesReady: 'Sales email draft is ready. Office/sales number can be added after finalization.',
      },
    },
    panel: {
      title: 'Contact Information',
      website: 'Website',
      sendEmail: 'Send Email',
      mapLink: 'Open in Google Maps',
    },
    details: [
      { icon: 'location_on', title: 'Office Address', value: 'Jl. Depok 17, Antapani, Bandung - West Java' },
      { icon: 'mail', title: 'Email', value: 'admin@nexora-technology.id | sales@nexora-technology.id' },
      { icon: 'language', title: 'Website', value: 'www.nexora-technology.id' },
      { icon: 'call', title: 'Phone', value: '[Office / Sales Contact Number]' },
    ],
  },

  notFound: {
    code: '404',
    title: 'Page not found.',
    subtitle: 'The page you are looking for is not available. Use the navigation above to return to the main sections.',
    primaryCta: 'Back to Home',
    secondaryCta: 'Contact Us',
  },
};
