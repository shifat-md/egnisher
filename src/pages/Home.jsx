import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
} from 'react-icons/si';

import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { teamData } from '../data/teamData';
import { processSteps } from '../data/processData';

import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import Badge from '../components/common/Badge';
import ServiceCard from '../components/cards/ServiceCard';
import PortfolioCard from '../components/cards/PortfolioCard';
import TeamCard from '../components/cards/TeamCard';
import TestimonialsSlider from '../components/sliders/TestimonialsSlider';
import AnimatedHeroBadge from '../components/animations/AnimatedHeroBadge';

export default function Home() {
  const featuredProjects = portfolioData.filter((p) => p.featured).slice(0, 3);
  const coreServices = servicesData.slice(0, 6);
  const leadershipTeam = teamData.slice(0, 4);

  const techStack = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-amber-400' },
    { name: 'React', icon: FaReact, color: 'text-sky-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-600' },
    { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
  ];

  const valueProps = [
    {
      icon: FaShieldAlt,
      title: 'Clean Code Standards',
      description: 'We write modular, well-tested code that is easy to understand, easy to maintain, and ready to grow with your business.',
    },
    {
      icon: FaRocket,
      title: 'Fast Performance',
      description: 'Optimized web vitals, quick database queries, and responsive frontends that load quickly on any connection.',
    },
    {
      icon: FaUsers,
      title: 'Direct Developer Access',
      description: 'Direct communication with the full-stack developers building your product—no account managers or non-technical middlemen.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-purple-100/30 to-teal-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Status badge */}
            <div className="mb-6 flex justify-center">
              <AnimatedHeroBadge text="Full-Stack Web Developers" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              We Build Digital Experiences That{' '}
              <span className="gradient-text">Move Businesses Forward</span>.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-lg sm:text-xl text-egnisher-neutral font-inter max-w-2xl mx-auto leading-relaxed mb-10">
              {siteConfig.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Get Started
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button to="/portfolio" variant="outline" size="lg" className="w-full sm:w-auto">
                View Portfolio
              </Button>
            </div>

            {/* Trust checklist */}
            <div className="mt-12 pt-8 border-t border-gray-200/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center">
                <FaCheckCircle className="text-egnisher-accent mr-2" /> Modern Full-Stack Development
              </span>
              <span className="flex items-center">
                <FaCheckCircle className="text-egnisher-accent mr-2" /> WCAG 2.1 AA Accessible
              </span>
              <span className="flex items-center">
                <FaCheckCircle className="text-egnisher-accent mr-2" /> 100% Client Code Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Agency Introduction & Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-900 to-[#100B24] rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <Badge variant="teal" className="mb-4">
              About Egnisher
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Full-stack development with clarity, speed, and clean code.
            </h2>
            <p className="text-purple-100/90 text-base sm:text-lg leading-relaxed mb-8">
              At Egnisher, we are full-stack developers. We reject bloated templates and fragile shortcuts. We build custom React frontends and reliable Node/PostgreSQL backends engineered to sustain real commercial workloads.
            </p>
            <Button to="/about" variant="white" size="md">
              Learn More About Our Team
            </Button>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-purple-800/80">
            {valueProps.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <div key={idx} className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-egnisher-accent flex items-center justify-center text-xl mb-3">
                    <IconComp />
                  </div>
                  <h3 className="text-lg font-bold text-white">{prop.title}</h3>
                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Capabilities"
          title="Full-Stack Web Development Services"
          description="From modern frontend web apps to custom backend APIs and database schemas, explore what our developers build."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="outline" size="md">
            View All 8 Services
            <FaArrowRight className="ml-2 w-3.5 h-3.5" />
          </Button>
        </div>
      </section>

      {/* 4. Featured Portfolio Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Work"
          title="Case Studies & Real Products"
          description="Explore selected case studies demonstrating how our full-stack web applications deliver real business results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/portfolio" variant="primary" size="md">
            Browse All Case Studies
            <FaArrowRight className="ml-2 w-3.5 h-3.5" />
          </Button>
        </div>
      </section>

      {/* 5. Development Process */}
      <section className="bg-purple-50/50 py-20 border-y border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How We Work"
            title="A Proven 6-Step Development Process"
            description="Our agile development process guarantees transparency, predictable milestones, and reliable deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:border-egnisher-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-egnisher-primary font-poppins block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-egnisher-accent uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-egnisher-neutral leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliv, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-egnisher-accent mr-2 flex-shrink-0" />
                        {deliv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/process" variant="outline" size="md">
              Read Detailed Delivery Methodology
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Technology Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Modern Ecosystem"
          title="Technologies We Master"
          description="We select proven technologies that offer speed, great community support, and long-term maintainability."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-egnisher-primary/30 flex flex-col items-center justify-center text-center transition-all group"
              >
                <Icon className={`text-4xl ${tech.color} mb-3 group-hover:scale-110 transition-transform`} />
                <span className="font-semibold text-sm text-gray-800">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Team Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our People"
          title="Meet Our Full-Stack Developers"
          description="Experienced developers who build, test, and ship your digital products from frontend to backend."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/about" variant="outline" size="md">
            View All Full-Stack Developers
            <FaArrowRight className="ml-2 w-3.5 h-3.5" />
          </Button>
        </div>
      </section>

      {/* 8. Testimonials Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sample Feedback"
          title="Client Feedback & Partnership Reviews"
          description="Clearly labeled sample testimonials showcasing how our development team delivers dependable results."
        />

        <TestimonialsSlider />
      </section>

      {/* 9. Final Call-to-Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-primary rounded-3xl p-8 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Build Your Next Web Project?
            </h2>
            <p className="text-purple-100 text-lg leading-relaxed">
              Connect directly with our full-stack developers to review your project timeline, feature requirements, and technical goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button to="/contact" variant="white" size="lg">
                Schedule a Consultation
              </Button>
              <Button
                href={`mailto:${siteConfig.contact.email}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Email Our Team Directly
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
