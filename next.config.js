/** @type {import('next').NextConfig} */

// Internaliztion
const withNextIntl = require("next-intl/plugin")("./i18n.js");

const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            typescript: true,
            dimensions: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withNextIntl({
  ...nextConfig,
});
