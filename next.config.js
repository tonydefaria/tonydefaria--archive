// next.config.js

module.exports = {
  webpack5: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false
  },
  target: "serverless",
  reactStrictMode: true
}
