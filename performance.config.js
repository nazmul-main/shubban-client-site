/**
 * Performance Configuration for Subban Website
 * This file contains performance optimization settings
 */

const performanceConfig = {
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Font optimization
  fonts: {
    display: 'swap',
    preload: true,
    fallback: {
      sans: ['system-ui', 'arial'],
      mono: ['monospace'],
    },
  },

  // Caching strategies
  cache: {
    static: {
      maxAge: 31536000, // 1 year
      immutable: true,
    },
    api: {
      maxAge: 3600, // 1 hour
      sMaxAge: 3600,
    },
    html: {
      maxAge: 0,
      noCache: true,
    },
  },

  // Bundle optimization
  bundle: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  // Preload critical resources
  preload: [
    '/logo/logo_1.jpg',
    '/favicon.ico',
  ],

  // DNS prefetch domains
  dnsPrefetch: [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
  ],

  // Preconnect domains
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],

  // Security headers
  security: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },

  // Compression settings
  compression: {
    level: 6,
    threshold: 1024,
  },

  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },

  // MongoDB connection pooling
  database: {
    maxPoolSize: 10,
    minPoolSize: 5,
    maxIdleTimeMS: 30000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  },

  // Environment-specific settings
  environments: {
    development: {
      compression: false,
      cache: false,
      debug: true,
    },
    production: {
      compression: true,
      cache: true,
      debug: false,
      minify: true,
    },
  },
};

module.exports = performanceConfig; 