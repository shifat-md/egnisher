import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLayerGroup,
  FaCode,
  FaServer,
  FaExchangeAlt,
  FaShoppingCart,
  FaPaintBrush,
  FaDatabase,
  FaTools,
  FaArrowRight,
} from 'react-icons/fa';

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

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || FaCode;

  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-gray-200/80 hover:border-egnisher-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-egnisher-primary group-hover:text-white transition-colors duration-300">
          <IconComponent />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-egnisher-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-egnisher-neutral text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="text-xs text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-egnisher-accent mr-2 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-gray-100 mt-auto">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-semibold text-egnisher-primary hover:text-egnisher-secondary group-hover:translate-x-1 transition-all"
        >
          Explore Service
          <FaArrowRight className="ml-2 w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
