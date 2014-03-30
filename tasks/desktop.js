module.exports = function(grunt) {
  grunt.registerTask("desktop", ["clean:desktop", "mkdir:desktop", "copy:tmp", "replace:desktop", "vulcanize:desktop"]);
};