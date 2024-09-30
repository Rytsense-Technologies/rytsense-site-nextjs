/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "appinventiv.com"],
    unoptimized: true, 
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  trailingSlash: true, 
  experimental: {
    appDir: false,  
    pagesDir: "site", 
  },
  output: "export",  
};

export default nextConfig;
