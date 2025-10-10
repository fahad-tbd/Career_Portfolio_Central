'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useNotification } from '@/hooks/useNotification';
import NotificationModal from '@/components/ui/NotificationModal';

export default function HelpCenterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const {
    notification,
    hideNotification,
    showLiveChatLoginPrompt,
  } = useNotification();

  const categories = [
    'All',
    'Getting Started',
    'Resume Builder',
    'Portfolio Showcase',
    'Job Listings',
    'Career Counselling',
    'Account & Billing',
    'Technical Support'
  ];

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How do I create my account?',
      answer: 'Creating your account is simple! Click the "Sign Up" button in the top right corner, fill in your basic information, and verify your email address. You can start building your resume and portfolio immediately after signing up.'
    },
    {
      category: 'Getting Started',
      question: 'What services does Career Portfolio Central offer?',
      answer: 'We offer a comprehensive suite of career development tools including: AI-powered resume builder, professional portfolio showcase, job listings from top companies, personalized career counselling, and interview preparation resources.'
    },
    {
      category: 'Resume Builder',
      question: 'How does the AI resume optimization work?',
      answer: 'Our AI analyzes job descriptions and optimizes your resume for maximum ATS (Applicant Tracking System) compatibility. It suggests relevant keywords, improves formatting, and ensures your resume matches industry standards for your target role.'
    },
    {
      category: 'Resume Builder',
      question: 'Can I create multiple resume versions?',
      answer: 'Yes! With any paid plan, you can create unlimited resume versions tailored for different job applications. Each version can be customized for specific industries, roles, or companies.'
    },
    {
      category: 'Portfolio Showcase',
      question: 'What types of portfolios can I create?',
      answer: 'Our platform supports portfolios for all industries including: creative professionals (designers, writers), technical roles (developers, engineers), business professionals (marketers, consultants), and many more. Each template is industry-optimized.'
    },
    {
      category: 'Portfolio Showcase',
      question: 'How do I share my portfolio with employers?',
      answer: 'Every portfolio gets a unique, professional URL that you can share directly with employers, add to your email signature, or include in job applications. You can also download a PDF version for offline sharing.'
    },
    {
      category: 'Job Listings',
      question: 'How often are job listings updated?',
      answer: 'Our job listings are updated daily from trusted sources including company websites, job boards, and our partner network. We ensure all listings are current and legitimate opportunities.'
    },
    {
      category: 'Job Listings',
      question: 'Can I set up job alerts?',
      answer: 'Absolutely! You can create custom job alerts based on your preferences including location, salary range, industry, and job type. You\'ll receive email notifications when matching opportunities are posted.'
    },
    {
      category: 'Career Counselling',
      question: 'How do I book a counselling session?',
      answer: 'Visit our Career Counselling page, choose your preferred counselor based on their expertise and reviews, and select an available time slot. Sessions can be conducted via video call, phone, or in-person (where available).'
    },
    {
      category: 'Career Counselling',
      question: 'What can I expect from a counselling session?',
      answer: 'Our certified career counselors provide personalized guidance on career transitions, interview preparation, salary negotiation, professional development, and strategic career planning. Each session is tailored to your specific goals and challenges.'
    },
    {
      category: 'Account & Billing',
      question: 'What membership plans are available?',
      answer: 'We offer flexible plans: Free (basic features), Professional ($19/month), and Premium ($39/month). Each plan includes different features and limits. You can upgrade, downgrade, or cancel anytime.'
    },
    {
      category: 'Account & Billing',
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your account settings. Your access will continue until the end of your current billing period, and you won\'t be charged for the next cycle.'
    },
    {
      category: 'Technical Support',
      question: 'Why isn\'t my resume saving properly?',
      answer: 'This is usually due to browser cache issues or temporary connectivity problems. Try refreshing the page, clearing your browser cache, or using an incognito/private browsing window. If the issue persists, contact our support team.'
    },
    {
      category: 'Technical Support',
      question: 'Can I use the platform on mobile devices?',
      answer: 'Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones and tablets. For the best experience creating detailed resumes and portfolios, we recommend using a desktop or laptop.'
    }
  ];

  const supportResources = [
    {
      title: 'Video Tutorials',
      description: 'Step-by-step guides for all platform features',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-600',
      href: '#tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Comprehensive articles and documentation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-purple-500 to-purple-600',
      href: '#knowledge-base'
    },
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      gradient: 'from-green-500 to-green-600',
      href: '#live-chat'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and feedback',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-orange-600',
      href: '/contact'
    }
  ];

  const quickLinks = [
    { title: 'Getting Started Guide', href: '#getting-started' },
    { title: 'Account Setup', href: '#account-setup' },
    { title: 'Billing Information', href: '#billing' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Contact Support', href: '/contact' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-8 animate-fade-in-down">
              <span className="text-sm font-medium text-white/95 mr-2">
                24/7 Support Available
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
              <span className="block text-white">Help Center</span>
              <span className="block gradient-text-gold">We&apos;re Here to Help</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Find answers to common questions, explore our resources, or get in touch with our support team
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative animate-fade-in-up animate-delay-400">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 text-lg bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
                <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* Support Resources Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Support Resources
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Get Help Your Way
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Choose the support method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportResources.map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 hover:scale-105 relative overflow-hidden">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {resource.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-brand-gray-600 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Common Questions
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our platform
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-white text-brand-gray-600 hover:bg-brand-navy hover:text-white border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-brand-navy text-xs font-medium rounded-full mb-2">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-brand-gray-900">
                          {faq.question}
                        </h3>
                      </div>
                      <svg
                        className={`w-6 h-6 text-brand-gray-400 transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-8 pb-6 border-t border-gray-100">
                      <p className="text-brand-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">No results found</h3>
              <p className="text-brand-gray-600">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Quick Links
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Jump directly to the information you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-brand-navy/20 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                      {link.title}
                    </h3>
                    <svg className="w-5 h-5 text-brand-gray-400 group-hover:text-brand-navy group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Our friendly support team is here to help you succeed. Get in touch and we&apos;ll respond within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Contact Support
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-300"
                onClick={showLiveChatLoginPrompt}
              >
                Start Live Chat
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-white/80 text-sm">support@careerportfoliocentral.com</p>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                <p className="text-white/80 text-sm">Within 24 hours</p>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-white/80 text-sm">Mon-Fri, 9 AM - 6 PM EST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* Notification Modal */}
      {notification.config && (
        <NotificationModal
          isOpen={notification.isOpen}
          onClose={hideNotification}
          {...notification.config}
        />
      )}
    </div>
  );
}
