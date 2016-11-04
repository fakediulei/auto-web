var gulp = require('gulp'),
	less = require('gulp-less'),
	sourcemaps=require('gulp-sourcemaps'),
	coffee = require('gulp-coffee'),
	jade = require('gulp-jade');

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
	 gulp.src('./views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
});
gulp.task('watch',function(){
  gulp.watch('./src/less/*.less',['styles']);
  gulp.watch('./src/coffee/*.coffee',['scripts']);
  gulp.watch('./views/*.jade',['templates']);
})
gulp.task('default',function(){
	//place code for your default task here
	gulp.start('styles','scripts','templates');
});
