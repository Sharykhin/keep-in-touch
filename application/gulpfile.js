var gulp = require('gulp');
var gls = require('gulp-live-server');
var watch = require('gulp-watch');
var gjslint = require('gulp-gjslint');


gulp.task('serve',function(){
	var server = gls.static('app2',9000);
	server.start();
	gulp.watch(['./app/**/*.js'],server.start); 
});

gulp.task('jslint', function() {
    //return gulp.src(['./app/**/*.js','!./app/vendors/**/*.js'])
    return gulp.src(['./app/src/common/directives/**/*.js','!./app/vendors/**/*.js'])
        .pipe(gjslint({
        	smarttabs:true,
        	"-W099": true        	
        }))
        .pipe(gjslint.reporter('console'));
});

