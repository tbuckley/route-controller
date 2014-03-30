var FILES = [
  "index.html",
  "index.min.html",
  "index.js",
  "index.min.js",
  "index.min.map",
];

module.exports = {
  options: {
    mode: "gzip",
  },
  desktop: {
    files: [
      {expand: true, cwd: "build/desktop", src: FILES, dest: "build/desktop"},
    ]
  },
  mobile: {
    files: [
      {expand: true, cwd: "build/mobile", src: FILES, dest: "build/mobile"},
    ]
  },
};