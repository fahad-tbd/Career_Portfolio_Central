import Head from 'next/head';
import { SITE_CONFIG } from '@/utils/constants';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  image = '/assets/hero-image.jpg',
  url = SITE_CONFIG.url,
  type = 'website',
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const fullUrl = url.startsWith('http') ? url : `${SITE_CONFIG.url}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={SITE_CONFIG.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Theme Color */}
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": SITE_CONFIG.name,
            "description": SITE_CONFIG.description,
            "url": SITE_CONFIG.url,
            "logo": `${SITE_CONFIG.url}/assets/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "email": SITE_CONFIG.email,
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.linkedin.com/company/career-portfolio-central",
              "https://www.facebook.com/careerportfoliocentral",
              "https://www.instagram.com/careerportfoliocentral"
            ]
          }),
        }}
      />
    </Head>
  );
};

export default SeoHead;
