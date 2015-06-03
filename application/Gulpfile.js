var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 8000;

// JSHint task
gulp.task('lint', function() {
  gulp.src('./app/bundles/common/services/**/*.js')
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('jshint-stylish'));
});

// Browserify task
gulp.task('browserify', function() {

  gulp.src(['app/vendor.js'])
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/js'))

  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  gulp.src(['app/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  // Bundle to a single file
  .pipe(concat('bundle.js'))
  // Output it to our dist folder
  .pipe(gulp.dest('dist/js'));
});

// Views task
gulp.task('copy', function() {
  //copy index.html
  gulp.src('./app/views/*.html')
  .pipe(gulp.dest('dist/'));

  //copy customer css|js|img files
  gulp.src('./app/public/**/*')
    .pipe(gulp.dest('dist/public'));

  gulp.src('./app/vendor/bootstrap/**/*')
    .pipe(gulp.dest('dist/vendor/bootstrap'));
    
  // copy all views from bundles
  gulp.src('./app/bundles/**/*.html')
  .pipe(gulp.dest('dist/bundles/'))
  .pipe(refresh(lrserver)); // Tell the lrserver to refresh
});


gulp.task('watch', function() {
  // Watch our scripts
  gulp.watch(['app/**/*.js','!app/vendor/**/*'],[   
    'browserify'
  ]);

  gulp.watch(['app/index.html', 'app/**/*.html'], [
    'copy'
  ]);

});



// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
    res.sendfile('index.html', { root: 'dist' });
});


// Dev task
gulp.task('serve', function() {
  // Start webserver
  server.listen(serverport);
  // Start live reload
  lrserver.listen(livereloadport);
  // Run the watch task, to keep taps on changes
  gulp.run('watch');
});