const withImages = require("next-images");
const withTM = require("next-transpile-modules")([
  "gsap",
  "gsap/ScrollTrigger",
]);

module.exports = withImages(withTM());
