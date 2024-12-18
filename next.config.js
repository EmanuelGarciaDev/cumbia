/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  // Other Next.js configuration...

  // Enable CSS modules and import styles globally
  cssModules: true,
  // Load global styles in every component
  globalStyles: [
    'styles/globals.css',
  ],
};

module.exports = nextConfig
