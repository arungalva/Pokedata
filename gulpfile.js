var gulp = require('gulp');
var bower = require('bower');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

var paths = {
  sass: ['./scss/**/*.scss']
};


gulp.task('sass', function(done) {
  gulp.src('./scss/app.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});
