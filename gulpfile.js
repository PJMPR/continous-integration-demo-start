"use strict";
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default',['jshint','test','serve']);

gulp.task('jshint',()=>{
	return gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})
.task('test',()=>{
	require('./test.js');
})
.task('serve',()=>{
	require('./main.js');
});