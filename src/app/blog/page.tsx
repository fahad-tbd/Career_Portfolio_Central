'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import NotificationModal from '@/components/ui/NotificationModal';
import { useNotification } from '@/hooks/useNotification';

// Featured post data - moved outside component to prevent recreation
const featuredPost = {
  id: 1,
  title: '10 Resume Mistakes That Cost You Job Interviews',
  excerpt: 'Discover the most common resume mistakes that recruiters see every day and learn how to avoid them to increase your chances of landing interviews.',
  author: 'Career Portfolio Team',
  date: '2 days ago',
  readTime: '8 min read',
  category: 'Resume Tips',
  image: '/assets/blog/blog-main/21140.jpg',
  featured: true,
};

const posts = [
    {
      id: 2,
      title: 'How to Negotiate Your Salary: A Complete Guide',
      excerpt: 'Learn proven strategies to negotiate better compensation packages and maximize your earning potential.',
      author: 'Career Portfolio Team',
      date: '4 days ago',
      readTime: '12 min read',
      category: 'Career Advice',
      image: '/assets/blog/employee-showing-appreciation-each-other/employee-showing-appreciation-each-other.jpg',
      views: 892,
    },
    {
      id: 3,
      title: 'Building a Portfolio That Gets You Hired',
      excerpt: 'Step-by-step guide to creating a compelling portfolio that showcases your skills and attracts employers.',
      author: 'Career Portfolio Team',
      date: '1 week ago',
      readTime: '10 min read',
      category: 'Portfolio Tips',
      image: '/assets/blog/group-businesspeople-using-laptop-while-working-document/group-businesspeople-using-laptop-while-working-document.jpg',
      views: 1247,
    },
    {
      id: 4,
      title: 'Remote Work Interview Tips for 2024',
      excerpt: 'Master the art of remote job interviews with these essential tips and technical considerations.',
      author: 'Career Portfolio Team',
      date: '1 week ago',
      readTime: '6 min read',
      category: 'Interview Prep',
      image: '/assets/blog/happy-female-leader-meeting-with-employees/happy-female-leader-meeting-with-employees.jpg',
      views: 673,
    },
    {
      id: 5,
      title: 'Career Change at 40: Success Stories and Strategies',
      excerpt: 'Inspiring stories and practical advice for professionals making career transitions later in life.',
      author: 'Career Portfolio Team',
      date: '2 weeks ago',
      readTime: '15 min read',
      category: 'Career Advice',
      image: '/assets/blog/employee-showing-appreciation-each-other/2149357544.jpg',
      views: 1456,
    },
    {
      id: 6,
      title: 'LinkedIn Optimization: Get Noticed by Recruiters',
      excerpt: 'Optimize your LinkedIn profile to increase visibility and attract job opportunities.',
      author: 'Career Portfolio Team',
      date: '2 weeks ago',
      readTime: '9 min read',
      category: 'Personal Branding',
      image: '/assets/blog/group-businesspeople-using-laptop-while-working-document/2147838546 (1).jpg',
      views: 985,
    },
    {
      id: 7,
      title: 'Tech Industry Trends: Skills in Demand for 2024',
      excerpt: 'Stay ahead of the curve with insights into the most sought-after tech skills and emerging opportunities.',
      author: 'Career Portfolio Team',
      date: '3 weeks ago',
      readTime: '11 min read',
      category: 'Industry Insights',
      image: '/assets/blog/happy-female-leader-meeting-with-employees/2129.jpg',
      views: 734,
    },
    {
      id: 8,
      title: 'Mastering Behavioral Interview Questions',
      excerpt: 'Learn the STAR method and practice responses to common behavioral interview questions.',
      author: 'Career Portfolio Team',
      date: '3 weeks ago',
      readTime: '14 min read',
      category: 'Interview Prep',
      image: '/assets/blog/employee-showing-appreciation-each-other/2149357544 (1).jpg',
      views: 1123,
    },
    {
      id: 9,
      title: 'Freelancing vs Full-time: Making the Right Choice',
      excerpt: 'Compare the pros and cons of freelancing versus traditional employment to make an informed decision.',
      author: 'Career Portfolio Team',
      date: '1 month ago',
      readTime: '13 min read',
      category: 'Career Advice',
      image: '/assets/blog/group-businesspeople-using-laptop-while-working-document/2147838546 (1).jpg',
      views: 567,
    },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { notification, hideNotification, showLoginPrompt, showLoginPromptForMoreBlogs, showNewsletterSuccess } = useNotification();

  // Combine all posts (featured + regular posts) for counting - memoized to prevent re-creation
  const allPosts = useMemo(() => [featuredPost, ...posts], []);

  // Calculate dynamic category counts
  const categories = useMemo(() => {
    const categoryCountMap: { [key: string]: number } = {};
    
    // Count posts by category
    allPosts.forEach(post => {
      categoryCountMap[post.category] = (categoryCountMap[post.category] || 0) + 1;
    });
    
    // Create categories array with actual counts
    const categoryNames = ['All', ...Object.keys(categoryCountMap).sort()];
    
    return categoryNames.map(name => ({
      name,
      count: name === 'All' ? allPosts.length : categoryCountMap[name] || 0
    }));
  }, [allPosts]);

  // Filter posts based on search term and category (only from regular posts for display)
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleBlogClick = () => {
    showLoginPrompt();
  };

  const handleLoadMoreClick = () => {
    showLoginPromptForMoreBlogs();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Main Blog Image */}
      <section className="relative bg-gradient-to-r from-brand-navy to-brand-teal text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/blog/blog-main/21140.jpg"
            alt="Career Portfolio Central Blog"
            fill
            className="object-cover object-center opacity-20"
            style={{
              objectPosition: '60% 30%'
            }}
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
                  Expert Career Insights & Resources
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-white drop-shadow-2xl">
                  Career Resources
                </span>
                <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl pb-2">
                  & Expert Blog
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/95 mb-12 text-balance drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                Expert insights, tips, and strategies to accelerate your career growth and land your dream job
              </p>
              
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-3 pl-12 border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                  />
                  <svg className="absolute left-4 top-3.5 w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                      +
                    </div>
                  </div>
                  <span className="text-sm font-medium">50+ expert articles</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium">Expert-verified content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-brand-gray-200">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-brand-gray-600">
              Find articles tailored to your career development needs
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${
                  category.name === selectedCategory
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-white text-brand-gray-700 hover:bg-brand-navy hover:text-white border border-brand-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          
          {/* Search Results Info */}
          {(searchTerm || selectedCategory !== 'All') && (
            <div className="text-center mt-6">
              <p className="text-brand-gray-600">
                {searchTerm && `Searching for "${searchTerm}" `}
                {selectedCategory !== 'All' && `in ${selectedCategory} `}
                - Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-teal bg-opacity-10 text-brand-teal rounded-full text-sm font-medium mb-6">
              Editor&apos;s Pick
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
              Featured Article
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Our top-rated career advice article this week
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {featuredPost.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-brand-gray-900">
                      Featured
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-brand-gray-900 mb-4 leading-tight hover:text-brand-navy transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-brand-gray-600 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        CP
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-brand-gray-500">
                        {featuredPost.date} • {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="primary" 
                      size="lg"
                      onClick={handleBlogClick}
                      className="flex-1 sm:flex-none"
                    >
                      Read Full Article
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                    <div className="flex items-center text-sm text-brand-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      2.4k views
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray-900">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              {selectedCategory === 'All' 
                ? 'Stay updated with the latest career advice and industry insights'
                : `Expert advice and tips for ${selectedCategory.toLowerCase()}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
                onClick={handleBlogClick}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white text-brand-navy px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-3 group-hover:text-brand-navy transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Author and Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          CP
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-brand-gray-700">{post.author}</div>
                        <div className="text-xs text-brand-gray-500">
                          {post.date} • {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs text-brand-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {post.views}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-brand-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-brand-gray-600 mb-4">
                  Try adjusting your search terms or browse a different category.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-16">
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleLoadMoreClick}
                className="px-8 py-4 text-lg font-semibold border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Load More Articles
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              <p className="text-sm text-brand-gray-500 mt-3">
                Showing {filteredPosts.length} of {allPosts.length} articles
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Career Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest career tips, industry trends, and job search strategies delivered to your inbox weekly.
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail && /\S+@\S+\.\S+/.test(newsletterEmail)) {
                  setNewsletterEmail('');
                  showNewsletterSuccess();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-brand-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button variant="secondary" size="lg" type="submit">
                Subscribe
              </Button>
            </form>
            <p className="text-sm opacity-75 mt-4">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
              Explore our most popular career development topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Resume Writing',
                description: 'Create compelling resumes that get noticed',
                articles: 15,
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: 'Interview Skills',
                description: 'Master the art of job interviews',
                articles: 12,
                color: 'from-green-500 to-green-600',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Career Growth',
                description: 'Strategies for advancing your career',
                articles: 18,
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: 'Salary Negotiation',
                description: 'Maximize your earning potential',
                articles: 8,
                color: 'from-orange-500 to-orange-600',
              },
            ].map((topic, index) => (
              <div key={index} className="card card-hover text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${topic.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-navy transition-colors">
                  {topic.title}
                </h3>
                <p className="text-brand-gray-600 mb-4">{topic.description}</p>
                <p className="text-sm text-brand-teal font-medium mb-4">
                  {topic.articles} articles
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth
                  onClick={handleBlogClick}
                >
                  Explore Topic
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Action?
            </h2>
            <p className="text-xl text-brand-gray-700 mb-8">
              Turn insights into action. Start building your career portfolio today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resume-builder">
                <Button variant="primary" size="lg">
                  Build Your Resume
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