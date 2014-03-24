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
        dest: 'build/index.html',
      },
    },
    replace: {
      main: {
        options: {
          patterns: [
            {
              match: /index\.js/g,
              replacement: 'index.min.js',
            }
          ]
        },
        src: 'build/index.html',
        dest: 'build/index.min.html',
      }
    },
    uglify: {
      main: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          sourceMap: true,
          preserveComments: false,
        },
        src: 'build/index.js',
        dest: 'build/index.min.js',
      }
    },
    htmlmin: {
      main: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        src: 'build/index.min.html',
        dest: 'build/index.min.html',
      }
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'build/',
        src: ['index.html', 'index.min.html', 'index.js', 'index.min.js'],
        dest: 'build/',
      },
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: "src/", src: ["cordova_plugins.js"], dest: "build/"},
          {expand: true, cwd: "src/plugins", src: ["**"], dest: "build/plugins"},
        ]
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.file.mkdir("build");

  // Default task(s).
  grunt.registerTask('build', ['vulcanize', 'compress', 'copy']);
  grunt.registerTask('default', ['vulcanize', 'replace', 'uglify', 'htmlmin', 'compress']);
};
