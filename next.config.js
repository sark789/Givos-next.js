const withPlugins = require("next-compose-plugins");
/* const withImages = require("next-images"); */
const withTM = require("next-transpile-modules")([
  "gsap",
  "gsap/ScrollTrigger",
]);

const nextConfig = {
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
