import React from 'react';
import { servicesData } from '../data/servicesData';
import PageBanner from '../components/common/PageBanner';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/cards/ServiceCard';
import Button from '../components/common/Button';

export default function Services() {
  return (
    <div>
      <PageBanner
        badge="Our Services"
        title="Comprehensive Full-Stack Web Development"
        description="We craft end-to-end digital solutions tailored to modern business requirements, from responsive React frontends to reliable cloud APIs and databases."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* Services Grid */}
        <section>
          <SectionHeader
            badge="Full Capabilities"
            title="Web Development Services"
            description="Select any service to review its features, business benefits, technologies, and development approach."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Why choose us callout */}
        <section className="bg-white rounded-3xl p-8 sm:p-14 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-egnisher-accent block mb-2">
                Why Egnisher
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Web applications that grow with your business.
              </h2>
              <p className="text-egnisher-neutral text-base leading-relaxed mb-6">
                Unlike agencies that assemble fragile off-the-shelf plugins, we build custom solutions using clean code standards. Every project includes comprehensive automated tests, accessible semantic markup, and complete documentation.
              </p>
              <Button to="/contact" variant="primary" size="md">
                Discuss Your Requirements
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  1. Zero Technological Bloat
                </h3>
                <p className="text-sm text-egnisher-neutral leading-relaxed">
                  Only the libraries and dependencies genuinely needed to deliver optimal runtime performance and maintainability.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  2. Accessible by Default
                </h3>
                <p className="text-sm text-egnisher-neutral leading-relaxed">
                  Every interface is audited for WCAG 2.1 AA keyboard support, screen reader semantics, and color contrast.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  3. Full-Stack Versatility
                </h3>
                <p className="text-sm text-egnisher-neutral leading-relaxed">
                  Smooth integration between user-facing React interfaces and server-side databases and APIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-primary rounded-3xl p-8 sm:p-14 text-center text-white shadow-xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-purple-100 text-base leading-relaxed">
              If your requirements span multiple services or complex legacy integrations, let's craft a bespoke scope.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Request a Technical Estimate
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
