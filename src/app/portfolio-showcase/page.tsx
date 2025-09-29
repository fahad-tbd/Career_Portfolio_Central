'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useNotification } from '@/hooks/useNotification';
import Button from '@/components/ui/Button';
import NotificationModal from '@/components/ui/NotificationModal';

interface Portfolio {
  id: number;
  name: string;
  role: string;
  company: string;
  category: string;
  image: string;
  views: string;
  likes: number;
  featured: boolean;
  description: string;
  skills: string[];
  achievements: string[];
  testimonial?: string;
  linkedIn?: string;
  portfolio?: string;
  projects: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
  }[];
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

// Portfolio data - Currently empty as we're building our community  
const portfolios: Portfolio[] = [];

const categories = ['All', 'Design', 'Development', 'Product', 'Data Science', 'Marketing'];

export default function PortfolioShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPortfolios, setLikedPortfolios] = useState<number[]>([]);
  const {
    notification,
    hideNotification,
    showLoginToAccessPortfolio,
  } = useNotification();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const filteredPortfolios = useMemo(() => {
    return portfolios.filter(portfolio => {
      const matchesCategory = selectedCategory === 'All' || portfolio.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        portfolio.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleViewPortfolio = () => {
    showLoginToAccessPortfolio();
  };

  const handleLikePortfolio = (portfolioId: number) => {
    setLikedPortfolios(prev => 
      prev.includes(portfolioId) 
        ? prev.filter(id => id !== portfolioId)
        : [...prev, portfolioId]
    );
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section 
          className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'url(/assets/portfolio-showcase/kelly-sikkema-xO6NCQjIWFY-unsplash.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-teal/80"></div>
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Portfolio
                  <span className="block text-brand-gold">Showcase</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
                  Discover inspiring career portfolios from professionals who landed their dream jobs at top companies worldwide
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-200">
                <Link href="/signup">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Create Your Portfolio
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('portfolios')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Browse Portfolios
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up delay-400">
                {[
                  { number: '2.5K+', label: 'Portfolios' },
                  { number: '89%', label: 'Success Rate' },
                  { number: '150+', label: 'Companies' },
                  { number: '4.9/5', label: 'Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20">
                    <div className="text-2xl md:text-3xl font-bold text-brand-gold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm opacity-90">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12 bg-gradient-to-b from-brand-light to-white sticky top-0 z-40 backdrop-blur-sm" data-animate id="filters">
          <div className="container">
            <div className="transition-all duration-700 opacity-100 translate-y-0">
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative mt-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-brand-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name, role, company, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-brand-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal text-brand-gray-900 placeholder-brand-gray-500 shadow-lg"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      category === selectedCategory
                        ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                        : 'bg-white text-brand-gray-700 hover:bg-brand-navy hover:text-white border-2 border-brand-gray-200 hover:border-brand-navy shadow-md'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <div className="text-center mt-6">
                <p className="text-brand-gray-600">
                  Showing <span className="font-semibold text-brand-navy">{filteredPortfolios.length}</span> portfolio{filteredPortfolios.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20" data-animate id="portfolios">
          <div className="container">
            {portfolios.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand-navy to-brand-teal rounded-3xl flex items-center justify-center text-white">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-brand-gray-900 mb-4">Be the First to Showcase Your Portfolio!</h3>
                <p className="text-lg text-brand-gray-600 mb-8 max-w-2xl mx-auto">
                  We&apos;re building something amazing! Our portfolio showcase is launching soon. 
                  Be among the first professionals to showcase your work and connect with opportunities.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Link href="/signup">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-brand-navy to-brand-teal text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Join the Waitlist
                    </Button>
                  </Link>
                  <Link href="/resume-builder">
                <Button 
                  variant="outline" 
                      size="lg"
                      className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300"
                    >
                      Build Your Resume First
                </Button>
                  </Link>
                </div>
                <div className="mt-12 bg-gradient-to-r from-brand-navy/5 to-brand-teal/5 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-brand-gray-900 mb-4">What&apos;s Coming Soon:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-gray-900 mb-1">Professional Portfolios</h5>
                        <p className="text-sm text-brand-gray-600">Showcase your best work and projects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-gray-900 mb-1">Direct Connections</h5>
                        <p className="text-sm text-brand-gray-600">Connect with recruiters and employers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-gray-900 mb-1">Career Opportunities</h5>
                        <p className="text-sm text-brand-gray-600">Get discovered for your next role</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredPortfolios.map((portfolio, index) => (
                  <div
                    key={portfolio.id}
                    className="group card card-hover transform transition-all duration-500 hover:scale-105 opacity-100 translate-y-0"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Portfolio Image */}
                    <div className="relative h-48 bg-gradient-to-br from-brand-navy to-brand-teal rounded-xl mb-4 overflow-hidden cursor-pointer"
                         onClick={handleViewPortfolio}>
                      {portfolio.featured && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-navy px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                          Featured
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center transform group-hover:scale-110 transition-transform duration-300">
                          <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-opacity-30 transition-all duration-300">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <p className="text-sm font-bold">{portfolio.role}</p>
                          <p className="text-xs opacity-80">{portfolio.company}</p>
                        </div>
                      </div>
                      
                      {/* View Overlay */}
                      <div className="absolute inset-0 bg-brand-navy bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Portfolio Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-brand-gray-900 group-hover:text-brand-navy transition-colors line-clamp-2">
                          {portfolio.name}
                        </h3>
                        <p className="text-brand-gray-600 font-medium">{portfolio.role}</p>
                        <p className="text-sm text-brand-teal font-semibold">{portfolio.company}</p>
                      </div>

                      {/* Skills Preview */}
                      <div className="flex flex-wrap gap-1">
                        {portfolio.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-50 text-brand-navy px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {portfolio.skills.length > 3 && (
                          <span className="text-xs text-brand-gray-500 px-2 py-1">
                            +{portfolio.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-brand-gray-500">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>{portfolio.views}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLikePortfolio(portfolio.id);
                          }}
                          className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                        >
                          <svg 
                            className={`w-4 h-4 transition-colors ${
                              likedPortfolios.includes(portfolio.id) 
                                ? 'fill-red-500 text-red-500' 
                                : 'fill-none'
                            }`} 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>{portfolio.likes + (likedPortfolios.includes(portfolio.id) ? 1 : 0)}</span>
                        </button>
                      </div>

                      {/* View Portfolio Button */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        fullWidth
                        className="group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300"
                        onClick={handleViewPortfolio}
                      >
                        View Portfolio
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-b from-brand-light to-white" data-animate id="success-stories">
          <div className="container">
            <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
                Success Stories
              </h2>
              <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
                See how professionals leveraged their portfolios to land dream jobs at top companies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Professional Designer',
                  role: 'UI/UX Design Career Growth',
                  story: 'Well-crafted portfolios demonstrate design process and problem-solving skills, leading to better career opportunities.',
                  metric: 'Career advancement',
                  avatar: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h10V5z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h4m-4 4h4"/>
                    </svg>
                  ),
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  name: 'Professional Developer',
                  role: 'Development Career Success',
                  story: 'Technical portfolios showcasing project impact and problem-solving abilities attract top employers and opportunities.',
                  metric: 'Multiple opportunities',
                  avatar: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  ),
                  color: 'from-green-500 to-green-600'
                },
                {
                  name: 'Professional Product Manager',
                  role: 'Product Management Success',
                  story: 'Strategic portfolios highlighting product thinking and measurable results help professionals stand out to recruiters.',
                  metric: 'Career goals achieved',
                  avatar: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  ),
                  color: 'from-blue-500 to-blue-600'
                }
              ].map((story, index) => (
                <div 
                  key={index}
                  className="group card card-hover text-center transform transition-all duration-500 hover:scale-105 opacity-100 translate-y-0"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${story.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {story.avatar}
                  </div>
                  <h3 className="text-lg font-bold text-brand-gray-900 mb-2">{story.name}</h3>
                  <p className="text-brand-teal font-semibold mb-4">{story.role}</p>
                  <p className="text-brand-gray-600 italic mb-4 leading-relaxed">
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    {story.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-teal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-brand-teal/95"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your Portfolio?
              </h2>
              <p className="text-xl mb-12 opacity-90 leading-relaxed">
                Join thousands of professionals who have showcased their work and landed their dream jobs at top companies worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/resume-builder">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-300"
                  >
                    Build Your Resume First
                  </Button>
                </Link>
              </div>
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