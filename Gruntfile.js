module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    vulcanize: {
      main: {
        options: {
          csp: true,
        },
        src: 'src/index.html',
        dest: 'build/route.html',
      },
    },
    replace: {
      main: {
        options: {
          patterns: [
            {
              match: /route\.js/g,
              replacement: 'route.min.js',
            }
          ]
        },
        src: 'build/route.html',
        dest: 'build/route.min.html',
      }
    },
    uglify: {
      main: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          sourceMap: true,
          preserveComments: false,
        },
        src: 'build/route.js',
        dest: 'build/route.min.js',
      }
    },
    htmlmin: {
      main: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        src: 'build/route.min.html',
        dest: 'build/route.min.html',
      }
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'build/',
        src: ['route.html', 'route.min.html', 'route.js', 'route.min.js'],
        dest: 'build/',
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-replace');

  grunt.file.mkdir("build");

  // Default task(s).
  grunt.registerTask('default', ['vulcanize', 'replace', 'uglify', 'htmlmin', 'compress']);
};