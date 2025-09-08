
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress hydration warnings in development for browser extensions
  reactStrictMode: true,
  // Static Site Generation optimization
  output: 'export',
  trailingSlash: true,
  // Prefetch optimization
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Custom webpack configuration to handle browser extensions
  webpack: (config, { dev }) => {
    if (dev) {
      // Suppress hydration warnings in development
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
    }
    
    // Optimize for faster loading
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  },
};

export default nextConfig;
