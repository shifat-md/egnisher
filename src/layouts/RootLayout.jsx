import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-egnisher-surface text-gray-900 selection:bg-purple-200 selection:text-egnisher-dark">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
