'use client';

import React, { useState, useMemo } from 'react';
import { useNotification } from '@/hooks/useNotification';
import Button from '@/components/ui/Button';
import NotificationModal from '@/components/ui/NotificationModal';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: React.ReactNode;
  logoColor: string;
  tags: string[];
  featured: boolean;
  remote: boolean;
  description?: string;
  requirements?: string[];
  benefits?: string[];
}

// Sample Job Data - moved outside component to prevent recreation
const allJobs: Job[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 days ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      logoColor: 'from-blue-500 to-blue-600',
      tags: ['React', 'TypeScript', 'Next.js'],
      featured: true,
      remote: true,
      description: 'We are looking for an experienced Frontend Developer to join our growing team.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'Next.js knowledge'],
      benefits: ['Health Insurance', 'Remote Work', '401k Matching'],
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $160k',
      posted: '1 day ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      logoColor: 'from-orange-500 to-orange-600',
      tags: ['Strategy', 'Analytics', 'Leadership'],
      featured: false,
      remote: false,
      description: 'Lead product strategy and development for our innovative solutions.',
      requirements: ['3+ years PM experience', 'Analytics skills', 'Leadership experience'],
      benefits: ['Health Insurance', 'Stock Options', 'Professional Development'],
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Design Studio Pro',
      location: 'Remote',
      type: 'Contract',
      salary: '$80k - $100k',
      posted: '3 days ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h10V5z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h4m-4 4h4"/>
        </svg>
      ),
      logoColor: 'from-purple-500 to-purple-600',
      tags: ['Figma', 'Prototyping', 'User Research'],
      featured: true,
      remote: true,
      description: 'Create stunning user experiences for our digital products.',
      requirements: ['Figma expertise', 'Portfolio required', 'UX research skills'],
      benefits: ['Flexible Hours', 'Remote Work', 'Creative Freedom'],
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Corp',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $140k',
      posted: '1 week ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      logoColor: 'from-teal-500 to-teal-600',
      tags: ['Python', 'Machine Learning', 'SQL'],
      featured: false,
      remote: true,
      description: 'Analyze data to drive business insights and growth.',
      requirements: ['Python proficiency', 'ML experience', 'SQL skills'],
      benefits: ['Health Insurance', 'Remote Work', 'Learning Budget'],
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$125k - $155k',
      posted: '4 days ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      ),
      logoColor: 'from-gray-500 to-gray-600',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      featured: false,
      remote: true,
      description: 'Build and maintain scalable cloud infrastructure.',
      requirements: ['AWS certification', 'Docker experience', 'Kubernetes skills'],
      benefits: ['Health Insurance', 'Stock Options', 'Remote Work'],
    },
    {
      id: 6,
      title: 'Marketing Director',
      company: 'Growth Dynamics',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$140k - $170k',
      posted: '5 days ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      logoColor: 'from-green-500 to-green-600',
      tags: ['Digital Marketing', 'Growth', 'Analytics'],
      featured: true,
      remote: false,
      description: 'Lead marketing initiatives to drive company growth.',
      requirements: ['5+ years marketing experience', 'Growth hacking skills', 'Analytics expertise'],
      benefits: ['Health Insurance', 'Stock Options', 'Professional Development'],
    },
    {
      id: 7,
      title: 'Backend Developer',
      company: 'ServerTech Ltd.',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$100k - $130k',
      posted: '6 days ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      logoColor: 'from-indigo-500 to-indigo-600',
      tags: ['Node.js', 'Python', 'PostgreSQL'],
      featured: false,
      remote: true,
      description: 'Develop robust backend systems and APIs.',
      requirements: ['Node.js experience', 'Database skills', 'API development'],
      benefits: ['Health Insurance', 'Remote Work', '401k Matching'],
    },
    {
      id: 8,
      title: 'Mobile App Developer',
      company: 'AppMakers Inc.',
      location: 'Miami, FL',
      type: 'Part-time',
      salary: '$60k - $80k',
      posted: '1 week ago',
      logo: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"/>
        </svg>
      ),
      logoColor: 'from-pink-500 to-pink-600',
      tags: ['React Native', 'iOS', 'Android'],
      featured: false,
      remote: true,
      description: 'Create amazing mobile experiences for our users.',
      requirements: ['React Native experience', 'Mobile development skills', 'App store knowledge'],
      benefits: ['Flexible Hours', 'Remote Work', 'Creative Projects'],
    },
];

