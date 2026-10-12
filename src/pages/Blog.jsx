import React, { useState, useMemo, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { blogData, blogCategories } from '../data/blogData';
import { siteConfig } from '../data/siteConfig';

import PageBanner from '../components/common/PageBanner';
import BlogCard from '../components/cards/BlogCard';
import Pagination from '../components/pagination/Pagination';
import EmptyState from '../components/common/EmptyState';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = siteConfig.pagination.blogPerPage || 3;

  // Reset pagination to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Filtered dataset
  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;

  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setCurrentPage(1);
  };

  return (
    <div>
      <PageBanner
        badge="Developer Insights"
        title="Articles, Guides & Full-Stack Patterns"
        description="Practical writings from the Egnisher development team on React, Node.js, databases, performance, and responsive UI."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        {/* Search & Category Filter Controls */}
        <section aria-label="Blog Filters" className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <input
                id="blog-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword, or title..."
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-egnisher-primary focus:ring-2 focus:ring-egnisher-primary/30 transition-all"
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="text-sm" />
                </button>
              )}
            </div>

            {/* Post counts */}
            <div className="text-xs sm:text-sm text-egnisher-neutral w-full md:w-auto text-left md:text-right font-medium">
              Found <span className="font-bold text-gray-900">{filteredPosts.length}</span> articles
              {filteredPosts.length > 0 && ` (Page ${currentPage} of ${totalPages})`}
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">
              Category:
            </span>
            {blogCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-egnisher-primary ${
                    isActive
                      ? 'bg-egnisher-primary text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Post Grid or Empty State */}
        {filteredPosts.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination Controls */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        ) : (
          <EmptyState
            title="No matching articles found"
            message={`We couldn't find any articles matching your search for "${searchQuery || selectedCategory}". Try different search terms or reset the filters.`}
            actionText="Reset All Filters"
            onAction={handleClearFilters}
          />
        )}
      </div>
    </div>
  );
}
