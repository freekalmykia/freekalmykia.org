/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    version: "0.1.0"
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
