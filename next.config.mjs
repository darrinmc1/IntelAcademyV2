import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Next.js doesn't get confused by other lockfiles
  // elsewhere on the machine (e.g. C:\Users\Darrin\bun.lock).
  outputFileTracingRoot: __dirname,

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    scrollRestoration: true,
  },

  trailingSlash: false,

  images: {
    unoptimized: false,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  turbopack: {},

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      path: false,
      'prettier/plugins/html': false,
      'prettier/standalone': false,
    };
    return config;
  },
};

export default nextConfig;
