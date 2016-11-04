var gulp = require('gulp'),
	less = require('gulp-less'),
	sourcemaps=require('gulp-sourcemaps'),
	coffee = require('gulp-coffee'),
	pug = require('gulp-pug');

gulp.task('styles',function(){
	 gulp.src('./src/less/*.less')
	 .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('scripts',function(){
	 gulp.src('./src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('templates',function(){
	 gulp.src('./views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
});
gulp.task('watch',function(){
  gulp.watch('./src/less/*.less',['styles']);
  gulp.watch('./src/coffee/*.coffee',['scripts']);
  gulp.watch('./views/**/*.pug',['templates']);
  gulp.watch('./gulpfile.js',['watch']); 
})
gulp.task('default',function(){
	//place code for your default task here
	gulp.start('styles','scripts','templates');
});
