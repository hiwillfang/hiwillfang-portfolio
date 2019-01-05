/* ============================
  CONFIG
============================== */
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

require("dotenv").config();
const path = require("path");
const dotEnv = require("dotenv-webpack");

module.exports = withSass(
  withImages({
    webpack: config => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new dotEnv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ];

      return config;
    }
  })
);
