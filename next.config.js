// next.config.js

module.exports = withImages({
  webpack5: true,
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    localeDetection: false
  },
  target: "serverless",
  reactStrictMode: true
})
