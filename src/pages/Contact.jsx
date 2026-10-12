import React from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaShieldAlt,
  FaCodeBranch,
} from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
  return (
    <div>
      <PageBanner
        badge="Get In Touch"
        title="Start Your Project With Egnisher"
        description="Whether you have an established specification or need technical guidance from the ground up, our full-stack developers are here to help."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Value Props */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-egnisher-accent uppercase tracking-wider block mb-2">
                Direct Communication
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Let's discuss your project and timelines.
              </h2>
              <p className="text-egnisher-neutral text-base leading-relaxed">
                We review every inquiry within one business day. When you reach out to Egnisher, you speak directly with full-stack developers who can immediately assess feasibility, milestones, and technical requirements.
              </p>
            </div>

            {/* Agency Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-lg flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Email Inquiries
                  </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-semibold text-gray-900 hover:text-egnisher-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-lg flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Phone Consultation
                  </h3>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-base font-semibold text-gray-900 hover:text-egnisher-primary transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-lg flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Main Office
                  </h3>
                  <p className="text-sm text-gray-800 font-medium leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-lg flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Office Hours
                  </h3>
                  <p className="text-sm text-gray-800 font-medium">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-teal-50/40 border border-purple-100 space-y-3">
              <div className="flex items-center text-sm font-semibold text-gray-900">
                <FaShieldAlt className="text-egnisher-primary mr-2.5" />
                Non-Disclosure Agreements (NDA) honored
              </div>
              <div className="flex items-center text-sm font-semibold text-gray-900">
                <FaCodeBranch className="text-egnisher-accent mr-2.5" />
                Prompt technical code review upon request
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
