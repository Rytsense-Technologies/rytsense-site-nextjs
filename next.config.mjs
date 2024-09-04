/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "appinventiv.com"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  experimental: {
    appDir: true,
    pagesDir: "site", // Tell Next.js to use the 'site' directory
  },
};

export default nextConfig;
