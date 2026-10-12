import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-lg gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-egnisher-primary text-white hover:bg-egnisher-secondary focus:ring-egnisher-primary shadow-sm hover:shadow-soft-purple',
    secondary:
      'bg-egnisher-secondary text-white hover:bg-egnisher-primary focus:ring-egnisher-secondary',
    accent:
      'bg-egnisher-accent text-white hover:bg-teal-600 focus:ring-egnisher-accent shadow-sm',
    outline:
      'border-2 border-egnisher-primary text-egnisher-primary hover:bg-egnisher-primary hover:text-white focus:ring-egnisher-primary',
    ghost:
      'text-egnisher-primary hover:bg-purple-50 focus:ring-egnisher-primary',
    white:
      'bg-white text-egnisher-primary hover:bg-gray-100 focus:ring-white shadow-md',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
}
