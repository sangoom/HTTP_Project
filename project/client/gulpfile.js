var gulp = require('gulp');
var less = require('gulp-less');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('build-js', function () {
    return browserify('./src/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist'))
});

gulp.task('build-less', function() {
    return gulp.src('./src/main.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'))
});

gulp.task('build-html', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('run', ['build-js', 'build-less', 'build-html']);

gulp.task('default', ['run']);