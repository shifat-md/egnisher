export const portfolioCategories = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
  "E-commerce",
  "UI/UX"
];

export const portfolioData = [
  {
    id: "cloudscale-analytics",
    slug: "cloudscale-analytics-dashboard",
    title: "CloudScale Real-Time Analytics Dashboard",
    category: "Full-Stack",
    shortDescription: "A high-throughput telemetry and analytics platform processing 50k events/sec with reactive visualizations.",
    clientType: "Sample Case Study (Demo Client)",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    overview: "CloudScale needed a unified web dashboard to aggregate real-time infrastructure metrics across multiple cloud providers with zero UI stutter.",
    challenge: "Handling large data streams in the browser caused DOM thrashing and high CPU utilization on client devices.",
    solution: "We implemented batched WebSocket message updates, virtualized table rendering, and decoupled canvas charting using modern React memoization.",
    results: [
      "99.98% uptime during peak event windows",
      "Sub-100ms dashboard latency for live telemetry updates",
      "50% reduction in client-side memory footprint"
    ],
    liveUrl: "https://demo.egnisher.agency/cloudscale",
    githubUrl: "https://github.com/egnisher/cloudscale-demo"
  },
  {
    id: "nordic-craft",
    slug: "nordic-craft-ecommerce",
    title: "NordicCraft Headless E-commerce Store",
    category: "E-commerce",
    shortDescription: "A minimalist, hyper-fast e-commerce experience with multi-currency support and seamless checkout.",
    clientType: "Sample Case Study (Demo Client)",
    featured: true,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "Stripe API", "Shopify API", "Vite"],
    overview: "NordicCraft required a modern storefront that matched their minimalist design ethos while providing rapid page transitions and instant cart updates.",
    challenge: "Legacy monolithic commerce plugins were bloated, yielding slow 4.2s mobile load times and high drop-off rates.",
    solution: "Built a headless frontend communicating with a headless commerce backend, pre-rendering static routes and caching product catalogs.",
    results: [
      "LCP reduced from 4.2s down to 1.1s",
      "38% boost in mobile checkout completion rates",
      "100% Google Lighthouse accessibility score"
    ],
    liveUrl: "https://demo.egnisher.agency/nordiccraft",
    githubUrl: "https://github.com/egnisher/nordic-craft-demo"
  },
  {
    id: "pulseflow-crm",
    slug: "pulseflow-developer-portal",
    title: "PulseFlow API Management Portal",
    category: "Frontend",
    shortDescription: "Interactive API playground, documentation browser, and key management console for developers.",
    clientType: "Sample Case Study (Demo Client)",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "OpenAPI", "PrismJS", "React Router"],
    overview: "A developer portal allowing engineers to inspect endpoint schemas, test requests with live sandboxes, and manage API keys.",
    challenge: "API documentation had become desynchronized from the actual backend code, causing confusion and elevated support tickets.",
    solution: "Engineered an automated pipeline parsing OpenAPI 3.1 specifications into interactive React documentation with integrated playground runners.",
    results: [
      "Zero manual documentation update overhead",
      "Interactive code sample generator across 5 programming languages",
      "Self-service onboarding reducing support tickets by 45%"
    ],
    liveUrl: "https://demo.egnisher.agency/pulseflow",
    githubUrl: "https://github.com/egnisher/pulseflow-demo"
  },
  {
    id: "aurora-pay",
    slug: "aurora-payment-orchestrator",
    title: "Aurora Microservices Payment Engine",
    category: "Backend",
    shortDescription: "A fault-tolerant payment orchestration backend handling cross-border settlements and reconciliation.",
    clientType: "Sample Case Study (Demo Client)",
    featured: false,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    overview: "Aurora required an idempotent, secure microservice layer to coordinate payments across Stripe, Adyen, and regional banking rails.",
    challenge: "Double-spending risks and transient network timeouts during multi-step bank authorizations.",
    solution: "Constructed distributed transaction state machines with distributed Redis locks, strict idempotency keys, and automated compensation rollbacks.",
    results: [
      "Zero duplicate charge occurrences across millions of test runs",
      "Automatic failover between payment providers in < 250ms",
      "Full audit trail compliance meeting financial regulation benchmarks"
    ],
    liveUrl: "https://demo.egnisher.agency/aurora",
    githubUrl: "https://github.com/egnisher/aurora-payment-demo"
  },
  {
    id: "zenith-design-system",
    slug: "zenith-enterprise-design-system",
    title: "Zenith Multi-Brand Design System",
    category: "UI/UX",
    shortDescription: "A comprehensive React component library and token architecture serving 4 cross-platform products.",
    clientType: "Sample Case Study (Demo Client)",
    featured: false,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "Figma", "Storybook", "WCAG 2.1 AA"],
    overview: "Zenith's suite of applications suffered from brand drift and duplicated frontend engineering efforts.",
    challenge: "Inconsistent UI patterns, disparate accessibility standards, and slow design-to-production cycles.",
    solution: "Crafted 40+ atomic components with accessible ARIA primitives, dark/light theme tokens, and thorough usage guidelines.",
    results: [
      "Engineers cut prototype-to-production time by 60%",
      "Consistent 100% WCAG 2.1 AA keyboard and contrast compliance",
      "Universal design token repository shared by design and engineering teams"
    ],
    liveUrl: "https://demo.egnisher.agency/zenith",
    githubUrl: "https://github.com/egnisher/zenith-system-demo"
  },
  {
    id: "medivault-portal",
    slug: "medivault-telehealth-portal",
    title: "MediVault Telehealth Patient Portal",
    category: "Full-Stack",
    shortDescription: "Secure HIPAA-compliant healthcare patient management portal with appointment booking and real-time chat.",
    clientType: "Sample Case Study (Demo Client)",
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "Tailwind CSS"],
    overview: "A patient portal enabling secure video consultations, encrypted document exchange, and automated SMS reminders.",
    challenge: "Strict healthcare compliance requirements, end-to-end encryption needs, and accessibility for elderly patients.",
    solution: "Engineered role-based access control, encrypted at-rest file storage, and an accessible, high-contrast user interface.",
    results: [
      "Streamlined intake workflow saving clinics 15 minutes per patient",
      "Simple, one-click WebRTC tele-consultation requiring zero patient downloads",
      "Encrypted cloud architecture passing rigorous security audits"
    ],
    liveUrl: "https://demo.egnisher.agency/medivault",
    githubUrl: "https://github.com/egnisher/medivault-demo"
  }
];
