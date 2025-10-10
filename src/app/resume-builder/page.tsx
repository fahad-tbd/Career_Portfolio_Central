'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useNotification } from '@/hooks/useNotification';
import NotificationModal from '@/components/ui/NotificationModal';

export default function ResumeBuilderPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { 
    notification, 
    hideNotification, 
    showLoginToViewTemplate, 
    showLoginToUseTemplate 
  } = useNotification();

  const templates = [
    {
      id: 1,
      name: 'Professional Executive',
      description: 'Clean and modern design perfect for corporate roles and executives',
      image: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      popular: true,
      category: 'Business',
      color: 'from-blue-500 to-blue-600',
      features: ['ATS Optimized', 'Executive Layout', 'Skills Section']
    },
    {
      id: 2,
      name: 'Creative Designer',
      description: 'Bold design for creative professionals, designers, and artists',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h10V5z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h4m-4 4h4"/>
        </svg>
      ),
      popular: false,
      category: 'Creative',
      color: 'from-purple-500 to-purple-600',
      features: ['Portfolio Section', 'Creative Layout', 'Visual Impact']
    },
    {
      id: 3,
      name: 'Tech Professional',
      description: 'Modern layout optimized for software developers and IT professionals',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      popular: true,
      category: 'Technology',
      color: 'from-green-500 to-green-600',
      features: ['Skills Matrix', 'Project Showcase', 'Github Integration']
    },
    {
      id: 4,
      name: 'Academic Research',
      description: 'Traditional format for education, research, and academic positions',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
        </svg>
      ),
      popular: false,
      category: 'Education',
      color: 'from-orange-500 to-orange-600',
      features: ['Publication List', 'Research Focus', 'Academic Format']
    },
    {
      id: 5,
      name: 'Modern Minimalist',
      description: 'Simple and elegant design that highlights your content beautifully',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      ),
      popular: true,
      category: 'Simple',
      color: 'from-teal-500 to-teal-600',
      features: ['Clean Design', 'Easy Reading', 'Versatile Use']
    },
    {
      id: 6,
      name: 'Sales & Marketing',
      description: 'Dynamic template designed for sales professionals and marketers',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      popular: false,
      category: 'Sales',
      color: 'from-red-500 to-red-600',
      features: ['Achievement Focus', 'Metrics Display', 'Impact Showcase']
    },
  ];

  const categories = ['All', 'Business', 'Creative', 'Technology', 'Education', 'Simple', 'Sales'];

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Content',
      description: 'Get intelligent suggestions for content, keywords, and improvements',
      color: 'text-blue-600',
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'ATS Optimized',
      description: 'Ensure your resume passes applicant tracking systems with 99% success rate',
      color: 'text-green-600',
      bgColor: 'from-green-500 to-green-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Real-time Preview',
      description: 'See exactly how your resume will look as you build it with live preview',
      color: 'text-purple-600',
      bgColor: 'from-purple-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Responsive',
      description: 'Build and edit your resume on any device, anywhere, anytime',
      color: 'text-orange-600',
      bgColor: 'from-orange-500 to-orange-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: 'Multiple Export Formats',
      description: 'Download in PDF, Word, or share with a unique professional link',
      color: 'text-teal-600',
      bgColor: 'from-teal-500 to-teal-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Industry Templates',
      description: 'Templates and content specifically tailored to your industry and role',
      color: 'text-red-600',
      bgColor: 'from-red-500 to-red-600'
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Choose Your Template',
      description: 'Select from our collection of ATS-optimized professional templates',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: 'Add Your Information',
      description: 'Fill in your details with our AI-guided step-by-step process',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: 'Customize & Perfect',
      description: 'Personalize design, optimize content, and preview your resume',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
    },
    {
      step: 4,
      title: 'Download & Apply',
      description: 'Export your resume and start applying to your dream jobs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Resume Builder Image */}
      <section className="relative bg-gradient-to-r from-brand-navy to-brand-teal text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/resume-builder/60946621_2306.q894.025.S.m009.c12.resume CV job flat collage.jpg"
            alt="Professional Resume Builder - Career Portfolio Central"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <span className="text-sm font-medium text-white/90">
                  AI-Powered Resume Builder
                </span>
              </div>
              
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-white drop-shadow-2xl">
                  Build Professional Resumes
                </span>
                <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                  That Get You Hired
                </span>
            </h1>
              
              <p className="text-xl md:text-2xl text-white/95 mb-12 text-balance drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                Create stunning, ATS-optimized resumes in minutes with our AI-powered builder, expert templates, and industry-specific guidance.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/signup" className="group">
                  <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand-navy bg-white rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1 group">
                    <span className="mr-2"></span>
                  Start Building Free
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
              </Link>
                
                <Link href="#templates" className="group">
                  <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white/40 rounded-xl hover:bg-white/10 hover:border-white/60 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 backdrop-blur-sm group">
                    <span className="mr-2">📋</span>
                  Browse Templates
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
              </Link>
              </div>
              
              {/* Social Proof Stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">500,000+ Resumes Created</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">99% ATS Pass Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
              Why Choose Our Resume Builder?
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Advanced AI-powered features designed to help you create resumes that get noticed by employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.bgColor} text-white rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Create your professional resume in 4 simple steps with our guided process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-gray-300 to-transparent"></div>
                  )}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
              Professional Resume Templates
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Choose from our collection of expertly designed, ATS-optimized resume templates
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${
                  category === selectedCategory
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-white text-brand-gray-700 hover:bg-brand-navy hover:text-white border border-brand-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Popular Badge */}
                {template.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                    Popular
                  </div>
                )}
                
                {/* Template Preview */}
                <div className={`relative h-48 bg-gradient-to-br ${template.color} rounded-t-2xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {template.image}
                        </div>
                      </div>
                      <p className="text-sm font-medium opacity-90">Preview Template</p>
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <p className="text-sm font-medium">Click to Preview</p>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                      {template.name}
                    </h3>
                    <span className="bg-gradient-to-r from-blue-100 to-teal-100 text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
                      {template.category}
                    </span>
                  </div>
                  
                  <p className="text-brand-gray-600 text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {template.features.map((feature, index) => (
                      <span key={index} className="bg-brand-gray-100 text-brand-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                </div>

                  {/* Actions */}
                <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={showLoginToViewTemplate}
                    >
                    Preview
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1"
                    onClick={showLoginToUseTemplate}
                  >
                    Use Template
                  </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Templates CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">
                Want Access to All Templates?
              </h3>
              <p className="text-brand-gray-600 mb-6">
                Sign up for free to unlock our complete collection of 50+ professional resume templates, 
                plus advanced customization options and AI-powered content suggestions.
            </p>
            <Link href="/signup">
                <Button variant="primary" size="lg" className="px-8">
                  Get Free Access
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Perfect Resume?
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Join over 500,000 professionals who have successfully landed their dream jobs using our 
              AI-powered resume builder. Start creating your standout resume today.
            </p>
            
            {/* Success Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">3x</div>
                <div className="text-white/80">More Interview Calls</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-white/80">ATS Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5min</div>
                <div className="text-white/80">Average Build Time</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="px-8 py-4 text-lg"
                >
                  Start Building Free Resume
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/portfolio-showcase">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg"
                >
                  View Success Stories
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
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