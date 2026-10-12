export const servicesData = [
  {
    id: "full-stack",
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    shortDescription: "End-to-end web applications built with modern frameworks, clean code, and fast performance.",
    fullDescription: "Egnisher builds responsive, dependable web applications combining modern frontend user experiences with reliable backend services. As full-stack developers, we handle all layers of your project from database setup to pixel-perfect UI.",
    icon: "FaLayerGroup",
    features: [
      "Custom single-page and full-stack web applications",
      "Smooth integration between frontend interfaces and backend APIs",
      "State management, form handling, and user authentication",
      "Deployment setups, build pipelines, and hosting configuration"
    ],
    benefits: [
      "Single team handling both frontend and backend for quick feature delivery",
      "No communication disconnect between separate frontend and backend vendors",
      "Maintainable, clean codebases designed for growing business needs"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Docker"],
    approach: "We start by clarifying your project needs, structuring data models, setting up clean API endpoints, and building accessible, responsive frontends."
  },
  {
    id: "frontend",
    slug: "frontend-development",
    title: "Frontend Development",
    shortDescription: "Interactive, pixel-perfect, accessible user interfaces built with React, modern CSS, and fast load times.",
    fullDescription: "Our frontend development focuses on creating fluid user experiences with fast load times, smooth interactions, strict accessibility standards (WCAG 2.1), and responsive layouts that look great on any device.",
    icon: "FaCode",
    features: [
      "Responsive, mobile-first design implementation",
      "Reusable component systems and modular styling",
      "Core Web Vitals optimization and fast page rendering",
      "Cross-browser testing and accessibility compliance"
    ],
    benefits: [
      "Higher conversion rates through fast load times and intuitive UX",
      "Consistent brand experience across mobile, tablet, and desktop",
      "Maintainable codebase with modular React components"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / Semantic CSS"],
    approach: "We build modular, tested components with clear state boundaries, verifying keyboard navigation, screen reader compatibility, and responsive design."
  },
  {
    id: "backend",
    slug: "backend-development",
    title: "Backend Development",
    shortDescription: "Secure, reliable, and scalable backend services, custom APIs, and background task processing.",
    fullDescription: "We build dependable backend applications to handle user data, business logic, authentication, and database transactions cleanly and securely.",
    icon: "FaServer",
    features: [
      "RESTful and GraphQL API development",
      "User authentication, sessions, and secure access control",
      "Background task processing and automated routines",
      "Structured logging, error tracking, and health checks"
    ],
    benefits: [
      "Reliable uptime and dependable transaction processing",
      "Modern security standards preventing common web vulnerabilities",
      "Clean server code that scales smoothly as traffic increases"
    ],
    technologies: ["Node.js", "Express", "Python", "Redis", "PostgreSQL", "Cloud Hosting"],
    approach: "We design clean controllers and routes, implement robust validation middleware, and write automated tests for critical business logic."
  },
  {
    id: "api",
    slug: "api-development-and-integration",
    title: "API Development and Integration",
    shortDescription: "Clean, documented RESTful and GraphQL APIs plus smooth integration with third-party SaaS and payment gateways.",
    fullDescription: "Connect your web application with external services, payment gateways, and third-party tools. We build well-documented APIs with clear endpoints, rate limits, and error handling.",
    icon: "FaExchangeAlt",
    features: [
      "Clear API documentation and interactive test examples",
      "Payment gateway integrations (Stripe, PayPal, etc.)",
      "CRM, email, and SaaS webhook connections",
      "Request validation and error logging"
    ],
    benefits: [
      "Simple integration for external clients and mobile apps",
      "Reliable transaction processing with predictable endpoints",
      "Automated real-time data exchange across your tools"
    ],
    technologies: ["REST", "GraphQL", "Webhooks", "Stripe API", "JSON", "Node.js"],
    approach: "Every endpoint is built with clear data formats, validation rules, descriptive error codes, and practical documentation."
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    shortDescription: "High-converting online store platforms with secure checkout, inventory management, and fast catalog search.",
    fullDescription: "From custom storefronts to headless e-commerce builds, we develop modern shopping experiences with quick page loads and smooth checkout flows.",
    icon: "FaShoppingCart",
    features: [
      "Custom catalog, cart, and multi-currency checkout workflows",
      "Inventory tracking and automated stock alerting",
      "Search indexing with faceted filtering",
      "Secure payment processing integration"
    ],
    benefits: [
      "Reduced cart abandonment with optimized checkout flows",
      "Instant page responses driving higher search engine rankings",
      "Centralized order management and shipping integrations"
    ],
    technologies: ["React", "Shopify Storefront API", "Stripe", "Next.js / Vite", "Tailwind CSS"],
    approach: "We map customer journey touchpoints, benchmark checkout speed, eliminate friction points, and safeguard customer data."
  },
  {
    id: "uiux",
    slug: "ui-ux-implementation",
    title: "UI/UX Implementation",
    shortDescription: "Translating wireframes and Figma designs into interactive, accessible, and intuitive digital interfaces.",
    fullDescription: "We bridge the gap between Figma designs and functional frontend code. Our developers ensure every button, transition, and layout reflects design specifications accurately.",
    icon: "FaPaintBrush",
    features: [
      "Figma-to-React pixel-accurate translation",
      "Interactive prototyping and component design tokens",
      "Design systems with reusable guidelines and tokens",
      "Responsive typography and fluid spacing grids"
    ],
    benefits: [
      "Consistency across all digital customer touchpoints",
      "Accelerated feature releases through reusable components",
      "Delightful, frictionless user interactions"
    ],
    technologies: ["Figma", "Tailwind CSS", "CSS Variables", "Accessible UI Patterns", "React"],
    approach: "We establish a shared token language (colors, spacing, shadows, typography) and test across multiple resolutions and color modes."
  },
  {
    id: "database",
    slug: "database-design",
    title: "Database Design & Optimization",
    shortDescription: "Structured relational and NoSQL database schemas engineered for data integrity, low latency, and scaling.",
    fullDescription: "A well-structured database is essential for any web application. We design clean schemas, write indexing strategies, execute seamless data migrations, and optimize queries.",
    icon: "FaDatabase",
    features: [
      "Relational (PostgreSQL, MySQL) and NoSQL schemas",
      "Index optimization and query performance tuning",
      "Data migration scripts and automated schema versioning",
      "Automated backups and replication setups"
    ],
    benefits: [
      "Fast query responses on key application paths",
      "Data integrity guaranteed through proper relationships and constraints",
      "Smooth data handling as records grow into millions"
    ],
    technologies: ["PostgreSQL", "Redis", "Prisma", "MySQL", "MongoDB", "SQL"],
    approach: "We model entity relationships with precision, benchmark query execution plans, and enforce data consistency constraints."
  },
  {
    id: "maintenance",
    slug: "website-maintenance-and-optimization",
    title: "Website Maintenance & Optimization",
    shortDescription: "Proactive uptime monitoring, security patching, dependency upgrades, and performance tuning.",
    fullDescription: "Keep your web applications secure, fast, and up to date. We provide regular dependency upgrades, bug fixes, performance audits, and ongoing improvements.",
    icon: "FaTools",
    features: [
      "Continuous uptime monitoring and error alerting",
      "Routine security updates and dependency upgrades",
      "Core Web Vitals performance tune-ups",
      "Scheduled backups and disaster recovery dry runs"
    ],
    benefits: [
      "Elimination of unexpected downtime and revenue loss",
      "Protection against outdated and vulnerable packages",
      "Peace of mind knowing your web application is in capable developer hands"
    ],
    technologies: ["Sentry", "Google Lighthouse", "GitHub", "Vite", "Docker"],
    approach: "We run automated audit tools, schedule non-disruptive update windows, and test backups regularly."
  }
];
