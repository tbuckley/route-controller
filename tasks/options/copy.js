module.exports = {
  tmp: {
    files: [
      {expand: true, cwd: "src/", src: "**", dest: "tmp"},
    ],
  },
  mobile: {
    files: [
      {expand: true, cwd: "cordova/platforms/android/assets/www/", src: "**", dest: "build/mobile"},
    ],
  },
};