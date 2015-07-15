var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  browserify = require('gulp-browserify'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  uglyfly = require('gulp-uglyfly'),
  less = require('gulp-less'),
  prettify = require('gulp-jsbeautifier'),
  LessPluginCleanCSS = require('less-plugin-clean-css'),
  LessPluginAutoPrefix = require('less-plugin-autoprefix');

var cleancss = new LessPluginCleanCSS({
    advanced: true
  }),
  autoprefix = new LessPluginAutoPrefix({
    browsers: ["last 2 versions"]
  });

var embedlr = require('gulp-embedlr'),
  refresh = require('gulp-livereload'),
  lrserver = require('tiny-lr')(),
  express = require('express'),
  livereload = require('connect-livereload'),
  livereloadport = 35729,
  serverport = 9000;


// JSHint task
gulp.task('lint', function() {
  gulp.src('./app/bundles/auth/services/*.js')
    .pipe(jshint())
    // You can look into pretty reporters as well, but that's another story
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('beautify', function() {
    //gulp.src([config.jsAssets + '/**/*.js'])
    gulp.src(['./app/**/*.js','!./app/vendor/**/*.js'])
        .pipe(prettify({config: '.jsbeautifyrc', mode: 'VERIFY_AND_WRITE'}))
        .pipe(gulp.dest('./app'));
    
});

// Browserify task
gulp.task('browserify', function() {

  gulp.src(['app/vendor.js'])
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(concat('lib.js'))
    .pipe(uglyfly())
    .pipe(gulp.dest('dist/js'))

  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  gulp.src(['app/app.js'])
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    // Bundle to a single file
    .pipe(concat('bundle.js'))
    .pipe(uglyfly())
    // Output it to our dist folder
    .pipe(gulp.dest('dist/js'));
});

// Views task
gulp.task('copy', function() {
  //copy index.html
  gulp.src('./app/views/*.html')
    .pipe(gulp.dest('dist/'));

  //copy customer css|js|img files
  gulp.src(['./app/public/**/*', '!./app/public/less/', '!./app/public/less/**/*'])
    .pipe(gulp.dest('dist/public'));

 

  gulp.src('./app/vendor/bootstrap/**/*')
    .pipe(gulp.dest('dist/vendor/bootstrap'));

  gulp.src('./app/vendor/jquery/**/*')
    .pipe(gulp.dest('dist/vendor/jquery'));

  // copy all views from bundles
  gulp.src('./app/bundles/**/*.html')
    .pipe(gulp.dest('dist/bundles/'))
    .pipe(refresh(lrserver)); // Tell the lrserver to refresh
});

gulp.task('less', function() {

   gulp.src(['./app/public/less/*.less','!./app/public/less/properties.less'])
    .pipe(less({
      plugins: [autoprefix, cleancss]
    }))
    .pipe(gulp.dest('dist/public/css'));
});


gulp.task('watch', function() {
  // Watch our scripts
  gulp.watch(['app/**/*.js', '!app/vendor/**/*'], [
    'browserify'
  ]);

  gulp.watch(['app/public/less/*.less'],['less']);

  gulp.watch(['app/index.html', 'app/**/*.html'], [
    'copy'
  ]);

});



// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({
  port: livereloadport
}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
  res.sendfile('index.html', {
    root: 'dist'
  });
});


// Dev task
gulp.task('serve', function() {
  // Start webserver
  server.listen(serverport);
  console.log('Server is started on ' + serverport);
  // Start live reload
  lrserver.listen(livereloadport);
  // Run the watch task, to keep taps on changes
  gulp.run('watch');
});