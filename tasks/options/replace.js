var USE_MINJS = {
  match: /index\.js/g,
  replacement: "index.min.js",
};
var REMOVE_MOBILEONLY = {
  match: /<!-- MOBILE-ONLY -->((.|\s)*?)<!-- \/MOBILE-ONLY -->/g,
  replacement: "",
};
var REMOVE_DESKTOPONLY = {
  match: /<!-- DESKTOP-ONLY -->((.|\s)*?)<!-- \/DESKTOP-ONLY -->/g,
  replacement: "",
};

module.exports = {
  desktop: {
    options: {
      patterns: [REMOVE_MOBILEONLY],
    },
    files: {
      "tmp/index.html": "tmp/index.html",
    },
  },
  mobile: {
    options: {
      patterns: [REMOVE_DESKTOPONLY],
    },
    files: {
      "tmp/index.html": "tmp/index.html",
    },
  },
  minifyDesktop: {
    options: {
      patterns: [USE_MINJS],
    },
    files: {
      "build/mobile/index.min.html": "build/mobile/index.html",
    },
  },
  minifyMobile: {
    options: {
      patterns: [USE_MINJS],
    },
    files: {
      "build/mobile/index.min.html": "build/mobile/index.html",
    },
  },
};