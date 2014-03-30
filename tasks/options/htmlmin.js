module.exports = {
  options: {
    removeComments: true,
    collapseWhitespace: true,
  },
  desktop: {
    files: {
      "build/desktop/index.min.html": ["build/desktop/index.min.html"],
    },
  },
  mobile: {
    files: {
      "build/mobile/index.min.html": ["build/mobile/index.min.html"],
    },
  },
};