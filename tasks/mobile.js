module.exports = function(grunt) {
  grunt.registerTask("mobile", ["clean:mobile", "mkdir:mobile", "copy:tmp", "replace:mobile", "vulcanize:mobile",
    "replace:minifyMobile", "uglify:mobile", "compress:mobile", "remotecordova:mobile"]);
};