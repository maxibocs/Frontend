module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/tmpl.js', 'src/js/jquery.jcarousel.js', 'src/js/script.js'],
        dest: 'build/js/script.main.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/js/script.main.min.js': ['build/js/script.main.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/main.min.css': 'src/css/scss/screen.scss',
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        resetoundingPrecision: -1
      },
      target: {
        files: {
          'build/css/ie.min.css': ['src/css/ie.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/img'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      scss: {
        files: ['src/css/scss/*/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false
        }
      },
      img: {
        files: ['src/img/*'],
        tasks: ['imagemin']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'imagemin', 'watch']);

};