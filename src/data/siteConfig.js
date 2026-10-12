export const siteConfig = {
  agencyName: "Egnisher",
  tagline: "Full-Stack Web Development Done Right",
  headline: "We Build Digital Experiences That Move Businesses Forward.",
  subheadline:
    "Egnisher helps businesses transform ideas into reliable digital products through modern web development, clean coding practices, and scalable full-stack solutions.",
  brandStatement:
    "A dedicated team of full-stack developers focused on clean code, responsive user experiences, and dependable web applications.",
  
  // Brand colors reference
  colors: {
    primary: "#642CD7",
    secondary: "#7C4DFF",
    accent: "#14B8A6",
    light: "#B996FF",
    neutral: "#667085",
  },

  // Contact details
  contact: {
    email: "contact@egnisher.agency",
    phone: "+1 (555) 019-2834",
    address: "742 Innovation Blvd, Suite 400, Tech City, CA 94107",
    hours: "Monday – Friday, 9:00 AM – 6:00 PM PST",
  },

  // Social links
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
    { name: "Dribbble", url: "https://dribbble.com", icon: "FaDribbble" },
  ],

  // Core Navigation (Phase 1)
  mainNav: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],

  // Optional / Secondary Navigation
  optionalNav: [
    { name: "Process", path: "/process", showInNav: true, showInFooter: true },
    { name: "FAQ", path: "/faq", showInNav: true, showInFooter: true },
    { name: "Careers", path: "/careers", showInNav: true, showInFooter: true },
  ],

  // Footer Navigation
  footerNav: {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Process", path: "/process" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Full-Stack Development", path: "/services/full-stack-web-development" },
      { name: "Frontend Development", path: "/services/frontend-development" },
      { name: "Backend Development", path: "/services/backend-development" },
      { name: "API & Integrations", path: "/services/api-development-and-integration" },
      { name: "UI/UX Implementation", path: "/services/ui-ux-implementation" },
    ],
    resources: [
      { name: "Portfolio", path: "/portfolio" },
      { name: "Blog & Insights", path: "/blog" },
      { name: "Frequently Asked Questions", path: "/faq" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/legal/privacy-policy" },
      { name: "Terms of Service", path: "/legal/terms-of-service" },
      { name: "Cookie Policy", path: "/legal/cookie-policy" },
      { name: "Refund Policy", path: "/legal/refund-policy" },
      { name: "Disclaimer", path: "/legal/disclaimer" },
      { name: "Accessibility Statement", path: "/legal/accessibility" },
    ],
  },

  // Pagination & Display settings
  pagination: {
    teamPerPage: 4,
    blogPerPage: 3,
    portfolioPerPage: 6,
  },

  // Slider settings
  slider: {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
  },
};
