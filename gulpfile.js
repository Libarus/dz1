var gulp = require("gulp")
    ,concatCSS = require('gulp-concat-css')
    ,rename = require('gulp-rename')
    ,prefix = require('gulp-autoprefixer')
    ,minifyCSS = require('gulp-minify-css')
    // ,sass = require('gulp-sass')
    ;

gulp.task('default', function() {
    gulp.src('./app_dev/css/*.css')
        //.pipe(concatCSS('bundle.css'))
        .pipe(prefix('last 25 versions'))
        //.pipe(minifyCSS())
        //.pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('watch',function () {
    gulp.watch('./app_dev/scss/**/*.scss',['default']);
});