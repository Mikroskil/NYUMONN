<<<<<<< HEAD
'use strict';

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use strict';

=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
>>>>>>> 1e4598260157464fddf387ec985c5fccfc96819a
var pkg = require('./package.json'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  plumber = require('gulp-plumber'),
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  rimraf = require('gulp-rimraf'),
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
  rimraf = require('gulp-rimraf'),
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
  rimraf = require('gulp-rimraf'),
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
>>>>>>> 1e4598260157464fddf387ec985c5fccfc96819a
  rename = require('gulp-rename'),
  connect = require('gulp-connect'),
  browserify = require('gulp-browserify'),
  uglify = require('gulp-uglify'),
  jade = require('gulp-jade'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
<<<<<<< HEAD
  del = require('del'),
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  del = require('del'),
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
>>>>>>> 1e4598260157464fddf387ec985c5fccfc96819a
  through = require('through'),
  opn = require('opn'),
  ghpages = require('gh-pages'),
  path = require('path'),
  isDist = process.argv.indexOf('serve') === -1;

gulp.task('js', ['clean:js'], function() {
  return gulp.src('src/scripts/main.js')
    .pipe(isDist ? through() : plumber())
    .pipe(browserify({ transform: ['debowerify'], debug: !isDist }))
    .pipe(isDist ? uglify() : through())
    .pipe(rename('build.js'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('html', ['clean:html'], function() {
  return gulp.src('src/index.jade')
    .pipe(isDist ? through() : plumber())
    .pipe(jade({ pretty: true }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('css', ['clean:css'], function() {
  return gulp.src('src/styles/main.styl')
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({
      // Allow CSS to be imported from node_modules and bower_components
      'include css': true,
      'paths': ['./node_modules', './bower_components']
    }))
    .pipe(autoprefixer('last 2 versions', { map: false }))
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('images', ['clean:images'], function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1e4598260157464fddf387ec985c5fccfc96819a
gulp.task('clean', function(done) {
  del('dist', done);
});

gulp.task('clean:html', function(done) {
  del('dist/index.html', done);
});

gulp.task('clean:js', function(done) {
  del('dist/build/build.js', done);
});

gulp.task('clean:css', function(done) {
  del('dist/build/build.css', done);
});

gulp.task('clean:images', function(done) {
  del('dist/images', done);
});

gulp.task('connect', ['build'], function() {
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(rimraf());
});

gulp.task('clean:html', function() {
  return gulp.src('dist/index.html')
    .pipe(rimraf());
});

gulp.task('clean:js', function() {
  return gulp.src('dist/build/build.js')
    .pipe(rimraf());
});

gulp.task('clean:css', function() {
  return gulp.src('dist/build/build.css')
    .pipe(rimraf());
});

gulp.task('clean:images', function() {
  return gulp.src('dist/images')
    .pipe(rimraf());
});

gulp.task('connect', ['build'], function(done) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
>>>>>>> 1e4598260157464fddf387ec985c5fccfc96819a
  connect.server({
    root: 'dist',
    livereload: true
  });
<<<<<<< HEAD
});

gulp.task('open', ['connect'], function (done) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
});

gulp.task('open', ['connect'], function (done) {
=======

>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======

>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======

>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
>>>>>>> 1e4598260157464fddf387ec985c5fccfc96819a
  opn('http://localhost:8080', done);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.jade', ['html']);
  gulp.watch('src/styles/**/*.styl', ['css']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch([
    'src/scripts/**/*.js',
    'bespoke-theme-*/dist/*.js' // Allow themes to be developed in parallel
  ], ['js']);
});

gulp.task('deploy', ['build'], function(done) {
  ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log }, done);
});

gulp.task('build', ['js', 'html', 'css', 'images']);
<<<<<<< HEAD

gulp.task('serve', ['open', 'watch']);

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

gulp.task('serve', ['open', 'watch']);

=======
gulp.task('serve', ['connect', 'watch']);
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
gulp.task('serve', ['connect', 'watch']);
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
=======
gulp.task('serve', ['connect', 'watch']);
>>>>>>> 6f69659a85c08a0430dfd3982d61ed7cefafc73c
>>>>>>> 1e4598260157464fddf387ec985c5fccfc96819a
gulp.task('default', ['build']);
