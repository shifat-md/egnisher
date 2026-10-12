import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { siteConfig } from '../../data/siteConfig';

const socialIconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0F0B1E] to-[#080512] text-white pt-16 pb-12 border-t border-purple-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-poppins font-extrabold text-xl shadow-lg">
                E
              </div>
              <span className="font-poppins font-extrabold text-2xl tracking-tight text-white">
                {siteConfig.agencyName}
                <span className="text-egnisher-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.brandStatement}
            </p>

            <div className="space-y-2 text-xs text-gray-400 pt-2">
              <div className="flex items-center space-x-2.5">
                <FaMapMarkerAlt className="text-egnisher-light flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <FaEnvelope className="text-egnisher-light flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <FaPhone className="text-egnisher-light flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-4">
              {siteConfig.socials.map((social) => {
                const IconComponent = socialIconMap[social.icon] || FaGithub;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.agencyName} on ${social.name}`}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-egnisher-primary hover:text-white text-gray-300 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-egnisher-accent"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column: Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-purple-200 mb-4 font-poppins">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {siteConfig.footerNav.services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column: Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-purple-200 mb-4 font-poppins">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {siteConfig.footerNav.company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                >
                  Insights & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column: Legal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-purple-200 mb-4 font-poppins">
              Policies
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {siteConfig.footerNav.legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-0.5 inline-block transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {currentYear} {siteConfig.agencyName}. All rights reserved. Built with Vite, React & Tailwind CSS.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/legal/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal/terms-of-service" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal/accessibility" className="hover:text-gray-300 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
