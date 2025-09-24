// Career Portfolio Central - Constants
export const SITE_CONFIG = {
  name: 'Career Portfolio Central',
  title: 'Career Portfolio Central - Build Your Professional Future',
  description: 'Create professional resumes, showcase portfolios, find job listings, and book career counseling sessions. Your all-in-one platform for career advancement.',
  tagline: 'Resume builder, portfolio showcase, and counselling in one platform',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://careerportfoliocentral.net',
  email: 'info@careerportfoliocentral.net',
  phone: '1-800-CAREER-1',
  keywords: ['career development', 'resume builder', 'portfolio showcase', 'job listings', 'career counseling', 'professional growth'],
  social: {
    linkedin: 'https://linkedin.com/company/careerportfoliocentral',
    twitter: 'https://twitter.com/careerportfolio',
    facebook: 'https://facebook.com/careerportfoliocentral',
    instagram: 'https://instagram.com/careerportfoliocentral',
  },
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Resume Builder', href: '/resume-builder' },
  { name: 'Portfolio Showcase', href: '/portfolio-showcase' },
  { name: 'Job Listings', href: '/job-listings' },
  { name: 'Career Counselling', href: '/career-counselling' },
  { name: 'Membership', href: '/membership' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const CTA_EXAMPLES = {
  primaryButton: 'Start Your Free Resume',
  secondaryButton: 'Upgrade to Premium',
  membership: 'Unlock premium features: advanced resume templates, exclusive job listings, and priority counselling sessions',
};

export const HERO_COPY = {
  primary: 'Build a Career Portfolio That Gets You Noticed',
  secondary: 'Resume builder, portfolio showcase, and counselling in one platform',
};

export const BRAND_COLORS = {
  navy: '#1e3a8a',
  teal: '#0d9488',
  white: '#ffffff',
  lightGray: '#f8fafc',
  gray: {
    100: '#f1f5f9',
    300: '#cbd5e1',
    500: '#64748b',
    700: '#334155',
    900: '#0f172a',
  },
};
