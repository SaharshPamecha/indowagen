/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure output for static deployment to S3/CloudFront
  output: 'export',
  // Configure image optimization for S3/CloudFront
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'indowagen-website-nextjs.d18s43ml1gjftw.amplifyapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    // For S3/CloudFront static deployment, images must be unoptimized
    unoptimized: true,
  },
  
  // React strict mode is beneficial for development but can cause double-mounting
  // Disable it in production to avoid issues
  reactStrictMode: false,
  
  // Improve how hydration errors are handled
  onDemandEntries: {
    // Keep pages in memory longer to reduce rebuilds
    maxInactiveAge: 60 * 60 * 1000,
    // Number of pages to keep in memory
    pagesBufferLength: 5,
  },
  
  // Specify the output directory for Next.js
  distDir: '.next',
  
  // Configure environment variables for S3/CloudFront
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' 
      ? process.env.NEXT_PUBLIC_SITE_URL || 'https://your-cloudfront-domain.com' 
      : 'http://localhost:3000',
  },
  
  // Disable server-side features for static export
  trailingSlash: true,
};

module.exports = nextConfig;
