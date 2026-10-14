# Egnisher Agency Website

A modern, responsive, high-performance website for **Egnisher**, a web development agency of **full-stack developers** specializing in full-stack web development, custom React frontends, Node.js/PostgreSQL backends, and digital solutions.

Built with **React**, **Vite**, **Tailwind CSS**, and **React Router DOM**, designed with clean code, direct developer communication, and accessible architecture.

---

## 🚀 Key Features

- **Developer-Focused Brand System**: Custom color palette (Primary Purple `#642CD7`, Secondary Purple `#7C4DFF`, Accent Teal `#14B8A6`, Neutral Gray `#667085`) and typographic hierarchy pairing **Poppins** (headings) with **Inter** (body).
- **Centralized Data Architecture**: All agency copy, team profiles, service specifications, portfolio case studies, blog articles, FAQs, careers, and policies are stored in `src/data/` for non-destructive maintenance.
- **Dynamic Portfolio Filtering**: Real-time React state filtering across full-stack disciplines (Full-Stack, Frontend, Backend, E-commerce, UI/UX).
- **Interactive Blog**: Search by title/keywords, category filtering, and auto-resetting pagination with empty search state handling.
- **Accessible Team Pagination**: Paginated team directory supporting items-per-page configuration, previous/next controls, and screen-reader labels.
- **Accessible Accordion FAQ**: ARIA-compliant expandable Q&A with category filters.
- **Job Listings & Careers**: Master-detail job browser with role requirements, work arrangement tags, and application instructions.
- **Validated Contact Form**: Full field validation (email regex, length constraints), real-time error states, and simulated submission feedback.
- **6 Draft Legal Policies**: Centralized legal templates (Privacy, Terms, Cookies, Refund, Disclaimer, Accessibility) marked with prominent draft notices.
- **Automated Test Coverage**: Vitest & React Testing Library test suites verifying routes, filtering, search, pagination, and form validation.

---

## 🛠 Tech Stack

- **Runtime & Bundler**: Node.js & Vite
- **UI Framework**: React 18 & JSX
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Icons**: React Icons (FontAwesome & Simple Icons)
- **Carousels**: React Slick & Slick Carousel
- **Testing**: Vitest & React Testing Library with jsdom

---

<!-- ## 📂 Project Structure

```text
d:/agency/
├── public/
│   └── favicon.svg               # Brand SVG favicon
├── src/
│   ├── components/
│   │   ├── animations/           # Animated radar badges & visual effects
│   │   ├── cards/                # Service, Portfolio, Blog, Team cards
│   │   ├── common/               # Button, Badge, SectionHeader, PageBanner, EmptyState
│   │   ├── forms/                # ContactForm with client validation
│   │   ├── layout/               # Navbar, MobileDrawer, Footer
│   │   ├── pagination/           # Reusable Pagination component
│   │   └── sliders/              # TestimonialsSlider
│   ├── data/                     # Centralized content and configurations
│   │   ├── blogData.js
│   │   ├── careersData.js
│   │   ├── faqData.js
│   │   ├── legalData.js
│   │   ├── portfolioData.js
│   │   ├── processData.js
│   │   ├── servicesData.js
│   │   ├── siteConfig.js
│   │   ├── teamData.js
│   │   └── testimonialsData.js
│   ├── layouts/
│   │   └── RootLayout.jsx        # App layout wrapper with Navbar & Footer
│   ├── pages/
│   │   ├── legal/
│   │   │   └── LegalPage.jsx     # Reusable dynamic legal policy viewer
│   │   ├── About.jsx             # About page with team pagination
│   │   ├── Blog.jsx              # Blog listing with search & filters
│   │   ├── BlogDetail.jsx        # Individual blog article page
│   │   ├── Careers.jsx           # Careers & job listing master-detail
│   │   ├── Contact.jsx           # Contact page & validated form
│   │   ├── FAQ.jsx               # Accessible accordion FAQ
│   │   ├── Home.jsx              # 10-section homepage
│   │   ├── NotFound.jsx          # 404 error page
│   │   ├── Portfolio.jsx         # Case study grid with live filtering
│   │   ├── PortfolioDetail.jsx   # Detailed project case study
│   │   ├── Process.jsx           # 6-step agency methodology
│   │   ├── Services.jsx          # Services catalog
│   │   └── ServiceDetail.jsx     # Individual service detail page
│   ├── App.jsx                   # Central route declarations
│   ├── index.css                 # Tailwind CSS & custom utilities
│   └── main.jsx                  # Entry point with BrowserRouter
├── tests/
│   ├── blog.test.jsx             # Blog search & pagination tests
│   ├── contact.test.jsx          # Form validation tests
│   ├── extended_routes.test.jsx  # Phase 2 dynamic routes & slug tests
│   ├── portfolio.test.jsx        # Category filtering tests
│   ├── routes.test.jsx           # Phase 1 route rendering & 404 tests
│   ├── setup.js                  # Vitest DOM & mock setup
│   └── team.test.jsx             # Team pagination tests
├── index.html                    # Root HTML with Google Fonts preconnect
├── package.json                  # Dependencies & test scripts
├── tailwind.config.js            # Tailwind color & font configuration
└── vite.config.js                # Vite & Vitest configuration
```

--- -->

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Run Automated Tests
```bash
npm test
```

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```
