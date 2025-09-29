'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNotification } from '@/hooks/useNotification';
import Button from '@/components/ui/Button';
import NotificationModal from '@/components/ui/NotificationModal';

interface Plan {
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
  popular: boolean;
  savings?: string;
  highlight?: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function MembershipPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [animateOnScroll, setAnimateOnScroll] = useState<{ [key: string]: boolean }>({});
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.',
      isOpen: false,
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export your resumes and portfolios during this period.',
      isOpen: false,
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.',
      isOpen: false,
    },
    {
      question: 'Is there a student discount?',
      answer: 'Yes! Students get 50% off Professional and Executive plans. Contact support with your student ID for verification.',
      isOpen: false,
    },
    {
      question: 'How does the career coaching work?',
      answer: 'Executive plan members get 2 one-hour sessions per month with certified career coaches via video call. Sessions can be scheduled through your dashboard.',
      isOpen: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for enterprise accounts.',
      isOpen: false,
    },
  ]);

  // Notifications
  const {
    notification,
    hideNotification,
    showLoginToScheduleDemo,
    showLoginToStartTrial,
    showLoginToGetStarted,
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

  const getPlans = (): Plan[] => [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started with your career journey',
      features: [
        'Basic resume builder with AI assistance',
        'Portfolio showcase (1 portfolio)',
        'Job search access to 10K+ listings',
        'Community support & forums',
        'Basic templates collection (3)',
        'PDF export functionality',
        'Mobile app access',
      ],
      limitations: [
        'Limited to 1 resume',
        'Basic customization options',
        'Community support only',
        'Watermark on exports',
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline',
      popular: false,
    },
    {
      name: 'Professional',
      price: isAnnual ? 15 : 19,
      originalPrice: isAnnual ? 19 : undefined,
      period: isAnnual ? 'per month (billed annually)' : 'per month',
      description: 'Ideal for active job seekers and career professionals',
      features: [
        'Unlimited resumes & portfolios',
        'Premium templates library (50+)',
        'Advanced AI-powered customization',
        'Priority job alerts & matching',
        'Email & chat support',
        'ATS optimization scanner',
        'Personal branding toolkit',
        'Interview tracking system',
        'LinkedIn integration',
        'Analytics dashboard',
        'No watermarks',
      ],
      limitations: [],
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary',
      popular: true,
      savings: isAnnual ? 'Save $48 annually' : undefined,
      highlight: 'Most Popular',
    },
    {
      name: 'Executive',
      price: isAnnual ? 39 : 49,
      originalPrice: isAnnual ? 49 : undefined,
      period: isAnnual ? 'per month (billed annually)' : 'per month',
      description: 'Comprehensive solution for senior professionals and executives',
      features: [
        'Everything in Professional',
        'Executive resume templates',
        'Personal career coach (2 sessions/month)',
        'LinkedIn profile optimization service',
        'Salary negotiation guidance',
        'Priority customer support (24/7)',
        'Advanced career assessment tools',
        'Executive network access',
        'Custom portfolio domains',
        'White-label solutions',
        'API access & integrations',
        'Dedicated account manager',
      ],
      limitations: [],
      buttonText: 'Start Free Trial',
      buttonVariant: 'secondary',
      popular: false,
      savings: isAnnual ? 'Save $120 annually' : undefined,
    },
  ];

  const features = [
    {
      category: 'Resume Builder',
      free: '1 resume',
      professional: 'Unlimited resumes',
      executive: 'Unlimited + Executive templates',
    },
    {
      category: 'AI-Powered Features',
      free: 'Basic AI assistance',
      professional: 'Advanced AI optimization',
      executive: 'Premium AI + Personal review',
    },
    {
      category: 'Templates',
      free: '3 basic templates',
      professional: '50+ premium templates',
      executive: 'All templates + Executive collection',
    },
    {
      category: 'Portfolio Showcase',
      free: '1 portfolio',
      professional: 'Unlimited portfolios',
      executive: 'Unlimited + Custom domains',
    },
    {
      category: 'Job Alerts & Matching',
      free: 'Basic alerts',
      professional: 'Priority alerts + AI matching',
      executive: 'Executive-level opportunities',
    },
    {
      category: 'Support',
      free: 'Community only',
      professional: 'Email & chat support',
      executive: 'Priority 24/7 support + dedicated manager',
    },
    {
      category: 'Career Coaching',
      free: '❌',
      professional: '❌',
      executive: '2 expert sessions/month',
    },
    {
      category: 'ATS Optimization',
      free: '❌',
      professional: '✅ Automated scanner',
      executive: '✅ + Expert review',
    },
    {
      category: 'LinkedIn Optimization',
      free: '❌',
      professional: 'Basic guidance',
      executive: 'Full optimization service',
    },
    {
      category: 'Analytics & Insights',
      free: 'Basic metrics',
      professional: 'Advanced analytics',
      executive: 'Premium insights + benchmarking',
    },
  ];

  const toggleFAQ = (index: number) => {
    setFaqs(prev => prev.map((faq, i) => 
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/membership/5702434_59269.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-brand-teal/85"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Choose Your
                <span className="block text-brand-gold">Career Plan</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
                Unlock premium features and accelerate your career growth with our comprehensive membership plans designed by industry experts
              </p>
            </div>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up delay-200">
              <span className={`text-lg font-medium transition-all duration-300 ${!isAnnual ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <div 
                className="relative w-16 h-8 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer transition-all duration-300 hover:bg-white/30"
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <div 
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-lg ${
                    isAnnual ? 'left-9' : 'left-1'
                  }`}
                />
              </div>
              <span className={`text-lg font-medium transition-all duration-300 ${isAnnual ? 'text-white' : 'text-white/60'}`}>
                Annual
              </span>
              <div className="ml-2 bg-brand-gold text-brand-navy px-3 py-1 rounded-full text-sm font-bold">
                Save 20%
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up delay-400">
              {[
                { number: '50K+', label: 'Active Members' },
                { number: '98%', label: 'Success Rate' },
                { number: '24/7', label: 'Support' },
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

      {/* Pricing Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-brand-light" data-animate id="pricing">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {getPlans().map((plan, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-500 hover:scale-105 ${
                  plan.popular
                    ? 'md:-mt-2 md:mb-2'
                    : 'mt-3'
                } ${
                  animateOnScroll['pricing'] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-brand-teal to-brand-navy text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
                      {plan.highlight}
                    </div>
                  </div>
                )}

                <div className={`card h-full flex flex-col relative overflow-hidden ${
                  plan.popular
                    ? 'border-2 border-brand-teal shadow-2xl bg-gradient-to-b from-white to-blue-50 pt-4'
                    : 'border border-brand-gray-200 shadow-lg'
                }`}>
                  {/* Background Pattern for Popular Plan */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                      </svg>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8 relative z-10">
                    <h3 className="text-2xl font-bold text-brand-gray-900 mb-3">{plan.name}</h3>
                    
                    {/* Pricing */}
                    <div className="flex items-end justify-center mb-3">
                      <span className="text-5xl font-bold text-brand-navy">${plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-xl text-brand-gray-400 line-through ml-2">${plan.originalPrice}</span>
                      )}
                      <span className="text-brand-gray-600 ml-2 text-sm">/{plan.period.split(' ')[0]} {plan.period.split(' ')[1]}</span>
                    </div>
                    
                    {/* Period details */}
                    {plan.period.includes('annually') && (
                      <div className="text-xs text-brand-gray-500 mb-2">{plan.period}</div>
                    )}
                    
                    {/* Savings */}
                    {plan.savings && (
                      <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-3">
                        {plan.savings}
                      </div>
                    )}
                    
                    <p className="text-brand-gray-600 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-green-200 transition-colors duration-200">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-brand-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start opacity-60">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gray-100 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-3 h-3 text-brand-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-brand-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      variant={plan.buttonVariant}
                      size="lg"
                      fullWidth
                      className={`group-hover:shadow-xl transition-all duration-300 ${
                        plan.popular ? 'shadow-lg transform hover:scale-105' : ''
                      }`}
                      onClick={plan.name === 'Free' ? showLoginToGetStarted : showLoginToStartTrial}
                    >
                      {plan.buttonText}
                    </Button>

                    {plan.name !== 'Free' && (
                      <p className="text-center text-sm text-brand-gray-500 mt-4">
                        14-day free trial • Cancel anytime • No credit card required
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-brand-gray-600 mb-6">Trusted by professionals at</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta'].map((company) => (
                <div key={company} className="text-xl font-semibold text-brand-gray-500">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white" data-animate id="comparison">
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-700 ${
            animateOnScroll['comparison'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compare all features across our plans to find the perfect solution for your career goals
            </p>
          </div>

          <div className={`overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ${
            animateOnScroll['comparison'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } bg-white`} style={{ transitionDelay: '300ms' }}>
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-brand-gray-300 scrollbar-track-gray-100" style={{ WebkitOverflowScrolling: 'touch' }}>
              <table className="w-full bg-white min-w-[800px]">
                <thead>
                  <tr className="bg-gradient-to-r from-brand-navy to-brand-teal text-white">
                    <th className="text-left p-3 sm:p-4 md:p-6 font-bold text-sm sm:text-base md:text-lg min-w-[120px]">Features</th>
                    <th className="text-center p-3 sm:p-4 md:p-6 font-bold text-sm sm:text-base md:text-lg min-w-[100px]">Free</th>
                    <th className="text-center p-3 sm:p-4 md:p-6 font-bold text-sm sm:text-base md:text-lg relative min-w-[140px]">
                      Professional
                      <div className="absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 bg-brand-gold text-brand-navy px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold">
                        POPULAR
                      </div>
                    </th>
                    <th className="text-center p-3 sm:p-4 md:p-6 font-bold text-sm sm:text-base md:text-lg min-w-[120px]">Executive</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={`border-b border-brand-gray-100 hover:bg-brand-light/50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-brand-light/20'
                    }`}>
                      <td className="p-3 sm:p-4 md:p-6 font-semibold text-brand-gray-900 text-sm sm:text-base">{feature.category}</td>
                      <td className="p-3 sm:p-4 md:p-6 text-center text-brand-gray-600 text-sm sm:text-base">{feature.free}</td>
                      <td className="p-3 sm:p-4 md:p-6 text-center text-brand-gray-600 bg-blue-50/50 font-medium text-sm sm:text-base">{feature.professional}</td>
                      <td className="p-3 sm:p-4 md:p-6 text-center text-brand-gray-600 text-sm sm:text-base">{feature.executive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile scroll hint */}
            <div className="md:hidden text-center mt-4">
              <p className="text-sm text-brand-gray-500">
                📱 Swipe left to see all membership features →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-brand-light to-white" data-animate id="faq">
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-700 ${
            animateOnScroll['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our membership plans and features
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`group card cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    faq.isOpen ? 'shadow-lg border-brand-teal' : ''
                  } ${
                    animateOnScroll['faq'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-brand-gray-900 pr-8 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center transition-transform duration-300 ${
                      faq.isOpen ? 'rotate-45' : ''
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    faq.isOpen ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}>
                    <p className="text-brand-gray-600 leading-relaxed pb-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-teal text-white relative overflow-hidden" data-animate id="enterprise">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-brand-teal/95"></div>
        <div className="container relative z-10">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ${
            animateOnScroll['enterprise'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Empower your entire organization with our comprehensive enterprise platform featuring advanced analytics, team management, and custom integrations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  ),
                  title: 'Team Management',
                  description: 'Centralized dashboard for managing unlimited users, tracking progress, and monitoring team performance metrics',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  ),
                  title: 'Advanced Analytics',
                  description: 'Comprehensive insights into career development ROI, success rates, and detailed performance analytics',
                  color: 'from-green-500 to-green-600',
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  title: 'Custom Integration',
                  description: 'Full API access, SSO integration, and seamless connection with your existing HR and talent management systems',
                  color: 'from-purple-500 to-purple-600',
                },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`group text-center p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    animateOnScroll['enterprise'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Contact Sales Team
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-300"
                onClick={showLoginToScheduleDemo}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-brand-gray-600 mb-12 leading-relaxed">
              Join over 50,000 professionals who have successfully transformed their careers with our comprehensive platform. Start your journey today with a 14-day free trial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="primary" 
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 shadow-xl"
                onClick={showLoginToStartTrial}
              >
                Start Your Free Trial
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  Talk to Our Team
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ), 
                  text: '14-day free trial',
                  color: 'text-blue-600'
                },
                { 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ), 
                  text: 'No credit card required',
                  color: 'text-green-600'
                },
                { 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75M15.91 13.69l-2.518-2.518c-.24-.24-.24-.628 0-.868l2.518-2.518c.24-.24.628-.24.868 0l2.518 2.518c.24.24.24.628 0 .868l-2.518 2.518c-.24.24-.628.24-.868 0z" />
                    </svg>
                  ), 
                  text: '24/7 support included',
                  color: 'text-purple-600'
                },
                { 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ), 
                  text: 'Money-back guarantee',
                  color: 'text-orange-600'
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center space-y-2 text-brand-gray-600">
                  <div className={`${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}