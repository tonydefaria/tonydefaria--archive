// next.config.js

module.exports = {
  webpack5: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    localeDetection: false
  },
  // target: "serverless",
  reactStrictMode: true
}
