import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  const expertise = [
    {
      area: 'Career Development',
      description: 'Deep understanding of modern career landscapes and professional growth strategies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      area: 'Technology Innovation',
      description: 'Cutting-edge technology solutions that streamline the job search and career development process.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      area: 'Industry Insights',
      description: 'Comprehensive knowledge of hiring trends, employer expectations, and market dynamics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-green-500 to-green-600',
    },
    {
      area: 'Professional Development',
      description: 'Expertise in skills assessment, career transitions, and professional growth strategies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Empowerment',
      description: 'We believe everyone deserves the tools and guidance to achieve their career goals.',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We provide honest, transparent advice and maintain the highest ethical standards.',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We continuously evolve our platform to meet the changing needs of modern professionals.',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our technology to our customer service.',
      gradient: 'from-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-50 to-yellow-100'
    },
  ];

  const stats = [
    { number: '100K+', label: 'Professionals Helped' },
    { number: '85%', label: 'Success Rate' },
    { number: '500+', label: 'Expert Counselors' },
    { number: '50+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/about/happy-female-leader-meeting-with-employees/happy-female-leader-meeting-with-employees.jpg"
            alt="Leadership and team collaboration at Career Portfolio Central"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/85 to-brand-teal/80"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-sm font-medium text-white/90">
                Trusted by 100,000+ professionals worldwide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white drop-shadow-2xl">
                About Career Portfolio
              </span>
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                Central
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Empowering professionals worldwide to build exceptional careers through innovative tools, expert guidance, and comprehensive resources.
            </p>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: '100K+', label: 'Professionals' },
                { number: '85%', label: 'Success Rate' },
                { number: '500+', label: 'Counselors' },
                { number: '50+', label: 'Countries' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Section Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                Our Mission & Vision
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-gray-900">
                Democratizing Career
                <span className="block bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent">
                  Development
                </span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg text-brand-gray-700 leading-relaxed">
                  Career Portfolio Central was founded with a simple yet powerful mission: to democratize access to professional career development tools and expert guidance. We believe that everyone, regardless of their background or current position, deserves the opportunity to build a compelling career portfolio and achieve their professional goals.
                </p>
                <p className="text-lg text-brand-gray-700 leading-relaxed">
                  Since our founding in 2010, we&apos;ve helped over 100,000 professionals across 50+ countries create standout resumes, build impressive portfolios, find meaningful employment, and advance their careers through our comprehensive platform and expert counseling services.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: 'GR', title: 'Global Reach', desc: '50+ countries served' },
                  { icon: 'EG', title: 'Expert Guidance', desc: '500+ certified counselors' },
                  { icon: 'PR', title: 'Proven Results', desc: '85% success rate' },
                  { icon: 'IN', title: 'Innovation', desc: 'AI-powered tools' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-brand-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup" className="group">
                  <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold rounded-xl hover:from-brand-navy/90 hover:to-brand-teal/90 focus:outline-none focus:ring-4 focus:ring-brand-navy/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span>Join Our Community</span>
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
                <Link href="/career-counselling" className="inline-flex items-center px-8 py-4 border-2 border-brand-gray-300 text-brand-gray-700 font-semibold rounded-xl hover:bg-brand-gray-50 hover:border-brand-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-gray-300/30 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/about/group-businesspeople-using-laptop-while-working-document/group-businesspeople-using-laptop-while-working-document.jpg"
                  alt="Professionals collaborating on career development"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-gray-900">Excellence Award</h4>
                    <p className="text-sm text-brand-gray-600">Top Career Platform 2024</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-20 blur-sm"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        
        <div className="container relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              💎 Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-gray-900">
              The Principles That
              <span className="block bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent">
                Guide Our Mission
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-transparent overflow-hidden h-full">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.gradient} text-white rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {value.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-brand-gray-600 leading-relaxed group-hover:text-brand-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-6 translate-y-6 group-hover:scale-125 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Values in Action - Image Gallery */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-brand-gray-900">Our Values in Action</h3>
              <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                See how our core principles come to life in the workplace and in our commitment to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Empowerment */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src="/assets/about/happy-female-leader-meeting-with-employees/2129 (1).jpg"
                  alt="Empowering leadership and mentorship"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg mb-1">Empowerment</h4>
                  <p className="text-sm text-white/90">Leading with guidance and support</p>
                </div>
              </div>

              {/* Innovation */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src="/assets/about/group-businesspeople-using-laptop-while-working-document/2147838546 (1).jpg"
                  alt="Innovation through collaboration and technology"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg mb-1">Innovation</h4>
                  <p className="text-sm text-white/90">Embracing technology and creativity</p>
                </div>
              </div>

              {/* Excellence */}
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src="/assets/about/employee-showing-appreciation-each-other/2149357544 (1).jpg"
                  alt="Excellence through team appreciation and recognition"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg mb-1">Excellence</h4>
                  <p className="text-sm text-white/90">Celebrating achievements together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        
        <div className="container relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-gray-900">
              Built with
              <span className="block bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent">
                Professional Excellence
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combining industry expertise, technological innovation, and career development best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="group">
                <div className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${area.gradient} text-white rounded-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {area.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                    {area.area}
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-125 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement Section */}
          <div className="mt-20">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <Image
                src="/assets/about/employee-showing-appreciation-each-other/employee-showing-appreciation-each-other.jpg"
                alt="Professional collaboration and career development"
                width={800}
                height={400}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Empowering Career Success</h3>
                <p className="text-white/90 max-w-md">We combine cutting-edge technology with proven career development strategies to help professionals achieve their goals and unlock their potential.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        
        <div className="container relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-gray-900">
              Real Impact on
              <span className="block bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent">
                Real Careers
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every day, professionals worldwide achieve their career goals with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Career Advancement</h3>
                      <p className="text-brand-gray-600 leading-relaxed">85% of our users receive job offers within 3 months of using our platform, with an average salary increase of 25%.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Global Reach</h3>
                      <p className="text-brand-gray-600 leading-relaxed">From entry-level professionals to C-suite executives, our tools adapt to every career stage and industry across 50+ countries.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Expert Support</h3>
                      <p className="text-brand-gray-600 leading-relaxed">Our certified career counselors provide personalized guidance, helping professionals navigate complex career transitions with confidence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/about/group-businesspeople-using-laptop-while-working-document/2147838546 (2).jpg"
                    alt="Professional collaboration"
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/about/happy-female-leader-meeting-with-employees/2129 (2).jpg"
                    alt="Leadership mentoring"
                    width={300}
                    height={250}
                    className="object-cover w-full h-56"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/about/employee-showing-appreciation-each-other/2149357544 (2).jpg"
                    alt="Team success celebration"
                    width={300}
                    height={250}
                    className="object-cover w-full h-56"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/about/group-businesspeople-using-laptop-while-working-document/2147838546 (3).jpg"
                    alt="Strategic planning"
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to helping professionals succeed
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-brand-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-brand-gray-600">
                From a simple idea to a global platform transforming careers
              </p>
            </div>

            <div className="space-y-8">
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold">
                    2010
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                    <p className="text-brand-gray-700">
                      Founded with a vision to democratize access to professional career development tools. 
                      Started with a simple resume builder serving local professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold">
                    2015
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                    <p className="text-brand-gray-700">
                      Launched portfolio showcase features and career counseling services. 
                      Reached 10,000 active users and expanded internationally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold">
                    2020
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-brand-gray-700">
                      Introduced AI-powered job matching and advanced analytics. 
                      Helped thousands navigate career changes during global challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                    <p className="text-brand-gray-700">
                      Serving 100,000+ professionals worldwide with comprehensive career development platform. 
                      Continuing to innovate with new features and expanded services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-brand-gray-700 mb-8">
              Join thousands of professionals who have transformed their careers with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button variant="primary" size="lg">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/career-counselling">
                <Button variant="outline" size="lg">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
