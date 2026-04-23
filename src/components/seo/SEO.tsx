import type { FC, ReactNode } from 'react';

// Define proper type for JSON-LD structured data
type JsonLdType = {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
} | {
  '@context': string;
  '@graph': Array<Record<string, unknown>>;
};

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  twitterHandle?: string;
  jsonLd?: JsonLdType;
  children?: ReactNode;
}

export const SEO: FC<SEOProps> = ({
  title = "Ameya Sharma - Patent-Winning Full-Stack Developer",
  description = "Patent-winning full-stack developer specializing in AI automation, enterprise solutions, and production-ready systems. Building streamlined operations with React, TypeScript, Python, and cutting-edge AI technologies.",
  keywords = "Ameya Sharma, Full-Stack Developer, AI Developer, React Developer, TypeScript, Python, Machine Learning, Patent Winner, CTO, AI Automation, Enterprise Solutions",
  author = "Ameya Sharma",
  image = "https://www.stavrossymeonidis.dev/og-image.jpg",
  url = "https://www.stavrossymeonidis.dev",
  type = "website",
  twitterHandle,
  jsonLd,
  children
}) => {
  // Construct the full title with branding
  const fullTitle = title === "Ameya Sharma - Patent-Winning Full-Stack Developer" 
    ? title 
    : `${title} | Ameya Sharma`;

  return (
    <>
      {/* React 19 Native Metadata - These will be hoisted to <head> */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ameya Sharma Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data / JSON-LD */}
      {jsonLd && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      {children}
    </>
  );
};