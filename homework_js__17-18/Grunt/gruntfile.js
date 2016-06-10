module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'build/js/script.main.js'
      }
    },
    uglify: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['build/js/script.main.js'],
         dest: 'build/js/script.min.js'
      }
    },
    cssmin: {
    target: {
      files: {
        'build/css/style.min.css': ['src/css/*.css']
      }
    }
  },
    imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'src/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/img/'
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
