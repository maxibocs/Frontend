var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

gulp.task('js:build', function () {
  'use strict';
  gulp.src(['src/js/jQuery.carousel.js', 'src/js/script.js'])
    .pipe(concat('script.main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('css:build', function () {
  'use strict';
  return gulp.src(['src/css/reset.css', 'src/css/style.css', 'src/css/styleMQ.css'])
    .pipe(concat('style.main.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('image:build', function () {
  'use strict';
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

gulp.task('browserSync', function() {
  'use strict';
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('build', ['js:build', 'css:build', 'image:build']);

gulp.task('watch', ['browserSync'], function() {
  'use strict';
  gulp.watch('src/js/**/*.js', ['js:build']);

  gulp.watch('src/css/**/*.css', ['css:build']);

  gulp.watch('src/img/**/*.*', ['image:build']);
});

gulp.task('default', ['build', 'watch']);
