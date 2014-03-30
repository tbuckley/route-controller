module.exports = {
  options: {
    csp: true,
  },
  desktop: {
    files: {
      "build/desktop/index.html": ["tmp/index.html"],
    }
  },
  mobile: {
    files: {
      "build/mobile/index.html": ["tmp/index.html"],
    }
  }
};