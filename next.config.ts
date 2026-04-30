import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'et', 'ru'],
    defaultLocale: 'en',
    localeDetection: false
  },
  reactStrictMode: true
};

export default nextConfig;
