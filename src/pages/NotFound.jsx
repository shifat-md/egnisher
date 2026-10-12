import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaCompass } from 'react-icons/fa';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-purple-50 text-egnisher-primary flex items-center justify-center text-4xl shadow-sm">
          <FaExclamationTriangle />
        </div>

        <span className="text-sm font-bold tracking-widest text-egnisher-primary uppercase block mb-2">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 font-poppins">
          Page Not Found
        </h1>

        <p className="text-egnisher-neutral text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for doesn't exist, was moved, or has an invalid URL. Use the links below to return to safe ground.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" className="w-full sm:w-auto">
            <FaHome className="mr-2" />
            Back to Home
          </Button>
          <Button to="/services" variant="outline" size="md" className="w-full sm:w-auto">
            <FaCompass className="mr-2" />
            Browse Services
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
          Need help? Contact us at{' '}
          <a href="mailto:contact@egnisher.agency" className="text-egnisher-primary underline">
            contact@egnisher.agency
          </a>
        </div>
      </div>
    </div>
  );
}
