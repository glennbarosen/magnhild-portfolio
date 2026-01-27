import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/constants/seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function SEO({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  canonical,
  noIndex = false,
}: SEOProps) {
  const url = canonical || SITE_CONFIG.url;

  return (
    <Helmet>
      <html lang="nb" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
