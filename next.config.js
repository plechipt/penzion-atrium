/** @type {import('next').NextConfig} */

// Internaliztion
const withNextIntl = require("next-intl/plugin")("./i18n.js");

const nextConfig = {
  productionBrowserSourceMaps: true,

  // Turbopack (default in Next 16)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              dimensions: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },

  // Webpack (used with `next dev --webpack` / `next build --webpack`)
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
