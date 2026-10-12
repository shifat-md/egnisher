import React, { useState } from 'react';
import Button from '../common/Button';
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Full-Stack Web App',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');

    // Simulated submission with intentional latency for realistic UX
    setTimeout(() => {
      setStatus('success');
      setStatusMessage(
        'DEMO SUCCESS: Your message was successfully validated and simulated. In production, this connects to an authenticated email gateway.'
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: 'Full-Stack Web App',
        message: '',
      });
      setErrors({});
    }, 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-6"
    >
      <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-4 text-xs text-egnisher-neutral flex items-start space-x-2">
        <span className="text-egnisher-primary font-bold">Note:</span>
        <span>
          This contact form validates live user input and displays verified response states. No real external emails are sent in demo mode.
        </span>
      </div>

      {status === 'success' && (
        <div
          role="alert"
          className="p-4 bg-teal-50 border border-teal-200 text-teal-800 rounded-xl flex items-start space-x-3 text-sm animate-fade-in"
        >
          <FaCheckCircle className="text-teal-600 mt-0.5 text-lg flex-shrink-0" />
          <div>
            <p className="font-semibold">Message Simulated Successfully</p>
            <p className="text-xs text-teal-700 mt-0.5">{statusMessage}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-start space-x-3 text-sm"
        >
          <FaExclamationCircle className="text-red-600 mt-0.5 text-lg flex-shrink-0" />
          <p>{statusMessage}</p>
        </div>
      )}

      {/* Name & Email grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="e.g. Alex Morgan"
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                : 'border-gray-300 focus:border-egnisher-primary focus:ring-egnisher-primary/30'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-600 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="alex@company.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                : 'border-gray-300 focus:border-egnisher-primary focus:ring-egnisher-primary/30'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-600 mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject & Project Type grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            placeholder="New Project Inquiry"
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.subject
                ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                : 'border-gray-300 focus:border-egnisher-primary focus:ring-egnisher-primary/30'
            }`}
          />
          {errors.subject && (
            <p id="subject-error" className="text-xs text-red-600 mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-projectType"
            className="block text-sm font-semibold text-gray-700 mb-1.5"
          >
            Project Type
          </label>
          <select
            id="contact-projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-egnisher-primary focus:ring-2 focus:ring-egnisher-primary/30 focus:outline-none bg-white"
          >
            <option value="Full-Stack Web App">Full-Stack Web App</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend & APIs">Backend & APIs</option>
            <option value="E-commerce Platform">E-commerce Platform</option>
            <option value="UI/UX Implementation">UI/UX Implementation</option>
            <option value="Maintenance & Retainer">Maintenance & Retainer</option>
            <option value="Other">Other Custom Solutions</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          Message & Project Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us about your project goals, timelines, and technical requirements..."
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
            errors.message
              ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
              : 'border-gray-300 focus:border-egnisher-primary focus:ring-egnisher-primary/30'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'loading'}
          className="w-full sm:w-auto"
        >
          {status === 'loading' ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Validating & Sending...
            </>
          ) : (
            'Send Inquiry'
          )}
        </Button>
      </div>
    </form>
  );
}
