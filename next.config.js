/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'], // Add any other allowed domains as needed
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  trailingSlash: true, // เพิ่ม trailing slash ให้กับ URL ที่สร้าง
};

module.exports = nextConfig;
