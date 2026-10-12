import React from 'react';

export default function Badge({
  children,
  variant = 'purple',
  className = '',
  size = 'md',
}) {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1 font-medium',
    lg: 'text-sm px-3.5 py-1.5 font-medium',
  };

  const variantClasses = {
    purple: 'bg-purple-100 text-egnisher-primary border border-purple-200',
    teal: 'bg-teal-50 text-teal-700 border border-teal-200',
    gray: 'bg-gray-100 text-gray-700 border border-gray-200',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full ${sizeClasses[size] || sizeClasses.md} ${
        variantClasses[variant] || variantClasses.purple
      } ${className}`}
    >
      {children}
    </span>
  );
}
