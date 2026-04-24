import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Add turbopack config to silence warnings
  turbopack: {},
};

export default nextConfig;