const filters = {
  jobTypes: ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'],
  locations: ['All Locations', 'Remote', 'San Francisco', 'New York', 'Austin', 'Seattle', 'Los Angeles', 'Chicago', 'Miami'],
  salaryRanges: ['All Salaries', '$50k - $80k', '$80k - $120k', '$120k - $160k', '$160k+'],
  sortOptions: ['Most Recent', 'Salary (High to Low)', 'Salary (Low to High)', 'Company A-Z'],
};

export default function JobListingsPage() {
  // State Management
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('All');
  const [locationDropdownFilter, setLocationDropdownFilter] = useState('All Locations');
  const [salaryRangeFilter, setSalaryRangeFilter] = useState('All Salaries');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const {
    notification,
    hideNotification,
    showLoginToApplyJob,
    showLoginToSaveJob,
    showNewsletterSuccess,
  } = useNotification();

  // Filter and Search Logic
  const filteredJobs = useMemo(() => {
    const filtered = allJobs.filter(job => {
      // Search term filter
      const searchMatch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Location search filter
      const locationMatch = locationFilter === '' || locationFilter === 'All Locations' ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());

      // Job type filter
      const typeMatch = jobTypeFilter === 'All' || job.type === jobTypeFilter;

      // Location dropdown filter
      const locationDropdownMatch = locationDropdownFilter === 'All Locations' ||
        (locationDropdownFilter === 'Remote' && job.remote) ||
        job.location.includes(locationDropdownFilter);

      // Salary range filter
      const salaryMatch = salaryRangeFilter === 'All Salaries' || (() => {
        const jobSalaryMin = parseInt(job.salary.split(' - ')[0].replace(/[$k,]/g, '')) * 1000;
        switch (salaryRangeFilter) {
          case '$50k - $80k':
            return jobSalaryMin >= 50000 && jobSalaryMin <= 80000;
          case '$80k - $120k':
            return jobSalaryMin >= 80000 && jobSalaryMin <= 120000;
          case '$120k - $160k':
            return jobSalaryMin >= 120000 && jobSalaryMin <= 160000;
          case '$160k+':
            return jobSalaryMin >= 160000;
          default:
            return true;
        }
      })();

      return searchMatch && locationMatch && typeMatch && locationDropdownMatch && salaryMatch;
    });

    // Sort logic
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'Salary (High to Low)':
          const aSalary = parseInt(a.salary.split(' - ')[1].replace(/[$k,]/g, '')) * 1000;
          const bSalary = parseInt(b.salary.split(' - ')[1].replace(/[$k,]/g, '')) * 1000;
          return bSalary - aSalary;
        case 'Salary (Low to High)':
          const aSalaryLow = parseInt(a.salary.split(' - ')[0].replace(/[$k,]/g, '')) * 1000;
          const bSalaryLow = parseInt(b.salary.split(' - ')[0].replace(/[$k,]/g, '')) * 1000;
          return aSalaryLow - bSalaryLow;
        case 'Company A-Z':
          return a.company.localeCompare(b.company);
        case 'Most Recent':
        default:
          const getDateValue = (posted: string) => {
            if (posted.includes('day')) return parseInt(posted);
            if (posted.includes('week')) return parseInt(posted) * 7;
            return 0;
          };
          return getDateValue(a.posted) - getDateValue(b.posted);
      }
    });

    return filtered;
  }, [searchTerm, locationFilter, jobTypeFilter, locationDropdownFilter, salaryRangeFilter, sortBy]);

  // Handlers
  const handleSearch = () => {
    // Search functionality is handled automatically by the filteredJobs useMemo
  };

  const handleApplyNow = () => {
    showLoginToApplyJob();
  };

  const handleSaveJob = () => {
    showLoginToSaveJob();
  };

  const handleLoadMore = () => {
    showLoginToApplyJob();
  };


  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section 
          className="hero-section py-20 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/job-listings/recruitment-hiring-career-job-emplyment-concept.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Find Your Dream Job
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Discover curated job opportunities that match your skills and career goals
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-brand-gray-200 p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-brand-navy text-brand-gray-900 placeholder-brand-gray-500"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="City, state, or remote"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-brand-navy text-brand-gray-900 placeholder-brand-gray-500"
                    />
                  </div>
                  <Button variant="primary" size="lg" onClick={handleSearch}>
                    Search Jobs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-brand-light border-b border-brand-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">Job Type</label>
                <select 
                  value={jobTypeFilter}
                  onChange={(e) => setJobTypeFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-brand-navy"
                >
                  {filters.jobTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">Location</label>
                <select 
                  value={locationDropdownFilter}
                  onChange={(e) => setLocationDropdownFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-brand-navy"
                >
                  {filters.locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-gray-700 mb-2">Salary Range</label>
                <select 
                  value={salaryRangeFilter}
                  onChange={(e) => setSalaryRangeFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-brand-navy"
                >
                  {filters.salaryRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-gray-900">Job Opportunities</h2>
                <p className="text-brand-gray-600 mt-2">Showing {filteredJobs.length} jobs matching your criteria</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-brand-gray-600">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-brand-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-brand-navy"
                >
                  {filters.sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    JS
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">No Jobs Found</h3>
                  <p className="text-brand-gray-600">Try adjusting your search criteria or filters.</p>
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <div key={job.id} className="card hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-brand-teal group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      {/* Job Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${job.logoColor} text-white rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                            {job.logo}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-semibold text-brand-gray-900 hover:text-brand-navy transition-colors">
                                  {job.title}
                                  {job.featured && (
                                    <span className="ml-2 bg-yellow-400 text-brand-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                                      Featured
                                    </span>
                                  )}
                                </h3>
                                <p className="text-brand-teal font-medium">{job.company}</p>
                                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-brand-gray-600">
                                  <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {job.location}
                                    {job.remote && (
                                      <span className="ml-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                        Remote
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {job.type}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                    {job.salary}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-brand-gray-500">{job.posted}</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              {job.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-blue-50 text-brand-navy px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
                        <Button 
                          variant="primary" 
                          size="sm"
                          onClick={handleApplyNow}
                        >
                          Apply Now
                        </Button>
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={handleSaveJob}
                        >
                          Save Job
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load More Jobs
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-navy text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Job Alerts Delivered to Your Inbox
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Never miss out on your dream job. Get personalized job recommendations based on your preferences.
              </p>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail && /\S+@\S+\.\S+/.test(newsletterEmail)) {
                    setNewsletterEmail('');
                    showNewsletterSuccess();
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-brand-gray-900 focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button variant="secondary" size="lg" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-brand-light">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50K+', label: 'Active Jobs' },
                { number: '15K+', label: 'Companies' },
                { number: '95%', label: 'Success Rate' },
                { number: '2M+', label: 'Job Seekers' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
                    {stat.number}
                  </div>
                  <div className="text-brand-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>


      {/* Notification Modal */}
      <NotificationModal
        isOpen={notification.isOpen}
        onClose={hideNotification}
        type={notification.config?.type}
        title={notification.config?.title}
        message={notification.config?.message || ''}
        autoClose={notification.config?.autoClose}
        autoCloseDelay={notification.config?.autoCloseDelay}
        showActionButton={notification.config?.showActionButton}
        actionButtonText={notification.config?.actionButtonText}
        onActionClick={notification.config?.onActionClick}
      />
    </>
  );
}