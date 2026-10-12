import React from 'react';
import { FaBolt } from 'react-icons/fa';

export default function AnimatedHeroBadge({ text = "Available for Q2/Q3 Projects" }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-egnisher-primary text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all group cursor-default">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-egnisher-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-egnisher-accent"></span>
      </span>
      <FaBolt className="text-egnisher-accent text-xs" />
      <span>{text}</span>
    </div>
  );
}
