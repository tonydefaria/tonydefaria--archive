// next.config.js

module.exports = {
  trailingSlash: true,
  webpack5: true,
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  //   localeDetection: false
  // },
  // target: "serverless",
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "strict-transport-security",
            value: "max-age=31536000; includeSubDomains; preload",
          }
        ]
      }
    ]
  }
}
