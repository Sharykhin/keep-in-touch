var gulp = require('gulp');
var gls = require('gulp-live-server');
var watch = require('gulp-watch');
var gjslint = require('gulp-gjslint');

gulp.task('serve',function(){
	var server = gls.static('app',9000);
	server.start();
	gulp.watch(['./app/**/*.js'],server.start);
});

gulp.task('jslint', function() {
    return gulp.src(['./app/**/*.js','!./app/vendors/**/*.js'])
        .pipe(gjslint())
        .pipe(gjslint.reporter('console'));
});

