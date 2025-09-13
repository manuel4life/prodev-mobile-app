const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  async getTransformOptions() {
    return {
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    };
  },
};

module.exports = config;
