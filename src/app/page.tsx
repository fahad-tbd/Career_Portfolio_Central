'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useNotification } from '@/hooks/useNotification';
import NotificationModal from '@/components/ui/NotificationModal';

// Extend Window interface to include our custom timer property
declare global {
  interface Window {
    __statsTimer?: NodeJS.Timeout;
  }
}

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    success: 0,
    counselors: 0,
    jobs: 0
  });
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  const {
    notification,
    hideNotification,
    showNewsletterSuccess,
  } = useNotification();

  useEffect(() => {
    // Reset animation state on mount (helps with back navigation)
    setAnimatedStats({
      users: 0,
      success: 0,
      counselors: 0,
      jobs: 0
    });
    setIsAnimationComplete(false);

    const targets = {
      users: 98333,
      success: 96,
      counselors: 491,
      jobs: 49166
    };

    // Delay the animation start to ensure component is fully mounted
    const startTimeout = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        if (currentStep < steps) {
          setAnimatedStats({
            users: Math.floor((targets.users * currentStep) / steps),
            success: Math.floor((targets.success * currentStep) / steps),
            counselors: Math.floor((targets.counselors * currentStep) / steps),
            jobs: Math.floor((targets.jobs * currentStep) / steps)
          });
          currentStep++;
        } else {
          clearInterval(timer);
          setAnimatedStats(targets);
          setIsAnimationComplete(true);
        }
      }, stepTime);

      // Store timer for cleanup
      window.__statsTimer = timer;
    }, 500);

    // Handle page visibility for back navigation
    const handleVisibilityChange = () => {
      if (!document.hidden && !isAnimationComplete) {
        // Re-trigger animation if page becomes visible and animation hasn't completed
        setTimeout(() => {
          setAnimatedStats({
            users: 0,
            success: 0,
            counselors: 0,
            jobs: 0
          });
          setIsAnimationComplete(false);
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(startTimeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (window.__statsTimer) {
        clearInterval(window.__statsTimer);
      }
    };
  }, [isAnimationComplete]);

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="hero-section relative py-32 lg:py-40 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-10 animate-fade-in-down hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-medium text-white/95 mr-2">
                Trusted by 100,000+ professionals worldwide
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight animate-fade-in-up">
              <span className="block text-white drop-shadow-2xl animate-delay-200">
                Build a Career Portfolio
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl animate-delay-400">
                That Gets You Noticed
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-xl md:text-2xl text-white/95 mb-16 text-balance drop-shadow-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-600">
              Professional resume builder, stunning portfolio showcase, and expert career counselling—all in one powerful platform designed to accelerate your career success
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animate-delay-800">
              <Link href="/resume-builder" className="group">
                <button className="btn-gradient relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 group">
                  Start Your Free Resume
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              
              <Link href="/membership" className="group">
                <button className="glass-card relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white rounded-2xl hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
                  Upgrade to Premium
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-white/90 animate-fade-in-up animate-delay-1000">
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-3 border-white shadow-lg animate-bounce-gentle"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-3 border-white shadow-lg animate-bounce-gentle animate-delay-200"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-3 border-white shadow-lg animate-bounce-gentle animate-delay-400"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-3 border-white flex items-center justify-center text-sm font-bold text-white shadow-lg animate-bounce-gentle animate-delay-600">
                    +
                  </div>
                </div>
                <span className="text-base font-medium">10,000+ success stories</span>
              </div>
              
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-base font-medium">4.9/5 average rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400/15 rounded-full blur-2xl animate-float animate-delay-600"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl animate-float animate-delay-900"></div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animate-delay-300"></div>
        
        <div className="container relative">
          <div className="text-center mb-24 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-brand-navy rounded-full text-sm font-medium mb-8 hover:scale-105 transition-transform">
              Complete Career Platform
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-brand-gray-900">
              Everything You Need for
              <span className="block gradient-text mt-2">
                Career Excellence
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive tools, expert guidance, and resources designed to accelerate your professional growth and career success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'AI Resume Builder',
                description: 'Create ATS-optimized resumes with AI assistance and industry-specific templates that get you interviews',
                href: '/resume-builder',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                gradient: 'from-blue-500 to-blue-600',
                bgGradient: 'from-blue-50 to-blue-100',
                badge: 'AI Powered'
              },
              {
                title: 'Portfolio Showcase',
                description: 'Display your work with interactive galleries, case studies, and professional presentations',
                href: '/portfolio-showcase',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                gradient: 'from-purple-500 to-purple-600',
                bgGradient: 'from-purple-50 to-purple-100',
                badge: 'Interactive'
              },
              {
                title: 'Smart Job Matching',
                description: 'Discover curated opportunities with AI-powered matching based on your skills and preferences',
                href: '/job-listings',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
                  </svg>
                ),
                gradient: 'from-green-500 to-green-600',
                bgGradient: 'from-green-50 to-green-100',
                badge: 'Smart Match'
              },
              {
                title: 'Expert Career Coaching',
                description: 'One-on-one sessions with certified career coaches who understand your industry',
                href: '/career-counselling',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                gradient: 'from-orange-500 to-orange-600',
                bgGradient: 'from-orange-50 to-orange-100',
                badge: 'Expert Led'
              },
              {
                title: 'Premium Membership',
                description: 'Unlock advanced features, priority support, and exclusive career resources',
                href: '/membership',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                gradient: 'from-yellow-500 to-yellow-600',
                bgGradient: 'from-yellow-50 to-yellow-100',
                badge: 'Premium'
              },
              {
                title: 'Learning Resources',
                description: 'Access courses, webinars, and industry insights to continuously develop your skills',
                href: '/blog',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                gradient: 'from-indigo-500 to-indigo-600',
                bgGradient: 'from-indigo-50 to-indigo-100',
                badge: 'Updated Daily'
              }
            ].map((feature, index) => (
              <Link key={index} href={feature.href} className="group animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative p-8 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover-lift overflow-hidden h-full">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-brand-navy to-brand-teal text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.badge}
                  </div>
                  
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} text-white rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg hover-glow`}>
                      {feature.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-brand-gray-600 mb-8 leading-relaxed group-hover:text-brand-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="inline-flex items-center text-brand-navy font-semibold group-hover:text-brand-teal transition-all duration-300 transform group-hover:translate-x-1">
                      <span>Explore Feature</span>
                      <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Professionals
              <span className="block gradient-text-gold">Worldwide</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join thousands of successful professionals who have transformed their careers with our platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { 
                number: `${animatedStats.users.toLocaleString()}+`, 
                label: 'Active Users',
                description: 'Professionals worldwide'
              },
              { 
                number: `${animatedStats.success}%`, 
                label: 'Success Rate',
                description: 'Land interviews'
              },
              { 
                number: `${animatedStats.counselors}+`, 
                label: 'Expert Counselors',
                description: 'Certified professionals'
              },
              { 
                number: `${animatedStats.jobs.toLocaleString()}+`, 
                label: 'Job Opportunities',
                description: 'Updated daily'
              }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll hover-lift" style={{animationDelay: `${index * 200}ms`}}>
                <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 stats-number leading-tight break-words">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 text-white/95 leading-tight break-words">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 leading-tight break-words">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Platform Benefits
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-brand-gray-900">
              Why Choose Our
              <span className="block gradient-text">Career Platform</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Professional tools and resources designed to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Resume Optimization",
                description: "Advanced algorithms analyze job descriptions and optimize your resume for maximum ATS compatibility and recruiter appeal.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                title: "Professional Portfolio Builder",
                description: "Create stunning portfolios with drag-and-drop interface, custom templates, and responsive design for all devices.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100"
              },
              {
                title: "Smart Job Matching",
                description: "Intelligent algorithms match your skills and preferences with relevant opportunities from top companies worldwide.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
                  </svg>
                ),
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100"
              },
              {
                title: "Expert Career Guidance",
                description: "Access to industry insights, career coaching resources, and professional development strategies from experts.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100"
              },
              {
                title: "Industry-Standard Templates",
                description: "Choose from professionally designed templates that meet current industry standards and hiring manager expectations.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                gradient: "from-indigo-500 to-indigo-600",
                bgGradient: "from-indigo-50 to-indigo-100"
              },
              {
                title: "Real-Time Analytics",
                description: "Track your application success rate, profile views, and get insights to improve your job search strategy.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                gradient: "from-teal-500 to-teal-600",
                bgGradient: "from-teal-50 to-teal-100"
              }
            ].map((benefit, index) => (
              <div key={index} className="testimonial-card rounded-2xl p-8 h-full animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white mr-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-gray-900 mb-2">{benefit.title}</h3>
                  </div>
                </div>
                
                <p className="text-brand-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Job Opportunities */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Featured Jobs
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-brand-gray-900">
              Featured Career
              <span className="block gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Discover exclusive job openings from top companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Senior Frontend Developer",
                company: "Tech Innovators Inc.",
                location: "San Francisco, CA",
                salary: "$120k - $160k",
                type: "Full-time",
                tags: ["React", "TypeScript", "Next.js"],
                logo: "TI",
                posted: "2 days ago",
                applicants: "45+"
              },
              {
                title: "Product Marketing Manager",
                company: "Growth Solutions",
                location: "New York, NY",
                salary: "$100k - $140k",
                type: "Full-time",
                tags: ["Marketing", "Analytics", "Growth"],
                logo: "GS",
                posted: "1 day ago",
                applicants: "67+"
              },
              {
                title: "UX/UI Designer",
                company: "Design Studios Pro",
                location: "Los Angeles, CA",
                salary: "$85k - $115k",
                type: "Full-time",
                tags: ["Figma", "Prototyping", "User Research"],
                logo: "DS",
                posted: "3 days ago",
                applicants: "89+"
              },
              {
                title: "Data Science Lead",
                company: "AI Innovations",
                location: "Seattle, WA",
                salary: "$140k - $180k",
                type: "Full-time",
                tags: ["Python", "Machine Learning", "AI"],
                logo: "AI",
                posted: "1 day ago",
                applicants: "34+"
              },
              {
                title: "DevOps Engineer",
                company: "Cloud Solutions Corp",
                location: "Austin, TX",
                salary: "$110k - $150k",
                type: "Full-time",
                tags: ["AWS", "Kubernetes", "Docker"],
                logo: "CS",
                posted: "4 days ago",
                applicants: "23+"
              },
              {
                title: "Business Analyst",
                company: "Financial Services Group",
                location: "Chicago, IL",
                salary: "$75k - $105k",
                type: "Full-time",
                tags: ["SQL", "Tableau", "Analytics"],
                logo: "FS",
                posted: "2 days ago",
                applicants: "56+"
              }
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover-lift transition-all duration-300 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-xl flex items-center justify-center text-white text-sm font-bold">
                    {job.logo}
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {job.type}
                    </span>
                    <p className="text-xs text-brand-gray-500 mt-1">{job.posted}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">{job.title}</h3>
                <p className="text-brand-gray-600 font-medium mb-1">{job.company}</p>
                <p className="text-brand-gray-500 text-sm mb-3">{job.location}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-brand-navy font-bold text-lg">{job.salary}</span>
                  <span className="text-brand-gray-500 text-sm">{job.applicants} applicants</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-brand-gray-100 text-brand-gray-700 text-xs rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link href="/job-listings" className="btn-gradient w-full text-center py-3 px-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                  Apply Now
              </Link>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/job-listings" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span>View All Jobs</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              </Link>
            </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-gray-900">
              Trusted by Professionals at
              <span className="block gradient-text">Leading Companies</span>
            </h2>
            <p className="text-lg text-brand-gray-600">
              Our users work at the world&apos;s most innovative companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Google", logo: "/assets/company-logos/Google.png" },
              { name: "Microsoft", logo: "/assets/company-logos/Microsoft_logo.svg.png" },
              { name: "Apple", logo: "/assets/company-logos/Apple_logo.jpg" },
              { name: "Amazon", logo: "/assets/company-logos/Amazon_icon.png" },
              { name: "Meta", logo: "/assets/company-logos/Meta.jpg" },
              { name: "Netflix", logo: "/assets/company-logos/netflix_logo_icon_170919.png" },
              { name: "Tesla", logo: "/assets/company-logos/tesla-logo-tesla-icon-transparent-png-free-vector.jpg" },
              { name: "Spotify", logo: "/assets/company-logos/Spotify_App_Logo.svg" },
              { name: "Adobe", logo: "/assets/company-logos/Adobe-Logo-1993.jpg" },
              { name: "Salesforce", logo: "/assets/company-logos/salesforce.png" },
              { name: "Uber", logo: "/assets/company-logos/uber.png" },
              { name: "Airbnb", logo: "/assets/company-logos/airbnb.jpg" }
            ].map((client, index) => (
              <div key={index} className="client-logo text-center p-6 rounded-xl hover:bg-gray-50 animate-on-scroll transition-all duration-300 group" style={{animationDelay: `${index * 50}ms`}}>
                <div className="w-16 h-16 mx-auto mb-3 relative overflow-hidden rounded-lg bg-gray-50 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={48}
                    height={48}
                    className="object-contain group-hover:scale-105 transition-transform duration-300 max-w-12 max-h-12"
                    style={{ filter: 'none' }}
                  />
                </div>
                <p className="text-brand-gray-600 font-medium text-sm group-hover:text-brand-navy transition-colors duration-300">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Frequently Asked Questions
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-brand-gray-900">
              Got Questions?
              <span className="block gradient-text">We&apos;ve Got Answers</span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our platform and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How does the AI resume builder work?",
                answer: "Our AI analyzes job descriptions and your experience to create optimized resumes. It suggests improvements, keywords, and formatting to increase your chances of getting interviews."
              },
              {
                question: "Is the basic plan really free?",
                answer: "Yes! Our basic plan includes resume building, portfolio creation, and access to job listings. Premium features include advanced AI suggestions, priority support, and exclusive opportunities."
              },
              {
                question: "How quickly can I expect to see results?",
                answer: "Most users see improved response rates within 2-3 weeks. Our average user lands an interview within 30 days of using our optimized resume and following our career coaching advice."
              },
              {
                question: "Do you offer personalized career coaching?",
                answer: "Absolutely! We have certified career coaches specializing in various industries. Premium members get access to one-on-one sessions, mock interviews, and personalized career planning."
              },
              {
                question: "Can I use this platform if I'm changing careers?",
                answer: "Yes! Career transitions are our specialty. Our platform helps you identify transferable skills, craft compelling narratives, and connect with opportunities in your target field."
              },
              {
                question: "Is my personal information secure?",
                answer: "Security is our top priority. We use enterprise-grade encryption, comply with data protection regulations, and never share your information without explicit consent."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item p-6 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex items-center justify-between cursor-pointer" onClick={() => {
                  const content = document.getElementById(`faq-content-${index}`);
                  content?.classList.toggle('open');
                }}>
                  <h3 className="text-xl font-bold text-brand-gray-900 pr-4">{faq.question}</h3>
                  <svg className="w-6 h-6 text-brand-navy transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div id={`faq-content-${index}`} className="faq-content mt-4">
                  <p className="text-brand-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay Ahead of Your
              <span className="block gradient-text-gold">Career Game</span>
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Get weekly career tips, industry insights, and exclusive job opportunities delivered to your inbox
            </p>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail && /\S+@\S+\.\S+/.test(newsletterEmail)) {
                  setNewsletterEmail('');
                  showNewsletterSuccess();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            >
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-2xl border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-brand-gray-900"
                required
              />
              <button 
                type="submit"
                className="btn-gradient-reverse px-8 py-4 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-white/70 text-sm">
              Join 50,000+ professionals • No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container relative text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-brand-gray-900">
              Ready to Transform
              <span className="block gradient-text">Your Career?</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have accelerated their careers with our comprehensive platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/signup" className="group">
                <button className="btn-gradient relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-navy/30 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 group">
                  Start Your Free Account
                  <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              
              <Link href="/career-counselling" className="group">
                <button className="glass-card relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-brand-navy rounded-2xl hover:bg-brand-gray-50 focus:outline-none focus:ring-4 focus:ring-brand-navy/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-brand-gray-200 group">
                  Book a Free Consultation
                  <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-brand-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">Free forever plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {notification.config && (
        <NotificationModal
          isOpen={notification.isOpen}
          onClose={hideNotification}
          {...notification.config}
        />
      )}
    </>
  );
}
