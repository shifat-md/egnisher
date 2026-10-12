import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaLayerGroup,
  FaServer,
  FaExchangeAlt,
  FaShoppingCart,
  FaPaintBrush,
  FaDatabase,
  FaTools,
} from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';

import PageBanner from '../components/common/PageBanner';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import PortfolioCard from '../components/cards/PortfolioCard';

const iconMap = {
  FaLayerGroup,
  FaCode,
  FaServer,
  FaExchangeAlt,
  FaShoppingCart,
  FaPaintBrush,
  FaDatabase,
  FaTools,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-egnisher-neutral mb-8">
          The requested service "{slug}" does not exist in our catalog.
        </p>
        <Button to="/services" variant="primary">
          <FaArrowLeft className="mr-2" /> View All Services
        </Button>
      </div>
    );
  }

  const IconComp = iconMap[service.icon] || FaCode;
  // Related projects that match any tech in the service
  const relatedProjects = portfolioData
    .filter((p) => p.technologies?.some((t) => service.technologies?.includes(t)))
    .slice(0, 2);

  return (
    <div>
      <PageBanner
        badge="Service Specification"
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        {/* Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-3xl">
                  <IconComp />
                </div>
                <div>
                  <span className="text-xs font-bold text-egnisher-accent uppercase tracking-wider">
                    Core Capability
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Approach */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Our Development Approach
                </h3>
                <p className="text-egnisher-neutral text-sm sm:text-base leading-relaxed">
                  {service.approach}
                </p>
              </div>
            </div>

            {/* Features & Deliverables */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What We Deliver
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features?.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start space-x-3 text-sm text-gray-800"
                  >
                    <FaCheckCircle className="text-egnisher-accent mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Benefits */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Direct Business Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-egnisher-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech Stack card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider text-xs">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies?.map((tech, idx) => (
                  <Badge key={idx} variant="purple" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-gradient-to-br from-purple-900 to-[#100B24] rounded-2xl p-6 sm:p-8 text-white shadow-lg space-y-4">
              <h3 className="text-xl font-bold">Have a project in {service.title}?</h3>
              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                Schedule a discovery call with our full-stack developers to evaluate project requirements and estimates.
              </p>
              <Button to="/contact" variant="white" size="md" className="w-full">
                Talk With Our Developers
              </Button>
            </div>

            {/* Back link */}
            <div>
              <Link
                to="/services"
                className="inline-flex items-center text-sm font-semibold text-egnisher-primary hover:text-egnisher-secondary transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Related Case Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => (
                <PortfolioCard key={proj.id} project={proj} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
