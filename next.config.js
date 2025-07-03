/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['valestra.co', 'your-image-cdn.com'], // update with any domains you serve images from
  },
  trailingSlash: false,
};

module.exports = nextConfig;
