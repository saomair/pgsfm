import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site generation configuration
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Asset prefix for Cloudways deployment (if needed)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-subdirectory' : '',
  
  // Disable server-side features for static export
  // experimental: {
  //   esmExternals: false,
  // },
  
  // Disable API routes for static export (they won't work in static hosting)
  // Note: API routes will be ignored during static export
};

export default nextConfig;
