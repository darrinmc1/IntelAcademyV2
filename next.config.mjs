/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    scrollRestoration: true,
    largePageDataBytes: 128 * 1000, // 128KB
    serverActions: {allowedOrigins: ['localhost:3000']},
  },
  
  // Output configuration for better deployment compatibility
  // output: 'export',
  trailingSlash: true,
  
  // Skip static generation for problematic pages
  generateStaticParams: false,
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Ensure SWC is used
    styledComponents: false,
  },
  
  // ESLint and TypeScript configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Webpack configuration to handle potential module resolution issues
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Handle potential module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Optimize bundle splitting with more granular control
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](@react|react|react-dom|next|framer-motion)[\\/]/,
            priority: 40,
            chunks: 'all',
          },
          lib: {
            test(module) {
              return module.size() > 80000 && /node_modules[\\/]/.test(module.identifier());
            },
            name(module) {
              const rawRequest = module.rawRequest || '';
              const match = rawRequest.match(/node_modules[\\/](.*?)[\\/]/);
              if (match) return `npm.${match[1].replace('@', '')}`;
              return 'lib';
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
      };

      // Increase timeout for chunk loading
      config.output.chunkLoadTimeout = 60000; // 60 seconds
    }

    return config;
  },
}

export default nextConfig
