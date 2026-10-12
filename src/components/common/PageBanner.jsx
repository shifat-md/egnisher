import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

export default function PageBanner({
  badge,
  title,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-transparent py-16 sm:py-24 border-b border-gray-100">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-egnisher-neutral">
              <li>
                <Link to="/" className="hover:text-egnisher-primary transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-gray-300">/</span>
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-egnisher-primary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-900 font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <div className="mb-4">
              <Badge variant="purple">{badge}</Badge>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-egnisher-neutral leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
