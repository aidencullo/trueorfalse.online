/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/press',
  assetPrefix: '/press/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
