import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { faqData, faqCategories } from '../data/faqData';
import PageBanner from '../components/common/PageBanner';
import Button from '../components/common/Button';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState({ 1: true }); // Open first question by default

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <PageBanner
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Clear answers about our engineering capabilities, engagement models, development sprints, and post-launch maintenance."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {faqCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-egnisher-primary ${
                  isActive
                    ? 'bg-egnisher-primary text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50/40 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-egnisher-primary"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-egnisher-primary transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-2 text-egnisher-neutral text-sm sm:text-base leading-relaxed border-t border-gray-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-white text-egnisher-primary flex items-center justify-center text-xl shadow-sm">
            <FaQuestionCircle />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Have a question not listed here?
          </h3>
          <p className="text-sm text-egnisher-neutral max-w-md mx-auto">
            Our team will gladly walk you through any technical or contractual questions specific to your product.
          </p>
          <Button to="/contact" variant="primary" size="md">
            Reach Out to Our Leads
          </Button>
        </div>
      </div>
    </div>
  );
}
