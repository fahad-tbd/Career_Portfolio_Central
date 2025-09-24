import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function DashboardPage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    membershipType: 'Professional',
    joinDate: 'January 2024',
    profileComplete: 85,
  };

  const stats = [
    { 
      label: 'Resumes Created', 
      value: '3', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Portfolio Views', 
      value: '1,247', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'Job Applications', 
      value: '12', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: 'Profile Views', 
      value: '89', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const recentActivity = [
    { action: 'Updated resume', item: 'Senior Developer Resume', time: '2 hours ago', type: 'update' },
    { action: 'Applied to job', item: 'Frontend Developer at TechCorp', time: '1 day ago', type: 'application' },
    { action: 'Portfolio viewed', item: 'By recruiter from Microsoft', time: '2 days ago', type: 'view' },
    { action: 'Resume downloaded', item: 'Marketing Manager Resume', time: '3 days ago', type: 'download' },
    { action: 'Completed profile', item: 'Added work experience', time: '1 week ago', type: 'profile' },
  ];

  const quickActions = [
    { 
      title: 'Create New Resume', 
      description: 'Start building a new resume', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ), 
      href: '/resume-builder', 
      color: 'bg-gradient-to-br from-blue-500 to-blue-600' 
    },
    { 
      title: 'Update Portfolio', 
      description: 'Add new projects to showcase', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ), 
      href: '/portfolio-showcase', 
      color: 'bg-gradient-to-br from-green-500 to-green-600' 
    },
    { 
      title: 'Search Jobs', 
      description: 'Find your next opportunity', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ), 
      href: '/job-listings', 
      color: 'bg-gradient-to-br from-purple-500 to-purple-600' 
    },
    { 
      title: 'Book Counselling', 
      description: 'Get expert career advice', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ), 
      href: '/career-counselling', 
      color: 'bg-gradient-to-br from-orange-500 to-orange-600' 
    },
  ];

  const savedJobs = [
    { title: 'Senior Frontend Developer', company: 'TechCorp Inc.', location: 'San Francisco, CA', salary: '$120k - $150k', posted: '2 days ago' },
    { title: 'Product Manager', company: 'Innovation Labs', location: 'New York, NY', salary: '$130k - $160k', posted: '4 days ago' },
    { title: 'UX Designer', company: 'Design Studio', location: 'Remote', salary: '$90k - $110k', posted: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-brand-light">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-brand-gray-900 mb-2">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-brand-gray-600">
                Here&apos;s what&apos;s happening with your career journey
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-brand-teal text-white px-4 py-2 rounded-full text-sm font-medium">
                {user.membershipType} Member
              </span>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-brand-gray-900">Profile Completion</h2>
            <span className="text-brand-teal font-semibold">{user.profileComplete}%</span>
          </div>
          <div className="w-full bg-brand-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-brand-teal h-3 rounded-full transition-all duration-300"
              style={{ width: `${user.profileComplete}%` }}
            ></div>
          </div>
          <p className="text-sm text-brand-gray-600">
            Complete your profile to increase visibility to recruiters and improve job matching.
            <Link href="/profile" className="text-brand-navy hover:underline ml-1">
              Complete now →
            </Link>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center">
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} text-white rounded-xl mb-4 mx-auto`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-brand-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-brand-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-semibold text-brand-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <div className="flex items-center p-4 rounded-lg border border-brand-gray-200 hover:border-brand-navy hover:shadow-md transition-all duration-200 group">
                      <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-brand-gray-900 group-hover:text-brand-navy transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-brand-gray-600">{action.description}</p>
                      </div>
                      <svg className="w-5 h-5 text-brand-gray-400 group-hover:text-brand-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity & Saved Jobs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-brand-gray-900">Recent Activity</h2>
                <Link href="/activity" className="text-sm text-brand-navy hover:underline">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                      activity.type === 'update' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'application' ? 'bg-green-100 text-green-600' :
                      activity.type === 'view' ? 'bg-purple-100 text-purple-600' :
                      activity.type === 'download' ? 'bg-orange-100 text-orange-600' :
                      'bg-brand-gray-100 text-brand-gray-600'
                    }`}>
                      {activity.type === 'update' && 'UP'}
                      {activity.type === 'application' && 'AP'}
                      {activity.type === 'view' && 'VW'}
                      {activity.type === 'download' && 'DL'}
                      {activity.type === 'profile' && 'PR'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-brand-gray-900">
                        <span className="font-medium">{activity.action}</span> {activity.item}
                      </p>
                      <p className="text-xs text-brand-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Jobs */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-brand-gray-900">Saved Jobs</h2>
                <Link href="/job-listings" className="text-sm text-brand-navy hover:underline">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {savedJobs.map((job, index) => (
                  <div key={index} className="border border-brand-gray-200 rounded-lg p-4 hover:border-brand-navy transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-brand-gray-900 hover:text-brand-navy transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-brand-teal font-medium text-sm">{job.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-brand-gray-600">
                          <span>{job.location}</span>
                          <span>{job.salary}</span>
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="primary" size="sm">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="card mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-brand-gray-900">Upcoming Sessions</h2>
            <Link href="/career-counselling" className="text-sm text-brand-navy hover:underline">
              Book new session
            </Link>
          </div>
          <div className="bg-brand-light rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-lg font-medium text-brand-gray-900 mb-2">No upcoming sessions</h3>
            <p className="text-brand-gray-600 mb-4">
              Book a career counselling session to get personalized guidance from our experts.
            </p>
            <Link href="/career-counselling">
              <Button variant="primary" size="sm">
                Book Session
              </Button>
            </Link>
          </div>
        </div>

        {/* Account Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="card">
            <h2 className="text-xl font-semibold text-brand-gray-900 mb-4">Account Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-brand-gray-700">Name</label>
                <p className="text-brand-gray-900">{user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-brand-gray-700">Email</label>
                <p className="text-brand-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-brand-gray-700">Member Since</label>
                <p className="text-brand-gray-900">{user.joinDate}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/profile">
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-brand-gray-900 mb-4">Subscription</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-brand-gray-700">Current Plan</label>
                <p className="text-brand-gray-900">{user.membershipType}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-brand-gray-700">Status</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <div>
                <label className="text-sm font-medium text-brand-gray-700">Next Billing</label>
                <p className="text-brand-gray-900">February 15, 2024</p>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <Link href="/membership">
                <Button variant="primary" size="sm">
                  Upgrade Plan
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
