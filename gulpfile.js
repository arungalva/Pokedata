var gulp = require('gulp');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss'],
  coffee: ['./www/**/*.coffee']
};


gulp.task('sass', function(done) {
  gulp.src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.coffee, ['coffee']);
});
