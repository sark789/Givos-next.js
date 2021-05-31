const withPlugins = require("next-compose-plugins");
/* const withImages = require("next-images"); */
const withTM = require("next-transpile-modules")([
  "gsap",
  "gsap/ScrollTrigger",
]);

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          outputPath: "static/images",
          publicPath: "/_next/static/images",
          esModule: false,
        },
      },
    });
    return config;
  },
};

module.exports = withPlugins([[withTM]], nextConfig);
