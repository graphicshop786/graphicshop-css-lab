module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Add fallback for Node.js modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "fs": false,
        "path": false,
        "os": false,
      };
      
      // Ignore source map warnings for htmlhint
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
        /Module not found: Can't resolve 'fs'/,
        /Module not found: Can't resolve 'path'/,
        /Module not found: Can't resolve 'os'/,
      ];
      
      return webpackConfig;
    },
  },
};
