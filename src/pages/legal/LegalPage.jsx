import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaExclamationCircle, FaArrowLeft, FaFileAlt } from 'react-icons/fa';
import { legalPolicies } from '../../data/legalData';
import PageBanner from '../../components/common/PageBanner';
import Button from '../../components/common/Button';

export default function LegalPage() {
  const { slug } = useParams();
  const policy = legalPolicies[slug];

  if (!policy) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Policy Document Not Found</h1>
        <p className="text-egnisher-neutral mb-8">
          The requested legal policy "{slug}" does not exist.
        </p>
        <Button to="/" variant="primary">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Button>
      </div>
    );
  }

  const allPolicyKeys = Object.keys(legalPolicies);

  return (
    <div>
      <PageBanner
        badge="Legal & Compliance"
        title={policy.title}
        description={`Last updated: ${policy.lastUpdated}`}
        breadcrumbs={[
          { label: 'Policies', to: '/legal/privacy-policy' },
          { label: policy.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Policy Navigation Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-3">
              All Policy Documents
            </h3>
            {allPolicyKeys.map((key) => {
              const item = legalPolicies[key];
              const isActive = key === slug;
              return (
                <Link
                  key={key}
                  to={`/legal/${key}`}
                  className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-purple-50 text-egnisher-primary font-bold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-egnisher-primary'
                  }`}
                >
                  <FaFileAlt className={`mr-2.5 text-xs ${isActive ? 'text-egnisher-primary' : 'text-gray-400'}`} />
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Policy Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-14 border border-gray-200/80 shadow-sm space-y-8">
            {/* Draft Notice Warning Callout */}
            {policy.isDraft && (
              <div
                role="note"
                className="p-5 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl flex items-start space-x-3 text-xs sm:text-sm leading-relaxed"
              >
                <FaExclamationCircle className="text-amber-600 mt-0.5 text-lg flex-shrink-0" />
                <div>
                  <span className="font-bold block mb-0.5">Legal Draft Notice</span>
                  {policy.notice}
                </div>
              </div>
            )}

            <div className="space-y-8">
              {policy.sections?.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl font-bold text-gray-900">
                    {section.heading}
                  </h2>
                  <p className="text-egnisher-neutral text-sm sm:text-base leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
