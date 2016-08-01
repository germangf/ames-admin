var gulp    = require('gulp');
var clean   = require('gulp-clean');
var rename  = require('gulp-rename');
//var concat  = require('gulp-concat');
//var jshint  = require('gulp-jshint');
//var uglify  = require('gulp-uglifyjs');
var sass    = require('gulp-sass');
var csso    = require('gulp-csso');
//var browserify = require('gulp-browserify');
//var es      = require('event-stream');
//var sprity = require('sprity');
//var gulpif = require('gulp-if');
var eslint = require('gulp-eslint');

gulp.task('clean', function () {
  // Clear the destination folder
  gulp.src('public/css/**/*.css', { read: false })
    .pipe(clean({ force: true }));
});


gulp.task('lint', function() {
  return gulp.src(['app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('styles', function () {
  return gulp.src('_sass/main.scss')
      .pipe(sass())
      .pipe(rename('main.css'))
      .pipe(csso())
      .pipe(gulp.dest('public/css'));
});


gulp.task('watch', function () {

  // Watch .scss files and run tasks if they change
  gulp.watch('_sass/**/*.scss', ['styles']);

  // Watch .js files and run tasks if they change
  //gulp.watch('js/**/*.js', ['scripts']);

});

// The dist task (used to store all files that will go to the server)
//gulp.task('dist', ['clean', 'styles', 'scripts']);
gulp.task('dist', ['clean', 'styles']);

// The default task (called when you run `gulp`)
//gulp.task('default', ['clean', 'styles', 'scripts', 'watch']);
gulp.task('default', ['clean', 'styles', 'watch']);


