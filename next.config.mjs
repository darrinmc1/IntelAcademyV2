/** @type {import('next').NextConfig} */
const nextConfig = {
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
