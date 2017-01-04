var gulp = require('gulp'),
	less = require('gulp-less'),
	sass = require('gulp-sass'),
	sourcemaps=require('gulp-sourcemaps'),
	coffee = require('gulp-coffee'),
	uglyfly = require('gulp-uglyfly'),
	ejs =require('gulp-ejs'),
	rename = require('gulp-rename'),
	pug = require('gulp-pug');

gulp.task('styles',function(){
	 gulp.src('./src/less/*.less')
	 .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('sass',function(){
	 gulp.src('./src/sass/*.scss')
	 .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('scripts',function(){
	 gulp.src('./src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('scripts_min',function(){
	 gulp.src('./src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(uglyfly())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('templates',function(){
	 gulp.src('./views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
});
gulp.task('templates2',function(){
	 gulp.src('./views2/*.ejs')
    .pipe(ejs(null,{
    	ext:'.html'
    }))
    .pipe(gulp.dest('./views2'))
});
gulp.task('watch',function(){
  gulp.watch('./src/less/*.less',['styles']);
  gulp.watch('./src/coffee/*.coffee',['scripts','scripts_min']);
  gulp.watch('./views/**/*.pug',['templates']);
  gulp.watch('./gulpfile.js',['watch']); 
})
gulp.task('default',function(){
	//place code for your default task here
	gulp.start('styles','scripts','scripts_min','templates','templates2');
});
