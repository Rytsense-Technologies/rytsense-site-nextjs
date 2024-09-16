/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "appinventiv.com"],
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  experimental: {
    appDir: true,
    pagesDir: "site", 
  },
  output: "export",
};

export default nextConfig;
