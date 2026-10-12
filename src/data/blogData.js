export const blogCategories = [
  "All",
  "Development",
  "Frontend",
  "Backend",
  "UI/UX Design"
];

export const blogData = [
  {
    id: "building-scalable-react-apps",
    slug: "architecting-scalable-react-applications-2025",
    title: "Building Scalable React Applications: Clean Code & State Boundaries",
    category: "Frontend",
    author: {
      name: "Marcus Vance",
      role: "Lead Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    date: "February 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    summary: "A practical guide by full-stack developers for organizing large React codebases, establishing clean modules, and preventing unnecessary component re-renders.",
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
    content: `
Building applications that withstand team growth and feature complexity requires disciplined full-stack development patterns. As codebases grow, common pain points emerge: sprawling component hierarchies, prop drilling, and accidental performance regressions.

### 1. Colocation of State and Components
Place code as close to where it is used as possible. Avoid pushing state into a global store when it is only consumed by a localized feature subtree. Keeping state local makes refactoring trivial and prevents widespread re-renders across unaffected branches of the virtual DOM.

### 2. Domain-Driven Directory Organization
Instead of grouping files strictly by technical role (e.g., all components in one folder, all hooks in another), organize code by feature domain. A feature folder contains its specific UI components, specialized hooks, API queries, and tests.

### 3. Memoization With Purpose
Use \`useMemo\` and \`useCallback\` strategically where expensive calculations occur or when object references are passed to memoized children. Profiling with React DevTools should always precede speculative optimization.
    `
  },
  {
    id: "microservices-vs-modular-monoliths",
    slug: "microservices-vs-modular-monoliths-for-growing-startups",
    title: "Microservices vs Modular Monoliths: What Growing Companies Actually Need",
    category: "Backend",
    author: {
      name: "Elena Rostova",
      role: "Lead Backend Developer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    date: "January 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    summary: "Why premature microservice adoption hurts development velocity, and how modular monoliths provide the right balance for web developers and scaling apps.",
    tags: ["Backend", "Node.js", "System Design", "Web Development"],
    content: `
The debate between microservices and monoliths is frequently dominated by hype rather than practical development needs. While enterprise giants run thousands of decoupled services, early-stage companies often pay an enormous operational tax when fragmenting their systems too early.

### The Hidden Costs of Distributed Systems
Network boundaries introduce latency, partial failure modes, complex transactional guarantees, and distributed tracing requirements. When domain boundaries are still evolving, refactoring across service borders requires coordinating multiple API deployments and database migrations.

### The Power of the Modular Monolith
A modular monolith enforces strict encapsulation inside a single deployable artifact. Modules interact through well-defined internal interfaces without the overhead of HTTP/gRPC serialization, distributed consensus, or complex Kubernetes manifests.
    `
  },
  {
    id: "mastering-modern-tailwind-css",
    slug: "mastering-modern-tailwind-css-utility-first-design",
    title: "Mastering Tailwind CSS: Scalable Design Systems Without Class Fatigue",
    category: "UI/UX Design",
    author: {
      name: "David Kim",
      role: "Senior UI/UX Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    date: "January 14, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    summary: "How full-stack developers configure design tokens, extract reusable component primitives, and maintain consistent styling standards across web projects.",
    tags: ["Tailwind CSS", "CSS", "UI/UX", "Frontend"],
    content: `
Tailwind CSS has transformed how frontend teams author styles. However, without a clear methodology, templates can accumulate long class strings that reduce readability.

### Defining Semantic Color Tokens
Instead of scattering arbitrary hex codes or default shade numbers, configure semantic color scales in \`tailwind.config.js\`. This allows developers to express intent (\`bg-egnisher-primary\`, \`text-egnisher-neutral\`) rather than rigid values.

### Extracting Component Primitives
When a button, card, or form element is repeated, encapsulate it within a dedicated React component. Relying on React composition rather than CSS abstraction preserves the utility-first ergonomics while guaranteeing design uniformity.
    `
  },
  {
    id: "optimizing-core-web-vitals",
    slug: "optimizing-core-web-vitals-lcp-inp-cls",
    title: "Optimizing Core Web Vitals: Real Techniques for LCP, INP, and CLS",
    category: "Development",
    author: {
      name: "Marcus Vance",
      role: "Lead Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    date: "December 20, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    summary: "Concrete benchmarks, image preloading tricks, and main-thread scheduling patterns full-stack developers use to achieve top performance scores.",
    tags: ["Web Vitals", "Performance", "LCP", "Frontend"],
    content: `
Google's Core Web Vitals directly affect search engine rankings and conversion rates. Understanding how modern browsers parse HTML, load assets, and execute JavaScript is key to scoring above 95 on Lighthouse.

### Eliminating Largest Contentful Paint (LCP) Delays
Preload your above-the-fold hero images and font files with \`<link rel="preload">\`. Ensure images use modern formats like WebP or AVIF with explicit \`width\` and \`height\` dimensions to prevent cumulative layout shift.

### Interaction to Next Paint (INP)
Keep long JavaScript execution tasks under 50 milliseconds. Defer non-critical analytics scripts, break heavy loops using requestAnimationFrame or Web Workers, and avoid layout thrashing during user input.
    `
  },
  {
    id: "securing-rest-and-graphql-apis",
    slug: "securing-rest-and-graphql-apis-in-production",
    title: "Securing REST and GraphQL APIs: Practical Defense in Depth",
    category: "Backend",
    author: {
      name: "Elena Rostova",
      role: "Lead Backend Developer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    date: "November 30, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    summary: "Token rotation, query depth limiting, strict input validation schemas, and rate-limiting developers use to protect web applications.",
    tags: ["Security", "API", "GraphQL", "Backend"],
    content: `
Public APIs face persistent probing from automated bots and vulnerability scanners. Implementing layered defensive checks protects both user data and server computing resources.

### Query Depth and Cost Analysis in GraphQL
Unlike REST endpoints with predefined payload sizes, arbitrary GraphQL queries can nest recursively and trigger denial-of-service conditions. Implement query complexity calculators and query depth limits to reject abusive payloads before execution.

### Input Sanitization and Schema Validation
Never trust client payloads. Validate every request body against a strict schema (such as Zod or Joi), rejecting extraneous properties and verifying strict data types before querying databases.
    `
  }
];
