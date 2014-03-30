module.exports = {
  options: {
    banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n",
    sourceMap: true,
    preserveComments: false,
  },
  desktop: {
    files: {
      "build/desktop/index.min.js": ["build/desktop/index.js"],
    }
  },
  mobile: {
    files: {
      "build/mobile/index.min.js": ["build/mobile/index.js"],
    }
  }
};