/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure output for AWS Amplify SSR
  output: 'standalone',
  // Configure image optimization for AWS Amplify
  images: {
    domains: ['localhost', 'indowagen-website-nextjs.d18s43ml1gjftw.amplifyapp.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'indowagen-website-nextjs.d18s43ml1gjftw.amplifyapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lavenderblush-toad-113068.hostingersite.com',
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
    // Set unoptimized based on environment
    unoptimized: process.env.NODE_ENV !== 'production',
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

  // Configure environment variables for AWS Amplify
  // env: {
  //   NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://indowagen-website-nextjs.d18s43ml1gjftw.amplifyapp.com',
  // },

  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production'
      ? 'https://indowagen-website-nextjs.d18s43ml1gjftw.amplifyapp.com'
      : 'http://localhost:3000',
    // SMTP vars — baked in at build time so they reach the Lambda runtime.
    // Amplify Console env vars don't always propagate to the standalone Lambda at runtime.
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_BCC: process.env.SMTP_BCC,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  },

  // Set a higher timeout value for SSR rendering
  serverRuntimeConfig: {
    // Will only be available on the server side
    timeoutMs: 60000,
  },
};

module.exports = nextConfig;
