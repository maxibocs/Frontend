module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/script.main.js'
      }
    },
    uglify: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/script.main.js'],
         dest: 'js/script.min.js'
      }
    },
    cssmin: {
    target: {
      files: {
        'css/style.min.css': ['css/src/*.css']
      }
    }
  },
    imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'img/src',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/'
          }]
        }
    },
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['concat' ,'uglify','cssmin','imagemin']);

};
