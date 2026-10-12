import React from 'react';
import Badge from './Badge';

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant={light ? 'teal' : 'purple'}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg sm:text-xl font-normal leading-relaxed ${
            light ? 'text-purple-100/80' : 'text-egnisher-neutral'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
