module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source map warnings for htmlhint
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        (warning) =>
          warning.message &&
          warning.message.includes('Failed to parse source map') &&
          warning.module &&
          /htmlhint/.test(warning.module.resource || ''),
      ];
      return webpackConfig;
    },
  },
};
