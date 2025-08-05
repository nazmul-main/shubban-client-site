/**
 * Deployment Configuration for Subban Website
 * Production optimizations and domain settings
 */

const deploymentConfig = {
  // Domain configuration
  domain: {
    production: 'https://subban.org', // Replace with your actual domain
    staging: 'https://staging.subban.org',
    development: 'http://localhost:3000',
  },

  // CDN configuration
  cdn: {
    enabled: true,
    domain: 'https://cdn.subban.org', // Replace with your CDN domain
    assets: [
      '/logo/',
      '/asset/',
      '/public/',
    ],
  },

  // Environment variables
  env: {
    production: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_API_URL: 'https://api.subban.org', // Replace with your API domain
      NEXT_PUBLIC_SITE_URL: 'https://subban.org',
      NEXT_PUBLIC_GA_ID: 'G-XXXXXXXXXX', // Replace with your Google Analytics ID
    },
    staging: {
      NODE_ENV: 'staging',
      NEXT_PUBLIC_API_URL: 'https://staging-api.subban.org',
      NEXT_PUBLIC_SITE_URL: 'https://staging.subban.org',
    },
    development: {
      NODE_ENV: 'development',
      NEXT_PUBLIC_API_URL: 'http://localhost:5000',
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
    },
  },

  // Build optimization
  build: {
    production: {
      minify: true,
      compress: true,
      sourceMaps: false,
      bundleAnalyzer: false,
      swcMinify: true,
      experimental: {
        optimizeCss: true,
        optimizePackageImports: ['react-icons'],
      },
    },
    development: {
      minify: false,
      compress: false,
      sourceMaps: true,
      bundleAnalyzer: true,
      swcMinify: false,
    },
  },

  // Server configuration
  server: {
    production: {
      port: process.env.PORT || 3000,
      hostname: '0.0.0.0',
      compression: true,
      cache: true,
      security: true,
    },
    development: {
      port: 3000,
      hostname: 'localhost',
      compression: false,
      cache: false,
      security: false,
    },
  },

  // Database configuration
  database: {
    production: {
      url: process.env.MONGODB_URI,
      options: {
        maxPoolSize: 10,
        minPoolSize: 5,
        maxIdleTimeMS: 30000,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      },
    },
    development: {
      url: 'mongodb://localhost:27017/subban',
      options: {
        maxPoolSize: 5,
        minPoolSize: 1,
        maxIdleTimeMS: 10000,
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000,
      },
    },
  },

  // Monitoring and analytics
  monitoring: {
    googleAnalytics: {
      enabled: true,
      id: 'G-XXXXXXXXXX', // Replace with your GA ID
    },
    googleTagManager: {
      enabled: false,
      id: 'GTM-XXXXXXX', // Replace with your GTM ID
    },
    sentry: {
      enabled: false,
      dsn: 'https://your-sentry-dsn@sentry.io/project', // Replace with your Sentry DSN
    },
  },

  // SEO configuration
  seo: {
    title: 'শুব্বান দাওয়াতি কাফেলা',
    description: 'দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি',
    keywords: ['শুব্বান', 'দাওয়াতি', 'কাফেলা', 'ইসলাম', 'দাওয়াত', 'বাংলাদেশ'],
    author: 'শুব্বান দাওয়াতি কাফেলা',
    ogImage: '/logo/logo_1.jpg',
    twitterCard: 'summary_large_image',
    canonical: 'https://subban.org',
  },

  // Performance budgets
  performance: {
    budgets: {
      'initial': '200kb',
      'perRoute': '50kb',
      'total': '500kb',
    },
    metrics: {
      'First Contentful Paint': 1500,
      'Largest Contentful Paint': 2500,
      'First Input Delay': 100,
      'Cumulative Layout Shift': 0.1,
    },
  },

  // Security configuration
  security: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
    csp: {
      'default-src': ["'self'"],
      'style-src': ["'self'", "'unsafe-inline'"],
      'script-src': ["'self'"],
      'img-src': ["'self'", "data:", "https:"],
      'font-src': ["'self'", "https://fonts.gstatic.com"],
      'connect-src': ["'self'", "https://api.subban.org"],
    },
  },

  // Caching strategy
  caching: {
    static: {
      '*.js': 'public, max-age=31536000, immutable',
      '*.css': 'public, max-age=31536000, immutable',
      '*.png': 'public, max-age=31536000, immutable',
      '*.jpg': 'public, max-age=31536000, immutable',
      '*.jpeg': 'public, max-age=31536000, immutable',
      '*.gif': 'public, max-age=31536000, immutable',
      '*.svg': 'public, max-age=31536000, immutable',
      '*.ico': 'public, max-age=31536000, immutable',
      '*.woff': 'public, max-age=31536000, immutable',
      '*.woff2': 'public, max-age=31536000, immutable',
    },
    api: {
      'GET /api/*': 'public, max-age=3600, s-maxage=3600',
      'POST /api/*': 'no-cache',
      'PUT /api/*': 'no-cache',
      'DELETE /api/*': 'no-cache',
    },
    html: {
      '*.html': 'no-cache, no-store, must-revalidate',
    },
  },
};

module.exports = deploymentConfig; 