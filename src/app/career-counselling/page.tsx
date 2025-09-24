'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNotification } from '@/hooks/useNotification';
import Button from '@/components/ui/Button';
import NotificationModal from '@/components/ui/NotificationModal';

interface Counselor {
  id: number;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  rating: number;
  reviews: number;
  price: string;
  image: React.ReactNode;
  color: string;
  nextAvailable: string;
  bio: string;
  education: string[];
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
  duration: string;
  popular?: boolean;
  color: string;
}

export default function CareerCounsellingPage() {
  const [animateOnScroll, setAnimateOnScroll] = useState<{ [key: string]: boolean }>({});

  // Notifications
  const {
    notification,
    hideNotification,
    showLoginToBookConsultation,
  } = useNotification();


  // Scroll Animation Hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateOnScroll(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const counselingAreas: Counselor[] = [
    {
      id: 1,
      name: 'Leadership & Executive Coaching',
      title: 'C-Suite & Management Development',
      experience: 'Available',
      specialties: ['Leadership Development', 'Career Transitions', 'Executive Coaching', 'C-Suite Strategy'],
      rating: 0,
      reviews: 0,
      price: 'From $150/hour',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      nextAvailable: 'Book Consultation',
      bio: 'Specialized guidance for executives and senior managers looking to advance their leadership careers.',
      education: ['Executive Leadership', 'Strategic Planning'],
    },
    {
      id: 2,
      name: 'Technology Career Specialist',
      title: 'Tech Industry Focus',
      experience: 'Available',
      specialties: ['Software Engineering', 'Product Management', 'Startup Careers', 'Tech Leadership'],
      rating: 0,
      reviews: 0,
      price: 'From $120/hour',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      nextAvailable: 'Book Consultation',
      bio: 'Expert guidance for technology professionals at all career stages in the rapidly evolving tech industry.',
      education: ['Technical Leadership', 'Product Strategy'],
    },
    {
      id: 3,
      name: 'Resume & Interview Expert',
      title: 'Application & Interview Success',
      experience: 'Available',
      specialties: ['Resume Optimization', 'Interview Prep', 'Personal Branding', 'LinkedIn Strategy'],
      rating: 0,
      reviews: 0,
      price: 'From $100/hour',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      nextAvailable: 'Book Consultation',
      bio: 'Comprehensive support for creating compelling applications and mastering the interview process.',
      education: ['Resume Writing', 'Interview Strategy'],
    },
    {
      id: 4,
      name: 'Finance Career Advisor',
      title: 'Financial Services & Banking',
      experience: 'Available',
      specialties: ['Financial Services', 'Investment Banking', 'Corporate Finance', 'CPA Transition'],
      rating: 0,
      reviews: 0,
      price: 'From $180/hour',
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      nextAvailable: 'Book Consultation',
      bio: 'Specialized expertise for finance professionals navigating complex career paths and industry transitions.',
      education: ['Financial Planning', 'Investment Strategy'],
    },
  ];

  const services: Service[] = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Career Strategy & Planning',
      description: 'Define your career goals and create a strategic roadmap to achieve them with personalized guidance.',
      price: 'From $80/hour',
      duration: '60-90 minutes',
      features: ['Comprehensive Career Assessment', 'Goal Setting & Prioritization', 'Strategic Action Plan', '3-Month Follow-up Support'],
      popular: true,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Resume & LinkedIn Optimization',
      description: 'Get expert feedback on your resume and LinkedIn profile to maximize interview opportunities.',
      price: 'From $60/hour',
      duration: '45-60 minutes',
      features: ['ATS-Optimized Resume Review', 'LinkedIn Profile Enhancement', 'Personal Branding Strategy', 'Industry-Specific Keywords'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Interview Mastery Coaching',
      description: 'Practice interviews and learn advanced techniques to confidently showcase your skills.',
      price: 'From $90/hour',
      duration: '60-75 minutes',
      features: ['Mock Interview Sessions', 'Behavioral Question Practice', 'Body Language & Presence', 'Salary Negotiation Tactics'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: 'Job Search Acceleration',
      description: 'Develop an effective job search strategy tailored to your industry and career level.',
      price: 'From $70/hour',
      duration: '45-60 minutes',
      features: ['Market Analysis & Insights', 'Networking Strategy', 'Application Optimization', 'Timeline & Milestone Planning'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Leadership Development',
      description: 'Advance to leadership roles with executive presence and strategic thinking skills.',
      price: 'From $120/hour',
      duration: '75-90 minutes',
      features: ['Executive Presence Training', 'Leadership Style Assessment', 'Team Management Skills', 'Strategic Communication'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Career Transition Support',
      description: 'Navigate career changes, industry pivots, or role transitions with expert guidance.',
      price: 'From $100/hour',
      duration: '60-90 minutes',
      features: ['Industry Analysis', 'Skill Gap Assessment', 'Transition Planning', 'Network Building Strategy'],
      color: 'from-teal-500 to-teal-600',
    },
  ];

  // Handlers
  const handleBookSession = () => {
    showLoginToBookConsultation();
  };


  return (
    <>
    <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section 
          className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'url(/assets/career-counselling/vitaly-gariev-rG5elqddGzo-unsplash.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/70"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Expert Career
                  <span className="block text-brand-gold">Counselling</span>
            </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Get personalized guidance from industry leaders and accelerate your career growth with proven strategies
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="transform hover:scale-105 transition-all duration-300 shadow-xl"
                    onClick={showLoginToBookConsultation}
                  >
                    Book Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                </Button>
              </div>

              {/* Floating Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up delay-400">
                {[
                  { number: '10K+', label: 'Success Stories' },
                  { number: '95%', label: 'Satisfaction Rate' },
                  { number: '50+', label: 'Expert Coaches' },
                  { number: '4.9/5', label: 'Average Rating' }
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

      {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-white to-brand-light" data-animate>
        <div className="container">
            <div className={`text-center mb-16 transition-all duration-700 ${
              animateOnScroll['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
                Our Premium Services
            </h2>
              <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive range of career development services designed by industry experts
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`group relative card card-hover transform transition-all duration-500 hover:scale-105 ${
                    service.popular ? 'ring-2 ring-brand-teal shadow-xl' : ''
                  } ${
                    animateOnScroll['services'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-gray-900">{service.title}</h3>
                  <p className="text-brand-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-brand-teal">{service.price}</div>
                    <div className="text-sm text-brand-gray-500">{service.duration}</div>
                  </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-brand-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                    <Button 
                      variant={service.popular ? "primary" : "outline"} 
                      size="sm" 
                      fullWidth
                      className="group-hover:shadow-lg transition-shadow duration-300"
                      onClick={handleBookSession}
                    >
                      Book Session
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Counselors */}
        <section className="py-20 bg-white" data-animate id="counselors">
        <div className="container">
            <div className={`text-center mb-16 transition-all duration-700 ${
              animateOnScroll['counselors'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Career Counseling Specializations
            </h2>
              <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professional guidance tailored to your industry and career goals
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {counselingAreas.map((counselor, index) => (
                <div 
                  key={counselor.id} 
                  className={`group card card-hover transform transition-all duration-500 hover:scale-102 ${
                    animateOnScroll['counselors'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="text-center md:text-left">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${counselor.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                        {counselor.image}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-brand-gray-900">{counselor.name}</h3>
                      <p className="text-brand-teal font-semibold mb-2">{counselor.title}</p>
                <p className="text-sm text-brand-gray-600 mb-3">{counselor.experience} experience</p>
                      
                      <p className="text-brand-gray-700 mb-4 leading-relaxed">{counselor.bio}</p>
                      
                      {/* Education */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-brand-gray-900 mb-2">Education & Certifications:</h4>
                        <ul className="text-sm text-brand-gray-600 space-y-1">
                          {counselor.education.map((edu, eduIndex) => (
                            <li key={eduIndex} className="flex items-center">
                              <svg className="w-3 h-3 text-brand-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>
                
                {/* Availability */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          {counselor.nextAvailable}
                    </span>
                </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-brand-navy">{counselor.price}</div>
                        <div className="text-sm text-green-600 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {counselor.nextAvailable}
                        </div>
                      </div>
                
                {/* Specialties */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {counselor.specialties.slice(0, 3).map((specialty) => (
                    <span
                      key={specialty}
                              className="bg-blue-50 text-brand-navy px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                          {counselor.specialties.length > 3 && (
                            <span className="text-xs text-brand-gray-500 px-2 py-1">
                              +{counselor.specialties.length - 3} more
                            </span>
                          )}
                        </div>
                </div>

                      <Button 
                        variant="primary" 
                        size="sm" 
                        fullWidth
                        className="group-hover:shadow-lg transition-shadow duration-300"
                        onClick={handleBookSession}
                      >
                        Book with {counselor.name.split(' ')[0]}
                </Button>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-brand-light to-white" data-animate id="how-it-works">
        <div className="container">
            <div className={`text-center mb-16 transition-all duration-700 ${
              animateOnScroll['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              How It Works
            </h2>
              <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get started with professional career counselling in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Service',
                  description: 'Select the type of counselling that best fits your career needs and goals.',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7l2 2 4-4"/>
                  </svg>
                ),
                color: 'from-blue-500 to-blue-600',
              },
              {
                step: '2',
                  title: 'Book Your Session',
                  description: 'Pick your preferred counselor and schedule a convenient time that works for you.',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                ),
                color: 'from-green-500 to-green-600',
              },
              {
                step: '3',
                title: 'Get Expert Guidance',
                  description: 'Receive personalized advice and actionable strategies to accelerate your career.',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                ),
                color: 'from-orange-500 to-orange-600',
              },
            ].map((item, index) => (
                <div 
                  key={index} 
                  className={`text-center group transform transition-all duration-500 hover:scale-105 ${
                    animateOnScroll['how-it-works'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-brand-navy to-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:shadow-xl transition-shadow duration-300">
                  {item.step}
                </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-brand-gray-300 transform -translate-y-0.5"></div>
                    )}
                  </div>
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${item.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-gray-900">{item.title}</h3>
                  <p className="text-brand-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Development Benefits */}
        <section className="py-20 bg-white" data-animate id="benefits">
        <div className="container">
            <div className={`text-center mb-16 transition-all duration-700 ${
              animateOnScroll['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
                Career Development
                <span className="block gradient-text">Benefits</span>
            </h2>
              <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
                Professional guidance designed to accelerate your career growth and success
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Strategic Career Planning',
                description: 'Develop clear career goals and actionable strategies to achieve your professional aspirations.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                title: 'Professional Skill Enhancement',
                description: 'Identify skill gaps and create development plans to advance your expertise and marketability.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                gradient: 'from-green-500 to-green-600',
              },
              {
                title: 'Interview & Negotiation Mastery',
                description: 'Master interview techniques and salary negotiation strategies to secure better opportunities.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                gradient: 'from-purple-500 to-purple-600',
              },
            ].map((benefit, index) => (
                <div 
                  key={index} 
                  className={`group card card-hover transform transition-all duration-500 hover:scale-105 ${
                    animateOnScroll['benefits'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-brand-gray-900 text-xl mb-4 group-hover:text-brand-navy transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section id="book-session" className="py-20 bg-gradient-to-r from-brand-navy to-brand-teal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-teal/90"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Accelerate Your Career?
            </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join thousands of professionals who have transformed their careers with our expert guidance. 
                Book your free consultation today and take the first step towards your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="transform hover:scale-105 transition-all duration-300 shadow-xl"
                  onClick={showLoginToBookConsultation}
                >
                  Book Free Consultation
                </Button>
              <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-300"
                  >
                  Contact Us
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