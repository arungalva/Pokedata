var gulp = require('gulp');
var bower = require('bower');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');

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
    .pipe(rename('./www/css/app.min.css'))
    .on('end', done);
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./www/lib/ion-slide-box-tabs/js/slidingTabsDirective.js'),
        uglify(),
        gulp.dest('./www/lib/ion-slide-box-tabs/js/slidingTabsDirective.min.js')
    ],
    cb
  );
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});
