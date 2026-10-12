import React, { useState, useMemo } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import PageBanner from '../components/common/PageBanner';
import PortfolioCard from '../components/cards/PortfolioCard';
import EmptyState from '../components/common/EmptyState';
import Button from '../components/common/Button';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // React state filtering - strictly updates displayed projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioData;
    }
    return portfolioData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <PageBanner
        badge="Our Work"
        title="Case Studies & Delivered Web Projects"
        description="A showcase of real-world web applications, API integrations, and digital platforms built by our full-stack developers."
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Category Filters Bar */}
        <section aria-label="Portfolio Category Filter" className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            {portfolioCategories.map((cat) => {
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
                  aria-pressed={isActive}
                >
                  {cat === 'All' ? 'All Projects' : cat}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-egnisher-neutral font-medium">
            Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> of {portfolioData.length} projects
          </p>
        </section>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            title={`No projects found in "${selectedCategory}"`}
            message="We are continually adding new case studies. Try selecting another category to view more work."
            actionText="View All Projects"
            onAction={() => setSelectedCategory('All')}
          />
        )}

        {/* CTA */}
        <section className="bg-gradient-to-br from-purple-900 to-[#100B24] rounded-3xl p-8 sm:p-14 text-white shadow-xl text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Have a Similar Project in Mind?
            </h2>
            <p className="text-purple-200 text-base leading-relaxed">
              Our full-stack developers can help you design, build, and deploy your web application with clean, reliable code.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
