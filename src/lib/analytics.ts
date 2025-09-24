// Google Analytics 4 Setup for Career Portfolio Central

declare global {
  interface Window {
    gtag: (command: string, ...args: (string | number | Date | Record<string, unknown>)[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_TRACKING_ID) return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Configure gtag
  window.gtag = function (command: string, ...args: (string | number | Date | Record<string, unknown>)[]) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push([command, ...args]);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (!GA_TRACKING_ID || typeof window.gtag !== 'function') return;

  window.gtag('config', GA_TRACKING_ID, {
    page_title: title,
    page_location: url,
  });
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!GA_TRACKING_ID || typeof window.gtag !== 'function') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common event tracking functions for Career Portfolio Central
export const trackResumeBuilderStart = () => {
  trackEvent('start_resume_builder', 'engagement', 'Resume Builder');
};

export const trackPortfolioView = (portfolioId?: string) => {
  trackEvent('view_portfolio', 'engagement', 'Portfolio Showcase', portfolioId ? parseInt(portfolioId) : undefined);
};

export const trackJobSearch = (searchTerm?: string) => {
  trackEvent('job_search', 'engagement', searchTerm || 'Job Listings');
};

export const trackCounsellingBooking = () => {
  trackEvent('book_counselling', 'conversion', 'Career Counselling');
};

export const trackMembershipUpgrade = (planType?: string) => {
  trackEvent('upgrade_membership', 'conversion', planType || 'Premium Plan');
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', 'engagement', 'Contact Form');
};

export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', 'engagement', 'Newsletter');
};
