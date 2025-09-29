'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema, type ContactFormData } from '@/utils/validations';
import { useNotification } from '@/hooks/useNotification';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import NotificationModal from '@/components/ui/NotificationModal';

interface OfficeInfoItem {
  day: string;
  time: string;
  badge?: string;
}

interface OfficeInfo {
  title: string;
  items: OfficeInfoItem[];
}

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    notification,
    hideNotification,
    showContactSuccess,
    showLoginToBookConsultation,
  } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      reset();
      showContactSuccess();
    }, 1000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      primary: 'info@careerportfoliocentral.net',
      secondary: 'Response within 24 hours',
      bgColor: 'from-blue-500 to-blue-600',
      color: 'text-blue-600',
      action: 'mailto:info@careerportfoliocentral.net'
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      primary: '1-800-CAREER-1',
      secondary: 'Mon-Fri 9AM-6PM EST',
      bgColor: 'from-green-500 to-green-600',
      color: 'text-green-600',
      action: 'tel:+18002273371'
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      primary: 'San Francisco, CA',
      secondary: 'Customer Experience Center',
      bgColor: 'from-purple-500 to-purple-600',
      color: 'text-purple-600',
      action: '#'
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Live Chat',
      primary: 'Available 24/7',
      secondary: 'Instant response',
      bgColor: 'from-orange-500 to-orange-600',
      color: 'text-orange-600',
      action: '#'
    },
  ];

  const officeInfo: OfficeInfo[] = [
    {
      title: 'Office Hours',
      items: [
        { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM EST' },
        { day: 'Saturday', time: '10:00 AM - 4:00 PM EST' },
        { day: 'Sunday', time: 'Closed' },
      ]
    },
    {
      title: 'Response Times',
      items: [
        { day: 'Email Support', time: 'Within 24 hours', badge: 'bg-green-100 text-green-800' },
        { day: 'Live Chat', time: 'Instant', badge: 'bg-blue-100 text-blue-800' },
        { day: 'Phone Support', time: 'Business hours', badge: 'bg-yellow-100 text-yellow-800' },
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.',
    },
    {
      question: 'Can I get help with my resume?',
      answer: 'Yes! Our Professional and Executive plans include resume review services. You can also book individual counseling sessions.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all new subscriptions. Contact support for assistance with refunds.',
    },
    {
      question: 'How do I update my payment information?',
      answer: 'Go to your account settings and select "Billing" to update your payment method and billing information.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade security measures including SSL encryption and secure servers to protect your information.',
    },
    {
      question: 'Can I download my resume as PDF?',
      answer: 'Yes, all plans include PDF export functionality. Premium plans offer additional format options and higher quality exports.',
    },
  ];

  const handleBookConsultation = () => {
    showLoginToBookConsultation();
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-r from-brand-navy to-brand-teal text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/contact/808.jpg"
              alt="Contact Us - Career Portfolio Central"
              fill
              className="object-cover opacity-15"
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
                    We&apos;re Here to Help
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="block text-white drop-shadow-2xl">
                    Get in Touch
                  </span>
                  <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                    With Our Team
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/95 mb-12 text-balance drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                  Have questions? Need support? Our expert team is ready to help you succeed in your career journey.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">24/7 Support Available</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
                Choose How to Connect
              </h2>
              <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach our expert support team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${method.bgColor} text-white rounded-xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {method.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300 break-words leading-tight">
                      {method.title}
                    </h3>
                    <p className={`font-semibold text-sm sm:text-base md:text-lg mb-2 ${method.color} group-hover:text-brand-navy transition-colors duration-300 break-words leading-tight`}>
                      {method.primary}
                    </p>
                    <p className="text-brand-gray-600 text-sm">
                      {method.secondary}
                    </p>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
                    <div className="mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
                        Send Us a Message
                      </h2>
                      <p className="text-lg text-brand-gray-600">
                        Fill out the form below and our team will get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          {...register('name')}
                          label="Full Name"
                          placeholder="Your full name"
                          error={errors.name?.message}
                          fullWidth
                        />
                        <Input
                          {...register('email')}
                          type="email"
                          label="Email Address"
                          placeholder="your.email@example.com"
                          error={errors.email?.message}
                          fullWidth
                        />
                      </div>

                      <Input
                        {...register('subject')}
                        label="Subject"
                        placeholder="How can we help you?"
                        error={errors.subject?.message}
                        fullWidth
                      />

                      <Textarea
                        {...register('message')}
                        label="Message"
                        placeholder="Tell us more about your inquiry..."
                        error={errors.message?.message}
                        fullWidth
                        rows={6}
                      />

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isLoading}
                        fullWidth
                        className="text-lg py-4"
                      >
                        Send Message
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Office Info & Additional Details - Takes 1 column */}
                <div className="space-y-6">
                  {/* Office Hours & Response Times */}
                  {officeInfo.map((info, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                      <h3 className="text-xl font-bold mb-4 text-brand-gray-900 flex items-center">
                        {info.title}
                        {index === 0 ? (
                          <svg className="w-5 h-5 ml-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 ml-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </h3>
                      <div className="space-y-3">
                        {info.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between">
                            <span className="text-brand-gray-700 font-medium">{item.day}</span>
                            <span className={`${item.badge ? `${item.badge} px-3 py-1 rounded-full text-sm font-medium` : 'text-brand-gray-600 font-semibold'}`}>
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Emergency Support */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-red-900 mb-2">
                          Emergency Support
                        </h3>
                        <p className="text-red-700 text-sm leading-relaxed">
                          For urgent technical issues affecting your account or billing concerns, 
                          please use our live chat feature for immediate assistance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/contact/808 (1).jpg"
                      alt="Our Support Team"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Our Expert Support Team</p>
                      <p className="text-xs opacity-90">Ready to help you succeed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-brand-light to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
                Quick answers to the most common questions we receive
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-brand-teal bg-opacity-10 rounded-lg flex items-center justify-center">
                          <span className="text-brand-teal font-bold text-sm">Q</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-brand-gray-900 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-brand-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
                Need Personalized Career Guidance?
              </h2>
              <p className="text-xl mb-12 opacity-90 leading-relaxed">
                Book a one-on-one session with our career experts for personalized guidance, 
                resume reviews, and strategic career planning tailored to your goals.
              </p>
              <div className="flex justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="px-8 py-4 text-lg"
                  onClick={handleBookConsultation}
                >
                  Book Free Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Notification Modal */}
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