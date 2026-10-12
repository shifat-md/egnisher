import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Badge from '../common/Badge';

export default function BlogCard({ post }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Cover image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="teal">{post.category}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center text-xs text-egnisher-neutral space-x-3 mb-3">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1.5 w-3 h-3 text-purple-400" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <FaClock className="mr-1.5 w-3 h-3 text-teal-500" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-egnisher-primary transition-colors line-clamp-2">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="text-egnisher-neutral text-sm leading-relaxed mb-6 line-clamp-3">
            {post.summary}
          </p>
        </div>

        {/* Author & Read more */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2.5">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-8 h-8 rounded-full object-cover border border-purple-100"
            />
            <span className="text-xs font-semibold text-gray-800">
              {post.author?.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-xs font-bold text-egnisher-primary group-hover:text-egnisher-secondary group-hover:translate-x-1 transition-all"
          >
            Read
            <FaArrowRight className="ml-1 w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
