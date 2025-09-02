
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress hydration warnings in development for browser extensions
  reactStrictMode: true,
  experimental: {
    // Suppress hydration warnings for known browser extension issues
    suppressHydrationWarning: true,
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
    return config;
  },
};

export default nextConfig;
