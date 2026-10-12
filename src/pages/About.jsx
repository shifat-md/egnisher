import React, { useState, useMemo } from 'react';
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaSyncAlt, FaHeart } from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import { teamData } from '../data/teamData';

import PageBanner from '../components/common/PageBanner';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import TeamCard from '../components/cards/TeamCard';
import Pagination from '../components/pagination/Pagination';

export default function About() {
  // Team Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = siteConfig.pagination.teamPerPage || 4;

  const totalPages = Math.ceil(teamData.length / itemsPerPage);

  const displayedTeam = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return teamData.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const coreValues = [
    {
      icon: FaShieldAlt,
      title: 'Reliability & Clean Code',
      description: 'We write modular, well-tested code designed to handle real traffic, scale gracefully, and remain easy to update.',
    },
    {
      icon: FaLightbulb,
      title: 'Pragmatic Web Development',
      description: 'We embrace modern tools that deliver real benefits to your users, avoiding unnecessary complexity and over-engineered abstractions.',
    },
    {
      icon: FaSyncAlt,
      title: 'Radical Transparency',
      description: 'You speak directly with the full-stack developers writing your code, with regular live demos, clear sprint backlogs, and straightforward communication.',
    },
    {
      icon: FaHeart,
      title: 'User-Centered Craft',
      description: 'From fast load times to full web accessibility, we care deeply about making websites that are responsive, accessible, and pleasant to use.',
    },
  ];

  return (
    <div>
      <PageBanner
        badge="About Egnisher"
        title="We are full-stack developers, designers, and web builders."
        description="Egnisher is a dedicated team of full-stack developers building resilient digital experiences through modern web technologies, clean code, and direct collaboration."
        breadcrumbs={[{ label: 'About' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="text-egnisher-neutral text-base sm:text-lg leading-relaxed">
              Our mission is to help businesses build dependable, modern web applications without unnecessary agency overhead. We are full-stack developers who handle both frontend interfaces and backend APIs with equal care and attention to detail.
            </p>
            <p className="text-egnisher-neutral text-base leading-relaxed">
              We envision a web where applications load quickly, work seamlessly across all screen sizes, and provide intuitive experiences for real users.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center text-sm font-semibold text-gray-800">
                <FaCheckCircle className="text-egnisher-accent mr-3 flex-shrink-0" />
                Direct access to full-stack developers on every sprint
              </div>
              <div className="flex items-center text-sm font-semibold text-gray-800">
                <FaCheckCircle className="text-egnisher-accent mr-3 flex-shrink-0" />
                Strict adherence to WCAG accessibility & responsive standards
              </div>
              <div className="flex items-center text-sm font-semibold text-gray-800">
                <FaCheckCircle className="text-egnisher-accent mr-3 flex-shrink-0" />
                Complete client ownership of all application source code
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Egnisher development team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-8">
              <p className="text-white text-sm font-medium">
                Collaborative problem solving at the core of our culture.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <SectionHeader
            badge="Our Philosophy"
            title="The Values That Guide Our Code"
            description="Every technical choice, git commit, and feature implementation is rooted in our core principles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:border-egnisher-primary/40 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-xl mb-6">
                    <IconComp />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-egnisher-neutral leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Members Section with Functional Pagination */}
        <section id="team" className="pt-8">
          <SectionHeader
            badge="Meet The Team"
            title="Full-Stack Developers & Builders"
            description={`Displaying page ${currentPage} of ${totalPages} — browse all ${teamData.length} team members with roles, skills, and backgrounds.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Reusable Team Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </section>

        {/* CTA */}
        <section className="gradient-primary rounded-3xl p-8 sm:p-14 text-center text-white shadow-xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Work With Our Dedicated Developers
            </h2>
            <p className="text-purple-100 text-base leading-relaxed">
              We're ready to integrate with your workflow and turn your product requirements into clean, scalable software.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Start a Conversation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
