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

gulp.task('clean', function () {
  // Clear the destination folder
  gulp.src('public/css/**/*.css', { read: false })
    .pipe(clean({ force: true }));
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


// Load Gulp
//var gulp    = require('gulp'),
//    gutil   = require('gulp-util');
//    plugins = require('gulp-load-plugins')();

// Start Watching: Run "gulp"
//gulp.task('default', ['watch']);

// Minify jQuery Plugins: Run manually with: "gulp squish-jquery"
//gulp.task('squish-jquery', function() {
//  return gulp.src('assets/js/libs/**/*.js')
//    .pipe(plugins.uglify())
//    .pipe(plugins.concat('jquery.plugins.min.js'))
//    .pipe(gulp.dest('build'));
//});

// Minify Custom JS: Run manually with: "gulp build-js"
//gulp.task('build-js', function() {
//  return gulp.src('assets/js/*.js')
//    .pipe(plugins.jshint())
//    .pipe(plugins.jshint.reporter('jshint-stylish'))
//    .pipe(plugins.uglify())
//    .pipe(plugins.concat('scripts.min.js'))
//    .pipe(gulp.dest('build'));
//});

// Less to CSS: Run manually with: "gulp build-css"
//gulp.task('build-css', function() {
//    return gulp.src('src/less/*.less')
//        .pipe(plugins.plumber())
//        .pipe(plugins.less())
//        .on('error', function (err) {
//            gutil.log(err);
//            this.emit('end');
//        })
//        .pipe(plugins.autoprefixer(
//            {
//                browsers: [
//                    '> 1%',
//                    'last 2 versions',
//                    'firefox >= 4',
//                    'safari 7',
//                    'safari 8',
//                    'IE 8',
//                    'IE 9',
//                    'IE 10',
//                    'IE 11'
//                ],
//                cascade: false
//            }
//        ))
//        //.pipe(plugins.cssmin())
//        .pipe(gulp.dest('public/css')).on('error', gutil.log);
//});

// Default task
//gulp.task('watch', function() {
//    //gulp.watch('assets/js/libs/**/*.js', ['squish-jquery']);
//    //gulp.watch('assets/js/*.js', ['build-js']);
//    gulp.watch('src/less/**/*.less', ['build-css']);
//});
