/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  env: {
    version: "0.1.0"
  },
	experimental: {
		
	},
	i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
