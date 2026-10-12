import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate page numbers with windowing for long lists
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, start + maxVisible - 1);

      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`flex items-center justify-center space-x-2 my-10 ${className}`}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className="p-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-egnisher-primary"
      >
        <FaChevronLeft className="w-3.5 h-3.5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1.5">
        {pageNumbers.map((num) => {
          const isActive = num === currentPage;
          return (
            <button
              key={num}
              type="button"
              onClick={() => onPageChange(num)}
              aria-label={`Page ${num}`}
              aria-current={isActive ? 'page' : undefined}
              className={`min-w-[40px] h-10 px-3 flex items-center justify-center rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-egnisher-primary ${
                isActive
                  ? 'bg-egnisher-primary text-white shadow-sm'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {num}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className="p-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-egnisher-primary"
      >
        <FaChevronRight className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}
