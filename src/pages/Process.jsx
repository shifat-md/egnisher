import React from 'react';
import { processSteps } from '../data/processData';
import PageBanner from '../components/common/PageBanner';
import Button from '../components/common/Button';
import { FaCheckCircle } from 'react-icons/fa';

export default function Process() {
  return (
    <div>
      <PageBanner
        badge="Our Methodology"
        title="Predictable, Transparent Software Delivery"
        description="We follow a battle-tested six-phase development lifecycle designed to deliver high-quality web applications on schedule."
        breadcrumbs={[{ label: 'Process' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* Step-by-step detailed walkthrough */}
        <section className="space-y-12">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className={`bg-white rounded-3xl p-8 sm:p-14 border border-gray-200/80 shadow-sm flex flex-col lg:flex-row items-start gap-10 hover:border-purple-300 transition-all ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step indicator & Header */}
              <div className="lg:w-1/3 space-y-3">
                <span className="text-5xl sm:text-6xl font-black font-poppins text-egnisher-primary/20 block">
                  {step.step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-egnisher-accent block">
                  {step.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:w-2/3 space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {step.description}
                </p>

                <div className="bg-purple-50/60 rounded-2xl p-6 border border-purple-100">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Guaranteed Phase Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-3 text-sm text-gray-800">
                        <FaCheckCircle className="text-egnisher-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="gradient-primary rounded-3xl p-8 sm:p-14 text-center text-white shadow-xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Kick Off Phase 1?
            </h2>
            <p className="text-purple-100 text-base leading-relaxed">
              Book a discovery call with our full-stack developers to review your timeline, requirements, and project scope.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Start Project Discovery
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
