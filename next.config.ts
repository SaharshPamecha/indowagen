import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configure image optimization
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  
  // React strict mode is beneficial for development but can cause double-mounting
  // We'll enable it in development to catch issues but disable in production to avoid problems
  reactStrictMode: process.env.NODE_ENV === 'development',
  
  // Improve how hydration errors are handled
  onDemandEntries: {
    // Keep pages in memory longer to reduce rebuilds
    maxInactiveAge: 60 * 60 * 1000,
    // Number of pages to keep in memory
    pagesBufferLength: 5,
  }
};

export default nextConfig;
