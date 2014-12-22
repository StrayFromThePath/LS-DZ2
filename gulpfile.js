var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('less', function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('concatCSS', function() {
    gulp.src('css/main.css')
        .pipe(concatCSS("main.css"))
        .pipe(minifyCSS())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('html', function(){
    gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch('less/*.less' , ['less'])
    gulp.watch('*.html' , ['html'])
    gulp.watch('css/*.css' , ['concatCSS'])
});

gulp.task('default', ['connect', 'less' ,'concatCSS', 'html', 'watch']);


