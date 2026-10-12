import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaShareAlt,
} from 'react-icons/fa';
import { blogData } from '../data/blogData';

import PageBanner from '../components/common/PageBanner';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import BlogCard from '../components/cards/BlogCard';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-egnisher-neutral mb-8">
          The requested article "{slug}" does not exist.
        </p>
        <Button to="/blog" variant="primary">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Button>
      </div>
    );
  }

  // Related posts in same category
  const relatedPosts = blogData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div>
      <PageBanner
        badge={post.category}
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        {/* Author & Date metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
            />
            <div>
              <p className="text-base font-bold text-gray-900">{post.author?.name}</p>
              <p className="text-xs text-egnisher-neutral">{post.author?.role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs sm:text-sm text-egnisher-neutral">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1.5 text-purple-400" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <FaClock className="mr-1.5 text-teal-500" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-gray-100 max-h-[460px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-purple max-w-none text-gray-800 leading-relaxed space-y-6 text-base sm:text-lg">
          <p className="font-semibold text-xl text-gray-900 leading-relaxed">
            {post.summary}
          </p>

          <div className="whitespace-pre-line text-gray-700 leading-loose">
            {post.content}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">
              Tags:
            </span>
            {post.tags.map((tag, idx) => (
              <Badge key={idx} variant="gray" size="sm">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Back Link */}
        <div className="pt-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-semibold text-egnisher-primary hover:text-egnisher-secondary transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to All Articles
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
