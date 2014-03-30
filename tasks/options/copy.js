module.exports = {
  tmp: {
    files: [
      {expand: true, cwd: "src/", src: "**", dest: "tmp"},
    ],
  },
  mobile: {
    files: [
      {expand: true, cwd: "src/", src: ["cordova_plugins.js", "cordova.js"], dest: "build/mobile"},
      {expand: true, cwd: "src/plugins", src: ["**"], dest: "build/mobile/plugins"},
    ]
  }
};