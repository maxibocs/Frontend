var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var gulp = require('gulp'),
    processhtml = require('gulp-processhtml');

gulp.task('js:build', function () {
  'use strict';
  gulp.src(['src/js/jQuery.carousel.js', 'src/js/script.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('css:build', function () {
  'use strict';
  return gulp.src(['src/css/reset.css', 'src/css/style.css', 'src/css/styleMQ.css'])
    .pipe(concat('style.css'))
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

gulp.task('html:build', function() {
  'use strict';
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
});

gulp.task('processhtml:build', function () {
  gulp.src('src/index.html')
    .pipe(processhtml())
    .pipe(gulp.dest('build'));
});

gulp.task('browserSync', function() {
  'use strict';
  browserSync({
    server: {
      baseDir: './'
    }
  });
});


gulp.task('build', ['js:build', 'css:build', 'image:build','html:build','processhtml:build']);

gulp.task('watch', ['browserSync'], function() {
  'use strict';
  gulp.watch('src/js/**/*.js', ['js:build']);

  gulp.watch('src/css/**/*.css', ['css:build']);

  gulp.watch('src/img/**/*.*', ['image:build']);

  gulp.watch('src/*.html', ['html:build']);

  gulp.watch('src/*.html', ['processhtml:build']);
});

gulp.task('default', ['build', 'watch']);
