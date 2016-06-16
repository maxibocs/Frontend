module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
      },
      dist: {
        files: {
          'js/script.js': 'js/src/script.js'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      babel: {
        files: ['js/src/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel', 'watch']);

};