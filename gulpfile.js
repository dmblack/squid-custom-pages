var gulp = require('gulp')
var sass = require('gulp-sass')
var inject = require('gulp-inject')

gulp.task('styles', function(){
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('distribution/pages/css/'))
})

gulp.task('html', ['styles'], function(){
  var injectFiles = gulp.src(['distribution/pages/css/main.css'])

  return gulp.src('src/pages/ERR_ACCESS_DENIED')
    .pipe(inject(injectFiles))
    .pipe(gulp.dest('distribution/pages/'))
})