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

    // Simplify chunk splitting to improve reliability
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 50000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](@react|react|react-dom|next)[\\/]/,
            priority: 40,
            chunks: 'all',
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
      };

      // Increase timeout for chunk loading
      config.output.chunkLoadTimeout = 120000; // 120 seconds
    }

    return config;
  },
}

export default nextConfig
