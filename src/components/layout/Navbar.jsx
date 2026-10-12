import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { siteConfig } from '../../data/siteConfig';
import Button from '../common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll state for elevation shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter optional nav links configured to show in nav
  const activeOptionalNav = siteConfig.optionalNav?.filter((item) => item.showInNav) || [];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-egnisher-primary rounded-lg p-1"
            aria-label={`${siteConfig.agencyName} Home`}
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-poppins font-extrabold text-xl shadow-sm group-hover:scale-105 transition-transform">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-egnisher-primary transition-colors">
                {siteConfig.agencyName}
                <span className="text-egnisher-accent">.</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {siteConfig.mainNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-egnisher-primary bg-purple-50 font-semibold'
                      : 'text-gray-600 hover:text-egnisher-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Optional pages (Process, FAQ, Careers) */}
            {activeOptionalNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-egnisher-primary bg-purple-50 font-semibold'
                      : 'text-gray-600 hover:text-egnisher-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button to="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close Menu' : 'Open Navigation Menu'}
              className="p-2 rounded-lg text-gray-600 hover:text-egnisher-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-egnisher-primary"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-gray-200 bg-white shadow-xl animate-fade-in"
        >
          <div className="px-4 pt-3 pb-6 space-y-1">
            {siteConfig.mainNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-egnisher-primary bg-purple-50 font-bold'
                      : 'text-gray-700 hover:text-egnisher-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {activeOptionalNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-egnisher-primary bg-purple-50 font-bold'
                      : 'text-gray-700 hover:text-egnisher-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-gray-100">
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
