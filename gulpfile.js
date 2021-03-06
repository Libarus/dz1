var gulp = require("gulp")
    ,concatCSS = require('gulp-concat-css')
    ,rename = require('gulp-rename')
    ,prefix = require('gulp-autoprefixer')
    ,minifyCSS = require('gulp-minify-css')
    ,sass = require('gulp-sass')
    ;

gulp.task('default', function() {
    gulp.src('./app_dev/css/*.css')
        .pipe(prefix('last 5 versions'))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('watch',function () {
    gulp.watch('./app_dev/scss/**/*.scss',['default']);
});