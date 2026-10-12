import React, { useState } from 'react';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaEnvelope,
} from 'react-icons/fa';
import { careersData } from '../data/careersData';
import PageBanner from '../components/common/PageBanner';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(careersData[0]?.id || null);

  const activeJob = careersData.find((j) => j.id === selectedJob) || careersData[0];

  return (
    <div>
      <PageBanner
        badge="Careers"
        title="Join the Egnisher Developer Collective"
        description="We are always looking for curious, disciplined full-stack developers who love building clean software."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Culture note */}
        <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900">
              Demo Opportunities Notice
            </h2>
            <p className="text-sm text-egnisher-neutral">
              The listings below represent open developer profiles and sample specifications. Egnisher welcomes speculative applications from full-stack developers anytime.
            </p>
          </div>
          <Button href="mailto:careers@egnisher.agency" variant="primary" size="sm">
            Send Open Application
          </Button>
        </div>

        {/* Job Listings Grid / Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Job List Navigation */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Open Positions ({careersData.length})
            </h3>
            {careersData.map((job) => {
              const isSelected = selectedJob === job.id;
              return (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-egnisher-primary ring-2 ring-egnisher-primary/20 shadow-md'
                      : 'bg-white/80 border-gray-200 hover:border-purple-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={isSelected ? 'purple' : 'gray'} size="sm">
                      {job.department}
                    </Badge>
                    <span className="text-xs text-egnisher-neutral font-medium">
                      {job.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {job.position}
                  </h4>
                  <div className="flex items-center space-x-4 text-xs text-egnisher-neutral">
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 text-purple-400" />
                      {job.workArrangement}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <FaClock className="mr-1 text-teal-500" />
                      {job.experience}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Job Detail */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8">
            {activeJob ? (
              <>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="teal">{activeJob.department}</Badge>
                    <Badge variant="purple">{activeJob.workArrangement}</Badge>
                    <Badge variant="gray">{activeJob.experience}</Badge>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {activeJob.position}
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {activeJob.description}
                  </p>
                </div>

                {/* Requirements */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Core Qualifications & Requirements
                  </h3>
                  <ul className="space-y-3">
                    {activeJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                        <FaCheckCircle className="text-egnisher-accent mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application Instructions */}
                <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100 space-y-3">
                  <h3 className="text-base font-bold text-gray-900 flex items-center">
                    <FaEnvelope className="text-egnisher-primary mr-2" />
                    How to Apply
                  </h3>
                  <p className="text-xs sm:text-sm text-egnisher-neutral leading-relaxed">
                    {activeJob.applicationInstructions}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-gray-500">Select a job to view specifications.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
