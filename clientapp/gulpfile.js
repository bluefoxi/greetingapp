var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var styleSRC = './src/scss/style.scss';
var styleWatch = './src/scss/*.scss'
var styleDIST = './src/css';

 
gulp.task('sass', function () {
  return gulp.src(styleSRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(styleDIST));
});
gulp.task('sass_min', function () {
    return gulp.src(styleSRC)
      .pipe(sass({
          outputStyle: 'compressed',
          errLogToConsole: true        
        }))
      .on('error', console.error.bind(console))
      .pipe(rename({suffix:'.min'}))
      .pipe(gulp.dest(styleDIST));
  });
   
gulp.task('default', gulp.parallel('sass','sass_min'));

gulp.task('watch', function () {
  gulp.watch(styleWatch, gulp.series('sass','sass_min'));
});

gulp.task('start', gulp.series('default','watch'));