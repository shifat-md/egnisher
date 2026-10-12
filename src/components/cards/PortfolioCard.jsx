import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import Badge from '../common/Badge';

export default function PortfolioCard({ project }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Project image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="purple">{project.category}</Badge>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-egnisher-primary transition-colors">
            <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="text-egnisher-neutral text-sm leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies?.slice(0, 4).map((tech, idx) => (
              <Badge key={idx} variant="gray" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            to={`/portfolio/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-egnisher-primary hover:text-egnisher-secondary group-hover:translate-x-1 transition-all"
          >
            Case Study
            <FaArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center space-x-3 text-gray-400">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub Source`}
                className="hover:text-gray-900 transition-colors text-base"
              >
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live Preview`}
                className="hover:text-egnisher-primary transition-colors text-base"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
