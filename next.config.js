/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'], // เพิ่มโดเมนที่อนุญาตให้โหลดรูปภาพมาจาก
  },
  trailingSlash: true,
};

module.exports = nextConfig;
