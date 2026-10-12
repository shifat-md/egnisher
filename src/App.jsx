import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

// Core Pages (Phase 1)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Detail & Extended Pages (Phase 2)
import ServiceDetail from './pages/ServiceDetail';
import PortfolioDetail from './pages/PortfolioDetail';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Process from './pages/Process';
import LegalPage from './pages/legal/LegalPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Phase 1 Core Routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />

        {/* Phase 2 Dynamic & Extended Routes */}
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="careers" element={<Careers />} />
        <Route path="process" element={<Process />} />
        <Route path="legal/:slug" element={<LegalPage />} />

        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
