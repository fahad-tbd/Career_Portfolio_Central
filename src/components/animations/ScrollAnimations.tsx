'use client';

import { useEffect } from 'react';

// Extend Window interface to include our custom observer property
declare global {
  interface Window {
    __scrollObserver?: IntersectionObserver;
  }
}

export default function ScrollAnimations() {
  useEffect(() => {
    // Reset all animation states on mount to handle back navigation
    const resetAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
      animatedElements.forEach((element) => {
        element.classList.remove('animated');
      });
    };

    // Small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      resetAnimations();

      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      }, observerOptions);

      // Observe all elements with animate-on-scroll classes
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
      animatedElements.forEach((element) => observer.observe(element));

      // Store observer for cleanup
      window.__scrollObserver = observer;
    }, 100);

    // Handle browser back/forward navigation
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(resetAnimations, 50);
      }
    };

    const handlePageShow = () => {
      setTimeout(() => {
        resetAnimations();
        // Re-trigger animations for visible elements
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
        animatedElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            setTimeout(() => element.classList.add('animated'), 100);
          }
        });
      }, 150);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      clearTimeout(initTimeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', handlePageShow);
      if (window.__scrollObserver) {
        window.__scrollObserver.disconnect();
      }
    };
  }, []);

  return null;
}
