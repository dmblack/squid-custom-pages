var gulp = require('gulp')
var sass = require('gulp-sass')
var inject = require('gulp-inject')

gulp.task('styles', function(){
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('distribution/pages/css/'))
})

gulp.task('html', ['styles'], function(){
  return gulp.src('src/pages/ERR_ACCESS_DENIED')

  .pipe(inject(gulp.src(['distribution/pages/css/main.css']), {
    starttag: '<!-- inject:css -->',
    relative: true,
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
    .pipe(gulp.dest('distribution/pages/'))
})