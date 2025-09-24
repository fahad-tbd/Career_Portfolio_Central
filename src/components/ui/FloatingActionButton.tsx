'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      href: '/resume-builder',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'Build Resume',
      color: 'from-blue-500 to-blue-600'
    },
    {
      href: '/career-counselling',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: 'Get Advice',
      color: 'from-green-500 to-green-600'
    },
    {
      href: '/job-listings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
        </svg>
      ),
      label: 'Find Jobs',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Sub Actions */}
      {isOpen && (
        <div className="mb-4 space-y-3 flex flex-col items-center">
          {actions.map((action, index) => (
            <Link
              key={action.href}
              href={action.href}
              className="group block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center">
                <span className="mr-3 px-3 py-2 bg-white rounded-lg shadow-lg text-sm font-medium text-brand-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border">
                  {action.label}
                </span>
                <div className={`w-14 h-14 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 animate-fade-in-up`}>
                  {action.icon}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Quick Actions"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Quick Actions
        </div>
      </button>
    </div>
  );
}
