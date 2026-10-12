import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

import PageBanner from '../components/common/PageBanner';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
        <p className="text-egnisher-neutral mb-8">
          The requested project "{slug}" could not be found.
        </p>
        <Button to="/portfolio" variant="primary">
          <FaArrowLeft className="mr-2" /> Back to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div>
      <PageBanner
        badge={project.category}
        title={project.title}
        description={project.shortDescription}
        breadcrumbs={[
          { label: 'Portfolio', to: '/portfolio' },
          { label: project.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Hero image */}
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl aspect-[16/9] max-h-[500px] w-full bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Case Study Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Challenge */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Solution & Technical Approach</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Results / Key Impact */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Verified Impact & Results</h2>
                <Badge variant="teal" size="sm">
                  {project.clientType}
                </Badge>
              </div>
              <ul className="space-y-4">
                {project.results?.map((res, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-gray-800">
                    <FaCheckCircle className="text-egnisher-accent mt-1 flex-shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Client Status
                </h3>
                <p className="text-sm font-semibold text-gray-800">
                  {project.clientType}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Technologies Employed
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies?.map((tech, idx) => (
                    <Badge key={idx} variant="purple" size="md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    size="md"
                    className="w-full"
                  >
                    <FaGithub className="mr-2 text-base" />
                    Explore Repository
                  </Button>
                )}
              </div>
            </div>

            {/* Back link */}
            <div>
              <Link
                to="/portfolio"
                className="inline-flex items-center text-sm font-semibold text-egnisher-primary hover:text-egnisher-secondary transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
