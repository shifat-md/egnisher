import React from 'react';
import { FaInbox } from 'react-icons/fa';
import Button from './Button';

export default function EmptyState({
  title = "No results found",
  message = "We couldn't find any items matching your current criteria.",
  actionText,
  onAction,
}) {
  return (
    <div className="text-center py-16 px-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm max-w-md mx-auto my-8">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-50 text-egnisher-primary flex items-center justify-center text-2xl">
        <FaInbox />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-egnisher-neutral text-sm mb-6 leading-relaxed">
        {message}
      </p>
      {actionText && onAction && (
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
